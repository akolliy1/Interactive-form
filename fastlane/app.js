const inputFields = document.querySelectorAll('.form-input');
const interactiveImg = document.querySelector('img');
const showPass = document.querySelector('#show');
const hidePass = document.querySelector('#hide');


const fastLane = new FastLane();

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener('click', event => {
    const { name } = event.target;
    if (name !== 'password') {
      interactiveImg.src = `${fastLane.baseUrl}/active${'.png'}`;
    } else {
      interactiveImg.src = `${fastLane.baseUrl}/shy${'.png'}`;
    }
  });

  inputFields[i].addEventListener('blur', event => {
    interactiveImg.src = `${fastLane.baseUrl}/neutral${'.png'}`;
  });

  inputFields[i].addEventListener('input', event => {
    const { name, value } = event.target;
    fastLane.state.values[name] = value;

    fastLane.showTypedPassword(name, event.target);
    fastLane.changeMood(name, value);
  });
}

showPass.addEventListener('click', () => {
  showPass.classList.toggle('d-none');
  hidePass.classList.toggle('d-none');
  fastLane.passwordElement.type = 'password';
  interactiveImg.src = `${fastLane.baseUrl}/shy${'.png'}`;
});

hidePass.addEventListener('click', () => {
  showPass.classList.toggle('d-none');
  hidePass.classList.toggle('d-none');
  fastLane.passwordElement.type = 'text';
  interactiveImg.src = `${fastLane.baseUrl}/peek${'.png'}`;
});
