
    const checkmarkBtns = document.querySelectorAll('#checkmark');

    checkmarkBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.getElementById('todolist-title').classList.toggle('line-through');
            document.getElementById('todolist-content').classList.toggle('line-through');
        });
    });

