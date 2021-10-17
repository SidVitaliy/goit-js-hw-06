const navElLength = document.querySelectorAll('li.item');
console.log('Number of categories:', navElLength.length);

const categoriesArray = [...navElLength]
  .forEach(category => {
    console.log('Category:', category.children[0].textContent);
    console.log('Elements:', category.children[1].children.length);
  })
  




