// let scretNumber = document.querySelector(".number").textContent = Math.trunc (Math.random()*20)+1;
let scretNumber = Math.trunc (Math.random()*20)+1;
let score = 20
let highScore = 0
document.querySelector(".check").addEventListener("click",function () {
    let guess = document.querySelector(".guess").value 
    console.log(guess)
    let message = document.querySelector(".message")
    if (!guess){
        message.textContent = "No Number!!!!"
        document.querySelector(".score").textContent = --score
       
    }
    else if (guess>scretNumber && guess<20){
        message.textContent = "Too High"
        document.querySelector(".score").textContent = --score
        
    }
    else if (guess<scretNumber && guess>0){
        message.textContent = "Too Low"
        document.querySelector(".score").textContent = --score
        
    }
    else if (guess<0){
        message.textContent = "Not Content"
        document.querySelector(".score").textContent = --score
    }
    else if (guess>20){
        message.textContent = "Not Content"
        document.querySelector(".score").textContent = --score
    }
    else{
        message.textContent = "ُCongratulation"
        document.querySelector("body").style.background = "brown"
        document.querySelector(".number").textContent = scretNumber
        if (score > highScore){
            highScore = score
        }
        // score = 20
        document.querySelector(".score").textContent = score
        document.querySelector(".highscore").textContent = highScore
    }
})
document.querySelector(".again").addEventListener("click",function (){
    // document.querySelector(".guess").textContent = 0
    document.querySelector(".score").textContent = 20
    let g = document.querySelector(".guess").value = ""
    document.querySelector("body").style.background = "#222"
    document.querySelector(".number").textContent = "?"
    let scretNumber = Math.trunc (Math.random()*20)+1;
     
    let message = document.querySelector(".message").textContent = "Start guessing..."
    
    if (!g){
        message.textContent = "No Number!!!!"
        document.querySelector(".score").textContent = --score
       
    }
    else if (g>scretNumber && g<20){
        message.textContent = "Too High"
        document.querySelector(".score").textContent = --score
        
    }
    else if (g<scretNumber && g>0){
        message.textContent = "Too Low"
        document.querySelector(".score").textContent = --score
        
    }
    else{
        message.textContent = "ُCongratulation"
        document.querySelector("body").style.background = "brown"
        document.querySelector(".number").textContent = scretNumber
        if (score > highScore){
            highScore = score
        }
        // score = 20
        document.querySelector(".score").textContent = score
        document.querySelector(".highscore").textContent = highScore
    }
})