const getRandomAdvice = async () => {
    const ADVICE_NUMBER = document.querySelector('.advice-number')

    const QUOTE = document.querySelector('.quote')

    const result = await fetch('https://api.adviceslip.com/advice');

    if (!result.ok) return;

    const advice = await result.json();

    ADVICE_NUMBER.textContent = `ADVICE #${advice.slip.id}`
    QUOTE.textContent = advice.slip.advice;
}