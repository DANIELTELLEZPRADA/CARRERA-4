// Nivel 1: La trampa inicial
const level1Nodes = {
    0: {
        phase: "Fase 1: La Presión del Entorno",
        title: "Viernes por la noche en el barrio",
        text: "Estás con tus amigos de siempre. Te insisten en probar una nueva sustancia sintética para 'relajarse y encajar'. Te dicen que es inofensivo.",
        choices: [
            { text: "Aceptar para evitar burlas y encajar en el parche.", nextStep: 1, effect: { mind: -5, social: +5, bio: -5, psy: 0 }, addAddiction: 10 },
            { text: "Intentar rechazarlo diciendo que tienes ocupaciones.", nextStep: 2, effect: { mind: 0, social: -10, bio: 0, psy: -5 }, addAddiction: 5 }
        ]
    },
    1: {
        phase: "Fase 1: La Primera Chispa",
        title: "La euforia inicial",
        text: "Sientes una energía desbordante. Crees que tenías razón: 'puedes controlarlo'. Te sientes aceptado por el grupo.",
        choices: [
            { text: "Repetir el próximo fin de semana porque la pasaste increíble.", nextStep: 3, effect: { mind: -15, social: +10, bio: -15, psy: -5 }, addAddiction: 20 },
            { text: "Intentar mantener distancia pero sintiendo curiosidad constante.", nextStep: 3, effect: { mind: -10, social: 0, bio: -10, psy: -10 }, addAddiction: 15 }
        ]
    },
    2: {
        phase: "Fase 1: El Aislamiento Forzado",
        title: "El rechazo del grupo",
        text: "Al rechazar la sustancia, tus amigos te tildan de 'aburrido' y te dejan de invitar a sus planes. Te sientes solo y ansioso.",
        choices: [
            { text: "Ceder ante la soledad y buscarlos para pedirles que te inviten.", nextStep: 1, effect: { mind: -15, social: +5, bio: -10, psy: -15 }, addAddiction: 15 },
            { text: "Refugiarse en fiestas nuevas donde el consumo es igual o peor.", nextStep: 3, effect: { mind: -20, social: -5, bio: -15, psy: -20 }, addAddiction: 25 }
        ]
    },
    3: {
        phase: "Fase 1: El Círculo se Cierra",
        title: "La rutina del consumo",
        text: "Lo que era esporádico ahora es necesario para sentirte normal. Empiezas a descuidar tus estudios o trabajo. La sustancia domina tus pensamientos.",
        choices: [
            { text: "Ocultar tu comportamiento a tu familia mintiendo sobre tus gastos.", nextStep: 4, effect: { mind: -25, social: -15, bio: -20, psy: -25 }, addAddiction: 30 },
            { text: "Intentar dejarlo por voluntad propia de un día para otro.", nextStep: 5, effect: { mind: -10, social: -10, bio: -30, psy: -40 }, addAddiction: 10 }
        ]
    }
};
