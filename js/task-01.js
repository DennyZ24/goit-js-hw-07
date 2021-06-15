const categoriesListEl = document.querySelector('#categories')
// console.log(categoriesListEl);

const categoriesListItemEl = document.querySelector('#categories').children;

console.log(`В списке ${categoriesListEl.getAttribute('id')} ${categoriesListItemEl.length} категории.`);

// console.log(categoriesListItemEl[0].querySelector('h2').textContent);
// console.log(categoriesListItemEl[0].querySelectorAll('li').length);

// for (let i = 0; i < categoriesListItemEl.length; i+=1) {
//   console.log(`Категория: ${categoriesListItemEl[i].querySelector('h2').textContent}`);

//   console.log(`Количество элементов: ${categoriesListItemEl[i].querySelectorAll('li').length}`);
// }

const categoriesListItemArr = [...categoriesListItemEl];

categoriesListItemArr.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);

  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
}
);