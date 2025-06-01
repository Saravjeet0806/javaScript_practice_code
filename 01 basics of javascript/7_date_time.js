let mydate = new Date ()
console.log(mydate.toDateString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toUTCString())
console.log(mydate.getMonth())
console.log(mydate.setUTCHours())
console.log(typeof mydate)

let date2 = new Date(2025, 0, 1)
console.log(date2.toLocaleString())
console.log(date2.getTime())

let timestamp = Date.now()
console.log(timestamp)

newDate.toLocaleString('default', { // use it to get customized format
    weekday: "long",
    
})