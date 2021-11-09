this;
window;
this === window;
// Window {...}
// Window {...}
// true
console.log("--------------");

// argumenst toplama islemi
// Lexical environment
function one() {
  var isValid = true; // local env
  two(); // new execution context
}
function two() {
  var isValid; // undefined
}
var isValid = false; // global
one();
/*
two() isValid = undefined
   one() isValid = true
   global() isValid = false
   ------------------------
   call stack
*/
// scope
//Function Scope
function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("final", i); // returns final 5
}
//Block Scope
function loop2() {
  for (let i = 0; i < 5; i++) {
    // can access i here
  }
  console.log("final", i); // returns an error here
}
loop();
loop2();

console.log('-----------------------');
// This