class FastLane {
  constructor() {
    this.passwordElement = document.querySelector('.form-input[name=password]');
    this.interactiveImg = document.querySelector('img');
    this.baseUrl = './assets/images';
    this.shyMoodLength = 17;
    this.ecstaticMoodLenght = 10;

    this.state = {
      type: {
        name: 'email',
      },
      values: {
        email: '',
        password: '',
      },
      mood: {
        active: '',
      },
    };
  }

  showTypedPassword = (name, element) => {
    if (name === 'password') {
      element.type = 'text';
      setTimeout(() => {
        element.type = 'password';
      }, 1000);
    }
  };

  changeMood = (activeField, value) => {
    this.ecstaticMood(activeField, value);
  };

  ecstaticMood = (name, value) => {
    if (value.length % 2 === 0 && name !== 'password') {
      this.interactiveImg.src = `${this.baseUrl}/ecstatic${'.png'}`;
    } else if (name !== 'password') {
      this.interactiveImg.src = `${this.baseUrl}/active${'.png'}`;
    }
  };
}
