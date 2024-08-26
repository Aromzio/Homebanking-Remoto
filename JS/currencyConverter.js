// currencyConverter.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('converter-form');
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    const resultDiv = document.getElementById('conversion-result');

    const exchangeRates = {
        ARS: {
            USD: 0.0056, // Tasa de cambio de ARS a USD
            ARS: 1       // Tasa de cambio de ARS a ARS (1:1)
        },
        USD: {
            ARS: 178.57, // Tasa de cambio de USD a ARS
            USD: 1       // Tasa de cambio de USD a USD (1:1)
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario

        const amount = parseFloat(amountInput.value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        if (isNaN(amount) || amount <= 0) {
            resultDiv.textContent = 'Por favor, ingresa un monto válido.';
            return;
        }

        if (fromCurrency === toCurrency) {
            resultDiv.textContent = `El monto es: ${amount} ${toCurrency}`;
            return;
        }

        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = amount * rate;

        resultDiv.textContent = `El monto convertido es: ${convertedAmount.toFixed(2)} ${toCurrency}`;
    });
});

