// 1)
// passing one function as parameter to another function

// main function-which get name and function as parameter.
function name(str,addsurname){
    let s=addsurname(str);
    return s;
}
// subfunction which is passed into main function as parameter.
function addsurname(s){
    return `Ganji ${s}`;
}
console.log(name('Naveen',addsurname));


// 2)
// arrow function which returns the first letter of two parameters 
let val=(firstname,lastname) =>(firstname[0]+lastname[0]);
console.log(val('Naveen','Kumar'));

// or 
let val1=(firstname,lastname) =>(firstname.charAt(0)+lastname.charAt(0));
console.log(val1('Ganji','Naveen'));