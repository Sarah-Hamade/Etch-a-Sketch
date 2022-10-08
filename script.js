// Define variables
const container = document.querySelector('#container');
let color = 'black';

// Create grid
function grid(gridSize) {
  let wide = 480/gridSize + 'px';

  for(let i = 1; i <= gridSize * gridSize; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${wide})`,
    container.style.gridTemplateRows = `repeat(${gridSize}, ${wide})`,
    box.addEventListener('mouseover', mouseOver);
  }  
}
grid(16);


// Functions

// Function for mouseover effect
function mouseOver() {
  if (color == 'white'){
    this.style.backgroundColor = 'white';
  } else if (color == 'black') {
    this.style.backgroundColor = 'black';
  } else if (color == 'rgb') {
    let r = Math.floor(Math.random()*(256));
    let g = Math.floor(Math.random()*(256));
    let b = Math.floor(Math.random()*(256));
    this.style.backgroundColor = ('rgb'+'(' +r+ ',' +g+ ',' +b+ ')');
  }
}

// Function to reset grid 
function clearGrid() {
  let boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.style.backgroundColor = 'white';
  });
}

// Reset the grid to original status
function resetGrid(){
  while(container.firstChild){
      container.removeChild(container.firstChild);
  }
}


// EventListener

// Add eventListener for grid size buttons
let gridSize = document.querySelectorAll('.buttons button');
[].forEach.call(gridSize, (button) => {
  button.addEventListener('click', function() {
    resetGrid();
    grid(button.id);
  });
});

//Add eventListener to clear the grid
let clear = document.querySelector('#reset');
reset.addEventListener('click', () => {
  clearGrid();
  color = 'black';

});

// Add eventListener to erase grid
let erase = document.querySelector('#white');
erase.addEventListener('click', () => {
  color = 'white';
})


// Add eventListener to color
let black = document.querySelector('#black');
black.addEventListener('click', () => {
  color = 'black';
})

// Add eventListener for random color
let rgb = document.querySelector('#rgb');
rgb.addEventListener('click', () => {
  color = 'rgb';
})

// Add eventListener for grid size [1 < x <= 100]
let size = document.querySelector('#gridSize')
size.addEventListener('click', () => {
 let Size = prompt('grid size');
 if (Size <= 1) {
  size.textContent = 'Grid to big! Try again!';
  grid(16);
 } else if (Size > 100) {
  size.textContent = 'Grid to small! Try again!';
  grid(16);
 } else {
  grid(Size);
 }
})