// Estado del juego
let gameState = {
    studentData: {},
    currentTopicIndex: 0,
    currentQuestionIndex: 0,
    currentAttempt: 1,
    selectedAnswer: null,
    topicScores: {},
    topicAttempts: {},
    currentTopicQuestions: [],
    currentTopicAnswers: [], // Guardar respuestas del intento actual
    topics: ['logica', 'operaciones', 'porcentaje', 'proporcion', 'jerarquia', 'aplicacion']
};

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAn-m0H5vPKr4hnuoQZG_yhzs_R3If4MC",
    authDomain: "evaluacion-matematicas-49d6f.firebaseapp.com",
    projectId: "evaluacion-matematicas-49d6f",
    storageBucket: "evaluacion-matematicas-49d6f.firebasestorage.app",
    messagingSenderId: "466583967870",
    appId: "1:466583967870:web:39548230Df2be1c394e02f"
};

// Inicializar Firebase
let db = null;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
} catch (error) {
    console.warn("Firebase no configurado correctamente:", error);
}

// MODO PRUEBA SECRETO
// Usa ?test=true en la URL o presiona Ctrl+Shift+T para activarlo
let testMode = false;

// Detectar parámetro en URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('test') === 'true') {
    testMode = true;
}

// Detectar combinación de teclas Ctrl+Alt+P (P de Prueba)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.altKey && e.key === 'p') {
        e.preventDefault();
        activateTestMode();
    }
});



function activateTestMode() {
    if (document.getElementById('menu-screen').classList.contains('active')) {
        // Si está en el menú, ir directo al juego
        testMode = true;
        startGameWithTestData();
    } else if (document.getElementById('registration-screen').classList.contains('active')) {
        // Si está en registro, llenar automáticamente
        fillTestData();
    }
}

function fillTestData() {
    document.getElementById('student-name').value = '🧪 Modo Prueba';
    document.getElementById('student-group').value = 'programacion';
    document.getElementById('student-semester').value = '1';
    
    // Hacer un flash visual para confirmar
    const form = document.getElementById('student-form');
    form.style.animation = 'pulse 0.5s';
    setTimeout(() => form.style.animation = '', 500);
}

function startGameWithTestData() {
    gameState.studentData = {
        name: '🧪 Modo Prueba',
        group: 'programacion',
        semester: '1',
        timestamp: new Date().toISOString()
    };

    gameState.topics.forEach(topic => {
        gameState.topicAttempts[topic] = 1;
        gameState.topicScores[topic] = 0;
    });

    document.getElementById('display-name').textContent = gameState.studentData.name;
    showTopicsMenu();
}

// MENÚ DE TEMAS
function showTopicsMenu() {
    showScreen('topics-menu-screen');
    // Actualizar nombre si existe
    if (gameState.studentData.name) {
        const displayName = document.querySelector('#topics-menu-screen .student-info');
        if (displayName) {
            displayName.textContent = gameState.studentData.name;
        }
    }
    renderTopicsGrid();
    updateOverallProgress();
}

function renderTopicsGrid() {
    const grid = document.getElementById('topics-grid');
    grid.innerHTML = '';
    
    const topicIcons = {
        'logica': '🧠',
        'operaciones': '🔢',
        'porcentaje': '📊',
        'proporcion': '⚖️',
        'jerarquia': '🎯',
        'aplicacion': '🚀'
    };
    
    gameState.topics.forEach((topicKey, index) => {
        const card = document.createElement('div');
        card.className = 'topic-card';
        
        const score = gameState.topicScores[topicKey];
        const attempts = gameState.topicAttempts[topicKey];
        
        if (score > 0) {
            card.classList.add('completed');
        }
        
        const statusIcon = score > 0 ? '✓' : '';
        
        card.innerHTML = `
            <div class="topic-status">${statusIcon}</div>
            <div class="topic-icon">${topicIcons[topicKey]}</div>
            <div class="topic-title">${getTopicName(topicKey)}</div>
            <div class="topic-stats">
                <span class="topic-score">${score.toFixed(2)}/16.67</span>
                <span class="topic-attempts">Intento ${attempts}/3</span>
            </div>
        `;
        
        // Asignar evento click
        card.addEventListener('click', function() {
            startTopic(index);
        });
        
        grid.appendChild(card);
    });
}

function updateOverallProgress() {
    const completed = gameState.topics.filter(t => gameState.topicScores[t] > 0).length;
    const total = gameState.topics.length;
    const percentage = (completed / total) * 100;
    const totalScore = Object.values(gameState.topicScores).reduce((sum, score) => sum + score, 0);
    
    document.getElementById('completed-count').textContent = `${completed}/${total}`;
    document.getElementById('overall-progress-bar').style.width = `${percentage}%`;
    document.getElementById('total-score-display').textContent = `${totalScore.toFixed(2)}/100`;
}

function startTopic(topicIndex) {
    gameState.currentTopicIndex = topicIndex;
    loadTopic();
    showScreen('game-screen');
}

function backToTopicsMenu() {
    showTopicsMenu();
}

function showStats() {
    showScreen('stats-screen');
    renderStats();
}

function renderStats() {
    const totalScore = Object.values(gameState.topicScores).reduce((sum, score) => sum + score, 0);
    const completed = gameState.topics.filter(t => gameState.topicScores[t] > 0).length;
    const average = completed > 0 ? (totalScore / completed).toFixed(2) : 0;
    
    document.getElementById('stats-total-score').textContent = totalScore.toFixed(2);
    document.getElementById('stats-completed').textContent = `${completed}/6`;
    document.getElementById('stats-average').textContent = average;
    
    const breakdown = document.getElementById('topics-breakdown-stats');
    breakdown.innerHTML = '<h3 style="margin-bottom: 1rem;">Desglose por Tema</h3>';
    
    const topicIcons = {
        'logica': '🧠',
        'operaciones': '🔢',
        'porcentaje': '📊',
        'proporcion': '⚖️',
        'jerarquia': '🎯',
        'aplicacion': '🚀'
    };
    
    gameState.topics.forEach(topicKey => {
        const score = gameState.topicScores[topicKey];
        const attempts = gameState.topicAttempts[topicKey];
        const isCompleted = score > 0;
        
        const item = document.createElement('div');
        item.className = `topic-stat-item ${isCompleted ? 'completed' : 'pending'}`;
        item.innerHTML = `
            <div class="topic-stat-name">
                <span>${topicIcons[topicKey]}</span>
                <span>${getTopicName(topicKey)}</span>
            </div>
            <div class="topic-stat-details">
                <span>Puntos: ${score.toFixed(2)}/16.67</span>
                <span>Intentos: ${attempts}/3</span>
            </div>
        `;
        breakdown.appendChild(item);
    });
}

function finishEvaluation() {
    const completed = gameState.topics.filter(t => gameState.topicScores[t] > 0).length;
    
    if (completed < gameState.topics.length) {
        const remaining = gameState.topics.length - completed;
        const confirm = window.confirm(
            `Te faltan ${remaining} tema(s) por completar.\n\n` +
            `¿Estás seguro de que quieres finalizar?\n` +
            `Solo se tomará en cuenta la puntuación de los temas completados.`
        );
        
        if (!confirm) return;
    }
    
    showFinalResults();
}

// Navegación entre pantallas
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function showRegistration() {
    showScreen('registration-screen');
}

// Iniciar el juego
function startGame(event) {
    event.preventDefault();
    
    gameState.studentData = {
        name: document.getElementById('student-name').value,
        group: document.getElementById('student-group').value,
        semester: document.getElementById('student-semester').value,
        timestamp: new Date().toISOString()
    };

    // Inicializar intentos y puntuaciones
    gameState.topics.forEach(topic => {
        gameState.topicAttempts[topic] = 1;
        gameState.topicScores[topic] = 0;
    });

    // Mostrar nombre en el header
    document.getElementById('display-name').textContent = gameState.studentData.name;
    
    // Ir al menú de temas
    showTopicsMenu();
}

// Cargar tema actual
function loadTopic() {
    const topicKey = gameState.topics[gameState.currentTopicIndex];
    const attempt = gameState.topicAttempts[topicKey];
    
    // Actualizar header
    document.getElementById('current-topic').textContent = getTopicName(topicKey);
    document.getElementById('attempt-counter').textContent = `Intento ${attempt}/3`;
    updateScoreDisplay();
    
    // Cargar audio del tema
    loadTopicAudio(topicKey);
    
    // Seleccionar preguntas aleatorias
    gameState.currentTopicQuestions = selectRandomQuestions(topicKey, 5);
    gameState.currentQuestionIndex = 0;
    gameState.currentTopicAnswers = []; // Limpiar respuestas anteriores
    
    // Mostrar primera pregunta
    loadQuestion();
}

// Seleccionar preguntas aleatorias del pool
function selectRandomQuestions(topicKey, count) {
    const pool = questionPools[topicKey];
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Cargar pregunta actual
function loadQuestion() {
    const question = gameState.currentTopicQuestions[gameState.currentQuestionIndex];
    gameState.selectedAnswer = null;
    
    // Ocultar resultado del tema
    document.getElementById('topic-result').style.display = 'none';
    document.querySelector('.question-area').style.display = 'block';
    
    // Actualizar progreso de preguntas
    updateQuestionDots();
    
    // Actualizar número de pregunta
    document.getElementById('question-number').textContent = gameState.currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = gameState.currentTopicQuestions.length;
    
    // Mostrar pregunta con animación
    const questionText = document.getElementById('question-text');
    questionText.style.animation = 'none';
    setTimeout(() => {
        questionText.textContent = question.question;
        questionText.style.animation = 'slideInQuestion 0.5s ease';
    }, 10);
    
    // Crear interfaz según el tipo de pregunta
    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';
    
    if (question.type === 'multiple-choice') {
        renderMultipleChoice(question, optionsContainer);
    } else if (question.type === 'input') {
        renderInputQuestion(question, optionsContainer);
    } else if (question.type === 'slider') {
        renderSliderQuestion(question, optionsContainer);
    }
    
    // Deshabilitar botón de responder
    document.getElementById('submit-answer').disabled = true;
}

function renderMultipleChoice(question, container) {
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        container.appendChild(button);
    });
}

function renderInputQuestion(question, container) {
    const input = document.createElement('input');
    input.type = 'number';
    input.step = 'any';
    input.className = 'input-answer';
    input.placeholder = 'Escribe tu respuesta...';
    input.oninput = () => {
        gameState.selectedAnswer = parseFloat(input.value);
        document.getElementById('submit-answer').disabled = input.value === '';
    };
    
    // Crear efectos de partículas al escribir
    input.addEventListener('input', createParticles);
    
    container.appendChild(input);
}

function renderSliderQuestion(question, container) {
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'slider-container';
    
    const display = document.createElement('div');
    display.className = 'slider-display';
    display.textContent = `${question.min}${question.unit || ''}`;
    
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = question.min;
    slider.max = question.max;
    slider.value = question.min;
    slider.className = 'custom-slider';
    
    slider.oninput = () => {
        const value = parseInt(slider.value);
        display.textContent = `${value}${question.unit || ''}`;
        gameState.selectedAnswer = value;
        document.getElementById('submit-answer').disabled = false;
        createParticles({target: slider});
    };
    
    sliderContainer.appendChild(display);
    sliderContainer.appendChild(slider);
    container.appendChild(sliderContainer);
}

function createParticles(event) {
    if (!event.target) return;
    
    const rect = event.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;
    
    for (let i = 0; i < 3; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
        particle.style.setProperty('--ty', -50 - Math.random() * 50 + 'px');
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1000);
    }
}

function updateQuestionDots() {
    const dotsContainer = document.getElementById('question-dots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < gameState.currentTopicQuestions.length; i++) {
        const dot = document.createElement('div');
        dot.className = 'question-dot';
        
        if (i < gameState.currentQuestionIndex) {
            dot.classList.add('completed');
        } else if (i === gameState.currentQuestionIndex) {
            dot.classList.add('current');
        }
        
        dotsContainer.appendChild(dot);
    }
}

// Seleccionar opción
function selectOption(index) {
    gameState.selectedAnswer = index;
    
    // Actualizar visualización
    document.querySelectorAll('.option-btn').forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
    
    // Habilitar botón de responder
    document.getElementById('submit-answer').disabled = false;
}

// Verificar respuesta
function checkAnswer() {
    if (gameState.selectedAnswer === null) {
        alert('Por favor selecciona/escribe una respuesta');
        return;
    }
    
    const question = gameState.currentTopicQuestions[gameState.currentQuestionIndex];
    let isCorrect = false;
    
    if (question.type === 'multiple-choice') {
        isCorrect = gameState.selectedAnswer === question.correct;
        
        // Mostrar feedback visual en las opciones
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === gameState.selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
    } else if (question.type === 'input' || question.type === 'slider') {
        const tolerance = question.tolerance || 0;
        isCorrect = Math.abs(gameState.selectedAnswer - question.correctAnswer) <= tolerance;
        
        // Mostrar feedback visual en el input/slider
        const input = document.querySelector('.input-answer, .custom-slider');
        if (input) {
            input.classList.add(isCorrect ? 'correct' : 'incorrect');
            input.disabled = true;
        }
        
        // Mostrar respuesta correcta si está incorrecta
        if (!isCorrect) {
            const correctMsg = document.createElement('div');
            correctMsg.style.cssText = 'text-align: center; margin-top: 1rem; color: var(--success-color); font-size: 1.2rem; font-weight: 700;';
            correctMsg.textContent = `Respuesta correcta: ${question.correctAnswer}${question.unit || ''}`;
            document.getElementById('question-options').appendChild(correctMsg);
        }
    }
    
    // Guardar respuesta
    gameState.currentTopicAnswers.push(isCorrect);
    
    // Crear efecto de confeti si es correcta
    if (isCorrect) {
        createConfetti();
    }
    
    // Esperar y avanzar
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        
        if (gameState.currentQuestionIndex < gameState.currentTopicQuestions.length) {
            loadQuestion();
        } else {
            showTopicResult();
        }
    }, 2000);
}

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'particle';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '0px';
        confetti.style.background = ['#667eea', '#764ba2', '#f093fb', '#4ade80'][Math.floor(Math.random() * 4)];
        confetti.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'px');
        confetti.style.setProperty('--ty', Math.random() * window.innerHeight + 'px');
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 1000);
    }
}

// Mostrar resultado del tema
function showTopicResult() {
    const topicKey = gameState.topics[gameState.currentTopicIndex];
    
    // Calcular puntuación basada en respuestas correctas
    const correctCount = gameState.currentTopicAnswers.filter(answer => answer === true).length;
    const totalQuestions = gameState.currentTopicAnswers.length;
    const score = (correctCount / totalQuestions) * 16.67;
    
    gameState.topicScores[topicKey] = score;
    
    // Ocultar área de preguntas
    document.querySelector('.question-area').style.display = 'none';
    
    // Mostrar resultado
    const resultDiv = document.getElementById('topic-result');
    resultDiv.style.display = 'block';
    
    document.getElementById('result-title').textContent = getTopicName(topicKey);
    document.getElementById('result-score').textContent = `Puntuación: ${score.toFixed(2)}/16.67 (${correctCount}/${totalQuestions} correctas)`;
    
    // Mensaje según puntuación
    let message = '';
    if (score >= 13) {
        message = '¡Excelente trabajo! 🎉';
    } else if (score >= 10) {
        message = '¡Buen trabajo! 👍';
    } else {
        message = 'Puedes mejorar con un reintento 💪';
    }
    document.getElementById('result-message').textContent = message;
    
    // Mostrar/ocultar botón de reintento
    const retryBtn = document.getElementById('retry-btn');
    const attempt = gameState.topicAttempts[topicKey];
    if (attempt >= 3) {
        retryBtn.style.display = 'none';
    } else {
        retryBtn.style.display = 'block';
    }
    
    updateScoreDisplay();
}

// Calcular puntuación del tema (simplificado)
function calculateTopicScore(questions) {
    // Esta función ya no se usa, se calcula en showTopicResult
    const pointsPerQuestion = 16.67 / questions.length;
    const correctCount = Math.floor(Math.random() * (questions.length + 1));
    return correctCount * pointsPerQuestion;
}

// Reintentar tema
function retryTopic() {
    const topicKey = gameState.topics[gameState.currentTopicIndex];
    gameState.topicAttempts[topicKey]++;
    loadTopic();
}

// Siguiente tema (Ya no se usa, se reemplaza por volver al menú)
function nextTopic() {
    backToTopicsMenu();
}

// Mostrar resultados finales
function showFinalResults() {
    // Calcular calificación final
    const finalScore = Object.values(gameState.topicScores).reduce((sum, score) => sum + score, 0);
    
    // Guardar en Firebase
    saveToFirebase(finalScore);
    
    // Mostrar pantalla final
    showScreen('final-screen');
    
    document.getElementById('final-name').textContent = gameState.studentData.name;
    document.getElementById('final-score-value').textContent = finalScore.toFixed(2);
    
    // Desglose por tema
    const breakdown = document.getElementById('topics-breakdown');
    breakdown.innerHTML = '<h3 style="margin-bottom: 1rem;">Desglose por Tema:</h3>';
    
    gameState.topics.forEach(topicKey => {
        const item = document.createElement('div');
        item.className = 'topic-score-item';
        item.innerHTML = `
            <span class="topic-name">${getTopicName(topicKey)}</span>
            <span class="topic-points">${gameState.topicScores[topicKey].toFixed(2)}/16.67</span>
        `;
        breakdown.appendChild(item);
    });
    
    // Mensaje final
    let finalMessage = '';
    if (finalScore >= 90) {
        finalMessage = '¡Excelente! Dominas los temas perfectamente.';
    } else if (finalScore >= 70) {
        finalMessage = '¡Buen trabajo! Has aprobado satisfactoriamente.';
    } else if (finalScore >= 60) {
        finalMessage = 'Aprobado. Considera repasar algunos temas.';
    } else {
        finalMessage = 'Necesitas repasar los temas. ¡No te rindas!';
    }
    document.getElementById('final-message').textContent = finalMessage;
}

// Actualizar display de puntuación
function updateScoreDisplay() {
    const currentScore = Object.values(gameState.topicScores).reduce((sum, score) => sum + score, 0);
    document.getElementById('current-score').textContent = `Puntuación: ${currentScore.toFixed(2)}/100`;
}

// Obtener nombre del tema
function getTopicName(topicKey) {
    const names = {
        'logica': 'Lógica',
        'operaciones': 'Operaciones con Números',
        'porcentaje': 'Porcentajes',
        'proporcion': 'Proporciones',
        'jerarquia': 'Jerarquía de Operaciones',
        'aplicacion': 'Ejercicios de Aplicación'
    };
    return names[topicKey] || topicKey;
}

// Guardar en Firebase
async function saveToFirebase(finalScore) {
    // No guardar en modo prueba
    if (testMode || gameState.studentData.name.includes('🧪')) {
        console.log("Modo prueba: datos no guardados en Firebase");
        return;
    }
    
    if (!db) {
        console.warn("Firebase no está configurado. Los datos no se guardarán.");
        return;
    }
    
    try {
        const data = {
            ...gameState.studentData,
            finalScore: parseFloat(finalScore.toFixed(2)),
            topicScores: gameState.topicScores,
            topicAttempts: gameState.topicAttempts,
            completedAt: new Date().toISOString()
        };
        
        await db.collection('evaluations').add(data);
        console.log("Datos guardados exitosamente");
    } catch (error) {
        console.error("Error guardando datos:", error);
    }
}

// REPRODUCTOR DE AUDIO
const audioFiles = {
    'logica': 'audio_logica.mp3',
    'operaciones': 'audio_operaciones.mp3',
    'porcentaje': 'audio_porcentaje.mp3',
    'proporcion': 'audio_proporcion.mp3',
    'jerarquia': 'audio_jerarquia.mp3',
    'aplicacion': 'audio_aplicacion.mp3'
};

function loadTopicAudio(topicKey) {
    const audio = document.getElementById('topic-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const progressBar = document.getElementById('audio-progress');
    const currentTimeDisplay = document.getElementById('current-time');
    const durationDisplay = document.getElementById('duration-time');
    
    // Cargar el archivo de audio
    audio.src = audioFiles[topicKey] || '';
    
    // Resetear el reproductor
    audio.pause();
    audio.currentTime = 0;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    progressBar.value = 0;
    currentTimeDisplay.textContent = '0:00';
    
    // Evento cuando el audio está listo
    audio.addEventListener('loadedmetadata', function() {
        durationDisplay.textContent = formatTime(audio.duration);
    });
    
    // Evento para actualizar la barra de progreso
    audio.addEventListener('timeupdate', function() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
        
        // Actualizar el color de la barra de progreso
        progressBar.style.setProperty('--progress', progress + '%');
    });
    
    // Botón play/pause
    playPauseBtn.onclick = function() {
        if (audio.paused) {
            audio.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    };
    
    // Barra de progreso para adelantar/retroceder
    progressBar.addEventListener('input', function() {
        const time = (progressBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });
    
    // Cuando el audio termina
    audio.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        progressBar.value = 0;
        audio.currentTime = 0;
    });
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}
