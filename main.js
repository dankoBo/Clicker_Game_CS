import { createForm } from "./form.js";
import { createGameInterface } from './game.js';

function removeElChild() {
    let mainContainer = document.querySelector('#app');
    mainContainer.innerHTML = '';
}

window.addEventListener('hashchange', selectPage);
function selectPage() {
    createForm();
    let hash = window.location.hash;
    if (hash === '#game') {
        removeElChild();
        createGameInterface();
    }
}

// Функція removeElChild() видаляє вміст з елемента з ідентифікатором app.

// Функція selectPage() перевіряє змінний хеш в URL-адресі. Якщо він відповідає #game, то викликається функція removeElChild(),
// яка очищає елемент з ідентифікатором app, а після цього викликається функція createGameInterface(),
// яка створює графічний інтерфейс для гри.

selectPage()