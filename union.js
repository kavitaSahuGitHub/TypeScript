var sn;
sn = 'Codemind';
sn = 7;
sn = true;
function formatCommandLine(input) {
    var line = ' ';
    if (typeof input === "string") {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
    }
    return line;
}
console.log(formatCommandLine('hello '));
console.log(formatCommandLine(['hello', 'world ']));
//console.log(formatCommandLine(12345));
