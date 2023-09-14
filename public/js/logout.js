const logout = async () => {
  try {
    const response = await axios.post('/api/users/logout');

    if (response.status === 204) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } catch (error) {
    alert('Failed to log out.');
  }
};

document.getElementById('logout').addEventListener('click', logout);
