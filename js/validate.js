const isEmailValid = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name="user_name"]');
const emailInput = document.querySelector('input[name="user_email"]');
const messageInput = document.querySelector('textarea[name="user_message"]');
const inputs = {
  nameInput,
  emailInput,
  messageInput,
};

let formValid = false;
let isvalid = false;

const resetData = (element) => {
  element.classList.remove('invalid');
  element.nextElementSibling.classList.add('hidden');
};

const invalidElement = (element) => {
  element.classList.add('invalid');
  element.nextElementSibling.classList.remove('hidden');
};

const validInput = () => {
  if (!isvalid) return;
  if (!formValid) return;
  resetData(nameInput);
  resetData(emailInput);
  resetData(messageInput);

  if (!nameInput.value) {
    formValid = false;
    invalidElement(nameInput);
  }

  if (!isEmailValid(emailInput.value)) {
    formValid = false;
    invalidElement(emailInput);
  }

  if (!messageInput.value) {
    formValid = false;
    invalidElement(messageInput);
  }
};

form.addEventListener('submit', () => {
  e.preventDefault();
  isvalid = true;
  formValid = true;
  validInput();
});

inputs.forEach('input', () => {
  inputs.addEventListener('input', () => {
    validInput();
  });
});
