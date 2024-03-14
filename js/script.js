console.log('Campo minato');

const playDomElement = document.getElementById('play');

const containerDomElement = document.querySelector('.container');

const resetDomElement = document.getElementById('reset');



playDomElement.addEventListener('click', function(){

    containerDomElement.innerHTML = "";

    let cellElement = parseInt(document.getElementById('dificulty').value);
    let gridElement;

    let gridDomElement = document.createElement('div');
    gridDomElement.classList.add('grid','dif-' + cellElement)
    containerDomElement.append(gridDomElement)

    
    // containerDomElement.classList.add('dif-' + cellElement);
    gridElement = cellElement ** 2;
    //  resetDomElement.addEventListener('click',function(){
        
    //      containerDomElement.classList.remove('dif-' + cellElement);
    //      containerDomElement.innerHTML = "";
    //  });
    createGrid(gridElement,gridDomElement);

    generateBomb(gridElement);

})



function createGrid(totalCellsNumber,cellsContainerDomElement){
    
    for(let i = 0; i < totalCellsNumber; i++){

        let numCell = i + 1;
        console.log(i)
        let cellDomElement = document.createElement('div');
        cellDomElement.classList.add('cell');
        cellDomElement.innerHTML =`${numCell}`;
        cellsContainerDomElement.append(cellDomElement);
        cellDomElement.addEventListener('click', function(){
            cellDomElement.classList.toggle('bg-azure');
            console.log('click sulla casella :', numCell);
            
        })
    } 
}

function generateBomb(maxbomb){
    const min = 1;
    const max = maxbomb  ;
    const bombNumbers = 16;

    const bombArray =[];

    while(bombArray.length < bombNumbers ){
        const bombNumber = Math.floor(Math.random() * max) + min;

        let bombPresent = false;

        for(let i = 0; i < bombArray.length; i++){
            if(bombArray[i] === bombNumber){
                bombPresent = true
            }
        }

        if(bombPresent === false){
            bombArray.push(bombNumber);
        }
    }
    console.log(bombArray)
}




/*
    if(dificultyDomElement == '1'){
        console.log('difficile');
        containerDomElement.classList.add('dif1');

        gridElement = cellElement ** 2;
        resetDomElement.addEventListener('click',function(){
            containerDomElement.innerHTML = "";
            containerDomElement.classList.remove('dif1');
        })
        //console.log(gridElement)
    }else if(dificultyDomElement == '2'){
        console.log('medio');
        containerDomElement.classList.add('dif2');

        gridElement = cellElement ** 2;
        resetDomElement.addEventListener('click',function(){
            containerDomElement.innerHTML = "";
            containerDomElement.classList.remove('dif2');
        })
       // console.log(gridElement)
    }else{
        console.log('facile');
        containerDomElement.classList.add('dif3');
        gridElement = cellElement ** 2;
        resetDomElement.addEventListener('click',function(){
            containerDomElement.innerHTML = "";
            containerDomElement.classList.remove('dif3');
        })
        //console.log(gridElement)
    }
*/
    