import { validateInputAsNumber, validateInputAsDollarAmount, setCustomTipPercentage, setTipPercentageWithButton } from "./inputs-validator.js";

const NUMBER_OF_PEOPLE_INPUT = document.getElementById('people');

const BILL_AMOUNT_INPUT = document.getElementById('bill');

const TIP_BUTTONS = document.querySelectorAll('.button-container button');

const CUSTOM_TIP = document.getElementById('custom');

NUMBER_OF_PEOPLE_INPUT.addEventListener('keyup', validateInputAsNumber);

BILL_AMOUNT_INPUT.addEventListener('keyup', validateInputAsDollarAmount);

CUSTOM_TIP.addEventListener('keyup', setCustomTipPercentage);

TIP_BUTTONS.forEach(button => {

    button.addEventListener('click', setTipPercentageWithButton);
})
