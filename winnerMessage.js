function createWinnerMessage() {
    return `
            <div class="message">
                <img class="message__img" src="./images/global-elite.png" alt="global">
                <div class="message__container">
                    <p class="message__text">You Win!</p>
                    <div class="message__results">
                        <p class="message__score">Your score: 25</p>
                        <p class="message__rank">Your rank is "Global Elite"</p>
                    </div>
                </div> 
            </div>

    `
}

function showWinnerMessage() {
    let content = document.querySelector('.game');
    let gameContent = document.querySelector('.game__content');
    let winnerMessage = createWinnerMessage();
    content.removeChild(gameContent);
    content.innerHTML = winnerMessage;
}

// Функція createWinnerMessage() створює HTML-код для повідомлення про перемогу.

// Функція showWinnerMessage() замінює вміст головного контенту гри на повідомлення про перемогу.
// Виконуючи цю функцію, головний контент гри видаляється зі сторінки, а HTML-код повідомлення про перемогу додається до головного контенту сторінки.

export {showWinnerMessage}