const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allIngredients = document.querySelector('#ingredients')
const listIngredients = ingredients.map(ingredient => {
  const ingrList = document.createElement("li")
  ingrList.classList.add('item')
  ingrList.textContent = ingredient
  return ingrList;
});
allIngredients.append(...listIngredients);
console.log(allIngredients);