const togglePricing = () => {

    const ANNUALS = document.querySelectorAll('.annual');
    const MONTHLYS = document.querySelectorAll('.monthly');

    ANNUALS.forEach(element => {
        element.classList.toggle('hidden');
    })

    MONTHLYS.forEach(element => {
        element.classList.toggle('hidden');
    })
}

const PRICING_TOGGLE = document.getElementById('pricing-toggle');

PRICING_TOGGLE.addEventListener('change', togglePricing);