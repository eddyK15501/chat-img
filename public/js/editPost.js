const editTodoList = async (event) => {
  event.preventDefault();

  const title = document.getElementById('edit-post-title').value.trim();
  const content = document.getElementById('edit-post-content').value.trim();

  const postId = window.location.toString().split('/');
  const id = parseInt(postId[postId.length - 1], 10);

  try {
    const response = await axios.put(`/api/posts/${id}`, {
      title,
      content,
    });

    if (response.status === 200) {
      document.location.replace('/todolist');
    } else {
      alert('To-do-list post could not be updated.');
    }
  } catch (err) {
    console.log('Error:', err);
    alert('An error occured while updating the post.');
  }
};

document
  .getElementById('edit-form-submit')
  .addEventListener('submit', editTodoList);
