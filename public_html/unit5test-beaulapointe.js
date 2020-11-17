/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let galHold = prompt("How many gallons of gas does the car hold? ");
let mileTank = prompt("How many miles can the car drive on a full tank of gas? ");

let MPG = findMPG(galHold, mileTank);
document.write("Your car gets " + MPG + " MPG.");

function findMPG(gallons, miles) {
    return (Number(miles) / Number(gallons));
}

