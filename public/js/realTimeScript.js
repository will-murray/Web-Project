
const span = 2
var inc = 4
const prev = [0,0]

function pixelsToComplex(cursor){
    var x = span*(2*cursor.clientX-window.innerWidth)/window.innerWidth;
    var y = span*(window.innerHeight-2*cursor.clientY)/window.innerHeight;
    return [x,y];
}

function randFillCanvas(){
    var canvas = document.getElementById("display");
    var ctx = canvas.getContext('2d');
    for(let i =0;i<canvas.width;i+=inc){
        for(let j = 0;j<canvas.height;j+=inc){
            ctx.fillStyle = randColor();
            ctx.fillRect(i,j,inc,inc);
        }
    }
    inc *=2;

   
}

function randColor(){
    var r = Math.floor((Math.random() * 255) + 1)
    var g = Math.floor((Math.random() * 255) + 1)
    var b = Math.floor((Math.random() * 255) + 1)
    return "rgb("+r+", "+g+", "+b+")";

}

function complexToPixels(x,y){
    var w = window.innerWidth;
    var h = window.innerHeight;

    var px = (w/2)*(x/span + 1);
    var py = ((y-span)*h)/(-2*span);
    return [parseInt(px),parseInt(py)];

}

function initCanvas(){
    var canvas = document.getElementById("display");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

function updateIcon(p){ //accepts the point p (int,int) as the position for the icon
    console.log("here");
    const canvas = document.getElementById("display");
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'white';
    ctx.fillRect(prev[0]-25,prev[1]-25,50,50);




    ctx.fillStyle = 'purple';
    ctx.fillRect(p[0]-20,p[1]-20,40,40);

    prev[0] = p[0];
    prev[1] = p[1];

}

function readMouseMove(cursor){
    var result_x = document.getElementById("xpos");
    var result_y = document.getElementById("ypos");
    var canvas = document.getElementById("display");
    
    result_x.innerHTML = cursor.clientX +", "+cursor.clientY;
    

    
    var z = pixelsToComplex(cursor);
    var icon_position = complexToPixels(-1*z[0],-1*z[1]);

    result_y.innerHTML = icon_position
    if(icon_position[0] > canvas.width){
        icon_position[0] = canvas.width;
    }
    if(icon_position[1] > canvas.height){
        icon_position[1] = canvas.height;
    }
    updateIcon(icon_position);
    

}
document.onmousemove = readMouseMove;
document.onclick = randFillCanvas;

