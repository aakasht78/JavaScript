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

    //!  Object.assing():-
    //?        this method will copy all the properties of one or more objects into a single and new modified object.

    let m={
        username:"Aakash"
    }
    console.log(m)
    let k = {
        training :"web tech"
    }
    console.log(k)

    let z = Object.assign(m,k)
    console.log(z)

    //! 4. Object.entries :-
    //?         This () is use to return an array of a given object . each key value pair will be returned as individual array

    let a1 = {
        username:"Aakash",
        company: "Google"
    }

    console.log(a1)

    let e = Object.entries(a1)
    console.log(e)
console.log('==============================================================')

    //! 5. Object . from entries() :-
    //?     This method will convert a list of key value pairs into object from array

    const students=[
        ["age",23],
        ["job","sales"]
    ]
    console.log(students)

    let newstudents = Object.fromEntries(students)
    console.log(newstudents)

        //! Freeze :-
    //?    This method is used to freez the object .  this object cannot be changed.
    //?    It cannot add new value , delete value change value, delete value..........
    //? it will just return the same object
        let o = {
            name :"aakash",
            age:21
        }
        // console.log(o)
        let i = Object.freeze(o)
        console.log(i)
        // is Frozen
        //? It will check for the object wether it is freezed or not 
        //? it returns true if it is freezed or false if it is not freezed
        let l = Object.isFrozen(o)
        console.log(l)


        //! Seal :-
        //? This method will seal the object onaly at fied set of properties , cannot add new valuses,
        //? cannot    
        //?    
        //?    

        let u = {
            name :"aakash",
            id:01
        }
        u.name="ram"//? we can update the older value in seal

        console.log(u)
        let h = Object.seal(u)

        console.log(h)


        //! Is sealed :-
        let r = Object.isSealed(u);
        console.log(r)
        //?

        //! isExtensible:-
        //? this () will check weather object is extensible to add new properties into it

        let w = {
            class:"Web tech",
            time :"7:00 PM"
        }
        console.log(w)

        let c = Object.isExtensible(w)
        console.log(w)
        //! Prevent extensions:-
        //?
        let t = Object.preventExtensions(w)
        console.log(t)
