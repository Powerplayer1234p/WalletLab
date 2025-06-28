const connectButton = document.getElementById('connect-button');
const accountInfo = document.getElementById('account-info');

connectButton.addEventListener('click', connectMetaMask);

async function connectMetaMask() {
    try {
        // Check if MetaMask is installed
        if (!window.ethereum) {
            alert('MetaMask is not installed. Please install it from https://metamask.io/');
            return;
        }

        // Request account access
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        // Display the connected account
        accountInfo.textContent = `Connected account: ${account}`;
    } catch (error) {
        console.error('Error connecting to MetaMask:', error);
        alert('An error occurred while connecting to wallets. Please try again.');
    }
}
