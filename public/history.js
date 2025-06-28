const transactionListElement = document.getElementById('transaction-list');

async function getTransactionHistory() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        const web3 = new Web3(window.ethereum);
        const transactionCount = await web3.eth.getTransactionCount(account);

        for (let i = transactionCount - 1; i >= 0; i--) {
            const transaction = await web3.eth.getTransaction(i);
            const transactionHash = transaction.hash;
            const fromAddress = transaction.from;
            const toAddress = transaction.to;
            const value = web3.utils.fromWei(transaction.value, 'ether');
            const blockNumber = transaction.blockNumber;

            const transactionItem = document.createElement('li');
            transactionItem.textContent = `Transaction Hash: ${transactionHash} | From: ${fromAddress} | To: ${toAddress} | Value: ${value} ETH | Block: ${blockNumber}`;
            transactionListElement.appendChild(transactionItem);
        }
    } catch (error) {
        console.error(error);
        transactionListElement.textContent = 'Error fetching transaction history';
    }
}

// Call the function to get the transaction history when the page loads
getTransactionHistory();