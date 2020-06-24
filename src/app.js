// app.js

console.log('app.js starting');

var globalID;
const bbcon = document.querySelector("#bubble-container").getBoundingClientRect();
const nbrOfBubble = 20;
console.log("Container initial position: ");
console.log(bbcon);

class Bubble {
    constructor(bb_nbr) {
        for(let i = 0; i < bb_nbr; i++)
        {
            $("#bubble-container").append(
                "<div id=\"bubble-" + i + "\" class=\"bubble-item\" data-bbvalue=\"" + i + "\">" + i + "</div>"
            );
        }
        this.bbs = document.querySelectorAll(".bubble-item");
        this.bbs_id = Array.from(this.bbs).map( bb => { return "#" + bb.id } );
        console.log(this.bbs_id);
    }

    clickOnBubble() {
        this.bbs_id.map( id => {
            $(id).click(() => {
                    console.log(id);
                    let nbr = document.querySelector(id).dataset.bbvalue;
                    $("#log").append("<p>Bubble number: " + nbr + "; id: " + id + "</p>");
            });
        } );
    }

    buttonsController() {
        $("#start").on("click", () => { globalID = requestAnimationFrame(repeatOften); });
        $("#stop").on("click", () => { cancelAnimationFrame(globalID); });
    }
}

class Control {
    constructor() {
        this.dir = [];
        this.bbpo = [];
        for (let i = 0; i < nbrOfBubble; i++)
        {
            this.dir[i] = { x : this.Ran(-5, 5), y : this.Ran(-5, 5) };
        }
        console.log(this.dir);
    }

    //Random
    Ran(min, max) {
        // return Math.floor(Math.random() * (max - min)) + min;
        return Math.random() * (max - min) + min;
    }

    //Animation control
    bbRun(bbid, x, y) {
        let top = "+=" + y + "px";
        let left = "+=" + x + "px";
        $(bbid).css( { "top" : top, "left" : left } );
    }

    //Get bubble position
    bbPosition(bbid) {
        let bb = document.querySelector(bbid);
        let bbpo = bb.getBoundingClientRect();
        return bbpo;
    }

    newDirX(i, x, y) {
        return { x : -(this.dir[i].x), y : this.Ran(-5, 5)};
    }

    newDirY(i, x, y) {
        return { y : -(this.dir[i].y), x : this.Ran(-5, 5)};
    }

    checkPosition(i) {
        let bb = { left : this.bbpo[i].x, 
                    right : (this.bbpo[i].x + this.bbpo[i].width), 
                    top : this.bbpo[i].y, 
                    bottom : (this.bbpo[i].y + this.bbpo[i].height) };
        let con = { left : bbcon.x, 
                    right : (bbcon.x + bbcon.width), 
                    top : bbcon.y, 
                    bottom : (bbcon.y + bbcon.height) };

        if (bb.left <= con.left)
        {
            // console.log(bb.left, con.left);
            // console.log("left");
            // console.log(this.dir[i]);
            this.dir[i] = this.newDirX(i, bb.left, con.left);
            // console.log(this.dir[i]);
        }
        else if (bb.right >= con.right)
        {
            // console.log(bb.right, con.right);
            // console.log("right");
            // console.log(this.dir[i]);
            this.dir[i] = this.newDirX(i, bb.right, con.right);
            // console.log(this.dir[i]);
        }
        else if (bb.top <= con.top)
        {
            // console.log(bb.top, con.top);
            // console.log("top");
            // console.log(this.dir[i]);
            this.dir[i] = this.newDirY(i, bb.top, con.top);
            // console.log(this.dir[i]);
        }
        else if (bb.bottom >= con.bottom)
        {
            // console.log(bb.bottom, con.bottom);
            // console.log("bottom");
            // console.log(this.dir[i]);
            this.dir[i] = this.newDirY(i, bb.bottom, con.bottom);
            // console.log(this.dir[i]);
        }
    }
}

//Global function controll animation
function repeatOften() {
    for (let i = 0; i < nbrOfBubble; i++)
    {
        controller.bbRun( bubbles.bbs_id[i], controller.dir[i].x, controller.dir[i].y );
        controller.bbpo[i] = controller.bbPosition(bubbles.bbs_id[i]);
        // console.log(i + ": " + controller.bbpo[i].x + ", " + controller.bbpo[i].y);
        controller.checkPosition(i);
    }
    
    globalID = requestAnimationFrame(repeatOften);
}

//Start the application
const bubbles = new Bubble(nbrOfBubble);
const controller = new Control();
bubbles.buttonsController();
bubbles.clickOnBubble();
$("#nbr-of-bubbles").html("Number of bubble: " + nbrOfBubble);





