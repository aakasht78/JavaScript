//! Timming
//?  timming function than enables user to execute certain functions or js codes at particlar time.
//?  It is also a predefined fnction in js
//? It can repeat code again and again,  it can stop the code or function

//! 4 methods to use
//*   setInterval()
//*   clearInterval()
//*   setTimeout()
//*   clearTimeout()


//!     setTimeout() :-
//?         this method allow to user to execute the statement after once after a fixed time is passed or done

//* SYNTAX:- settimeout (function, settimeout)


    function stm() {
        console.log("i'll execute after set time out")
        
    }
    // setTimeout(stm,3000)

    //!  clearTimeout() :-
    //?       It will clear a timer function that returned by settimeout() it will take only one argument
    //?        that is returned value of set time out
    
    let a ;

    function myalert() {
        a=setTimeout(function() {
            alert("im set timeout")
        },2000)
    }

    function stopaleert() {
        clearTimeout(a)
    }


    //!  setInterval() ;-
    //?       it is used to set a certain time after the fixed time is done it will keep on executing after every fixes time
//* SYNTAX:- settimeout (function, settimeout)

    function int() {
        console.log("i am interval function")
    }

