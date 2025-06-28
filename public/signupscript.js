form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if all fields are filled
  if (name === '' || email === '' || password === '') {
    message.textContent = 'Please fill in all fields.';
    return;
  }

  // Create an object to store user data
  const user = {
    name,
    email,
    password,
  };

  // Store user data in local storage
  localStorage.setItem('user', JSON.stringify(user));

  // Clear form fields after successful signup (optional)
  window.location.href="/signin.html";
});
