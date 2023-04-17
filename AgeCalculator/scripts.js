// function AgeCalc (currentYr,bornYr){
    
//     let Age = currentYr - bornYr

//     if(Age < 0) {
//         console.log("Age can not be a negative number")
//     }  else if(!currentYr,!bornYr) {                // }  else if(isNaN(currentYr,bornYr)) {               
   
//         console.log("please enter your bornYr")
//     } else
//     console.log(Age)
// }
// AgeCalc()




// function AgeCalc() {
//     let bornYr = document.getElementById("EnterAge").value
//     let x = 2023 - bornYr
//     if (bornYr < 0){
//         alert("Age can not be a negative")
//     } else if (!bornYr) {
//         alert("please enter your born year")
//     } else {
//         alert(x)
//     }
    
// }
// AgeCalc()


function AgeCalc(){

    let bornYear = document.getElementById("EnterAge").value
    let x = (2023 - bornYear)
    results = document.getElementById("Results")
    results.innerHTML = x

   
    // let x = (2023 - bornYear)

    if (x <0 ){
        // alert("Age can not be a negative")
        results.innerHTML =("Age can not be a negative")
    } 
    else if (!bornYear){
        // alert("Please enter your bornYear")
        results.innerHTML =("Please enter your bornYear")
    }
    else if (bornYear < 0){
        // alert("Born year can not be less than 0")
        results.innerHTML =("Born year can not be less than 0")
    }
    else {
        // alert(x)
        results.innerHTML =(x)
    }

}
AgeCalc()

