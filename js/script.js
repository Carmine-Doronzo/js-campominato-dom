console.log('Campo minato');

const playDomElement = document.getElementById('play');

const containerDomElement = document.querySelector('.container');

const resetDomElement = document.getElementById('reset');

let bombPosition = [];

let points = 0;

let gameOver = false;

playDomElement.addEventListener('click', function(){
    
    points = 0;

    gameOver = false;

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

    

    

    

})



function createGrid(totalCellsNumber,cellsContainerDomElement){

    bombPosition = generateBomb(totalCellsNumber);
    console.log(bombPosition)
    
    for(let i = 0; i < totalCellsNumber; i++){


        let numCell = i + 1;
        //console.log(i)
        let cellDomElement = document.createElement('div');
        cellDomElement.classList.add('cell');
        cellDomElement.innerHTML =`${numCell}`;
        cellsContainerDomElement.append(cellDomElement);

        cellDomElement.addEventListener('click', function(){

            if (gameOver === false) {
                cellDomElement.classList.add('bg-azure','disable');
                console.log('click sulla casella :', numCell);
                
                if(bombPosition.includes(numCell)){
                    cellDomElement.classList.add('bg-red')
                    console.log('boom')
                    console.log('game over')
                    console.log('hai totalizzato',points)
                    containerDomElement.innerHTML += `<h1>hai totalizzato : ${points} punti.`
                    gameOver = true;
                    
                    
                }else{
                    points++
                    console.log(points)
                }
            }
            
            


           
           
            
        })

        
    } 
    
    
}

/*
function test () {

}

document.getElementById('testEl').addEventListener('click', test);
// ...
document.getElementById('testEl').removeEventListener('click', test);
*/

function generateBomb(maxbomb){
    const max = maxbomb;
    const bombNumbers = 16;

    const bombArray =[];

    while(bombArray.length < bombNumbers){
        const bombNumber = Math.floor(Math.random() * max);

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

    

    return bombArray;
}

function unmaskedBoom(bomb)



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
    