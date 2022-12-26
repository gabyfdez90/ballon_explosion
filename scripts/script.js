let balloon = document.getElementById("balloon");
let button = document.getElementById("button")
let size;
let growingRate = 1.2;

const messageList = [
    "Be careful! The balloon will explode at some point.",
    "Children love balloons, but fear explosions.",
    "Remember that you hate explosion sounds.",
    "Note how much the balloon is growing.",
    "You are a natural inflator.",
    "Maybe you could try a clown gig sometimes."
]
let message = document.getElementById("message");
message.textContent = messageList[0];


function setSize(newSize){
    size=newSize;
    balloon.style.fontSize = size + 'px';
}
setSize(20)

button.addEventListener("click", resizeBallon)

function resizeBallon(){
    if (size > 120) {
        message.textContent = "BOOM!!! Now deal with the neighbours." //no funciona
        balloon.textContent = "💥"
        button.removeEventListener("click", resizeBallon);
    }
    setSize(size*growingRate)
    message.textContent = messageList[Math.floor(Math.random() * messageList.length)]
}


