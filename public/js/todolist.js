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
    } catch (err) {
        
    }
  } else {
  }
};

document
  .getElementById('new-post-btn')
  .addEventListener('submit', createTodoList);
