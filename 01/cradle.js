const readline = require('readline');

class Cradle {
  // Constant Declarations
  static TAB = '\t';

  // Variable Declarations
  static Look // Lookahead Character
  static async GetChar() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question('Please enter a value: ', (input) => {
            rl.close();
            Cradle.Look = input
            resolve(Cradle.Look);
        });
    });
}
  // Report an Error
  static Error(s) {
      console.error('\n' + '\x07' + 'Error: ' + s + '.');
  }

  // Report Error and Halt
  static Abort(s) {
      Cradle.Error(s);
      process.exit(1);
  }

  // Report What Was Expected
  static Expected(s) {
      Cradle.Abort(s + ' Expected');
  }

  // Match a Specific Input Character
  static Match(x) {
      if (Cradle.Look === x)
          Cradle.GetChar();
      else
          Cradle.Expected("'" + x + "'");
  }

  // Recognize an Alpha Character
  static IsAlpha(c) {
      return /[A-Za-z]/.test(c);
  }

  // Recognize a Decimal Digit
  static IsDigit(c) {
      return /[0-9]/.test(c);
  }

  // Get an Identifier
   async GetName() {
      let name;
      if (!Cradle.IsAlpha(Cradle.Look))
          Cradle.Expected('Name');
      name = Cradle.Look.toUpperCase();
      await Cradle.GetChar();
      return name;
  }

  // Get a Number
  static async GetNum() {
      let num;
      if (!Cradle.Look) {
        await Cradle.GetChar();
      }

      if (!Cradle.IsDigit(Cradle.Look))
          Cradle.Expected('Integer');

      console.log(Cradle.Look)
      num = Cradle.Look;
      return num;
  }

  // Output a String with Tab
  static Emit(s) {
      process.stdout.write(Cradle.TAB + s);
  }

  // Output a String with Tab and CRLF
  static EmitLn(s) {
      Cradle.Emit(s);
      process.stdout.write('\n');
  }

  // Initialize
  static async Init() {
      await Cradle.GetChar();
  }

  // Main Program
  static main() {
      Cradle.Init();
  }
}

module.exports = Cradle;
exports.Look = Cradle.Look