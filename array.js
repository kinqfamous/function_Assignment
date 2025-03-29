// console.log(years["2"] !== years["02"])
console.log("Hello from array.js!");

const studentNames = []
studentNames.push("joseph", "daniel", "linda")
console.log(studentNames.length)
studentNames[5] = "john"
console.log(studentNames)
console.log(Object.keys(studentNames))
console.log(studentNames[4])
studentNames.length = 2
console.log(studentNames)

//mutating and none mutating arrays 
studentNames.shift([1])
console.log(studentNames)

studentNames.push("david", "goodluck", "mathew")

console.log(studentNames)

const sliceName = studentNames.slice(1)
console.log(sliceName)
// studentNames.splice(1)
studentNames.copyWithin(0,2,3)
// console.log(studentNames)
console.log(studentNames)