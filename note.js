class Run {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log(x, y);
    }

    bbRun(bbid, x, y) {
        console.log("Hello");
        let top = "+=" + x + "px";
        let left = "+=" + y + "px";
        $(bbid).css( { "top" : top, "left" : left } );

    }
}

function bbPosition(bbid) {
    let bb = document.querySelector(bbid);
    let bbpo = bb.getBoundingClientRect();
    return { top : bbpo.top, bottom : bbpo.bottom, left : bbpo.left, right : bbpo.right };
}

const a = $("#bubble-0").css("top");
console.log("Hello");
console.log(a);
const a = document.querySelector("#bubble-container").style.top;
console.log(a);

Get cordinate of bubbles and container

let bbcon = document.querySelector("#bubble-container");
let bbconpo = bbcon.getBoundingClientRect();
console.log(bbconpo);

let bb = document.querySelector("#bubble-0");
let bbconpo2 = bb.getBoundingClientRect();
console.log(bbconpo2);

newDir(i) {
    let newDirX =  this.Ran(-5, 5);
    let newDirY =  this.Ran(-5, 5);
    let posORnegX = this.dir[i].x * newDirX;
    let posORnegY = this.dir[i].y * newDirY;
    while (posORnegX > 0 || posORnegY > 0)
    {
        newDirX = this.Ran(-5, 5);
        newDirY = this.Ran(-5, 5);
        let overstepX = this.bbpo[i].x - bbcon.x;
        let overstepY = this.bbpo[i].y - bbcon.y;
        if ()

        posORnegX = this.dir[i].x * newDirX;
        posORnegY = this.dir[i].y * newDirY;
    }
    return { x : newDirX, y : newDirY }
}

newDirX(i, x, y) {
    let overStep = Math.abs(x - y);
    let newDirX =  this.Ran(-5, 5);
    let posORneg = this.dir[i].y * newDirX;

    // while (posORneg > 0 || Math.abs(newDirX) < overStep)
    while (posORneg > 0)
    {
        newDirX = this.Ran(-5, 5);
        posORneg = this.dir[i].y * newDirX;
    }
    return { x : this.Ran(-5, 5), y : newDirX }
}

newDirY(i, x, y) {
    let overStep = Math.abs(x - y);
    let newDirY =  this.Ran(-5, 5);
    let posORneg = this.dir[i].y * newDirY;

    // while (posORneg > 0 || Math.abs(newDirY) < overStep)
    while (posORneg > 0)
    {
        newDirY = this.Ran(-5, 5);
        posORneg = this.dir[i].y * newDirY;
    }
    return { x : this.Ran(-5, 5), y : newDirY }
}