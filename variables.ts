var x : number = 10;
var y : number;
alert(x);

console.log('x value is',x);

//string
var s1: string = "test mesage for string in typescript!!";
var s2: string =`my second message in typescript!! ${x}`;

console.log(s1);
console.log(s1);

//Boolean- it is for conditional stmts
var b1: boolean = true;
var b2: boolean = false;
var b3: boolean;

console.log(b1);
console.log(b2);




function test(): boolean
{
    return b3=false;
    console.log(b3);
    b3=true;
}

console.log(test());

//any-it is generic data type , if we dont know the type of the data then we can store that in any datatype
//it used when we deal with 3rd party program.

var product: any = {
    productId: 1,
    productName: "Iphone",
    ProductPrice: 12000,
    isAvailable: true
    }

    console.log(product);
    
let temp : any;
temp="test";
temp= 10;
temp=false;
console.log(temp);