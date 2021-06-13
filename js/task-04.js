const valueEl = document.querySelector('#value');


const decrementBtnEl = document.querySelector('[data-action="decrement"]')
decrementBtnEl.addEventListener('click', decrement)

const incrementBtnEl = document.querySelector('[ data-action="increment"]')
incrementBtnEl.addEventListener('click', increment)


function increment (event) {
  valueEl.textContent = Number(value.textContent) + 1

  const counterValue = valueEl.textContent;
  // console.log('increment  - counterValue', counterValue)
  
};


function decrement(event) {
  valueEl.textContent = Number(value.textContent) - 1
  
  const counterValue = valueEl.textContent;
  // console.log('decrement  - counterValue', counterValue)
}
