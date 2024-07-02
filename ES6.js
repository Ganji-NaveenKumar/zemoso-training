const printName2 = (name) => {
    return 'hi' + name;
}
console.log(printName2('naveen'))

// signle line-- arrow function
const printName=(name)=> 'Hi '+name;
console.log(printName('naveen'));
// or
const printName1=(name)=>console.log('Hi '+name);
printName1('Revi');

// sample code
const printBill = (name, bill) => {
    return 'Hi' + name + ', please pay:' + bill;
}

// with template literals ${varibale_name}
const printBill1=(name,bill)=>{ return `hi ${name},please pay: ${bill}`};
console.log(printBill1('naveen',569));


//sample code
// const person = {
//     name: 'Noam Chomsky',
//     age: 92
// }
// let name = person.name;
// let age = person.age;
// console.log(name);
// console.log(age);
// destructing object
const person1 = {
    name: 'Noam Chomsky',
    age: 92
}
let {name,age}=person1;
console.log(name);
console.log(age);
