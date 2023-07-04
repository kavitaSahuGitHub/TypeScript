//homogenious array
var arrCourses: Array<string> = ['Angular','Node js', 'Javascript'];
console.log(arrCourses[0]);
//arrCourses.push(10); --it will not work as we created array for string type

//solution-we can make array as a any type
//hetrogenious aaray
var arrCourses2: Array<any> = ['Angular',123, 'Javascript'];

console.log(arrCourses2);

//we can create array in different ways
//14 ways 
let arr1: boolean [] = [];
let arr2: boolean[] = new Array();
let arr3: boolean[] = Array();
let arr4 = <string[]> [] ;
