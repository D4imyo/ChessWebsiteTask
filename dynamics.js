
// function to remove dots
const removeDots = () => {
    document.querySelectorAll('.dot').forEach(item => {
        item.remove()
    })
}

// function to create dots
const createElement = (row, col) => {

    const createdElement = document.createElement('div');

    document.querySelector('.main-board').appendChild(createdElement);
    createdElement.className = `square-${col}${row} dot peace`;

    return createdElement;
}

document.querySelectorAll('.peace').forEach(item => {
    item.addEventListener('click', (e) => {

        removeDots();
        
        const move = (x, y, distance, type) => {
            const position = element.classList[1].split('-');
            let row = position[1][1];
            let col = position[1][0];
            
            let new_row = parseInt(row) + x;
            
            let break_ = true;

            if(!!document.querySelectorAll(`.square-${col}${new_row}`)){
                for(let i =1; i <= distance; i++){
                    
                    console.log(col)
                    // new position
                    row = parseInt(row) + x;
                    col = parseInt(col) + y;
                    
                    let attackable = false;
                    
                    // check if we hit borders
                    if(col > 8 || col <= 0 || row <= 0 || row > 8){
                        break
                    }
                    
                    // Deside if we hit any piece
                    if(document.querySelector(`.square-${col}${row}`)){

                        const target = document.querySelector(`.square-${col}${row}`);
                        const diffPiece = target.classList[2][0] != type[0];

                        if((diffPiece && type[2] != 'p') || (diffPiece && (type[2] === 'p' && y != 0))){
                            attackable = true;
                            break_ = false;
                        }
                        console.log(type[2], col)
                        if(break_){
                            break;
                        }
                    }else if(type[2] === 'p' && y != 0){
                        break;
                    }
                    
                    // Create dots
                    createdElement = createElement(row, col);
                    
                    // if we hit enemy's piece, make it attackable
                    if (attackable){
                        createdElement.classList.add('attackable')
                        break;
                    }
                }
            }

            // if dot is clicked, move the piece to the dot's position
            document.querySelectorAll('.dot').forEach(item => {
                item.addEventListener('click', (e)=>{
                    const selectedDot = e.target;
                    const toPosition = selectedDot.classList[0];

                    // if the dot that's beign clicked is attackable, delete the enemy's piece
                    if(item.classList.contains('attackable')){
                        document.querySelectorAll(`.${toPosition}`).forEach(item_ => {
                            if(item_.classList[2][0] != type[0] || item_.classList.containes('attackable')){
                                item_.remove()
                            }
                        })
                    }
                    
                    // move the piece to the targeted position
                    element.className = `peace ${toPosition} ${type}`;

                    // simply remove dots
                    removeDots();
            })
            })
        }

        const element = e.target;
        const type = element.classList[2].split('-')[1];
        const color = element.classList[2].split('-')[0];
        const currPosition = element.classList[1].split('-')[1];

        let nav = 0;

        // determine directions
        if(color === 'b'){
            nav = 1;
        }
        else{
            nav = -1;
        }
        
        const pieceType = `${color}-${type}`
        
        if (type === 'p'){
            let moves = 0;
            if((currPosition[1] == 7 && color === 'b') || (currPosition[1] == 2 && color === 'w')){
                moves = 2
            }else{
                moves = 1
            }

            move(nav * -1, nav * 0, moves, pieceType)
            move(nav * -1, nav * 1, moves, pieceType)
            move(nav * -1, nav * -1, moves, pieceType)
        }
        else if(type === 'r'){
            move(nav * -1,nav * 0, 8, pieceType)
            move(nav * 0, nav * 1, 8, pieceType)
            move(nav * 0, nav * -1, 8, pieceType)
            move(nav * 1, nav * 0, 8, pieceType)
        }
        else if(type === 'b'){
            move(nav * -1, nav * 1, 8, pieceType)
            move(nav * 1, nav * -1, 8, pieceType)
            move(nav * 1, nav * 1, 8, pieceType)
            move(nav * -1, nav * -1, 8, pieceType)
        }
        else if(type === 'q'){
            move(nav *-1,nav * 1, 8, pieceType)
            move(nav *1, nav *-1, 8, pieceType)
            move(nav *1, nav *1, 8, pieceType)
            move(nav *-1,nav * -1, 8, pieceType)

            move(nav * -1,nav * 0, 8, pieceType)
            move(nav *0,nav *1, 8, pieceType)
            move(nav *0,nav *-1, 8, pieceType)
            move(nav *1,nav *0, 8, pieceType)
        }
        else if(type === 'k'){
            move(nav * -1,nav * 0, 1, pieceType)
            move(nav * -1,nav * -1, 1, pieceType)
            move(nav * 1,nav * 1, 1, pieceType)
            move(nav * 1,nav * 0, 1, pieceType)
            move(nav * 0,nav * -1, 1, pieceType)
            move(nav * 0, nav *1, 1,pieceType)
            move(nav * -1, nav *1, 1, pieceType)
            move(nav * 1, nav *-1, 1, pieceType)

        }
        else if(type === 'n'){
            move(nav * -2,nav * 1, 1, pieceType)
            move(nav * -2,nav * -1, 1, pieceType)
            move(nav * 2,nav *1, 1, pieceType)
            move(nav * 2,nav *-1, 1, pieceType)

            move(nav * 1,nav * -2, 1, pieceType)
            move(nav * -1,nav * -2, 1, pieceType)
            move(nav * 1,nav *2, 1, pieceType)
            move(nav * -1,nav *2, 1, pieceType)
            
        }
    })
})
