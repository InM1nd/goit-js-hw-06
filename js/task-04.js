let counterValue = document.querySelector('#value');
let valueEl = 0;

const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

inkrBtn.addEventListener('click', event => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener('click', event => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
  
});




// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.