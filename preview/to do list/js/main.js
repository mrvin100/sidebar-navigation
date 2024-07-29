// Custom js File Build by jeanDoe

// declaration of variables

var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
    // alert('You have cliked on +');
    // verify if input is not empty
    if(inputField.value != ''){
        // if it's not empty, create a paragraph
        var paragraph = document.createElement('p')
    }

    // Style the paragraph tag
    paragraph.classList.add('paragraph_style');

    // Give p value with input content
    paragraph.innerText = inputField.value;

    // Insert paragraph in toDoContainer element
    toDoContainer.appendChild(paragraph);

    // Empty input when paragraph is added
    inputField.value = '';

    // overline the p tag when click on
    paragraph.addEventListener('click', function(){
        // alert('you have clicked on paragraph');
        paragraph.classList.add('paragraph_click');
    })

    // delete the task on double click

    paragraph.addEventListener('dblclick', function(){
        // alert('you have clicked on paragraph');
        toDoContainer.removeChild(paragraph);
    })
}
