const formData = { email: '', message: '' };

const feedback = document.querySelector('.feedback-form');

feedback.addEventListener('input', getFormData);
const savedData = loadLS('feedback-form', {});
formData.email = savedData.email || '';
formData.message = savedData.message || '';

feedback.elements.email.value = formData.email;
feedback.elements.message.value = formData.message;

function getFormData(event) {
  const name = event.target.name;
  const value = event.target.value;
  formData[name] = value;
  saveLS('feedback-form', formData);
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
