let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());


//let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate)

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = Date.now()

// console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
