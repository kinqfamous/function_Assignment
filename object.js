// 1 BASIC OBJECT CREATION AND MANIPULATION
const student  = {
    name : '' ,
    age : 0,
    grade :0 ,
    subjects : [],
    addSubject : function(...subject){
        this.subjects.push(...subject)
        return this.subjects
    },
    removeSubject : function (subject){
    this.subjects =  this.subjects.filter( sub => sub !== subject )
       return this.subjects
    },
    displayInfo : function (){
        return `my name is ${this.name} ,i am ${this.age} years old, i am in grade ${this.grade}, i study ${this.subjects.slice(0,this.subjects.length -1)} and ${this.subjects[this.subjects.length-1]}` 
    }
}

console.log(student.addSubject(...['maths', 'English', 'computer', 'verbal']))
console.log(student.removeSubject('verbal'))
console.log(student.displayInfo(student.name ='famous', student.age= 30, student.grade = 6))
// console.log(student)

// 2 CLASS IMPLEMENTATION FOR BANK ACCOUNT 
class BankAccount{
    constructor(accountNumber, accountHolder, balance){
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }
   deposit(amount){
         this.balance += amount
         return this.balance
    }
    withdraw(amount){
        if(this.balance >= amount){
            return this.balance -= amount
        }
        else {
           return `insufficient balance`
        }
    }
    checkBalance(){
        return this.balance
    }
    transfer(amount,targetAccount){
     if (amount > this.balance){
        return `your current balance of ${this.balance} is insufficient`
     }
     if (targetAccount.accountNumber === this.accountNumber){
        return 'cannot transfer to same account'
     }
     else {
        this.balance -= amount 
        targetAccount.balance += amount
        return `your new account balance is ${this.balance}` 
     }
    }
}   
const account1 = new BankAccount(689797979, 'Famous', 20)
console.log(`Account balance after deposit:`,account1.deposit(50))
console.log(`Account balance after withdrawal:`,account1.withdraw(11))
console.log(`Your total account balance is:`, account1.checkBalance())
const newAccount = new BankAccount(28494409, 'john', 80)
// console.log(newAccount.accountNumber)
console.log(newAccount.transfer(50 , account1 ))
console.log(`original account balance:`, account1.checkBalance())
console.log(`New account balance:`, newAccount.checkBalance())

console.log(newAccount)

// INHERITANCE WITH VEHICLES 

class Vehicle{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year 
    }
    displayInfo(){
        return `i own ${this.make} ${this.model} ${this.year}`
    }
}
const vehicle = new Vehicle('Toyota', 'Camery', 2025)
console.log(vehicle)
console.log(vehicle.displayInfo())

 class car extends Vehicle{
    constructor(make, model, year, numDoors) {
        super(make, model, year)
        this.numDoors = numDoors   
    }
honk(){
    return `My new car is ${this.make} ${this.model} ${this.year} with ${this.numDoors} number doors`
}
}
const Mycar = new car('BENZ', 'C300', 2020, 4)
console.log(Mycar.honk())
class Bicycle extends Vehicle{
    constructor(make, model, year, numbGears){
        super(make, model, year,)
        this.numbGears = numbGears
    }
    ringBell(){
        return `i ride a ${this.year} ${this.model} with ${this.numbGears} gears`
    }
}

const newBicycle = new Bicycle ('Trek', 'Trek FX 3 Disc', 2023, 18)
console.log(newBicycle.ringBell())
