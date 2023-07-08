console.log("Hello");
alert("Hello");
function newConfirm(test?: string){

}
newConfirm();
//to make optional parameter we can use ?
confirm("Do u really want to do this?");
var data=prompt("Please enter your name");
console.log(`Entered name`,data);

//unknown- data type: 

let value: unknown;
/*
value= true;
value = [];
value = Math.random;
value = null;
value= undefined;
*/
//unknown ko any ya unknown pe hi assign kar sakte hain both are same
//let value1 : unknown = value;
//let value2 : any = value;

//below will give compile time error
//let value3 : boolean = value;
//let value4 : number = value:
//let value5 : string = value;
//let value6 : object = value;
//let value7 : any[] = value;

function loadString(): any {
  //  return ` some string `;
  return 123;
    }
    
    function loadNumber(): any {
        return 123.456;
    }
    
    //let someVariable : any;
    let someVariable : unknown;
   // someVariable = loadString();

if(typeof someVariable == 'string') 
{
    console.log(someVariable.trim());
}
    someVariable= loadNumber();
//tofix is for round the number
if(typeof someVariable == 'number')
{
    console.log(someVariable.toFixed(2));
}