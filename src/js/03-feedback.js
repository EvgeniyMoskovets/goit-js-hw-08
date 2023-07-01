const form = document.querySelector('.feedback-form');

form.addEventListener('input', handlerInput);
form.addEventListener('submit', onFormSubmit);

let formValue = {};

let storage = JSON.parse(localStorage.getItem('feedback-form-state'));

if (storage) {
  form.email.value = storage.email;
  form.message.value = storage.message;
  formValue = storage;
}

function handlerInput(e) {
  formValue[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function onFormSubmit(e) {
  e.preventDefault();

  const mail = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  if (mail === '' || message === '') {
    return alert('всі поля повинні бути заповнені');
  }
  console.log(formValue);

  localStorage.removeItem('feedback-form-state');

  e.currentTarget.reset();
}
1;
