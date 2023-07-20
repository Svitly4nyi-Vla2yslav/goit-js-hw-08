import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
handlerFillForm();
function onFormInput(evt) {
  let formInfa = localStorage.getItem(FORM_KEY);
  formInfa = formInfa ? JSON.parse(formInfa) : {};
  formInfa[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formInfa));
}

function handlerFillForm() {
  let saveInfa = localStorage.getItem(FORM_KEY);
  if (saveInfa) {
    saveInfa = JSON.parse(saveInfa);

    Object.entries(saveInfa).forEach(([key, text]) => {
      formEl.elements[key].value = text || '';
    });
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  if (email.value === '' || message.value === '') {
    return alert('fill all the fields');
  } else {
    let formData = JSON.parse(localStorage.getItem(FORM_KEY));
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(FORM_KEY);
    formData = {};
  }
}
formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);
