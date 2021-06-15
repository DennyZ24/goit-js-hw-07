const valueEl = document.querySelector('#value');


const decrementBtnEl = document.querySelector('[data-action="decrement"]')
decrementBtnEl.addEventListener('click', decrement)

const incrementBtnEl = document.querySelector('[ data-action="increment"]')
incrementBtnEl.addEventListener('click', increment)

let counterValue = 0;

function increment (event) {
  counterValue += 1;

  valueEl.textContent = counterValue;
};


function decrement(event) {
 counterValue -= 1;

  valueEl.textContent = counterValue;
}


// В задании 4 пользователь может сломать логику счетчика, если зайдет через инструменты разработчика и поменяет вручную значение спана с id="value". Такой возможности быть не должно. Заведите отдельную переменную (число), значение которой увеличивается/уменьшается на 1 (при клике на соответсвующую кнопку), и записывайте это значение в textContent спана с id="value".