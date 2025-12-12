// Pool de preguntas para cada tema
// Cada pregunta puede tener diferentes tipos: multiple-choice, input, slider, drag-drop

const questionPools = {
    // TEMA 1: LÓGICA
    logica: [
        {
            type: "multiple-choice",
            question: "Si todos los perros son animales y todos los animales necesitan agua, ¿qué podemos concluir?",
            options: [
                "Todos los perros necesitan agua",
                "Algunos perros no necesitan agua",
                "Solo los perros necesitan agua",
                "Ningún animal necesita agua"
            ],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuál de las siguientes proposiciones es verdadera si 'p → q' es verdadera y 'p' es verdadera?",
            options: [
                "q debe ser verdadera",
                "q debe ser falsa",
                "q puede ser verdadera o falsa",
                "No hay suficiente información"
            ],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "Si 'No llueve o hace frío' es verdadero y sabemos que llueve, ¿qué podemos concluir?",
            options: [
                "Hace frío",
                "No hace frío",
                "Puede hacer frío o no",
                "Nunca llueve"
            ],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuál es la negación de 'Todos los estudiantes aprobaron'?",
            options: [
                "Al menos un estudiante no aprobó",
                "Ningún estudiante aprobó",
                "Algunos estudiantes aprobaron",
                "Todos los estudiantes reprobaron"
            ],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "Si A es verdadero y B es falso, ¿cuál de estas es verdadera?",
            options: [
                "A o B",
                "A y B",
                "No A",
                "A implica B"
            ],
            correct: 0
        },
        {
            type: "input",
            question: "En una serie lógica: 2, 4, 8, 16, ¿cuál número sigue?",
            correctAnswer: 32,
            tolerance: 0
        },
        {
            type: "multiple-choice",
            question: "Si 'p o q' es falso, ¿qué podemos decir de p y q?",
            options: [
                "Ambos son falsos",
                "Ambos son verdaderos",
                "p es verdadero y q es falso",
                "Al menos uno es verdadero"
            ],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuál es el valor de verdad de 'Si 2+2=5, entonces la Luna es de queso'?",
            options: [
                "Verdadero (porque el antecedente es falso)",
                "Falso",
                "No se puede determinar",
                "Depende de la Luna"
            ],
            correct: 0
        }
    ],

    // TEMA 2: OPERACIONES CON NÚMEROS ENTEROS Y FRACCIONARIOS
    operaciones: [
        {
            type: "input",
            question: "¿Cuánto es (-8) + 15?",
            correctAnswer: 7,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es (-12) × (-3)?",
            correctAnswer: 36,
            tolerance: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 1/2 + 1/4?",
            options: ["3/4", "1/6", "2/6", "1/8"],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 2/3 × 3/4?",
            options: ["1/2", "5/7", "6/12", "2/4"],
            correct: 0
        },
        {
            type: "input",
            question: "¿Cuánto es (-20) ÷ 4?",
            correctAnswer: -5,
            tolerance: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 3/5 - 1/5?",
            options: ["2/5", "4/5", "2/10", "1/5"],
            correct: 0
        },
        {
            type: "input",
            question: "¿Cuánto es (-7) - (-10)?",
            correctAnswer: 3,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 1.5 + 2.25?",
            correctAnswer: 3.75,
            tolerance: 0.01
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 4/6 simplificado?",
            options: ["2/3", "3/4", "1/2", "4/6"],
            correct: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 5 × (-6)?",
            correctAnswer: -30,
            tolerance: 0
        }
    ],

    // TEMA 3: PORCENTAJE
    porcentaje: [
        {
            type: "slider",
            question: "Ajusta el slider al 25%",
            min: 0,
            max: 100,
            correctAnswer: 25,
            tolerance: 2,
            unit: "%"
        },
        {
            type: "input",
            question: "Si un producto cuesta $200 y tiene un descuento del 15%, ¿cuál es el precio final?",
            correctAnswer: 170,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Qué porcentaje es 30 de 120?",
            correctAnswer: 25,
            tolerance: 0
        },
        {
            type: "input",
            question: "Un artículo aumentó de $50 a $60. ¿Cuál fue el porcentaje de aumento?",
            correctAnswer: 20,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es el 10% del 50% de 400?",
            correctAnswer: 20,
            tolerance: 0
        },
        {
            type: "input",
            question: "Si una camisa cuesta $80 después de un descuento del 20%, ¿cuál era el precio original?",
            correctAnswer: 100,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es el 150% de 60?",
            correctAnswer: 90,
            tolerance: 0
        },
        {
            type: "slider",
            question: "De 200 estudiantes, 50 reprobaron. Ajusta al porcentaje que aprobó",
            min: 0,
            max: 100,
            correctAnswer: 75,
            tolerance: 2,
            unit: "%"
        }
    ],

    // TEMA 4: PROPORCIÓN DIRECTA E INVERSA
    proporcion: [
        {
            type: "input",
            question: "Si 3 obreros construyen un muro en 6 días, ¿cuántos días tardarán 6 obreros? (proporción inversa)",
            correctAnswer: 3,
            tolerance: 0
        },
        {
            type: "input",
            question: "Si 5 kg de manzanas cuestan $75, ¿cuánto costarán 8 kg? (proporción directa)",
            correctAnswer: 120,
            tolerance: 0
        },
        {
            type: "input",
            question: "Una llave llena un tanque en 4 horas. ¿Cuánto tiempo tardarán 2 llaves iguales?",
            correctAnswer: 2,
            tolerance: 0
        },
        {
            type: "input",
            question: "Si 2 metros de tela cuestan $50, ¿cuánto costarán 7 metros?",
            correctAnswer: 175,
            tolerance: 0
        },
        {
            type: "input",
            question: "10 personas tardan 8 días en hacer un trabajo. ¿Cuántas personas se necesitan para hacerlo en 4 días?",
            correctAnswer: 20,
            tolerance: 0
        },
        {
            type: "input",
            question: "Si 4 libros cuestan $120, ¿cuánto costarán 3 libros?",
            correctAnswer: 90,
            tolerance: 0
        },
        {
            type: "input",
            question: "Un auto recorre 240 km con 20 litros. ¿Cuántos km recorrerá con 35 litros?",
            correctAnswer: 420,
            tolerance: 0
        }
    ],

    // TEMA 5: JERARQUÍA DE OPERACIONES
    jerarquia: [
        {
            type: "input",
            question: "¿Cuánto es 5 + 3 × 2?",
            correctAnswer: 11,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es (8 + 2) × 3?",
            correctAnswer: 30,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 20 ÷ 4 + 3 × 2?",
            correctAnswer: 11,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 12 - 3 × 2 + 8?",
            correctAnswer: 14,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 2³ + 4 × 2?",
            correctAnswer: 16,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 18 ÷ (2 + 1) × 2?",
            correctAnswer: 12,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 5 × 2² - 3?",
            correctAnswer: 17,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es (15 - 3) ÷ 4 + 2?",
            correctAnswer: 5,
            tolerance: 0
        },
        {
            type: "input",
            question: "¿Cuánto es 100 - 20 ÷ 5 × 2?",
            correctAnswer: 92,
            tolerance: 0
        }
    ],

    // TEMA 6: EJERCICIOS DE APLICACIÓN
    aplicacion: [
        {
            type: "input",
            question: "María compró 3 cuadernos a $15 cada uno y 2 plumas a $8 cada una. ¿Cuánto gastó en total?",
            correctAnswer: 61,
            tolerance: 0
        },
        {
            type: "input",
            question: "Un rectángulo tiene 12 cm de largo y 5 cm de ancho. ¿Cuál es su área?",
            correctAnswer: 60,
            tolerance: 0
        },
        {
            type: "input",
            question: "Pedro tenía $500. Gastó 2/5 en comida y 1/4 en transporte. ¿Cuánto le queda?",
            correctAnswer: 175,
            tolerance: 0
        },
        {
            type: "input",
            question: "Un tren viaja a 80 km/h. ¿Cuántos kilómetros recorre en 2.5 horas?",
            correctAnswer: 200,
            tolerance: 0
        },
        {
            type: "input",
            question: "Una caja tiene 24 chocolates. Se repartieron equitativamente entre 6 niños. ¿Cuántos recibió cada uno?",
            correctAnswer: 4,
            tolerance: 0
        },
        {
            type: "input",
            question: "El precio de un libro aumentó de $120 a $150. ¿Cuál fue el aumento en pesos?",
            correctAnswer: 30,
            tolerance: 0
        },
        {
            type: "input",
            question: "Ana tiene el doble de edad que Luis. Si Luis tiene 12 años, ¿cuántos años tiene Ana?",
            correctAnswer: 24,
            tolerance: 0
        },
        {
            type: "input",
            question: "En una clase de 40 alumnos, 3/8 son mujeres. ¿Cuántas mujeres hay?",
            correctAnswer: 15,
            tolerance: 0
        },
        {
            type: "input",
            question: "Un descuento del 20% en un artículo de $250 equivale a:",
            correctAnswer: 50,
            tolerance: 0
        }
    ]
};

    // TEMA 1: LÓGICA
    logica: [
        {
            question: "Si todos los perros son animales y todos los animales necesitan agua, ¿qué podemos concluir?",
            options: [
                "Todos los perros necesitan agua",
                "Algunos perros no necesitan agua",
                "Solo los perros necesitan agua",
                "Ningún animal necesita agua"
            ],
            correct: 0
        },
        {
            question: "¿Cuál de las siguientes proposiciones es verdadera si 'p → q' es verdadera y 'p' es verdadera?",
            options: [
                "q debe ser verdadera",
                "q debe ser falsa",
                "q puede ser verdadera o falsa",
                "No hay suficiente información"
            ],
            correct: 0
        },
        {
            question: "Si 'No llueve o hace frío' es verdadero y sabemos que llueve, ¿qué podemos concluir?",
            options: [
                "Hace frío",
                "No hace frío",
                "Puede hacer frío o no",
                "Nunca llueve"
            ],
            correct: 0
        },
        {
            question: "¿Cuál es la negación de 'Todos los estudiantes aprobaron'?",
            options: [
                "Al menos un estudiante no aprobó",
                "Ningún estudiante aprobó",
                "Algunos estudiantes aprobaron",
                "Todos los estudiantes reprobaron"
            ],
            correct: 0
        },
        {
            question: "Si A es verdadero y B es falso, ¿cuál de estas es verdadera?",
            options: [
                "A o B",
                "A y B",
                "No A",
                "A implica B"
            ],
            correct: 0
        },
        {
            question: "En una serie lógica: 2, 4, 8, 16, ¿cuál número sigue?",
            options: [
                "32",
                "24",
                "20",
                "18"
            ],
            correct: 0
        },
        {
            question: "Si 'p o q' es falso, ¿qué podemos decir de p y q?",
            options: [
                "Ambos son falsos",
                "Ambos son verdaderos",
                "p es verdadero y q es falso",
                "Al menos uno es verdadero"
            ],
            correct: 0
        },
        {
            question: "¿Cuál es el valor de verdad de 'Si 2+2=5, entonces la Luna es de queso'?",
            options: [
                "Verdadero (porque el antecedente es falso)",
                "Falso",
                "No se puede determinar",
                "Depende de la Luna"
            ],
            correct: 0
        }
    ],

    // TEMA 2: OPERACIONES CON NÚMEROS ENTEROS Y FRACCIONARIOS
    operaciones: [
        {
            question: "¿Cuánto es (-8) + 15?",
            options: ["7", "-7", "23", "-23"],
            correct: 0
        },
        {
            question: "¿Cuánto es (-12) × (-3)?",
            options: ["36", "-36", "15", "-15"],
            correct: 0
        },
        {
            question: "¿Cuánto es 1/2 + 1/4?",
            options: ["3/4", "1/6", "2/6", "1/8"],
            correct: 0
        },
        {
            question: "¿Cuánto es 2/3 × 3/4?",
            options: ["1/2", "5/7", "6/12", "2/4"],
            correct: 0
        },
        {
            question: "¿Cuánto es (-20) ÷ 4?",
            options: ["-5", "5", "-16", "16"],
            correct: 0
        },
        {
            question: "¿Cuánto es 3/5 - 1/5?",
            options: ["2/5", "4/5", "2/10", "1/5"],
            correct: 0
        },
        {
            question: "¿Cuánto es (-7) - (-10)?",
            options: ["3", "-3", "17", "-17"],
            correct: 0
        },
        {
            question: "¿Cuánto es 1.5 + 2.25?",
            options: ["3.75", "3.25", "4.00", "3.50"],
            correct: 0
        },
        {
            question: "¿Cuánto es 4/6 simplificado?",
            options: ["2/3", "3/4", "1/2", "4/6"],
            correct: 0
        },
        {
            question: "¿Cuánto es 5 × (-6)?",
            options: ["-30", "30", "-11", "11"],
            correct: 0
        }
    ],

    // TEMA 3: PORCENTAJE
    porcentaje: [
        {
            question: "¿Cuánto es el 25% de 80?",
            options: ["20", "25", "15", "30"],
            correct: 0
        },
        {
            question: "Si un producto cuesta $200 y tiene un descuento del 15%, ¿cuál es el precio final?",
            options: ["$170", "$185", "$150", "$215"],
            correct: 0
        },
        {
            question: "¿Qué porcentaje es 30 de 120?",
            options: ["25%", "30%", "20%", "35%"],
            correct: 0
        },
        {
            question: "Un artículo aumentó de $50 a $60. ¿Cuál fue el porcentaje de aumento?",
            options: ["20%", "10%", "15%", "25%"],
            correct: 0
        },
        {
            question: "¿Cuánto es el 10% del 50% de 400?",
            options: ["20", "40", "10", "50"],
            correct: 0
        },
        {
            question: "Si una camisa cuesta $80 después de un descuento del 20%, ¿cuál era el precio original?",
            options: ["$100", "$96", "$90", "$120"],
            correct: 0
        },
        {
            question: "¿Cuánto es el 150% de 60?",
            options: ["90", "100", "75", "120"],
            correct: 0
        },
        {
            question: "De 200 estudiantes, 50 reprobaron. ¿Qué porcentaje aprobó?",
            options: ["75%", "25%", "50%", "80%"],
            correct: 0
        }
    ],

    // TEMA 4: PROPORCIÓN DIRECTA E INVERSA
    proporcion: [
        {
            question: "Si 3 obreros construyen un muro en 6 días, ¿cuántos días tardarán 6 obreros? (proporción inversa)",
            options: ["3 días", "12 días", "6 días", "9 días"],
            correct: 0
        },
        {
            question: "Si 5 kg de manzanas cuestan $75, ¿cuánto costarán 8 kg? (proporción directa)",
            options: ["$120", "$100", "$150", "$90"],
            correct: 0
        },
        {
            question: "Una llave llena un tanque en 4 horas. ¿Cuánto tiempo tardarán 2 llaves iguales?",
            options: ["2 horas", "8 horas", "4 horas", "1 hora"],
            correct: 0
        },
        {
            question: "Si 2 metros de tela cuestan $50, ¿cuánto costarán 7 metros?",
            options: ["$175", "$150", "$200", "$125"],
            correct: 0
        },
        {
            question: "10 personas tardan 8 días en hacer un trabajo. ¿Cuántas personas se necesitan para hacerlo en 4 días?",
            options: ["20 personas", "5 personas", "40 personas", "15 personas"],
            correct: 0
        },
        {
            question: "Si 4 libros cuestan $120, ¿cuánto costarán 3 libros?",
            options: ["$90", "$80", "$100", "$110"],
            correct: 0
        },
        {
            question: "Un auto recorre 240 km con 20 litros. ¿Cuántos km recorrerá con 35 litros?",
            options: ["420 km", "400 km", "380 km", "450 km"],
            correct: 0
        }
    ],

    // TEMA 5: JERARQUÍA DE OPERACIONES
    jerarquia: [
        {
            question: "¿Cuánto es 5 + 3 × 2?",
            options: ["11", "16", "13", "10"],
            correct: 0
        },
        {
            question: "¿Cuánto es (8 + 2) × 3?",
            options: ["30", "14", "24", "18"],
            correct: 0
        },
        {
            question: "¿Cuánto es 20 ÷ 4 + 3 × 2?",
            options: ["11", "8", "14", "10"],
            correct: 0
        },
        {
            question: "¿Cuánto es 12 - 3 × 2 + 8?",
            options: ["14", "26", "18", "10"],
            correct: 0
        },
        {
            question: "¿Cuánto es 2³ + 4 × 2?",
            options: ["16", "14", "20", "24"],
            correct: 0
        },
        {
            question: "¿Cuánto es 18 ÷ (2 + 1) × 2?",
            options: ["12", "6", "9", "18"],
            correct: 0
        },
        {
            question: "¿Cuánto es 5 × 2² - 3?",
            options: ["17", "47", "20", "37"],
            correct: 0
        },
        {
            question: "¿Cuánto es (15 - 3) ÷ 4 + 2?",
            options: ["5", "3.5", "6", "4"],
            correct: 0
        },
        {
            question: "¿Cuánto es 100 - 20 ÷ 5 × 2?",
            options: ["92", "32", "88", "96"],
            correct: 0
        }
    ],

    // TEMA 6: EJERCICIOS DE APLICACIÓN
    aplicacion: [
        {
            question: "María compró 3 cuadernos a $15 cada uno y 2 plumas a $8 cada una. ¿Cuánto gastó en total?",
            options: ["$61", "$55", "$70", "$45"],
            correct: 0
        },
        {
            question: "Un rectángulo tiene 12 cm de largo y 5 cm de ancho. ¿Cuál es su área?",
            options: ["60 cm²", "34 cm²", "17 cm²", "120 cm²"],
            correct: 0
        },
        {
            question: "Pedro tenía $500. Gastó 2/5 en comida y 1/4 en transporte. ¿Cuánto le queda?",
            options: ["$175", "$200", "$150", "$225"],
            correct: 0
        },
        {
            question: "Un tren viaja a 80 km/h. ¿Cuántos kilómetros recorre en 2.5 horas?",
            options: ["200 km", "160 km", "180 km", "240 km"],
            correct: 0
        },
        {
            question: "Una caja tiene 24 chocolates. Se repartieron equitativamente entre 6 niños. ¿Cuántos recibió cada uno?",
            options: ["4 chocolates", "6 chocolates", "3 chocolates", "5 chocolates"],
            correct: 0
        },
        {
            question: "El precio de un libro aumentó de $120 a $150. ¿Cuál fue el aumento en pesos?",
            options: ["$30", "$20", "$40", "$25"],
            correct: 0
        },
        {
            question: "Ana tiene el doble de edad que Luis. Si Luis tiene 12 años, ¿cuántos años tiene Ana?",
            options: ["24 años", "18 años", "20 años", "14 años"],
            correct: 0
        },
        {
            question: "En una clase de 40 alumnos, 3/8 son mujeres. ¿Cuántas mujeres hay?",
            options: ["15 mujeres", "12 mujeres", "20 mujeres", "25 mujeres"],
            correct: 0
        },
        {
            question: "Un descuento del 20% en un artículo de $250 equivale a:",
            options: ["$50", "$40", "$60", "$30"],
            correct: 0
        }
    ]
};
