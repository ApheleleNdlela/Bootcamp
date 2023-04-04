function AgeCalc (currentYr,bornYr){
    
    let Age = currentYr - bornYr

    if(Age < 0) {
        console.log("Age can not be a negative number")
    }  else if(!currentYr,!bornYr) {                // }  else if(isNaN(currentYr,bornYr)) {               
   
        console.log("please enter your bornYr")
    } else
    console.log(Age)
}
AgeCalc()


// function AgeCalc(bornYr) {
//     let x = 2023 - bornYr
//     if (bornYr < 0){
//         console.log("Age can not be a negative")
//     } else if (!bornYr) {
//         console.log("please enter your born year")
//     } else {
//         console.log(x)
//     }
    
// }
// AgeCalc()