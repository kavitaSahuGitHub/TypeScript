enum Gender {
    Male,
    Female
}
//retrive value from 
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);

class Test {
    static nameTest: string = "tests"
}

enum Weekdays{
    Saturday = 6,
    Sunday = 7
}

console.log(Weekdays.Saturday);
console.log(Weekdays.Sunday)
//console.log(Weekdays[0]);
//console.log(Weekdays[1]);

console.log(Weekdays[6]);
console.log(Weekdays[7]);