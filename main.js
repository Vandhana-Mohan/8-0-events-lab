// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

let currentColor = document.getElementById('current-color');
let colors = document.querySelectorAll('.color')
colors.forEach(color => {
  color.addEventListener('click',handleClick => {
    currentColor.style.background = handleClick.target.style.background;
  })
})

let cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
  cell.addEventListener('click', handleClick => {
    cell.style.background = currentColor.style.background
  })
})

let resetButton = document.querySelector('.reset');
resetButton.addEventListener('click',handleClick => {
  cells.forEach(cell => {
    cell.style.background = 'white'
  })
})

let fill = document.querySelector('.fill');
fill.addEventListener('click',handleClick => {
  cells.forEach(cell => {
    cell.style.background = currentColor.style.background
  })
})

let erase = document.querySelector('.erase');
let singleCell = document.querySelector('.cell')
erase.addEventListener('click',handleClick => {
  singleCell.style.background = 'white'
  })