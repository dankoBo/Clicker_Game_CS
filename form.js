let inputs = document.querySelectorAll('input');
let mainContainer = document.querySelector('#app');
let isValid = false;

function createForm() {
    let form = `
            <div class="form-container">
                <div class="form-box">
                    <h2>Create user</h2>
                    <form>
                        <div class="user-box">
                            <input type="text" name="username" required autocomplete="off">
                            <label for="username">Username</label>
                        </div>
                        <div class="user-box">
                            <input type="text" name="name" required autocomplete="off">
                            <label for="name">Name</label>
                        </div>
                        <div class="user-box">
                            <input type="emil" name="email" required autocomplete="off">
                            <label for="email">Email</label>
                        </div>
                        <a class="link" href="#game">let's play</a>
                    </form>
                </div>
            </div>
    `
    mainContainer.insertAdjacentHTML('afterbegin',form);
    checkForm();
    submitForm();
}

function checkForm() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.name === 'email') {
                checkEmail(input);
            } else {
                checkRequired(input);
            }
        });
    });
}

function checkRequired(input) {
    let existingError = input.parentElement.querySelector('.error');
    if (!input.value && !existingError) {
        let error = document.createElement('span');
        error.className = 'error';
        error.textContent = 'Required';
        input.parentElement.appendChild(error);
    } else if (input.value && existingError) {
        existingError.remove();
    }
}

function checkEmail(input) {
    let existingError = input.parentElement.querySelector('.error');
    let error = document.createElement('span');
    error.className = 'error';
    error.textContent = 'Invalid email';
    
    if (!input.value || !isValidEmail(input.value)) {
        if (!existingError) {
            input.parentElement.appendChild(error);
        }
    } else if (existingError) {
        existingError.remove();
    }
}

function isValidEmail(email) {
    let regex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return regex.test(email);
}

function submitForm() {
    let submitButton = document.querySelector('a[href="#game"]');
    submitButton.addEventListener('click', (event) => {
        isValid = true;
        saveUserName();
        inputs.forEach(input => {
            if (input.name === 'email') {
                checkEmail(input);
            } else {
                checkRequired(input);
            }
        });
    
        if (document.querySelectorAll('.error').length > 0) {
            isValid = false;
            event.preventDefault();
        }
    })
}

function saveUserName() {
    let userNameInput = document.querySelector('input[name="username"]');
    let userName = userNameInput.value;
    sessionStorage.setItem('savedUserName', userName);
}


// Функція createForm() створює форму в mainContainer, додає слухачі на події вводу та кліку на кнопку "let's play".

// Функції checkRequired() та checkEmail() перевіряють валідність введених даних користувачем. Якщо введені дані невалідні, то вони додають клас помилки до відповідного елементу.

// Функція submitForm() перевіряє валідність введених даних перед тим, як користувач перейде на іншу сторінку. Якщо дані невалідні, то вона запобігає переходу із сторінки та відображає помилки.

// Функція saveUserName() зберігає введене користувачем ім'я в локальне сховище браузера.



export { createForm }