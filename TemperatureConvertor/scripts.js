// // Temperature conversions

//  f = c *(9/5) + 32
//  c = (f - 32) / (5/9)

function TempConv(){

    let results = document.getElementById("Results")
    let f = document.getElementById("TempConv").value
    let c = (f - 32) * (5/9);
    results.innerHTML = c

    
    if (!f){
        results.innerHTML =("please enter value")
    } else if(c <= -273 ) { 
        results.innerHTML =("It is an absolute Zero")
    } else if(c < 16){
        results.innerHTML =(c + " " + "It is cold")
        // alert(c + " " + "It is cold")
    // } else if(c <= -273 ) { 
    //     results.innerHTML =("It is an absolute Zero")
    } else if(c >= 16 && c<21) { 
        results.innerHTML =(c + " " + "It is warm, wear T-shirt and Jeans")
        // alert(c + " " + "It is warm, wear T-shirt and Jeans")
    } else {
        results.innerHTML =(c + " " + "It is hot, wear shorts")

        // alert(c + " " + "It is hot, wear shorts")
    }
    }
    TempConv()

// function AgeCalc (currentYr,bornYr){
    
//     let Age = currentYr - bornYr
//     console.log(Age)
// }
// AgeCalc(2023,1972)


                                                    // ARRAYS


// let numbers = [5,4,3,2,1,0,1,2,3,4,5]
