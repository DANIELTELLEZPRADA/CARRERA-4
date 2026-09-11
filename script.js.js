let currentStep = 0;
let addictionScore = 0;
let stats = { mind: 100, social: 100, bio: 100, psy: 100 };

// Fusionar todos los niveles en una sola base de datos maestra al iniciar
let storyNodes = {};

function initGameDatabase() {
    storyNodes = Object.assign({}, level1Nodes, level2Nodes, level3Nodes);
}

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const endScreen = document.getElementById('end-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const barMind = document.getElementById('bar-mind');
const barSocial = document.getElementById('bar-social');
const barBio = document.getElementById('bar-bio');
const barPsy = document.getElementById('bar-psy');
const addictionLevelText = document.getElementById('addiction-level');

const phaseIndicator = document.getElementById('phase-indicator');
const scenarioTitle = document.getElementById('scenario-title');
const scenarioText = document.getElementById('scenario-text');
const choicesContainer = document.getElementById('choices-container');
const endTitle = document.getElementById('end-title');
const endMessage = document.getElementById('end-message');
const endIcon = document.getElementById('end-icon');

startBtn.addEventListener('click', () => {
    initGameDatabase();
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    resetGame();
    loadNode();
});

restartBtn.addEventListener('click', () => {
    endScreen.classList.remove('active');
    startScreen.classList.add('active');
});

function resetGame() {
    currentStep = 0;
    addictionScore = 0;
    stats = { mind: 100, social: 100, bio: 100, psy: 100 };
    updateUI();
}

function updateUI() {
    updateBar(barMind, stats.mind);
    updateBar(barSocial, stats.social);
    updateBar(barBio, stats.bio);
    updateBar(barPsy, stats.psy);
    if (addictionLevelText) {
        addictionLevelText.textContent = Math.max(0, Math.min(100, addictionScore)) + '%';
    }
}

function updateBar(barElement, value) {
    if (!barElement) return;
    let val = Math.max(0, Math.min(100, value));
    barElement.style.width = val + '%';
    if (val > 60) barElement.style.backgroundColor = 'var(--fill-high)';
    else if (val > 30) barElement.style.backgroundColor = 'var(--fill-med)';
    else barElement.style.backgroundColor = 'var(--fill-low)';
}

function loadNode() {
    const node = storyNodes[currentStep];
    
    if (!node) {
        showEndScreen(false, "El laberinto se ha interrumpido de manera inesperada.");
        return;
    }

    phaseIndicator.textContent = node.phase || "Fase del Laberinto";
    scenarioTitle.textContent = node.title || "";
    scenarioText.textContent = node.text || "";
    choicesContainer.innerHTML = '';

    if (node.isEnd) {
        showEndScreen(node.win, node.message);
        return;
    }

    node.choices.forEach((choice) => {
        const btn = document.createElement('button');
        btn.classList.add('choice-btn');
        btn.textContent = choice.text;
        btn.addEventListener('click', () => {
            applyChoice(choice);
        });
        choicesContainer.appendChild(btn);
    });
}

function applyChoice(choice) {
    stats.mind += choice.effect.mind;
    stats.social += choice.effect.social;
    stats.bio += choice.effect.bio;
    stats.psy += choice.effect.psy;
    
    if (choice.addAddiction) {
        addictionScore += choice.addAddiction;
    }

    if (stats.mind <= 0 || stats.psy <= 0 || stats.bio <= 0) {
        currentStep = 6; // Nodo de colapso total
    } else {
        currentStep = choice.nextStep;
    }

    updateUI();
    loadNode();
}

function showEndScreen(isWin, message) {
    gameScreen.classList.remove('active');
    endScreen.classList.add('active');
    endTitle.textContent = isWin ? "¡Supervivencia Extrema!" : "Colapso Total en el Círculo";
    endMessage.textContent = message;
    endIcon.textContent = isWin ? "🛡️" : "⚠️";
}