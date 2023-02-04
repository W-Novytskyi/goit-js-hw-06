const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector('#ingredients');

const itemOfIngredientsEl = ingredients.map(ingredient =>{
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  return item;
});

listOfIngredientsEl.append(...itemOfIngredientsEl);