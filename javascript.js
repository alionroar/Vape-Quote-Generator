var adjective = ['sad :(','good...','great!'];
var noun = ['Hey','Hi','Yo'];
var verb = ['doing','swimming','coding'];
var diyQuote = [(noun + verb + adjective)];
var quotes = [
  'Hey you, no cofeve 2day',
  'Better late than beaver',
  'You need relationship advice',
  'Don\'t let bad people get in the way of cheese toasties',
  'Romance are over rated. Too many romans in an Australiasian world',
  'I am insecure about your shoes',
  'Don\'t say \'I don\'t mind \' when you go on a date',
  'Music is my life',
  'I need relationship advice',
  'Fuck',
  'Hello World',
  'Give me money',
  'I love yourself',
  'How does you wek the spek'
];

console.log("This is working");

function randomNumber (arr){
  return Math.floor(Math.random()*(arr.length));
}
function newQuote(){
  console.log("Hello")
  diyQuote = ''+noun[randomNumber(noun)]+' '+verb[randomNumber(verb)]+' '+adjective[randomNumber(adjective)]+'';
  document.getElementById("quoteDisplay").innerHTML = diyQuote;
}
function checkIfSame(word, arr) {
  return arr.filter(function(v) {
    return (v === word);
  }).length;
}
function addAdjective(){
  const value = document.getElementById("adjective").value;
  console.log(value);
  if (value === ""){
    return
  }
  if (checkIfSame(value, adjective)) {
    console.log('value is the same', value);
  } else {
    adjective.push(value);
    console.log('value is not the same', adjective, value);
  }
}

function addVerb(){
  const value = document.getElementById("verb").value;
  console.log('value on enter', value);
  if (value === ""){
    return
  }
  if (checkIfSame(value, verb)) {
    console.log('value is the same', value);
  } else {
    verb.push(value);
    console.log('value is not the same', verb, value);
  }
}
function addNoun(){
  const value = document.getElementById("noun").value;
  console.log(value);
  if (value === ""){
    return
  }
  if (checkIfSame(value, noun)) {
    console.log('value is the same', value);
  } else {
    noun.push(value);
    console.log('value is not the same', noun, value);
  }

}
