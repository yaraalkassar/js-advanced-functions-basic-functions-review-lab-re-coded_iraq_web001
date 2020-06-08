// Your code here
function saturdayFun(activity="roller-skate") {
console.log(`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
console.log(`This Monday, I will ${activity}!`);
}

function wrapAdjective(character="*") {
return function(adj="special"){
  return(`You are ${character}${adj}${character}!`)
}
}
wrapAdjective("%")("a dedicated programmer");
