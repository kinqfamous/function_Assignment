// 1 REVERSE STRING 
// write a function reverseString(str) that takes a string and returns it reversed 
function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString("name"))


// 2 COUNT VOWELS IN A STRING 
// write a function that return the number of vowels in a given string 

function countVowels(str){
    let vowels = "aeiou";
    return str.toLowerCase().includes(vowels)
}

console.log(countVowels("java"))

// 3 CHECK IF A STRING IS A PALINDROME

function isPalindrome(str){
    str = str.toLowerCase()
    const regex = /[a-z0-9]/ig
    const reversed = str.split('').reverse().join('')
    return str.match(regex).join('') === reversed.match(regex).join('')
}
console.log('is this Palindrome', isPalindrome("madam"))

// 4 SUM OF DIGITS

function sumOfDigits(num){
    let numArray = num.toString().split('')
    return numArray.reduce((acc, curr) => acc + Number(curr), 0)
}
console.log(sumOfDigits(12345))

// 5 CHECK IF NUMBER IS A PRIME NUMBER 
function isPrime(num){
    if (num <= 1) return false
    if (num == 2) return true 
    for (let count = 2; count < num; count++){
       return num % count === 0 ? false : true 
    }
}

console.log('check prime ', isPrime(2))
console.log('check prime ', isPrime(8))
console.log('check prime ', isPrime(9))

// 6 FIND THE MOST FREQUENT CHARACTER
 function mostFrequentChar(str){
    let character = [...str].filter((char, index) => str.indexOf(char) !== index);
    return character.join('')
 }


 console.log('the most frequent character is ', mostFrequentChar('javascript'))
// 7 find Maximum Number in an Array
function findMax(arr){
    const arrayCheck = Array.isArray(arr) ? arr : String(arr).split('').map(Number);
    const arraySorted = [...arrayCheck].sort((a, b) => a - b);
    return arraySorted.pop()

}

console.log('the maximum number is ',(findMax(123867)))

// 8 REMOVE DUPLICATES FROM ARRAY
function removeDuplicates(arr){
    return arr.filter((item, index) => arr.indexOf(item) == index)
}
console.log('all duplicated array are removed ',removeDuplicates([1, 2, 2, 8, 9, 0, 0, 8]))

//9 SORT AN ARRAY IN  ASCENDING ORDER 

function sortArray(arr){
    return arr.sort((a, b) => a - b)
}

console.log('this array is sorted from Ascending order ',sortArray([1, 2, 6, 5, 8, 7]))