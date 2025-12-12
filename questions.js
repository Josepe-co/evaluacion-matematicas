const questionPools = {
    logica: [
        {
            type: "multiple-choice",
            question: "Si todos los gatos son animales y algunos animales son negros, ¿qué podemos concluir?",
            options: [
                "Todos los gatos son negros",
                "Algunos gatos pueden ser negros",
                "Ningún gato es negro",
                "Todos los animales negros son gatos"
            ],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Qué número continúa la serie? 2, 4, 8, 16, __",
            options: ["24", "32", "20", "28"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Si Ana es más alta que Luis y Luis es más alto que Carlos, ¿quién es el más bajo?",
            options: ["Ana", "Luis", "Carlos", "Todos tienen la misma altura"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Qué figura NO pertenece al grupo: círculo, cuadrado, triángulo, línea?",
            options: ["Círculo", "Cuadrado", "Triángulo", "Línea"],
            correct: 3
        },
        {
            type: "multiple-choice",
            question: "Si el día después de mañana es viernes, ¿qué día fue ayer?",
            options: ["Lunes", "Martes", "Miércoles", "Jueves"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Qué número sigue en la secuencia? 1, 1, 2, 3, 5, 8, __",
            options: ["10", "11", "13", "15"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Si María tiene 3 hermanas y cada hermana tiene un hermano, ¿cuántos hermanos tiene María?",
            options: ["1", "2", "3", "4"],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuál es el número que falta? 10, 20, __, 40, 50",
            options: ["25", "30", "35", "15"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Si A = 1, B = 2, C = 3, ¿cuánto vale la palabra 'CAB'?",
            options: ["4", "5", "6", "7"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "En una carrera, si adelantas al segundo, ¿en qué posición quedas?",
            options: ["Primera", "Segunda", "Tercera", "Última"],
            correct: 1
        }
    ],
    operaciones: [
        {
            type: "multiple-choice",
            question: "¿Cuánto es 15 + 28?",
            options: ["42", "43", "44", "45"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 56 - 19?",
            options: ["35", "36", "37", "38"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 12 × 7?",
            options: ["82", "83", "84", "85"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 144 ÷ 12?",
            options: ["10", "11", "12", "13"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 1/2 + 1/4?",
            options: ["1/6", "2/6", "3/4", "1/8"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 3/4 - 1/2?",
            options: ["1/8", "1/4", "1/2", "3/8"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 2/3 × 3/4?",
            options: ["1/2", "5/7", "6/12", "5/12"],
            correct: 0
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 1/2 ÷ 1/4?",
            options: ["1/8", "1", "2", "4"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 25 × 4?",
            options: ["90", "95", "100", "105"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 0.5 + 0.25?",
            options: ["0.55", "0.65", "0.75", "0.85"],
            correct: 2
        }
    ],
    porcentaje: [
        {
            type: "multiple-choice",
            question: "¿Cuánto es el 50% de 200?",
            options: ["50", "75", "100", "150"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es el 25% de 80?",
            options: ["15", "20", "25", "30"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Si un producto cuesta $100 y tiene un descuento del 20%, ¿cuánto pagas?",
            options: ["$70", "$75", "$80", "$85"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Qué porcentaje es 15 de 60?",
            options: ["20%", "25%", "30%", "35%"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Si una camisa de $50 sube un 10%, ¿cuál es su nuevo precio?",
            options: ["$52", "$55", "$60", "$65"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es el 75% de 120?",
            options: ["80", "85", "90", "95"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "En una clase de 40 estudiantes, el 60% son mujeres. ¿Cuántas mujeres hay?",
            options: ["20", "22", "24", "26"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Qué porcentaje es 30 de 150?",
            options: ["10%", "15%", "20%", "25%"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Si gasté $45 de $180 que tenía, ¿qué porcentaje gasté?",
            options: ["20%", "25%", "30%", "35%"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es el 15% de 200?",
            options: ["25", "30", "35", "40"],
            correct: 1
        }
    ],
    proporcion: [
        {
            type: "multiple-choice",
            question: "Si 3 lápices cuestan $6, ¿cuánto cuestan 5 lápices?",
            options: ["$8", "$9", "$10", "$12"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Una receta para 4 personas requiere 200g de harina. ¿Cuánta harina se necesita para 6 personas?",
            options: ["250g", "300g", "350g", "400g"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Si 5 obreros construyen una pared en 10 días, ¿cuántos días tardarían 10 obreros?",
            options: ["3 días", "4 días", "5 días", "6 días"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Si 2 metros de tela cuestan $16, ¿cuánto cuestan 7 metros?",
            options: ["$48", "$52", "$56", "$60"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Un auto recorre 240 km con 20 litros de gasolina. ¿Cuántos km recorre con 15 litros?",
            options: ["160 km", "170 km", "180 km", "190 km"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Si la relación entre niños y niñas es 3:2 y hay 12 niños, ¿cuántas niñas hay?",
            options: ["6", "8", "9", "10"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "En una mezcla, la razón de agua a jugo es 4:1. Si usamos 20 litros de agua, ¿cuántos litros de jugo necesitamos?",
            options: ["4 litros", "5 litros", "6 litros", "8 litros"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Si 8 personas comen en 2 horas, ¿cuánto tiempo tardarían 4 personas comiendo a la misma velocidad?",
            options: ["1 hora", "2 horas", "3 horas", "4 horas"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Una máquina produce 150 piezas en 3 horas. ¿Cuántas piezas produce en 5 horas?",
            options: ["200", "225", "250", "275"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Si 6 gallinas ponen 18 huevos, ¿cuántos huevos ponen 10 gallinas?",
            options: ["24", "28", "30", "32"],
            correct: 2
        }
    ],
    jerarquia: [
        {
            type: "multiple-choice",
            question: "¿Cuánto es 5 + 3 × 2?",
            options: ["16", "13", "11", "10"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es (8 + 2) × 3?",
            options: ["24", "26", "30", "32"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 20 - 4 × 3?",
            options: ["48", "24", "12", "8"],
            correct: 3
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 15 ÷ 3 + 2?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 6 × 2 + 4 × 3?",
            options: ["20", "22", "24", "26"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es (10 - 2) × (3 + 1)?",
            options: ["28", "30", "32", "36"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 18 ÷ 3 × 2?",
            options: ["3", "6", "9", "12"],
            correct: 3
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 5 + 8 ÷ 4 - 1?",
            options: ["4", "5", "6", "7"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 3 × (4 + 2) - 5?",
            options: ["11", "13", "15", "17"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "¿Cuánto es 24 ÷ (2 + 2)?",
            options: ["4", "6", "8", "12"],
            correct: 1
        }
    ],
    aplicacion: [
        {
            type: "multiple-choice",
            question: "María compra 3 cuadernos a $5 cada uno y 2 plumas a $3 cada una. ¿Cuánto gasta en total?",
            options: ["$18", "$19", "$21", "$23"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Un taxi cobra $10 de banderazo más $2 por kilómetro. ¿Cuánto cuesta un viaje de 8 km?",
            options: ["$24", "$26", "$28", "$30"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Pedro tiene $150 y gasta 2/5 en comida. ¿Cuánto le queda?",
            options: ["$60", "$70", "$80", "$90"],
            correct: 3
        },
        {
            type: "multiple-choice",
            question: "Una caja contiene 24 chocolates. Si comes 1/3 de ellos, ¿cuántos quedan?",
            options: ["12", "14", "16", "18"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Un rectángulo mide 8 cm de largo y 5 cm de ancho. ¿Cuál es su área?",
            options: ["26 cm²", "32 cm²", "40 cm²", "48 cm²"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Un depósito tiene 180 litros y se vacía a razón de 15 litros por minuto. ¿En cuántos minutos se vacía?",
            options: ["10 minutos", "11 minutos", "12 minutos", "13 minutos"],
            correct: 2
        },
        {
            type: "multiple-choice",
            question: "Luis camina 1.5 km en 20 minutos. ¿Cuántos kilómetros camina en 1 hora?",
            options: ["3 km", "3.5 km", "4 km", "4.5 km"],
            correct: 3
        },
        {
            type: "multiple-choice",
            question: "Una bolsa de 5 kg de arroz cuesta $25. ¿Cuánto cuesta 1 kg?",
            options: ["$4", "$5", "$6", "$7"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "En una tienda hay una oferta: compra 3 y lleva 4. Si cada artículo cuesta $8, ¿cuánto pagas por 4?",
            options: ["$20", "$24", "$28", "$32"],
            correct: 1
        },
        {
            type: "multiple-choice",
            question: "Un tanque se llena en 6 horas con un grifo. Si se abren 2 grifos iguales, ¿en cuántas horas se llena?",
            options: ["2 horas", "3 horas", "4 horas", "5 horas"],
            correct: 1
        }
    ]
};
