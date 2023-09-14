const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  if (username && email && password) {
    try {
      const response = await axios.post('/api/users/signup', {
        username,
        email,
        password,
      });

      const data = response.data;

      if (response.status === 200) {
        document.location.replace('/todolist');
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
