const updateUIAndLocalStorage = (container, isCompleted) => {
  const title = container.querySelector('.tl-title');
  const content = container.querySelector('.tl-content');

  if (isCompleted) {
    title.classList.add('text-grey', 'line-through');
    content.classList.add('text-grey', 'line-through');
  } else {
    title.classList.remove('text-grey', 'line-through');
    content.classList.remove('text-grey', 'line-through');
  }

  const postId = container.querySelector('.todolist-post-id').innerText;
  localStorage.setItem(`isCompleted-${postId}`, isCompleted);
};

const handleCheckmarkClick = async (event) => {
  const container = event.currentTarget.parentElement;
  const postId = container.querySelector('.todolist-post-id').innerText;

  try {
    const title = container.querySelector('.tl-title');
    const isCompleted = title.classList.contains('line-through');
    updateUIAndLocalStorage(container, !isCompleted);

    await axios.put(`/api/posts/${postId}`, {
      isCompleted: !isCompleted
    });
  } catch (error) {
    console.error('Error updating isCompleted:', error);

    const isCompleted = localStorage.getItem(`isCompleted-${postId}`) === 'true';
    updateUIAndLocalStorage(container, isCompleted);
  }
};

document.querySelectorAll('.checkmark').forEach((btn) => {
  const container = btn.parentElement;
  const postId = container.querySelector('.todolist-post-id').innerText;
  const isCompleted = localStorage.getItem(`isCompleted-${postId}`) === 'true';

  updateUIAndLocalStorage(container, isCompleted);

  btn.removeEventListener('click', handleCheckmarkClick);
  btn.addEventListener('click', handleCheckmarkClick);
});
