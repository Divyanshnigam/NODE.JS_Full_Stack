//Passing by Reference is not accessible out side the block
console.log("[BY REFERENCE]")
var QuidditchWinnner = "Harry Potter";
function changeWinner(winner)
{
    console.log("The original winner is "+ winner);
    winner="Draco Malfoy"
    console.log("The changed winner is "+ winner);

}
//Passing by value is accessible out side the block
console.log("The winner was "+ QuidditchWinnner);
changeWinner(QuidditchWinnner);     // The winner can't be accesible outside the function block
console.log("Now the winner is "+ QuidditchWinnner);


//Passing by value is accessible out side the block
console.log("[BY VALUE]");
var QuidditchWinnner = ["Harry","Ron","Hermoine"];
function changeWinner(winner)
{
    winner[0]="Draco ";
    winner[1]="Crabbe ";
    winner[2]="Pansy ";
}

console.log("The winner were "+ QuidditchWinnner);
changeWinner(QuidditchWinnner);     
console.log("Now the winner are "+ QuidditchWinnner);

