//! Script :- 
//?  Promise in js is similar lie promise in real life
//?  it is promise that we do in future

//? Two posiible outputs when time comes it will execute or it wont execute
//? in js we define promise two outputs 
//? it will be resolved when time comes or it will get rejected
//! 1. resolved 
//! 2. rejected
 
//! Three States in promise
//* pending :- initial state before promise gets success or failure
//* resolved :- complete the promise
//* rejected :- failed the promise
//* Finally :- it will execute for sure 

//! TWO IMP METHODS

//! Promise
//? 1. then () will execute only if promise get success it will execute what ever code is inside then method
//? 2. catch()  will execute only if promise get rejected


//?create promise and use of it

//? SYNTAX :- let p = new Promise()

//it will take two parameters with arrow functions

    // let mypromise = new Promise((resolved , rejected)=>{
    //     condition body
    //     let condition ; 
    //     if(condition us meeting promise){
    //         resolve ("promise resolved")
    //     }
    //     else{
    //         reject ("promise failed")
    //     }
    // })

    //! then() :- 
    // this is called after the promise is resolved then we can decide what to do resolved promise

    // mypromise.then((message)=>{
    //     console.log(message)
    // })


    // mypromise.catch((message))=>{
    //     console.log(message)
    // })

    let sum = new Promise((resolved , rejected)=>{
        let r = 1+1
        if(r==2){
            resolved("true")
            
        }
        else{
            rejected("false")
        }
    })

    sum.then((message)=>{
        console.log(`i am then ${message}`);

    }).catch((message)=>{
        console.log(`i am catch ${message}`)
    })


    let s = new Promise((resolved , rejected)=>{
        let sweet = true;
        if(sweet=false){
            resolved()
        }
        else{
            rejected()
        }
    }).then((message)=>{
        console.log(`yes sweets are presents`)
    }).catch((message)=>{
        console.log(`unhappy no sweet`)
    }).finally(()=>{
        console.log("get up and go sweet")
    })