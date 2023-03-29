// Iteration 1: Names and Input
const hacker1 = "Olivier"
console.log ("The driver's name is " + hacker1)
const hacker2 = "Sarah"
console.log ("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) 
{
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker1.length<hacker2.length)
{
  console.log (`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
}

else {
  console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
     }

// Iteration 3: Loops
let name1 = " "
for (let i =0; i<hacker1.length; i++){
  name1 += hacker1[i] + " "
}
console.log (name1.toUpperCase())

let name2 = " "
for (let j =hacker2.length-1; j>=0; j--){
  name2 += hacker2[j]
}
console.log (name2)


if (name1>name2)
{
  console.log (`The driver's name goes first.`)
}
else if (name1<name2)
{
  console.log (`Yo, the navigator goes first, definitely.`)
}
else { 
  console.log (`What?! You both have the same name?`)
} 