function play(x){
  var choices = ['rock', 'paper', 'scissors','lizard','spock']
  var randI = Math.floor(Math.random() * choices.length)
  var compChoice = choices[randI]
  document.getElementById('rpsls').innerHTML = compChoice;
  if(x!=compChoice){

    
}else{
  alert('you tied');
}   
}