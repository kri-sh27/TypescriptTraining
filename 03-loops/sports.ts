let sportOne:string[]=["Golf","Cricket","Tennis","Swimmimg"];

// for(let i=0;i<sportOne.length; i++){
//     console.log(sportOne[i]);
// }
 
//lets use the simplified for loop


// console.log("//////////////////")
for(let tempSport of sportOne){

    if(tempSport=="Cricket"){
        console.log(tempSport + " <<My Favorite!");
    }
    else{
    console.log(tempSport);}
}