const nameOutputEl = document.querySelector('#name-output');

const inputEl = document.querySelector('#name-input')



inputEl.addEventListener('input', (event) => {
 
  if (event.currentTarget.value === '') {
    nameOutputEl.textContent = 'незнакомец'
  }
  else nameOutputEl.textContent = event.currentTarget.value
})