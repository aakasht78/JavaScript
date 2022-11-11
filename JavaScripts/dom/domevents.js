
//! DomEvents :-
//? Events are occurance that will happen in system when user performs some action on the code / programs
//? these are the operations performed on web page like clicking , selecting , copying, pasting etc..
//? these events will take place when user does something in webpage
//? These events will handle both user inputs and browser inputs / actions
//? It should be given as a attributes in html elements
//? using fuctions will events work

//! Few Events clicks

//* onclick
//* ondblclick
//* onmouseover
//* onmouseout
//* onkeydown
//* onkeyup
//* oncopy()
//* onpaste()
// onsubmit
// oninput
// onload
// onfocus



//!   onclick :-
//?      This event will occurs when user clicks the html elements

    let a=function() {
        let heading1= document.getElementById("heading")
        document.body.style.background="url('https://html.sammy-codes.com/images/background.jpg')"
    }

    
    let b=function() {
        let heading2= document.getElementById("onmouseover")
        document.body.style.background="url('https://html.sammy-codes.com/images/background.jpg')"
    } 
    let c=function() {
        let heading2= document.getElementById("onmouseout")
        document.body.style.background="url('https://html.sammy-codes.com/images/background.jpg')"
    } 
    let d=function() {
        let heading2= document.getElementById("onmouseout")
        // alert("onkeydown")
        // document.body.style.background="url('https://html.sammy-codes.com/images/background.jpg')"
    }

   