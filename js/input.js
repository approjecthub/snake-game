const inputDirection = {x:0, y:1}
let prevInputDirection = ''

window.addEventListener('keydown', e=>{
    switch(e.key){
        case 'ArrowUp':
            if(prevInputDirection==='down')break
            inputDirection.x = -1
            inputDirection.y = 0
            prevInputDirection = 'up'
            break
        case 'ArrowDown':
            if(prevInputDirection==='up')break
            inputDirection.x = 1
            inputDirection.y = 0
            prevInputDirection = 'down'
            break
        case 'ArrowLeft':
            if(prevInputDirection==='right')break
            inputDirection.x = 0
            inputDirection.y = -1
            prevInputDirection = 'left'
            break
        case 'ArrowRight':
            if(prevInputDirection==='left')break
            inputDirection.x = 0
            inputDirection.y = 1
            prevInputDirection = 'right'
            break
        
        
    }
})

export function getDirection(){
    return {...inputDirection}
}
