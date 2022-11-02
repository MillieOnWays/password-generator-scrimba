const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let passwordOneEl = document.getElementById("password-el-one")
let passwordTwoEl = document.getElementById("password-el-two")  


function getRandomCharacter(){
    let randomCharacter = Math.floor(Math.random()*characters.length)
    return characters[randomCharacter]
}

function generatePassword(){
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()      
    }
    return randomPassword
} 


function getPassword(){
   passwordOneEl.textContent = generatePassword()
   passwordTwoEl.textContent = generatePassword()
}
        
 function toggleDarkMode(){
   let element = document.body
   element.classList.toggle("dark-mode")
 }       