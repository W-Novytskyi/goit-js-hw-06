const listCategoriesEl = document.querySelector('#categories');
const listItemEl = listCategoriesEl.querySelectorAll('.item');

console.log('Number of categories:', listItemEl.length);

listItemEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);  
});