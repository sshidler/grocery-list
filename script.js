var $textInput = $("#textInput"),  
    $addButton = $("#add"),
    $clearButton = $("#clear"),
    $removeButton = $("<button class='show'>Remove</button>");

//add an item to the list
$addButton.on('click', function () {
   var item = $textInput.val();
   var listItem = $("#groceryList").append(`<li class="listItems">${item}</li>`);
  
  for (let i=0; i < listItem.length; i++) {
    $("li").append($removeButton);
   }
});

//clear text input when add button is clicked
$addButton.on("click", function(){
  $textInput.val(" ");
});

//remove the item from the list
$removeButton.on('click', function () {
  $(this).parent().remove();
}); 

//clear the list
$clearButton.on('click', function () {
 $("ul").children().remove();
});








 
  


 