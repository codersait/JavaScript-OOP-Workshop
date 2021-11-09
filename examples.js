function bigBrother() {
  function littleBrother() {
    return 'it is me!';
  }
  return littleBrother();
  function littleBrother() {
    return 'no me!';
  }
}

// Before running this code, what do you think the output is?
bigBrother();
console.log(bigBrother());
console.log('-----------------------');
function sayMyName() {
  return findName();
}

function findName() {
  return printName();
}

function printName() {
  return 'Sait Ibrahim'
}

sayMyName()

console.log('--------------------');
const array = [1, 2, 3];

function getMaxNumber(arr) {
  //code here  
}

getMaxNumber(array) // should return 3

console.log('------------------------');

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't