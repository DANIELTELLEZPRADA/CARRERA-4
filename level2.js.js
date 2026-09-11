// Nivel 2: El abismo y los intentos de salida dolorosos
const level2Nodes = {
    4: {
        phase: "Fase 2: Dentro del Abismo",
        title: "La dependencia química total",
        text: "Tu cuerpo exige dosis más altas. Tienes altibajos emocionales severos. Robas pequeños objetos o dinero para costear la sustancia.",
        choices: [
            { text: "Seguir consumiendo para calmar el vacío y el remordimiento.", nextStep: 6, effect: { mind: -30, social: -30, bio: -35, psy: -35 }, addAddiction: 35 },
            { text: "Tocar fondo tras una sobredosis leve o un problema legal grave y buscar ayuda.", nextStep: 7, effect: { mind: +5, social: +5, bio: -20, psy: -20 }, addAddiction: -20 }
        ]
    },
    5: {
        phase: "Fase 2: El Laberinto de la Abstinencia",
        title: "El muro del dolor físico y mental",
        text: "Al intentar dejarlo, sufres un síndrome de abstinencia atroz: insomnio crónico, temblores, sudores fríos y una depresión profunda.",
        choices: [
            { text: "No soportar el sufrimiento y volver a consumir para 'calmar la tormenta'.", nextStep: 4, effect: { mind: -20, social: -10, bio: -15, psy: -30 }, addAddiction: 20 },
            { text: "Soportar el dolor encerrado en tu habitación, arriesgando tu estabilidad mental.", nextStep: 8, effect: { mind: +10, social: -20, bio: -10, psy: -35 }, addAddiction: -15 }
        ]
    },
    6: {
        phase: "Fase 2: El Colapso",
        title: "El punto sin retorno",
        text: "Has perdido el control total. Tu familia está destrozada y tu salud mental está quebrada. Estás atrapado por completo en el círculo.",
        isEnd: true,
        win: false,
        message: "El círculo te ha consumido. La dinámica demuestra que una vez dentro, el costo humano es devastador. Salir de este punto requiere años de lucha y dolor."
    },
    7: {
        phase: "Fase 2: La Lucha en el Lodo",
        title: "La rehabilitación y sus recaídas",
        text: "Entraste a un programa de apoyo. Aunque quieres salir, el cerebro te sabotea con ansiedad constante y los viejos amigos llaman ofreciendo 'una última vez'.",
        choices: [
            { text: "Caer en la tentación ante una crisis de estrés financiero.", nextStep: 4, effect: { mind: -25, social: -15, bio: -20, psy: -30 }, addAddiction: 25 },
            { text: "Mantenerse firme en terapia, soportando los vacíos emocionales diarios.", nextStep: 9, effect: { mind: +15, social: +10, bio: +5, psy: +10 }, addAddiction: -30 }
        ]
    },
    8: {
        phase: "Fase 2: Secuelas Psicológicas",
        title: "La depresión post-abstinencia",
        text: "Lograste limpiar tu cuerpo, pero tu cerebro no produce dopamina de forma natural. Sientes apatía absoluta por la vida.",
        choices: [
            { text: "Sentir que la vida ya no tiene sentido y buscar refugio en la vieja sustancia.", nextStep: 6, effect: { mind: -30, social: -20, bio: -30, psy: -50 }, addAddiction: 40 },
            { text: "Asumir las cicatrices, asistir a grupos de apoyo y reconstruir tu vida paso a paso.", nextStep: 10, effect: { mind: +20, social: +15, bio: +10, psy: +15 }, addAddiction: -25 }
        ]
    }
};