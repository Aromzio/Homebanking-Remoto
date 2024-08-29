document.addEventListener('DOMContentLoaded', () => {
    // Lista de pagos realizados (ejemplo)
    const payments = [
        { id: 1, date: '2024-08-01', amount: 500.00, description: 'Pago de factura de luz' },
        { id: 2, date: '2024-08-05', amount: 1500.00, description: 'Pago de alquiler' },
        { id: 3, date: '2024-08-10', amount: 250.00, description: 'Compra en supermercado' },
        { id: 4, date: '2024-08-15', amount: 1200.00, description: 'Pago de seguro' }
    ];

    const paymentsList = document.getElementById('payments-list');
    const loanCalculatorForm = document.getElementById('loan-calculator-form');

    function renderPayments() {
        let paymentsHtml = '<ul class="payments-list">';
        payments.forEach(payment => {
            paymentsHtml += `
                <li>
                    <strong>Fecha:</strong> ${payment.date} <br>
                    <strong>Monto:</strong> $${payment.amount.toFixed(2)} <br>
                    <strong>Descripción:</strong> ${payment.description}
                </li>
            `;
        });
        paymentsHtml += '</ul>';

        paymentsList.innerHTML = `
            <h3>Resumen de Pagos</h3>
            ${paymentsHtml}
        `;
    }

    function calculateLoan(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('loan-amount').value);
        const rate = parseFloat(document.getElementById('interest-rate').value) / 100;
        const term = parseInt(document.getElementById('loan-term').value);
        
        if (isNaN(amount) || isNaN(rate) || isNaN(term) || amount <= 0 || rate <= 0 || term <= 0) {
            alert("Por favor, ingrese valores válidos.");
            return;
        }
        
        const monthlyInterestRate = rate / 12;
        const numberOfPayments = term * 12;
        const monthlyPayment = amount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        const totalPayment = monthlyPayment * numberOfPayments;
        
        alert(`Pago mensual: $${monthlyPayment.toFixed(2)}\nPago total: $${totalPayment.toFixed(2)}`);
    }

    // Inicialización
    renderPayments();

    // Configurar el formulario de cálculo de préstamos
    loanCalculatorForm.addEventListener('submit', calculateLoan);
});
