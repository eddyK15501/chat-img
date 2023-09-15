const createTodoList = async (event) => {
  event.preventDefault();

  const title = document.getElementById('db-post-title').value.trim();
  const content = document.getElementById('db-post-content').value.trim();

  if (title && content) {
    try {
      const response = await axios.post('/api/posts', {
        title,
        content,
      });

      if (response.status === 201) {
        document.location.replace('/todolist');
      } else {
        alert('Failed to create and save new post to the database.');
      }
    } catch (err) {
      alert('Failed to create new post.');
    }
  }
};

document
  .getElementById('db-form-submit')
  .addEventListener('submit', createTodoList);