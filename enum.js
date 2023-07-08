var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
//retrive value from 
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.nameTest = "tests";
    return Test;
}());
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
    Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
})(Weekdays || (Weekdays = {}));
console.log(Weekdays.Saturday);
console.log(Weekdays.Sunday);
//console.log(Weekdays[0]);
//console.log(Weekdays[1]);
console.log(Weekdays[6]);
console.log(Weekdays[7]);
