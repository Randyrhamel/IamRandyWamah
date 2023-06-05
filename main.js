function activateButton(button) {
    // Remove the "active" class from all buttons
    var buttons = document.getElementsByClassName('nav_button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    
    // Add the "active" class to the clicked button
    button.classList.add('active');
  }
  