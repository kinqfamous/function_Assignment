let number = []

for (let x = 0; x <= 20 ; x++){
    number.push(x)
}
console.log(number)

function random(num){
    let randnum = Math.floor(Math.random()* 100) +1;
console.log(randnum)

    if (randnum < num){
        return 'guess to high'
    }
    else if ( randnum > num){
        return 'guess too low'
    }
    else {
        return 'congrats you won'
    }
}

console.log(random(50))