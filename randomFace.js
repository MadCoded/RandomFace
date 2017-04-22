function drawRandomFace() {
    var canvas = document.getElementById('circle');
    if (canvas.getContext) {

        var context = canvas.getContext("2d");


        context.fillStyle = "#" + ((1 << 24) * Math.random() | 0).toString(16);

        context.beginPath();
        context.arc(95, 85, 40, 0, 2 * Math.PI);
        context.closePath();
        context.fill();
        context.lineWidth = 3;
        context.stroke();
        context.fillStyle = "black";

        // Draw the left eye
        var eye1 = new Eye(75, 75, 2, "left");
        eye1.draw(context);
        eye1.brow(context);

        // Draw the right eye
        var eye2 = new Eye(114, 75, 2, "right");
        eye2.draw(context);
        eye2.brow(context);

        // Draw the mouth
        var mouth = new Mouth();
        mouth.draw(context);


        context.font = "30px Arial";
        context.fillText("Random Face", 15, 30);
    }
}


class Eye {
    constructor(x, y, endAngle, pos) {
        this.x = x;
        this.y = y;
        this.endAngle = endAngle;

        this.pos = pos;
    }


    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, this.endAngle * Math.PI);
        context.closePath();
        context.fill();
    }

    brow(context) {
        var emot = Math.floor((Math.random() * 15) + 5);
        context.beginPath();
        if (this.pos == "left") {
            context.moveTo(this.x - 10, this.y - 10);
            context.bezierCurveTo(this.x - 10, this.y - 10, this.x - 5, this.y - 15, this.x + 10, this.y - emot);
        } else if (this.pos == "right") {
            context.moveTo(this.x - 10, this.y - emot);
            context.bezierCurveTo(this.x - 10, this.y - emot, this.x + 5, this.y - 15, this.x + 10, this.y - 10);
        }
        context.stroke();
        console.log(this.pos);
    }
}

class Mouth {
    constructor(x, y, rad) {

    }
    draw(context) {
        context.beginPath();
        context.arc(95, 90, 26, 1 * Math.PI, 2 * Math.PI, true);
        context.closePath();
        context.fill();
    }
}

