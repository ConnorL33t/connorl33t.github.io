function play(xstring){
  var choices = ['rock', 'scissors','lizard','paper','spock']
  var randI = Math.floor(Math.random() * choices.length)
  var compChoice = choices[randI]
  var x = Number(xstring);
  document.getElementById('rpsls').innerHTML = compChoice;
  if(choices[x]!=compChoice){
if((compChoice=== choices[(x+1)%5]) || (compChoice === choices[(x+2)%5])){
  alert('You won!');
}else
{
  alert('you lost');
}
}
else{
 alert('you tied');
}
}