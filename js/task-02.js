const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.querySelector('#ingredients')
// const ingredientsArr = []

// ingredients.forEach(ingredient => {
//   const ingredientItemEl = document.createElement('li')

//   ingredientItemEl.textContent = ingredient

//   ingredientsArr.push(ingredientItemEl)
// })

// ingredientsListEl.append(...ingredientsArr)

const ingredientsArr = ingredients.map(item => {
  const ingredientItemEl = document.createElement('li')

  ingredientItemEl.textContent = item
  
  return ingredientItemEl
});

ingredientsListEl.append(...ingredientsArr);