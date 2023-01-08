// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var buttons = $(".saveBtn")

//selects the correct textarea element to save to local storage
function saveItem (event){
    console.log(event.currentTarget)
    var buttonclicked = event.currentTarget;
    var textArea = $(buttonclicked).siblings("textarea")
    console.log(textArea)
    var texttoSave = textArea.val()
    console.log(texttoSave)
    localStorage.setItem(textArea.attr("id"), texttoSave)
}

//creates a button for every save button
console.log(buttons)
buttons.on('click', saveItem )
for(i=9; i<18; i++){
    $("#"+i+"text").val(localStorage.getItem(i+"text"))
}

//adds classes depending on the current time for past present and future
    var currentHour = dayjs().format('H');
    for(i=9; i<18; i++){
        if(currentHour == i){
            $("#"+i+"text").addClass("present")
        }
        if(currentHour > i){
            $("#"+i+"text").addClass("past")
        }
        if(currentHour < i){
            $("#"+i+"text").addClass("future")
        }
    }
    

  var today = $('#currentDay')
  function displayTime() {
    var day = dayjs().format('dddd MMM D[,] YYYY');
    today.text(day);
  }
  displayTime();
  