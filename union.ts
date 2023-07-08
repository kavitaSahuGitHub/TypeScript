var sn: string | number | boolean;

sn= 'Codemind';
sn = 7;
sn =  true

//the below line will throw run time error for 12345
//function formatCommandLine(input: any){
    function formatCommandLine(input: string | string[] ){
    let line = ' '

    if(typeof input === `string`){
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}

console.log(formatCommandLine('hello '));
console.log(formatCommandLine(['hello','world ']));
//console.log(formatCommandLine(12345));

//Type annotation
type Tests=
string | string[] | boolean | undefined |number
function newTypeAnnotation(input : Tests){

}
newTypeAnnotation(123);