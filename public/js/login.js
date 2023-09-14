const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (email && password) {
    try {
      const response = await axios.post('/api/users/login', {
        email,
        password,
      });

      if (response.status === 200) {
        document.location.replace('/todolist');
      } else {
        alert('Failed to log in.');
      }
    } catch (error) {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
