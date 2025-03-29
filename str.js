const quote = 'the lazy fox jumps over the quick dogs 20 seconds'


const len = quote.length;
console.log("the length of quote:", len)

const positionFox = quote.indexOf("fox");
console.log("the fix position:", positionFox)



//position 
const position = quote[0];
console.log("position", position)

const positionLast = quote[quote.length - 1];

console.log(positionLast)

const positionIndex = quote.indexOf("i")

console.log(positionIndex)

const lower = quote.toLowerCase();

console.log(lower)

const upper = quote.toUpperCase();

console.log(upper)

const cut10 = quote.slice(0,);

console.log("cut the first ten;", cut10)

//charAt  

const char12 = quote.charAt(13);

console.log(char12)
