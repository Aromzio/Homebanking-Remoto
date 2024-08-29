document.addEventListener('DOMContentLoaded', () => {
    // Datos de cuentas con CBU y Alias
    const accounts = [
        { id: 1, name: 'Ana López', cbu: '0720003100000001234567', alias: 'ANALOP', balance: 123333.56 },
        { id: 2, name: 'Carlos Pérez', cbu: '0720003200000007654321', alias: 'CARLOPE', balance: 987.65 },
        { id: 3, name: 'María García', cbu: '0720003300000001122334', alias: 'MARGAR', balance: 456.78 }
    ];

    const fromAccountSelect = document.getElementById('from-account');
    const toAccountSelect = document.getElementById('to-account');
    const transferForm = document.getElementById('transfer-form');

    function populateAccountSelects() {
        fromAccountSelect.innerHTML = '';
        toAccountSelect.innerHTML = '';

        accounts.forEach(account => {
            const option = document.createElement('option');
            option.value = account.id;
            option.textContent = `${account.name} (Alias: ${account.alias}, CBU: ${account.cbu})`;
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

        alert(`Transferencia realizada con éxito:\n` +
              `De: ${fromAccount.name} (Alias: ${fromAccount.alias})\n` +
              `A: ${toAccount.name} (Alias: ${toAccount.alias})\n` +
              `Monto: $${amount.toFixed(2)}`);
    }

    // Inicialización
    populateAccountSelects();
    transferForm.addEventListener('submit', handleTransfer);
});
