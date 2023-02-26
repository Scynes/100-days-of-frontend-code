let previousSelection = null;

const RATING_OPTIONS = document.querySelectorAll('.rating-option');

const handleRatingSelect = event => {

    const SELECTED = event.target;

    // Do nothing if the previous selection was clicked again.
    if (SELECTED == previousSelection) return;

    // Toggle off the active class from the previous selection
    if (previousSelection != null) {
        previousSelection.classList.toggle('active');
    }

    previousSelection = SELECTED;
    SELECTED.classList.toggle('active');
    
}

const handleSubmit = () => {
    
    // Verify that a selection was made
    if (previousSelection === null) return;

    const SELECTED_DISPLAY = document.querySelector('.selected-display');
    const RATING_THANKS = document.querySelector('.rating-thanks');
    const RATING_SUBMIT = document.querySelector('.rating-submit');

    SELECTED_DISPLAY.textContent = `You selected ${previousSelection.textContent} out of 5`;
    RATING_SUBMIT.classList.toggle('hidden');
    RATING_THANKS.classList.toggle('hidden');

}

RATING_OPTIONS.forEach(element => {

    element.addEventListener('click', handleRatingSelect);
})