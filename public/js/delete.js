const removeLocalStorageEntry = (postId) => {
  localStorage.removeItem(`isCompleted-${postId}`);
};

const deletePost = async (event) => {
  const container = event.currentTarget.parentElement;
  const postId = parseInt(container.querySelector('.todolist-post-id').innerText, 10);

  try {
    const response = await axios.delete(`/api/posts/${postId}`);

    if (response.status === 204) {
      removeLocalStorageEntry(postId);
      document.location.reload();
    } else {
      alert('Failed to delete post.');
    }
  } catch (err) {
    console.log('Error deleting post', err);
  }
};

document.querySelectorAll('.delete-btn').forEach((btn) => {
  btn.removeEventListener('click', deletePost);
  btn.addEventListener('click', deletePost);
});
