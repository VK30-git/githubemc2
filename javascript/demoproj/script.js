// select popup-box , popup-overlay and button
var popupoverlay= document.querySelector('.popup-overlay');
var popupbox= document.querySelector('.popup-box');
var button= document.getElementById("add-popup-button");
// add event listener to button
button.addEventListener('click', function() {
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
});

//select cancel button
var cancelButton = document.getElementById('cancel-popup');
// add event listener to cancel button
cancelButton.addEventListener('click', function() {
    event.preventDefault();
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
});


//select overall container,add-book,book-title,book-author,book-description
var container = document.querySelector('.container');
var addbook=document.getElementById('addbook');
var booktitleinput=document.getElementById('book-title-input');
var bookauthorinput=document.getElementById('book-author-input');
var bookdescriptioninput=document.getElementById('book-description-input');

addbook.addEventListener('click', function(event) {
    event.preventDefault();
    var div= document.createElement('div');
    div.setAttribute('class', 'book-container mt-10 bg-white p-4 shadow-md rounded-lg align-top')
    div.innerHTML=`<h1 class="text-xl font-semibold">${booktitleinput.value}</h1>
      <h5 class="text-sm text-gray-600">${bookauthorinput.value}</h5>
      <p class="mt-2">${bookdescriptioninput.value}</p>
      <button onclick="deletebk(event)" class="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>`
    container.append(div)
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
});

function deletebk(event) {
    event.target.parentElement.remove();
}