document.addEventListener('DOMContentLoaded', () => {
    // Datos de cuentas
    const accounts = [
        { id: 1, name: 'Cuenta A', balance: 123333.56 },
        { id: 2, name: 'Cuenta B', balance: 987.65 },
        { id: 3, name: 'Cuenta C', balance: 456.78 }
    ];

    // Datos de tarjetas
    const creditCard = { id: 'credit', name: 'Tarjeta de Crédito', balance: generateRandomBalance() };
    const debitCard = { id: 'debit', name: 'Tarjeta de Débito', balance: generateRandomBalance() };

    // Elementos del DOM
    const accountSummary = document.getElementById('account-summary');
    const fromAccountSelect = document.getElementById('from-account');
    const toAccountSelect = document.getElementById('to-account');
    const transferForm = document.getElementById('transfer-form');
    const creditCardBalanceElement = document.getElementById('credit-card-balance');
    const debitCardBalanceElement = document.getElementById('debit-card-balance');

    function updateAccountSummary() {
        let accountsHtml = '<ul class="account-list">';
        accounts.forEach(account => {
            accountsHtml += `
                <li><strong>${account.name}</strong> - $${account.balance.toFixed(2)}</li>
            `;
        });
        accountsHtml += '</ul>';

        accountSummary.innerHTML = `
            <h3>Resumen de Cuentas</h3>
            ${accountsHtml}
            <div class="graph-placeholder">
                <p>Gráfico ilustrativo (aquí podrías usar una biblioteca de gráficos)</p>
            </div>
        `;
    }

    function populateAccountSelects() {
        fromAccountSelect.innerHTML = '';
        toAccountSelect.innerHTML = '';

        accounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account.id;
            option.textContent = account.name;
            fromAccountSelect.appendChild(option);

            const optionClone = option.cloneNode(true);
            toAccountSelect.appendChild(optionClone);
        });
    }

    function handleTransfer(event) {
        event.preventDefault();

        const fromAccountId = parseInt(fromAccountSelect.value);
        const toAccountId = parseInt(toAccountSelect.value);
        const amount = parseFloat(document.getElementById('amount').value);

        if (fromAccountId === toAccountId) {
            alert('No se puede transferir a la misma cuenta.');
            return;
        }

        const fromAccount = accounts.find(acc => acc.id === fromAccountId);
        const toAccount = accounts.find(acc => acc.id === toAccountId);

        if (fromAccount.balance < amount) {
            alert('Saldo insuficiente.');
            return;
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        updateAccountSummary();
    }

    function generateRandomBalance() {
        return (Math.random() * 10000).toFixed(2); // Saldo entre 0 y 10,000 pesos
    }

    function updateCardBalances() {
        creditCardBalanceElement.textContent = `$${creditCard.balance}`;
        debitCardBalanceElement.textContent = `$${debitCard.balance}`;
    }

    // Inicialización
    updateAccountSummary();
    populateAccountSelects();
    updateCardBalances();
    transferForm.addEventListener('submit', handleTransfer);
});
