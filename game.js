import { createBulletButton, playBulletAudio } from './buttonBullet.js';
import { changeEnemy, showEnemy } from './enemy.js';
import { showWinnerMessage } from './winnerMessage.js'

let levelPoints = 0;
let totalPoints = 0;
let gameLevel = 1;

function createGameInterface() {
    let mainContainer = document.querySelector('#app');
    let bulletButton = createBulletButton();
    let enemy = showEnemy();
    let gameInterface = `
                        <main class="main">
                            <div class="statistic">
                                <ul>
                                    <li class="username-item">Username:</li>
                                    <li class="level-item">Level: 1</li>
                                    <li class="level-points-item">Level points: 0</li>
                                    <li class="total-points-item">Total points: 0</li>
                                </ul>
                            </div>
                            <div class="game">
                                <div class="game__content">
                                    ${bulletButton}
                                    ${enemy}
                                </div>
                            </div>
                        </main>
    `
    mainContainer.insertAdjacentHTML('afterbegin',gameInterface);
    showUserName();
    setCounter();
    playBulletAudio();
}

function showUserName() {
    let userNameListItem = document.querySelector('.username-item');
    let savedUserName = sessionStorage.getItem('savedUserName');
    userNameListItem.textContent = `Username: ${savedUserName}`;
}

function setCounter() {
    let counterButton = document.querySelector('.bullet-button');
    let levelListItem = document.querySelector('.level-item');
    let levelPointsListItem = document.querySelector('.level-points-item');
    let totalPointsListItem = document.querySelector('.total-points-item');
    

    counterButton.addEventListener('click', () => {
        levelPoints++;
        if (levelPoints > 5) {
            levelPoints = 0;
            gameLevel ++;
            changeEnemy(gameLevel)
        }
        levelPointsListItem.textContent = `Level points: ${levelPoints}`;
        
        if (levelPoints > 0) {
            totalPoints ++;
            totalPointsListItem.textContent = `Total points: ${totalPoints}`;
        }
        levelListItem.textContent = `Level: ${gameLevel}`;
        
        if (totalPoints >= 25) {
            showWinnerMessage()
        }
    });
}

// Функція createGameInterface() створює головний контейнер гри та вставляє його в HTML-код сторінки. Вона також викликає дві інші функції: showUserName() та setCounter.

// Функція showUserName() отримує збережене ім'я користувача з сховища сесії та вставляє його в HTML-код.

// Функція setCounter() відстежує кількість клацань на кнопку та змінює кількість очок за рівнем та загальну кількість очок.
//Вона також відстежує поточний рівень гри та викликає функцію changeEnemy(),
//  якщо кількість очок за рівнем досягає 6 або більше. Крім того, якщо загальна кількість очок досягає 25, вона викликає функцію showWinnerMessage().



export { createGameInterface }