function showEnemy() {
    return `
        <div class="enemy-container">
            <img class="enemy-agent" src="./images/agents/agent-1.png">
            <audio class="enemy-audio" src="./audio/enemy-spotted.mp3"></audio>
        </div>
    `
}

function changeEnemy(level) {
    let enemyImage = document.querySelector('.enemy-agent');
    let enemyBackground = document.querySelector('.main');
    let enemyAudio = document.querySelector(".enemy-audio");
    switch (level) {
        case 2:
            enemyImage.src = "./images/agents/agent-2.png"
            enemyBackground.style.backgroundImage = 'url("./images/backgrounds/enemy-2-bg.jpg")'
            enemyAudio.play()
            break;
        case 3:
            enemyImage.src = "./images/agents/agent-3.png"
            enemyBackground.style.backgroundImage = 'url("./images/backgrounds/enemy-3-bg.jpg")'
            enemyAudio.play()
            break;
        case 4:
            enemyImage.src = "./images/agents/agent-4.png"
            enemyBackground.style.backgroundImage = 'url("./images/backgrounds/enemy-4-bg.png")'
            enemyAudio.play()
            break;
        case 5:
            enemyImage.src = "./images/agents/agent-5.png"
            enemyBackground.style.backgroundImage = 'url("./images/backgrounds/enemy-5-bg.jpg")'
            enemyAudio.play()
            break;
        default:
            break;
    }
}


// Цей код відповідає за функціонал зміни ворога після досягнення певного рівня гри.

// Функція showEnemy() повертає розмітку для контейнера з ворогом і включає зображення ворога і звуковий ефект.

// Функція changeEnemy(level) отримує рівень гри level та змінює зображення та фон контейнера ворога в залежності від рівня. Крім того, вона відтворює звуковий ефект для кожного рівня.

export { showEnemy, changeEnemy }