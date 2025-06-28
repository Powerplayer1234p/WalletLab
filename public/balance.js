const balanceTextElement = document.getElementById('balance-text');

async function getBalance() {
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        const web3 = new Web3(window.ethereum);
        const balance = await web3.eth.getBalance(account);
        const etherBalance = web3.utils.fromWei(balance, 'ether');

        balanceTextElement.textContent = `Balance: ${etherBalance} ETH`;
    } catch (error) {
        console.error(error);
        balanceTextElement.textContent = 'Error fetching balance';
    }
}

// Call the function to get the balance when the page loads
getBalance();