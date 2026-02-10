const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';
const feedback = document.querySelector('.feedback-form');

const savedData = loadLS(STORAGE_KEY, {});
formData.email = savedData.email || '';
formData.message = savedData.message || '';

feedback.elements.email.value = formData.email;
feedback.elements.message.value = formData.message;

feedback.addEventListener('input', getFormData);
feedback.addEventListener('submit', onFormSubmit);

function getFormData(event) {
  const name = event.target.name;
  const value = event.target.value.trim();
  formData[name] = value;
  saveLS(STORAGE_KEY, formData);
}

function onFormSubmit(event) {
  event.preventDefault();

  if (formData.email.length === 0 || formData.message.length === 0) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  feedback.reset();

  formData.email = '';
  formData.message = '';
}

function saveLS(key, value) {
  try {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
  } catch (error) {
    console.log('Error');
  }
}

function loadLS(key, defaultValue) {
  try {
    const json = localStorage.getItem(key);
    return json === null ? defaultValue : JSON.parse(json);
  } catch (error) {
    console.log('Error');
  }
}
