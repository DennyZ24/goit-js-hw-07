const inputEl = document.querySelector('#validation-input')



inputEl.addEventListener('change', (event) => {
  if (event.currentTarget.value.length !== 6) {
    inputEl.classList.add('invalid')
  }
  else inputEl.classList.remove('invalid')
      inputEl.classList.add('valid');

}
)

