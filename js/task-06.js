// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.



const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    this.classList.add('invalid');

    if(event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    }
}
