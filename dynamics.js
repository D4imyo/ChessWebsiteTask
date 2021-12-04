const removeDots = () => {
    document.querySelectorAll('.dot').forEach(item => {
        item.remove()
    })
}

document.querySelectorAll('.peace').forEach(item => {
    item.addEventListener('click', (e) => {

        removeDots();
        
        const move = (x, y, distance, element, type) => {
            const position = element.classList[1].split('-');
            let row = position[1][1];
            let col = position[1][0];
            
            let new_row = parseInt(row) + x;
            
            let break_ = true;

            if(!!document.querySelectorAll(`.square-${col}${new_row}`)){
                for(let i =1; i <= distance; i++){
                    row = parseInt(row) + x;
                    col = parseInt(col) + y;
                    let attackable = false;
                    
                    if(col > 8 || col <= 0 || row <= 0 || row > 8){
                        
                        break
                    }
                    
                    if(document.querySelector(`.square-${col}${row}`)){
                        if(document.querySelector(`.square-${col}${row}`).classList[2][0] != type[0]){
                            attackable = true;
                            break_ = false;
                        }
                        if(break_){
                            break;
                        }
                    }
                    const createdElement = document.createElement('div');
                    
                    document.querySelector('.main-board').appendChild(createdElement)
                    
                    createdElement.className = `square-${col}${row} dot peace`
                    
                    if (attackable){
                        createdElement.classList.add('attackable')
                        break;
                    }
                }
            }
            document.querySelectorAll('.dot').forEach(item => {
                item.addEventListener('click', (e)=>{
                    const selectedDot = e.target;
    
                    const toPosition = selectedDot.classList[0];
                    if(item.classList.contains('attackable')){
                        document.querySelectorAll(`.${toPosition}`).forEach(item => {
                            console.log(item, 'removed')
                            item.remove()
                        })
                        slee
                    }
                    console.log(position)
                    
                    element.className = `peace ${toPosition} ${type}`;
                    
                    removeDots();
            })
            })
        }

        const element = e.target;
        const type = element.classList[2].split('-')[1];
        const color = element.classList[2].split('-')[0];

        let nav = 0;
        let counter = 2;

        if(color === 'b'){
            nav = 1;
        }
        else{
            nav = -1;
        }
        
        const pieceType = `${color}-${type}`
        
        if (type === 'p'){
            move(nav * -1, nav * 0, counter, element, pieceType)
        }
        else if(type === 'r'){
            move(nav * -1, nav * 0, 8, element, pieceType)
            move(nav * 0, nav * 1, 8, element, pieceType)
            move(nav * 0, nav * -1, 8, element, pieceType)
            move(nav * 1, nav * 0, 8, element, pieceType)
        }
        else if(type === 'b'){
            move(nav * -1, nav * 1, 8, element, pieceType)
            move(nav * 1, nav * -1, 8, element, pieceType)
            move(nav * 1, nav * 1, 8, element, pieceType)
            move(nav * -1, nav * -1, 8, element, pieceType)
        }
        else if(type === 'q'){
            move(nav *-1,nav * 1, 8, element, pieceType)
            move(nav *1, nav *-1, 8, element, pieceType)
            move(nav *1, nav *1, 8, element, pieceType)
            move(nav *-1,nav * -1, 8, element, pieceType)

            move(nav *-1,nav * 0, 8, element, pieceType)
            move(nav *0,nav *1, 8, element, pieceType)
            move(nav *0,nav *-1, 8, element, pieceType)
            move(nav *1,nav *0, 8, element, pieceType)
        }
        else if(type === 'k'){
            move(nav * -1,nav * 0, 1, element, pieceType)
            move(nav * -1,nav * -1, 1, element, pieceType)
            move(nav * 1,nav * 1, 1, element, pieceType)
            move(nav * 1,nav * 0, 1, element, pieceType)
            move(nav * 0,nav * -1, 1, element, pieceType)
            move(nav * 0, nav *1, 1,element, pieceType)
            move(nav * -1, nav *1, 1, element, pieceType)
            move(nav * 1, nav *-1, 1, element, pieceType)

        }
        else if(type === 'n'){
            move(nav * -2,nav * 1, 1, element, pieceType)
            move(nav * -2,nav * -1, 1, element, pieceType)
            move(nav * 2,nav *1, 1, element, pieceType)
            move(nav * 2,nav *-1, 1, element, pieceType)
            
        }
    })
})