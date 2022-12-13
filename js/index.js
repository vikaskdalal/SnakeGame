let direction = {x: 0, y: 0};

let speed = 2;
let lastPaintTime  = 0;

function main(ctime){
    console.log(ctime);
    window.requestAnimationFrame(main);
 
    if((ctime-lastPaintTime)/1000 < 1/speed)
        return;
    
    lastPaintTime = ctime;
    
}


window.requestAnimationFrame(main);