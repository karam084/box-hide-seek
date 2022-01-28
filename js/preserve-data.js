
const saveButton = document.querySelector("#submit"); 
const formId = "form-con"; 
const formIdentifier = `${url} ${formId}`;
const url = location.href;
let form = document.querySelector(`#${formId}`); 
let formElements = form.elements;

const getFormData = () => {
  let data = { [formIdentifier]: {} }; 
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

const getFormData = () => {
  let data = { [formIdentifier]: {} }; 
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

const populateForm = () => {
  if (localStorage.key(formIdentifier)) {
  const savedData = JSON.parse(localStorage.getItem(formIdentifier)); 
  for (const element of formElements) {
  if (element.name in savedData) {
  element.value = savedData[element.name];
  }
  }
  }
  };
  document.onload = populateForm(); 
