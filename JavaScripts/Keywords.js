//! Keywords

   //? 1. Keywords are reserved words that have specific meaning which is already defined it is understood By js engines
   //? 2. Keywords are case sensitive it should be written in LowerCase

    //* Syntax :-
    //? VAR / LET / CONST VARIABLE NAME = IDENTIFIERS

   //! 3.Major Keywords
   //? 1.Var ES1
   //? 2. LET ES6
   //? 3. CONST ES6

    //! 1.Var ES1 :-
    var web; //* declaration of variable;
    console.log(web)
    var web=10; //* initialization for variable web (value)
    console.log(web)

    var web=20 //* re-declaration and re-initialization is possible only with var
    console.log(web)
 
//! 2. LET ES6 :-
  
  let x;  //* declaration
  x=10;  //* initialization
  console.log(x)

 // let x; //* re-declaration is Not at all possible.
 x=20;    //*re-initialization is possible 
 console.log(x)

//! 3. CONST ES6 :-s
// const a =110 //declaration and initialization  has to be done at a time
console.log(a)
//const a=20 //* re-declaration is Not at all possible.
// a=20 //*re-initialization is Not possible

//?==========================================================================================================

//! Variables :- Variables is an object or memory space used to store the value that can be used
//!               during program execution.


//! Identifiers :- The values that are given to the variable are called as Identifiers.

//?==========================================================================================================

      //!  Scope Of Keywords :- 
      //?           The visibility of member(keywords) to access / call is called scope

//*================  1. Global Scope :-
      //?   It is the highest visiblity we can call / access this scope anywhere in JS
      //?  ex:- var is global scope
      {
        var a=1110;
        console.log(a)
      }
      console.log(a) //Is possible


//*================  2. Block/Local Scope :-
      //?     The visibility of member(keywords) is only within the block where it is declared 
      //? It can not be access out of the block
      let z=1223456
      {
        let z=1555555;
        console.log(z)
      }
      console.log(z) //Is Not - possible
        
      {
        const y=15;
        // console.log(z)
      }
      //console.log(y) //Is Not - possible


      //! Hoisting 
      //* It is a behaviour in which variable can be used before declaration
      //* Only var keyword will allow Hoisting
      //* let and const will Not allow Hoisting

      

      var q
      console.log(q)

      b=100;
      console.log(b)
      let b; //* declaration is must then hoisting


      