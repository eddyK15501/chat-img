const check = (event) => {
  const container = event.currentTarget.parentElement;
  const title = container.querySelector('.tl-title');
  const content = container.querySelector('.tl-content');

  title.classList.toggle('text-grey');
  content.classList.toggle('text-grey');
  title.classList.toggle('line-through');
  content.classList.toggle('line-through');
};

document.querySelectorAll('.checkmark').forEach((btn) => {
  btn.removeEventListener('click', check);
  btn.addEventListener('click', check);
});
