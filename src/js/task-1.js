const todoForm = document.querySelector('.todo__form');
const selectedTodos = JSON.parse(localStorage.getItem('selectedTodos')) || {};

initTodoForm();

todoForm.addEventListener('change', onCheckboxChange);

function onCheckboxChange(e) {
  selectedTodos[e.target.name] = e.target.checked;
  localStorage.setItem('selectedTodos', JSON.stringify(selectedTodos));
}

function initTodoForm() {
  const checkedItems = localStorage.getItem('selectedTodos');

  if (checkedItems) {
    const parsedItems = JSON.parse(checkedItems);

    Object.entries(parsedItems).forEach(([name, checked]) => {
      const checkbox = todoForm.querySelector(`input[name="${name}"]`);

      if (checkbox) {
        checkbox.checked = checked;
      }
    });
  }
}
