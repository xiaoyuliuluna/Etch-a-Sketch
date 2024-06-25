document.addEventListener('DOMContentLoaded',() => {
    const container = document.getElementById('gridContainer');
    const resizeButton = document.getElementById('resizeButton');

    function createGrid(squaresPerSide){
        container.innerHTML='';// clear the existing grid;
        const squareSize=640 / squaresPerSide;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;

            square.addEventListener('mouseenter',()=>{
                square.classList.add('hovered');
            })
            square.addEventListener('mouseleave',()=>{
                square.classList.remove('hovered');
            })
            container.appendChild(square);
        }
    }

createGrid(16);

resizeButton.addEventListener('click',()=>{
    let squaresPerSide = prompt('Enter the number of squares per side (1 - 100):',16);
    squaresPerSide = parseInt(squaresPerSide);
    if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100){
        alert('Invalid Input! Please enter a number between 1 and 100.');
        return;
    }

    createGrid(squaresPerSide);
    });
});