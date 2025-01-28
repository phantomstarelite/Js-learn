// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof Date);

// let myCreateDate = new Date(2024, 0, 23)
// let myCreateDate = new Date(2023, 0, 23, 5, 3)
let myCreateDate = new Date("01-28-2025")
// console.log(myCreateDate.toLocaleDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());


// `{newDate.getDay()} and time is {}`

newDate.toLocaleDateString('default', {
    weekday:"long",
})