//! Objects:-
//? In JS almoost everything is object
//? Object is a collection of preoperties (key /name and value)
//? objecs are non primitive dataTypes
//* Arrays and objects are mutable (can be modified or changed its original content)
//? Data Will be stored in the form of keys and values 
//? Objects is predefined in browser
//? we can also defineds own objects also

//? Car is an Object in real Life
//? Properties Like : color weight model brand
//? Methods / Behaviours :- depends on performance :- like start stop break speed

//! How to create objects ?
//! Syntax :- literals method
    //* Keyword variable name = {
    //*     key: value,
    //*     key: value,
    //*     ...
    //* }

    let obj =  {
        name:"aakash",
        id:"TYSS1525",
        place:"pune"
    }
    console.log(obj)

    //! Dot Operators :-
    //?        To access objects properties There are two Types :-
    console.log(obj.name)    //* 1. This is known as Dot notation
    console.log(obj["name"]) //* 2. Array Notation
    

    //! Multiple Object Creation 
    
    let book = {
        name:"classmate",
        color:"red",
        pages:{
            pages100:20,
            pages200:40,
            pages500:{
                longsize:100,
                shortsize:60
            }
        }
       
    } 
    console.log(book)
    console.log(book.pages.pages500.longsize)

    book.pages.pages500.shortsize=80; //!change the value
    console.log(book)

    //! Empty Object Literals   

    let person ={}
    console.log(person)

    person.name="Aakash"
    person.age=21
    person.company="google"
    console.log(person)


    //! Object Mutation :-
    //?        Mutation is a process of changing the properties of value adding new values to the existing objects


    let x= {
        username:"raja",
        password:12345,
        company:"jspider"
    }
    // console.log(x)

    //!Array Of Object
    
    let employee = [{
        id : "qsp1",
        name:"manu",
        sal:20000
    },
    { 
    id : "qsp2",
    name:"pavu",    
    sal:200040
    },
    { 
    id : "qsp3",
    name:"pavufds",    
    sal:2000403
    }
]
    console.log(employee)
    console.log(employee[0])
    console.log(employee[1])


//!   Object Creation Using Constructor Fuction (this, new keyword)

    let s = new Object()
    console.log(s)

    s.name="raghav"
    s.skill= ["java","j2ee","frameworks","sql"]
    s.place="pune"

    console.log(s)

    console.log( s.skill[0])
    

    //! Funcion 

    function obj1(id,age,job){
        this.id = id;
        this.age = age;
        this.job = job;
    }
    let onj2 = new obj1(28,"qsp1","fullstack");
    let onj3 = new obj1(29,"qsp2","backend");
    console.log(onj2)
    console.log(onj3)


    onj2.skill="webtech" //! add new value into existing object
    console.log(onj2)
   
    onj2.age=40   //! Change the existing value
    console.log(onj2)

    delete onj2.skill //! Delete The Existing Value
    console.log(onj2)

    //! We can give the keys as number also


    let a={
        1:"java",
        2:"python",
        3:"c++"
    }
    console.log(a[1])
    console.log(a[2])
    console.log(a[3])

    //! Object will support any reserved keyword

    let v = {
        if:"hi",
        else:"hello",
        for:"good"
    }
    console.log(v.if)