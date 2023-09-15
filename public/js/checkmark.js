const check = () => {
  document.getElementById('todolist-title').classList.toggle('line-through');
  document.getElementById('todolist-content').classList.toggle('line-through');
};

document.querySelectorAll('#checkmark').forEach(btn => {
    btn.addEventListener('click', check);
});
