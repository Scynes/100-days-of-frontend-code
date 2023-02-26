let currentRating = 5;

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

}

RATING_OPTIONS.forEach(element => {

    element.addEventListener('click', handleRatingSelect);
})