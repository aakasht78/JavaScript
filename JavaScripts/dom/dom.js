// document object represents the whole html document 
// when ever html document is loaded in the browser it become a document object .
// dom document is the root elemnet of dom which represents html . 
// using this dom we can add a dynamic content to the web page 
//! DOM IS OBJECT OF WINDOW 
//! WINDOW IS OBJECT OF BROSWER 
// console.log(document);
// document.write()
// window.alert()
// it will give pop up msg on the screen when ever screen is refreshed 
// function greet(){
//     alert("good evening")
// }
// greet()
// window.prompt()
// it will display a dailog box and take input from the user . 
// if user clicks ok it will return value in console.log();  or it will return null 
// let a=parseInt/Number (prompt("enter numer 1"));
// let b=parseInt/Number (prompt("enter number 2"));
// let sum=a+b;
// console.log(`THE SUM OF ${a} + ${b} is equal to ${sum}`);
//  dom creation 
// create Element 
// this method is used to create html structure without html tag
// keyword variable name = document.createElement(tag name )
// let heading1=document.createElement("mark")
// heading1.innerText="hello"
// document.body.append(heading1)
// list ol li 
// let ol1=document.createElement("ul")
// let li1=document.createElement("li")
// let li2=document.createElement("li")
// let li3=document.createElement("li")
// li1.innerText="coffee"
// li2.innerText="tea"
// li3.innerText="milk"
// ol1.appendChild(li1)
// ol1.appendChild(li2)
// ol1.appendChild(li3)
// document.body.append(ol1)
// let m=document.createElement("p"); 
// let q=document.createElement("h2") 
// m.innerText="I am paragraph"; 
// q.innerText="I am child heading 2"; 
// m.appendChild(q); 
// document.body.append(m);


    // let div1=document.createElement("div")
    // div1.innerText="im division"
    
    // div1.style.height="50vh"
    // div1.style.width="50%"
    // div1.style.backgroundColor="red"
     // div1.style.fontSize="100px"

    // document.body.append(div1)

    // ! Important method of dom
    //? document.getElementById()
    //?  document.getElementsByClassName()
    //? document.getElementsByTagName()
    //? document.querySelector()
    //? document.querySelectorAll()
    //? document.getElementsByName()

    //! 1. document.getElementById() :-
    let x = document.getElementById("para")
    x.style.color="blue"
    x.style.fontSize="25px"

    //! 2. document.getElementsByClassName() :-
    //?             This method will Array like Object of all the class name in html collection.
    //?when ever we are calling a variable  using class name it inculdes a root node that mean along with index number we should access 

    let r = document.getElementsByClassName("div1")
    r[0].style.color="red"
    r[0].style.fontSize="25px"

    //! 3. document.getElementsByTagName() :-


    let a = document.getElementsByTagName("div")
    a[0].style.fontFamily="Verdana, Geneva, Tahoma, sans-serif"


    //! 4. document.querySelector() :-
    //?     This method helps to select html tags or elemnts h