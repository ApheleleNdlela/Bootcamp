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

let y = [];
    if(sessionStorage.getItem("calc")){
        y = JSON.parse(sessionStorage.getItem("calc"))
    } else {
        results.innerHTML =(x)
    }

function AgeCalc(){

    let bornYear = document.getElementById("EnterAge").value
    // console.log(bornYear)
    let a = new Date();
    
    let year = a.getFullYear();
    // console.log(year)
    let x = (year - bornYear);
    sessionStorage.setItem("calc",JSON.stringify(y));

    // console.log(x)
    // let z;
    // z = (bornYear >= 1000)

    results = document.getElementById("Results");
   
    if(year == "" || bornYear == ""){
        // alert("Please enter your bornYear")
        return results.innerHTML =("Please enter your bornYear")
    } 
    else if (bornYear < 0){
    // alert("Born year can not be less than 0")
        return results.innerHTML =("Born year can not be less than 0")
    }
    else if(bornYear<1900){
        return results.innerHTML =("Please enter 4 digits")
    } 
    else if(bornYear > year){
        return results.innerHTML =("bornYear should be less or equal to current year")
    }   else {
        results.innerHTML =(x)
    }
    // else if (!bornYear){
    //     // alert("Please enter your bornYear")
    //     results.innerHTML =("Please enter your bornYear")

    y.push(x)
    results.innerHTML = x
   
    // y.push(x)

    // let x = (2023 - bornYear)

    // if (x <0 ){
    //     // alert("Age can not be a negative")
    //     results.innerHTML =("Age can not be a negative")
    // } 
    // if (results.innerHTML){
    //     return("Please enter your bornYear")
    // }
   
  

}
// AgeCalc()

