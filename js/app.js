$(document).ready(action)

function action() {
  $('.more-content').hide()
  $('.read-more').click(handler)
  function handler () {
    var buttontext = $(this).text()
    if (buttontext === "read more") {
      $(this).text('read less')
      $(this).siblings('.more-content').show()

    }
     else {
       $(this).text('read more')
       $(this).siblings('.more-content').hide()
     }

  }

}
