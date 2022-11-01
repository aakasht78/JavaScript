//? contditional statement are logical statement or commands that will handle decesions based on certain condition
//? contditional statement defines a JS code depending on developer conditions
//? It depends on true or false 

//* 1. If Statement will execute only if condition is true

    let num1 = 10
    let num2 = 10
    if(num1 === num2){
        console.log(`${num1} is equal to ${num2}`)
    }

//*  2. If else Statement
//* if condition

    let num11 = 110
    let num22 = 10
    if(num11 === num22){
        console.log(`${num11} is equal to ${num22}`)
    }
    else{
        console.log(`${num11} is not equal to ${num22}`)
    }

//!===============================================================================================================

    let num =23;
    if (num>0) {
        console.log(`${num} num is positive`)
        if(num%2==0){
            console.log(`${num} is even`)
        }
        else{
            console.log(`${num} is odd `)
        }
    
    }
    else if(num<0){
        console.log(`${num} num is negative`)
    }
    else{
        console.log(`${num} nither positive nor negative`)
    }

//!==================================================================================================================

    //! Switch Statements
    //? It executes the set of code based on diffrent cases . Bassedit will check for the each case


//!==================================================================================================================
    let fruits = "apple"
    switch (fruits) {
        case "mango":
            console.log("i am not avilable")
            break;
    case "orange":
            console.log("i am not avilable")
            break;
    case "apple":
            console.log("i am avilable")
            break;
    
        default:
            console.log('i have never heard of the fruit name')
            break;
    }

    //!==================================================================================================================

    let weekDays = 'tuesday';

    switch (weekDays) {
        case 'monday':
            console.log(`it's a boaring day`)
            break;
        case 'tuesday':
            console.log(`it's a worst day`)
            break;  
        case 'wednesday':
            console.log(`it's a worst day of a month`)
            break;
        case 'thursday':
            console.log(`we don't need this day`)
            break;
        case 'friday':
            console.log(`weakend starts here`)
            break;
        case 'saturday':
            console.log(`best day of a month`)
            break;
        default:
            console.log('if it is sunday it is best day ')
            break;
    }



    //!==================================================================================================================


 //!==========================================Looping Statement==========================================================
//?  Looping statement is used to perform some repeated task based on some conditions either will return  either true or false
//? A loop will continue to execute until the dedined ccondition returrn false

//* For Loop
//* While Loop
//* DO While Loop


//? For loop :-




for(let hola=1;hola<=10;hola++){
    // console.log(hola)
}



//While Loop 

// while (condition) {
//     statement
// }


// let qwerty = 1;
// while (qwerty >=10) {
//     console.log(qwerty)
//     qwerty++
// }


// do while {
//     statement
//     increment / decrement
// }
// while(condion)


// let o =1;
// do{
//     console.log(o)
//     o++
// }
// while(o<=10);