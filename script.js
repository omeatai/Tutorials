let cells = document.getElementsByClassName("cell");
console.log(cells[1]);
cells[2].innerHTML = "my New Mango";
cells[2].style.fontWeight = 700;

for(let i = 0; i < cells.length; i++){
  cells[i].style.backgroundColor = "f4f4f4";
}
