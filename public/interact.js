const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address
const contractABI = [[
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_beneficiary",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "donor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "DonationReceived",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "beneficiary",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collectedFunds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donate",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]]; // Replace with your contract's ABI

const donationAmountInput = document.getElementById("donation-amount");
const donateButton = document.getElementById("donate-button");
const withdrawButton = document.getElementById("withdraw-button");
const totalFundsElement = document.getElementById("total-funds");

let contract;

async function connectWallet() {
  try {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
    } else {
      console.error('MetaMask not installed');
    }
  } catch (error) {
    console.error(error);
  }
}

async function donate() {
  const amount = ethers.utils.parseEther(donationAmountInput.value);
  try {
    const transaction = await contract.donate({ value: amount });
    await transaction.wait();
    // Update UI with new total funds
  } catch (error) {
    console.error(error);
  }
}

async function withdraw() {
  try {
    const transaction = await contract.withdraw();
    await transaction.wait();
    // Update UI with new total funds
  } catch (error) {
    console.error(error);
  }
}

// Connect to wallet on page load
connectWallet();

// Update total funds
async function updateTotalFunds() {
  const totalFunds = await contract.collectedFunds();
  totalFundsElement.textContent = ethers.utils.formatEther(totalFunds);
}

updateTotalFunds();

donateButton.addEventListener('click', donate);
withdrawButton.addEventListener('click', withdraw);
