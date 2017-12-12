
window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(PauseCheck,1000/15);
}

PlayerX=PlayerY=10;
GridSize=TileSize=20;
AppleX=AppleY=15;
Xvelocity=yVelocity=0;
trail=[];
tail = 5;
paused = 1;
function PauseCheck(){
 if(paused = 1) {
    game();
 }
}

function game() {
    PlayerX+=Xvelocity;
    PlayerY+=yVelocity;
    if(PlayerX<0) {
        PlayerX= TileSize-1;
    }
    if(PlayerX>TileSize-1) {
        PlayerX= 0;
    }
    if(PlayerY<0) {
        PlayerY= TileSize-1;
    }
    if(PlayerY>TileSize-1) {
        PlayerY= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);

    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*GridSize,trail[i].y*GridSize,GridSize-2,GridSize-2);
        if(trail[i].x==PlayerX && trail[i].y==PlayerY) {
            tail = 5;
        }
    }
    trail.push({x:PlayerX,y:PlayerY});
    while(trail.length>tail) {
        trail.shift();
    }

    if(AppleX==PlayerX && AppleY==PlayerY) {
        tail++;
        AppleX=Math.floor(Math.random()*TileSize);
        AppleY=Math.floor(Math.random()*TileSize);
    }
    ctx.fillStyle="red";
    ctx.fillRect(AppleX*GridSize,AppleY*GridSize,GridSize-2,GridSize-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            Xvelocity=-1;yVelocity=0;
            break;
        case 38:
            Xvelocity=0;yVelocity=-1;
            break;
        case 39:
            Xvelocity=1;yVelocity=0;
            break;
        case 40:
            Xvelocity=0;yVelocity=1;
            break;
        case 80:
            paused = 0;
            console.log("Paused");
            break;
    }
}
