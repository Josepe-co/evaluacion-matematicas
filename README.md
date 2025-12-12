# Pensamiento Matemático I - Evaluación Interactiva

Aplicación web tipo juego para evaluar conocimientos en matemáticas básicas.

## 🎮 Características

- **6 Temas Evaluados:**
  - Lógica
  - Operaciones con números enteros y fraccionarios
  - Porcentajes
  - Proporción directa e inversa
  - Jerarquía de operaciones
  - Ejercicios de aplicación

- **Sistema de Puntuación:**
  - Calificación sobre 100 puntos
  - Cada tema vale 16.67 puntos
  - Hasta 3 intentos por tema
  - Se registra el último intento

- **Registro de Datos:**
  - Nombre del alumno
  - Grupo (Programación, Contabilidad, Diseño Gráfico, Lab. Químico A/B)
  - Semestre (1° al 6°)

## 📋 Configuración de Firebase

Para que la aplicación funcione correctamente, necesitas configurar Firebase:

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita **Cloud Firestore** en el proyecto
4. Ve a Configuración del proyecto > Tus aplicaciones > Aplicación web
5. Copia las credenciales de configuración

### Editar archivos con tus credenciales:

**En `app.js` (líneas 13-19):**
```javascript
const firebaseConfig = {
    apiKey: "tu-api-key-aqui",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "tu-sender-id",
    appId: "tu-app-id"
};
```

**En `admin.html` (líneas 247-253):**
```javascript
const firebaseConfig = {
    apiKey: "tu-api-key-aqui",
    authDomain: "tu-proyecto.firebaseapp.com",
    projectId: "tu-proyecto-id",
    storageBucket: "tu-proyecto.appspot.com",
    messagingSenderId: "tu-sender-id",
    appId: "tu-app-id"
};
```

### Configurar reglas de Firestore:

En Firebase Console > Firestore Database > Reglas, usa:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /evaluations/{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **Nota:** Estas reglas permiten acceso público. Para producción, deberías implementar autenticación.

## 🚀 Despliegue en GitHub Pages

1. Crea un repositorio en GitHub
2. Sube todos los archivos del proyecto
3. Ve a Settings > Pages
4. Selecciona la rama `main` como fuente
5. Tu sitio estará disponible en: `https://tu-usuario.github.io/nombre-repo/`

## 📊 Panel Administrativo

Accede al panel desde: `https://tu-sitio.com/admin.html`

**Características del panel:**
- Visualización de todas las evaluaciones
- Filtros por grupo y semestre
- Búsqueda por nombre
- Estadísticas generales
- Desglose de puntuaciones por tema

## 📁 Estructura de Archivos

```
programa-calificacion/
│
├── index.html          # Página principal con el juego
├── admin.html          # Panel administrativo
├── styles.css          # Estilos globales
├── app.js              # Lógica del juego
├── questions.js        # Banco de preguntas
└── README.md           # Este archivo
```

## 🎯 Uso

1. **Alumno:**
   - Abre `index.html`
   - Haz clic en "Comenzar"
   - Ingresa tus datos
   - Completa los 6 temas
   - Visualiza tu calificación final

2. **Profesor:**
   - Accede a `admin.html`
   - Filtra por grupo/semestre
   - Revisa calificaciones y detalles

## 🛠️ Personalización

### Agregar más preguntas:

Edita `questions.js` y agrega más objetos al array correspondiente:

```javascript
{
    question: "Tu pregunta aquí",
    options: ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
    correct: 0  // Índice de la respuesta correcta (0-3)
}
```

### Cambiar cantidad de preguntas por tema:

En `app.js`, línea 56, modifica el número:
```javascript
gameState.currentTopicQuestions = selectRandomQuestions(topicKey, 5); // Cambia 5 por el número deseado
```

## 📝 Licencia

Este proyecto fue creado como material educativo.

---

¡Buena suerte con tu evaluación! 🎓
