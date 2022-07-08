let name1 = prompt("What is your first name?");
let name2 = prompt("What is your middle name?");
let name3 = prompt("What is your last name?");

let num1 = name1.length
let num2 = name2.length
let num3 = name3.length

if(num1 > num2 && num1 > num3){
    console.log(`${name1} is the longest name!`)
}
else if(num2 > num1 && num2 > num3){
    console.log(`${name2} is the longest name!`)
}
else if(num3 > num1 && num3 > num2){
    console.log(`${name3} is the longest name!`)
}
else if(num1 === num2 && num1 > num3){
    console.log(`${name1} and ${name2} are the same length!`)
}
else if(num1 === num3 && num1 > num2){
    console.log(`${name1} and ${name3} are the same length!`)
}
else if(num2 === num3 && num2 > num1){
    console.log(`${name2} and ${name3} are the same length!`)
}
else{
    console.log("All three names are the same length")
}