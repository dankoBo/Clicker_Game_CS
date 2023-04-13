function createBulletButton() {
    return `
            <div class="button-container">
                <button class="bullet-button">
                    <span class="text">FIRE !!!</span>
                    <span class="bullet"></span>
                    <audio class="bullet-audio" src="./audio/aks74.wav"></audio>
                </button>
            </div>
    `
}

function playBulletAudio() {
    let bulletAudio = document.querySelector(".bullet-audio");
    let bulletButton = document.querySelector(".bullet-button");

    bulletButton.addEventListener("click", function() {
        bulletAudio.pause();
        bulletAudio.currentTime = 0;
        bulletAudio.play();
    });
}

// Цей код відповідає за створення кнопки "Патрону" та відтворення звуку вистрілу.

// Функція createBulletButton() повертає рядок з HTML-кодом, що створює кнопку "FIRE !!!" для гри, яка містить у собі звук кулі та об'єкт звукового файлу

// Функція playBulletAudio() додає можливість грати звук кулі при кліку на кнопку. 

export { createBulletButton, playBulletAudio }