// Nivel 3: La reconstrucción y el final del laberinto
const level3Nodes = {
    9: {
        phase: "Fase 3: El Difícil Ascenso",
        title: "Prueba de fuego laboral y social",
        text: "Has estado limpio un tiempo, pero consigues un nuevo empleo y el estrés diario te abruma. Sientes el impulso psicológico de 'solo una calada' para relajar la tensión.",
        choices: [
            { text: "Ceder al estrés del trabajo y recaer profundamente.", nextStep: 4, effect: { mind: -20, social: -20, bio: -25, psy: -35 }, addAddiction: 30 },
            { text: "Acudir a tu terapeuta y aplicar técnicas de respiración y deporte.", nextStep: 11, effect: { mind: +15, social: +10, bio: +15, psy: +20 }, addAddiction: -20 }
        ]
    },
    10: {
        phase: "Fase 3: Reconstrucción Lenta",
        title: "El perdón familiar y los remordimientos",
        text: "Tu familia empieza a confiar en ti otra vez, pero ves las cicatrices financieras y emocionales que causaste.",
        choices: [
            { text: "Aislarte por culpa y dejar de asistir a las terapias de grupo.", nextStep: 8, effect: { mind: -15, social: -25, bio: 0, psy: -30 }, addAddiction: 15 },
            { text: "Aceptar tu pasado, pedir perdón y comprometerte con tu comunidad.", nextStep: 11, effect: { mind: +20, social: +20, bio: +10, psy: +25 }, addAddiction: -20 }
        ]
    },
    11: {
        phase: "Fase Final: La Sobriedad Vigilada",
        title: "Una victoria con marcas permanentes",
        text: "Llevas años sin consumir. Has recuperado tu dignidad, tu salud y el control de tu vida. Sin embargo, sabes que una sola mala decisión puede devolverte al abismo inicial.",
        isEnd: true,
        win: true,
        message: "¡Sobreviviste al laberinto! Lograste salir, pero el juego te deja una verdad inquebrantable: el proceso fue un calvario de dolor, recaídas y sufrimiento extremo. Demuestra a los estudiantes que el verdadero poder de la prevención es nunca dar el primer paso."
    }
};
