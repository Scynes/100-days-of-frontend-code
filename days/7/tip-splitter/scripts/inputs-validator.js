export const validateInputAsNumber = event => {
    event.preventDefault();

    const INPUT_VALUE = event.target.value;
    const LABEL_ERROR = document.getElementById('people-error-label');

    if (INPUT_VALUE > 0 && !isNaN(INPUT_VALUE)) {
        event.target.value = INPUT_VALUE;
        event.target.style.outline = 'none'
        LABEL_ERROR.style.display = 'none';
    } else {
        LABEL_ERROR.style.display = 'inline-block';
        event.target.style.outline = '2px solid red'
        event.target.value = 0;
    }
}