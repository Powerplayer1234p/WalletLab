const openWalletButton = document.getElementById('open-wallet-button');
const walletSelectionPopup = document.createElement('div');

walletSelectionPopup.innerHTML = `
    <h2>Choose Your Wallet</h2>
    <button id="coinbase-button">Connect Coinbase</button>
    <button id="metamask-button">Connect Metamask</button>
`;

walletSelectionPopup.style.position = 'fixed';
walletSelectionPopup.style.top = '50%';
walletSelectionPopup.style.left = '50%';
walletSelectionPopup.style.transform = 'translate(-50%, -50%)';
walletSelectionPopup.style.backgroundColor = '#fff';
walletSelectionPopup.style.border = '1px solid #ccc';
walletSelectionPopup.style.padding = '20px';
walletSelectionPopup.style.zIndex = '9999';
walletSelectionPopup.style.display = 'none';

document.body.appendChild(walletSelectionPopup);

openWalletButton.addEventListener('click', () => {
    walletSelectionPopup.style.display = 'block';
});

const coinbaseButton = walletSelectionPopup.querySelector('#coinbase-button');
const metamaskButton = walletSelectionPopup.querySelector('#metamask-button');

coinbaseButton.addEventListener('click', () => {
    // Implement your Coinbase connection logic here
    console.log('Connecting to Coinbase...');
    walletSelectionPopup.style.display = 'none';
});

metamaskButton.addEventListener('click', () => {
    // Implement your Metamask connection logic here
    console.log('Connecting to Metamask...');
    walletSelectionPopup.style.display = 'none';
});