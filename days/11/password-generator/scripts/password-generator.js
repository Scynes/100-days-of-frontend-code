const LENGTH_SLIDER = document.querySelector('.length-slider');

const LENGTH = document.querySelector('.length');

const UPPERCASE_CHECKBOX = document.querySelector('#uppercase');

const LOWERCASE_CHECKBOX = document.querySelector('#lowercase');

const NUMBERS_CHECKBOX = document.querySelector('#numbers');

const SYMBOLS_CHECKBOX = document.querySelector('#symbols');

const PASSWORD_CONTAINER = document.querySelector('.password-container p');

const GENERATE_BUTTON = document.querySelector('.generate-button');

const STRENGTH_CONTAINER = document.querySelector('.strength-container');

let complexity = 1;


const generatePassword = (length, options) => {

    let result = '';
    let characters = '';
    complexity = 1;

    if (options.uppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        complexity++;
    }

    if (options.lowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
        complexity++;
    }

    if (options.numbers) {
        characters += '0123456789';
        complexity++;
    }

    if (options.symbols) {
        characters += '!@#$%^&*()_+-={}[]\\|;:\'",.<>?/~`';
        complexity++;
    }


    for (let i = 0; i < length; i++) {

        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

const updateGenerateButtonState = () => {

    const options = [
        UPPERCASE_CHECKBOX.checked,
        LOWERCASE_CHECKBOX.checked,
        NUMBERS_CHECKBOX.checked,
        SYMBOLS_CHECKBOX.checked
    ];

    const anyOptionSelected = options.some(option => option === true);
    
    GENERATE_BUTTON.disabled = !anyOptionSelected;
}

const updateStrength = () => {

    Array.from(STRENGTH_CONTAINER.children).forEach(child => {
        child.style.backgroundColor = '';
    })

    for (let index = 0; index < complexity; ++index) {

       STRENGTH_CONTAINER.children[index].style.backgroundColor = 'var(--ecto-green)';
    }
}

GENERATE_BUTTON.addEventListener('click', function() {

    const options = {
        uppercase: UPPERCASE_CHECKBOX.checked,
        lowercase: LOWERCASE_CHECKBOX.checked,
        numbers: NUMBERS_CHECKBOX.checked,
        symbols: SYMBOLS_CHECKBOX.checked
    };

    // Get the length
    const LENGTH = parseInt(LENGTH_SLIDER.value);

    // Generate the password
    const PASSWORD = generatePassword(LENGTH, options);

    if (PASSWORD.length < 12) {
        complexity--;
    }

    updateStrength();

    PASSWORD_CONTAINER.textContent = PASSWORD;
});

LENGTH_SLIDER.addEventListener('input', event => {
    
    LENGTH.textContent = event.target.value;
})

UPPERCASE_CHECKBOX.addEventListener('change', updateGenerateButtonState);
LOWERCASE_CHECKBOX.addEventListener('change', updateGenerateButtonState);
NUMBERS_CHECKBOX.addEventListener('change', updateGenerateButtonState);
SYMBOLS_CHECKBOX.addEventListener('change', updateGenerateButtonState);