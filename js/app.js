document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const formInput = document.querySelector('#new-item-form');
formInput.addEventListener('submit', formSubmissionHandler);

})

const formSubmissionHandler = function (event){
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  const readingItem = document.createElement('p');

  const titleItem = document.createElement('div');
  titleItem.textContent = "Title: " + title;

  const authorItem = document.createElement('div');
  authorItem.textContent = "Author: " + author;

  const categoryItem = document.createElement('div');
  categoryItem.textContent = "Category: " + category;



  // readingItem.textContent = `Your save book is : ${title}, ${author}, ${category}`;
  const readingList = document.querySelector('#reading-list');
  // readingList.appendChild(readingItem);

  readingList.appendChild(titleItem);
  readingList.appendChild(authorItem);
  readingList.appendChild(categoryItem);


  event.target.reset();
}