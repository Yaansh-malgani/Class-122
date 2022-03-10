X = 0;
Y = 0;
draw_circle = "";
draw_rect = "";
var SpeechRecognition = window.webkitSpeechRecognition ;
var Recognition = new SpeechRecognition();
function start() 
{
    document.getElementById("status").innerHTML = "System is listening Please speak";
    Recognition.start();
}

Recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized as - " + Content;
    if (Content == "circle") {
        X = Math.floor(Math.random() * 900);
        Y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle";
        draw_circle = "set";
    } 
    if (Content == "rectangle") {
        X = Math.floor(Math.random() * 900);
        Y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle";
        draw_rect = "set";
    }

}

function setup() {
    Canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(X, Y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if(draw_rect == "set") {
        rect(X, Y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}