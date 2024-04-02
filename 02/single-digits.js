const { GetNum, Init } = require('../01/cradle.js');


async function Expression() {
  num = await GetNum();
  console.log('MOVE #' + num + ',D0');
}

Init().then(Expression)
