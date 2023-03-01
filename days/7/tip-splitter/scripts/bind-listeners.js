import { validateInputAsNumber } from "./inputs-validator.js";

const NUMBER_OF_PEOPLE_INPUT = document.getElementById('people');

NUMBER_OF_PEOPLE_INPUT.addEventListener('change', validateInputAsNumber);