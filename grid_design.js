// Set strict mode
  (function() {
    'use strict';

  // Select color input
  const $colorPicker = document.getElementById("colorPicker");

  // Select size input
  const $sizePicker = document.getElementById("sizePicker");

  // Set table
  const $table = document.getElementById("pixelCanvas");

  // Add eventListener for grid
  $sizePicker.addEventListener('submit', function() {
    event.preventDefault();
    let height = document.getElementById("inputHeight").value;
    let width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
  })

  // Draw grid
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let xRow = 0; xRow < width; xRow++) {
      let newxRow = $table.insertRow();
        for (let yCol= 0; yCol < height; yCol++ ) {
          let newSquare = newxRow.insertCell();
          newSquare.onclick = changeColor;
        }
    }
  }

  // change square color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }

})();
