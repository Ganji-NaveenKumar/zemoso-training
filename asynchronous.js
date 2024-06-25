
// // promise
function getData(uId) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
            }, 4000);
    });
}
console.log("start");
getData("ski").then((email)=>{
    console.log("Email id of the user id is: "+email);
}).catch((error)=>{console.log('error is :'+error)});

console.log("end");

// // with async-await
// console.log("start");
// async function display(){
// var email = await getData("skc");
// console.log("Email id of the user id is: " + email);
// }
// display();
// console.log("end");
// // 


// give statement
// without asynchronous
function getData1(uId) {
    setTimeout(() => {
    console.log("Fetched the data!");
    return "skc@gmail.com";
    }, 4000);
}
    
console.log("start");
var email = getData1("skc");
console.log("Email id of the user id is: " + email);
console.log("end");