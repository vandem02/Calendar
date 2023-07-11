// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const currentHour = dayjs().hour()
  const $timeBlocks = $('.time-block')
  const $saveBtn = $(".saveBtn")
  const $dayDisplay = $("#currentDay")

  var dayString
  switch(dayjs().day()) {
    case 0:
      dayString = "Sunday"
    break
    case 1:
      dayString = "Monday"
    break
    case 2:
      dayString = "Tuesday"
    break
    case 3:
      dayString = "Wednesday"
    break
    case 4:
      dayString = "Thursday"
    break
    case 5:
      dayString = "Friday"
    break
    case 6:
      dayString = "Saturday"
  }

  switch(dayjs().month()) {
    case 0:
      dayString += ", January"
    break
    case 1:
      dayString += ", February"
    break
    case 2:
      dayString += ", March"
    break
    case 3:
      dayString += ", April"
    break
    case 4:
      dayString += ", May"
    break
    case 5:
      dayString += ", June"
    break
    case 6:
      dayString += ", July"
    break
    case 7:
      dayString += ", August"
    break
    case 8:
      dayString += ", September"
    break
    case 9:
      dayString += ", October"
    break
    case 10:
      dayString += ", November"
    break
    case 11:
      dayString += ", December"
  }
  dayString += (" " + dayjs().date() + ", " + dayjs().year())
  $dayDisplay.text(dayString)
  
  $timeBlocks.each(function() {
    const key = $(this).attr('id')
    const $textArea = $(this).children('textarea')
    $textArea.val(localStorage.getItem(key))

    var hour = $(this).attr('id').split('-')[1]
    hour = (Number(hour))
    if (hour < currentHour) $(this).addClass('past')
    else if (hour === currentHour) $(this).addClass('present')
    else $(this).addClass('future')
  })
  
  $saveBtn.click(function() {
    const key = $(this).parent().attr('id')
    const value = $(this).parent().children('textarea').val()
    localStorage.setItem(key, value)
  })



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
