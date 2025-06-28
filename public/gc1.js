import React, { useState } from 'react';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
export default ConnectWalletButton;

    const connectButton=document.getElementById('connect-button');
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
                alert('An error occurred while connecting to MetaMask. Please try again.');
            }
        }
        
    

    // Additional JavaScript for interactive elements can be added here


document.addEventListener("DOMContentLoaded", () => {
    const donateBtn = document.getElementById("donateBtn");
    const learnMoreBtn = document.getElementById("learnMoreBtn");

    donateBtn.addEventListener("click", () => {
        // Redirect or handle donate action
        window.location.href = "/donate";
    });

    learnMoreBtn.addEventListener("click", () => {
        // Smooth scroll to "How It Works" section or handle action
        window.location.href = "#how-it-works";
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Speed of the animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // Check if target is reached
            if(count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const learnMoreBtn = document.getElementById("learn-more-btn");

    learnMoreBtn.addEventListener("click", function() {
        window.location.href = "#how-it-works-details"; // Change to appropriate section or page
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter form validation
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
});
