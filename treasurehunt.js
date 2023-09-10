const treasure = () => {
    return alert("Here is the function!")
  }
  alert("I am connected")
  
 

var bombLocation = Math.floor(Math.random()*9)
var treasureLocation = Math.floor(Math.random()*9) 
const changeToEmoji = (placeholder) => {
    if(placeholder === treasureLocation){
    document.getElementById(treasureLocation).innerHTML = "💰"
  } else if(placeholder === bombLocation){
    document.getElementById(bombLocation).innerHTML = "💣"
  } else {
    document.getElementById(placeholder).innerHTML = "🌴"
  }
}

