"use strict"
const titles = document.querySelectorAll('.form__field-label');
const inputs = { 
  name: document.querySelector('.field__fio'),
  email: document.querySelector('.field__email'),
  textar: document.querySelector('.field__comment'),
  
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form);
  // formData.append('image', formImage.files[0]);

  if (error === 0) {
    form.classList.add('_sending');
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });
    if (response.ok){
      let result = await response.json();
      alert(result.message);
      formPreview.innerHTML = '';
      form.reset();
      form.classList.remove('_sending');
    } else {
      alert('Ошибка');
      form.classList.remove('_sending');
    }
  } else {
    alert('Заполните обязательные поля');
    form.classList.remove('_sending');
  }

}

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')){
        if (emailTest(input)) {
          formAddError(input)
          error++;
        }
      } else if(input.getAttribute("type") === "checkbox" && input.checked === false) {
        formAddError(input);
        error++;
      }else{
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
  function formAddError(input) {
    input.parentNode.classList.add('_error');
    input.classList.add('_error');
  }
  function formRemoveError(input) {
    input.parentNode.classList.remove('_error');
    input.classList.remove('_error');
  }
  // Функция теста email
  function emailTest(input) {
    return  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

function controlInput(event, field){
  const {value} = event.target;
  if (event.target.value) {
    inputs[field].classList.add('filled')
    inputs[field].previousElementSibling.classList.add('_hide')
  } else {
    inputs[field].classList.remove('filled')
    inputs[field].previousElementSibling.classList.remove('_hide')
  }
      
}

inputs.name.oninput = (event) => controlInput(event, 'name');
inputs.email.oninput = (event) => controlInput(event, 'email');
inputs.textar.oninput = (event) => controlInput(event, 'textar');

