let validDollarInput = 0;

let validNumberOfPeople = 0;

let currentTipPercent = 0;

export const validateInputAsNumber = event => {
    event.preventDefault();

    const INPUT_VALUE = event.target.value;
    const LABEL_ERROR = document.getElementById('people-error-label');

    if (INPUT_VALUE > 0 && !isNaN(INPUT_VALUE)) {
        event.target.value = INPUT_VALUE;
        validNumberOfPeople = parseInt(INPUT_VALUE);
        event.target.style.outline = 'none'
        LABEL_ERROR.style.display = 'none';
    } else {
        LABEL_ERROR.style.display = 'inline-block';
        event.target.style.outline = '2px solid red'
        event.target.value = 0;
    }
}

export const validateInputAsDollarAmount = event => {
    event.preventDefault();

    const INPUT_VALUE = event.target.value;

    if (/^\d+(\.\d{0,2})?$/.test(INPUT_VALUE)) {
        validDollarInput = parseFloat(INPUT_VALUE);
    } else {
        event.target.value = validDollarInput;
    }
}

export const setTipPercentageWithButton = event => {

    const PERCENT_VALUE = parseInt(event.target.textContent) / 100;

    currentTipPercent = PERCENT_VALUE;
}

export const setCustomTipPercentage = event => {

    const INPUT_VALUE = event.target.value;

    if (INPUT_VALUE > 0 && !isNaN(INPUT_VALUE)) {
        currentTipPercent = parseInt(INPUT_VALUE) / 100;
    } else {
        event.target.value = currentTipPercent;
    }
}