const dino = document.querySelector(".dino");
const cactus =  document.querySelector(".cactus");

let nmb = document.querySelector('.counter');
let counter = 0;

function render(){
    nmb.innerHTML = counter;
    counter += 1;
}

function clrInt(){
    counter = 0;
}


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        cactus.classList.add('active');
        let setInt = setInterval(function(){
            render();
        },10)
    } 
  })

document.addEventListener("keydown", function(event){
    jump();
    
});



function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    }
    setTimeout(function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval (function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        let result = confirm("GAME OVER! SCORE: " + counter);
        cactus.classList.remove('active');
        if (result == true){
            clrInt();
            clearInterval(setInt);
        }  
    } 
},10)

