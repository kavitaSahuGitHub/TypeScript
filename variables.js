"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
/*var x : number = 10;
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

*/
var utils_1 = require("./utils");
console.log((0, utils_1.isPalindrom)('madam'));
console.log((0, utils_1.isPalindrom)('madan'));
var calculator_1 = require("./calculator");
console.log((0, calculator_1.Add)(12, 22));
console.log((0, calculator_1.Sub)(22, 1));
console.log((0, calculator_1.div)(44, 1));
console.log((0, calculator_1.Mul)(12, 12));
var student = /** @class */ (function () {
    function student() {
    }
    return student;
}());
var objStudent = new student();
//objStudent.UserName="Kavita sahu";
//static
var Check = exports.Check = /** @class */ (function () {
    function Check(customerName, actNumber) {
        this.customerName = customerName;
        this.actNumber = actNumber;
    }
    Check.prototype.display = function () {
        console.log(Check.bankName);
    };
    Check.bankName = "SBI";
    return Check;
}());
//object
var check = new Check("test", 213);
Check.bankName = "BOA";
check.display();
