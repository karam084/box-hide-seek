const emailvalid = (email) => {
  const emailRegex = '^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,5})$';
  return emailRegex.test(String(email).toLowerCase());
};

const form = document.querySelector('form');
const nameInput = document.querySelector('input[name ="user_name"]');
const emailInput = document.querySelector('email');

const validInput = () => {
  if (!nameInput.value) {
    nameInput.classList.add('invalid');
    nameInput.nextElementSibling.classList.remove('hidden');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
