import { tipAmount, tipPerPerson, reset, validateInputAsNumber, validateInputAsDollarAmount, setCustomTipPercentage, setTipPercentageWithButton } from "./inputs-validator.js";

const NUMBER_OF_PEOPLE_INPUT = document.getElementById('people');

const BILL_AMOUNT_INPUT = document.getElementById('bill');

const TIP_BUTTONS = document.querySelectorAll('.button-container button');

const CUSTOM_TIP = document.getElementById('custom');

const RESET_BUTTON = document.getElementById('reset');

const update = () => {

    const TIP_AMOUNT = document.getElementById('tip-amount');
    const TIP_SPLIT = document.getElementById('tip-split');

    TIP_AMOUNT.textContent = tipAmount.toFixed(2);
    TIP_SPLIT.textContent = tipPerPerson.toFixed(2);
}

NUMBER_OF_PEOPLE_INPUT.addEventListener('keyup', event => {
    validateInputAsNumber(event);

    update();
});

BILL_AMOUNT_INPUT.addEventListener('keyup', event => {
    validateInputAsDollarAmount(event);

    update();
});

CUSTOM_TIP.addEventListener('keyup', event => {
    setCustomTipPercentage(event);

    update();
});

RESET_BUTTON.addEventListener('click', () => {

    reset();
    update();

    NUMBER_OF_PEOPLE_INPUT.value = 1;
    BILL_AMOUNT_INPUT.value = '';
})

TIP_BUTTONS.forEach(button => {

    button.addEventListener('click', event => {
        setTipPercentageWithButton(event);
        update();

        const ACTIVE_ELEMENT = document.querySelector('.active');

        ACTIVE_ELEMENT.classList.toggle('active');

        event.target.classList.toggle('active');
    });
})
