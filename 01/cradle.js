// Constant Declarations
const TAB = '\t';

// Variable Declarations
let Look; // Lookahead Character

// Read New Character From Input Stream
function GetChar() {
    Look = getNextChar(); // Assuming getNextChar is a function to read the next character
}

// Report an Error
function Error(s) {
    console.log('\n' + '\x07' + 'Error: ' + s + '.');
}

// Report Error and Halt
function Abort(s) {
    Error(s);
    process.exit(1);
}

// Report What Was Expected
function Expected(s) {
    Abort(s + ' Expected');
}

// Match a Specific Input Character
function Match(x) {
    if (Look === x)
        GetChar();
    else
        Expected("'" + x + "'");
}

// Recognize an Alpha Character
function IsAlpha(c) {
    return /[A-Za-z]/.test(c);
}

// Recognize a Decimal Digit
function IsDigit(c) {
    return /[0-9]/.test(c);
}

// Get an Identifier
function GetName() {
    let name;
    if (!IsAlpha(Look))
        Expected('Name');
    name = Look.toUpperCase();
    GetChar();
    return name;
}

// Get a Number
function GetNum() {
    let num;
    if (!IsDigit(Look))
        Expected('Integer');
    num = Look;
    GetChar();
    return num;
}

// Output a String with Tab
function Emit(s) {
    process.stdout.write(TAB + s);
}

// Output a String with Tab and CRLF
function EmitLn(s) {
    Emit(s);
    process.stdout.write('\n');
}

// Initialize
function Init() {
    GetChar();
}

// Main Program
Init();
