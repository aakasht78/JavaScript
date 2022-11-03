//! Function :-
//?     Functions are some fundamental statements that take input to do some specific task and reduce the output
//?     It will execute only if the function is called or invoked.
//?     all the variables and other js expression/ code declared inside the function acts as block scope or local scope.
//?     we cannot access them outside the block.

//* 1. Function declaration  /  general function
//! Syntax :-
    //? function functionname(parameter) {
    //?     statments / body



        //return statements(when ever the code reached to return statement the function will stop executing and return 
        // statement will return a value to that particular function)
    //? }
    //? function calling (aruments)


    //! add a number

    function addnum(a,b){
        return a+b;
    }
   console.log( addnum(10,20))

    
   function greet(){
    console.log("hi")
   }
   greet()


//!    Function With parameter and with return statement

    function addnum(a,b){
        return a+b;
    }
    console.log( addnum(10,20))


//!    Function Without parameter and without return statement

    function greet(){
        console.log("hi")
    }
    greet()



//!    Function With parameter and without return statement

       function sum(a,b,c){
        console.log(a+b+c)
       }

       sum(1,2,3)



//!    Function Without parameter and with return statement
      
    function food(){
        return "im foody"
       }
       console.log(food());

//! 2. Anaonymous Function :-
//?     A function without name , these functions we will store into varibles in order to provide a identifier
//?     or a function name so that we can easily call that function by using variable name
//?     


       let jsdpider = function(){
        return " im no-name function"
       }

       console.log(jsdpider())

       let addnum1 = function (a,b){
        return a+b
       }
       console.log(addnum1(2,3))


       let web=function(){
        console.log("i am in web tech class")
       }

       web()

//! 3. Arrow Function || LAMDA Function :-
//? it also called  as LAMDA function (ES5 concept)
//? We will not use function keyword to declare function insted we use arrow Symbol (=>) Fater To ddeclare Function


       let chai=()=> {
        return " hello world"
       }
       console.log(chai())

        let chai1=()=>" hello world"
        console.log(chai1())

        let addnum11 =(a,b)=> a+b;
        console.log(addnum11(2,2))



//!  4. IIFE (Immediately Invoked Function Expression) :-
//?    This fynction is executed / Invoked automatically without being called    
//?    as soon as they created with() paranthesis they start execution   
//    (
//        function qspiders() {
//         console.log("Hello Qspiders")
//        }
//        ()
//    );

//    (    
//         function(){
//             console.log("hellooo");
//         }   
//    )
//    ()

//!====================================================================================================
console.log('=========(03-11-2022)===================')
//!    Nested Function
//? Functions inside another functions

       function uideveloper(){
        var salary=9;
        console.log(salary)
        return mern ;
        function mern(){
            var salary2 =8;
            console.log(salary2)
            return webtech()
                function webtech() {
                    var salary3=7;
                    console.log(salary3)
            }
        }
       }

    //    uideveloper()()()

//!====================================================================================================

    //!  Highr Order Function (also called as call back function):-
    //?     It is use to perform multipule operation at a time
    //?     It will accept a function it self as parameter

    function hof(a,b,task) {
        var result = task(a,b)
        return result;
    }
    let addnumm = hof(2,3,(a,b)=>{
        return a+b
    })
    console.log(addnumm)

    let subnum = hof(5,5,(a,b)=>{
        return a-b;
    })
    console.log(subnum)

    let mulnum = hof(4,5,(a,b)=>{
        return a*b;
    })
    console.log(mulnum)

