//this will listen for completion of loading the index.html
//check the console for the message in console.log
document.addEventListener('DOMContentLoaded', () => {
  console.log('If this appears then JavaScript has loaded');

// We need to select the entry form to allow us to access the data entered within it
// we use the id in the html element describing the entry form =  <form id="new-pylon-form"> 
const dataEntryForm = document.querySelector('#new-pylon-form');
// this method called on the dataEntryForm will ensiree that the associated callback function will only be
//called when the form's submit button is activated (with this event being referred to as a 'submit' event)
dataEntryForm.addEventListener('submit', dataEntryFormHandler);
// the callback function is not defined within the addEventListener
// we only include the 'event' to be listened for and not the consequence of activating the event

const deleteEntriesButton = document.querySelector('#delete-all');
deleteEntriesButton.addEventListener('click', handleDeleteEntriesButton);

})

/////////////////////////////////////END OF EVENTLISTENER //////////////////////////


//////////////////////////////////START OF CALLBACK FUNCTIONS /////////////////////////

// ensure the variable for the callback matched the eventListener's function's variable
// the function takes an 'event' as an argument
// I assume that this mysterious event is automatically provided to the function?
const dataEntryFormHandler = function (event){
  // WHAT DOES THIS DO? - what is the default behaviour of a form event?
  // without it none of the data is saved
  //somethign to do the POST??
  event.preventDefault();
  // declare a variable and assign the value from the name input box of the form
  const name = event.target.name.value;
  // declare a variable and assign the value from the year input box of the form
  const year = event.target.year.value;
  // declare a variable and assign the value from the height category dropdown of the form
  const height = event.target.height.value;

  const NewItemHolder = document.createElement('ul');
  NewItemHolder.classList.add('pylonContainer');

  // declare a variable and create a new div Element
  const nameItem = window.document.createElement('lh');
  // assign a class
  nameItem.classList.add('nameItem-test')
  // assign text and the value of the name property
  nameItem.textContent = "Name: " + name;
  

  const yearItem = window.document.createElement('li');
  yearItem.classList.add('yearItem-test');
  yearItem.textContent = "Year: " + year;


  const heightItem = window.document.createElement('li');
  heightItem.classList.add('heightItem-test')
  heightItem.textContent = "Height: " + height;

  NewItemHolder.appendChild(nameItem);
  NewItemHolder.appendChild(yearItem);
  NewItemHolder.appendChild(heightItem);

  const parentToAppendTo = document.querySelector('#pylon-list');

  parentToAppendTo.appendChild(NewItemHolder);

  event.target.reset();
}

const handleDeleteEntriesButton = function (event) {
  const parentToAppendTo = document.querySelector('#pylon-list');
  parentToAppendTo.innerHTML = "";
}