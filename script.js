const gridCont = document.querySelector('.gridCont');
let gridSize = 64;
let gridWidthHeight = 41;
const gridCreate = document.querySelector('#createGrid');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

gridCreate.addEventListener('click', () =>{
    gridCont.innerHTML= ""
    gridSize = prompt("choose gridsize 1-100")
    if(gridSize > 100){
        gridSize = prompt("choose gridsize 1-100");
    }
    else{
    createGrid(gridSize);
    };
});


function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown) return
    else {
        e.target.style.backgroundColor = 'black';
    }
}


function createGrid(gridSize){
    const grid = document.createElement('div');
    grid.ondragstart = () => {
        return false;
      };
    grid.className = 'grid'
    for (let i = 0; i < gridSize; i++){
        const column = document.createElement('div');
        column.className = 'column';
        for (let j = 0; j < gridSize; j++){
            const cell = document.createElement('div');
            cell.className = 'cell' ;
            cell.style.width  = `${gridWidthHeight / gridSize}rem`;
            cell.style.height = `${gridWidthHeight / gridSize}rem`;
            cell.textContent = "";
            column.appendChild(cell);
            cell.addEventListener('mouseover', changeColor);
            cell.addEventListener('mousedown', changeColor);
        }
        grid.appendChild(column);
    }
    gridCont.appendChild(grid);  
}