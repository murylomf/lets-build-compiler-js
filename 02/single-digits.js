const { GetNum, Init, EmitLn, Match, Expected, GetChar } = require('../01/cradle.js');


// async function Expression() {
//   num = await GetNum();
//   console.log('MOVE #' + num + ',D0');
// }

// Parse and Translate an Expression
function Expression() {
  Term();
  EmitLn('MOVE D0,D1');
  GetChar().then((Look) => {
    console.log(Look)
    if (Look.includes('+'))
      Add();

    else if (Look.includes('-'))
      Subtract();

      else Expected('operator');
  });


}

// Recognize and Translate an Add
function Add() {
  Term();
  EmitLn('ADD D1,D0');
}

// Recognize and Translate a Subtract
function Subtract() {
  Term();
  EmitLn('SUB D1,D0');
}

function Term() {

}

Expression()
