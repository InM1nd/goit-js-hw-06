function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const colorNameRef = document.querySelector('.color');
const buttonRef = document.querySelector('.change-color');
buttonRef.addEventListener('click', onButtonClick);

function onButtonClick(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorNameRef.textContent = bodyRef.style.backgroundColor;
}








// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.