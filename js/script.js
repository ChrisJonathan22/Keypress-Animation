
document.addEventListener("keydown", animateKeys, false);

var colors = ["#FF0000", "#00FFFF", "#0000FF", "#0000A0", "pink", "teal", "yellow", "lime"];


function animateKeys(event){
        var keyCode = event.keyCode;
        var c = String.fromCharCode(keyCode);

        var key = document.createElement("div");
        document.body.appendChild(key);

        key.style.position = "absolute";

        var randX = Math.round(Math.random()  * window.innerWidth);
        var randY = Math.round(Math.random() * window.innerHeight);

        key.style.left = randX + "px";
        key.style.top = randY + "px";
        key.innerText = c;

        var color = colors[Math.floor(Math.random() * colors.length)];
        key.style.color = color;


        key.style.transition = "all 0.5s linear 0s";
        key.style.left = key.offsetLeft - 30 + "px";
        key.style.top = key.offsetTop - 30 + "px";
        key.style.fontSize = "100px";
        key.style.opacity = "0";


        var sound = new Audio("resources/lamb.mp3");
        sound.play();
}
