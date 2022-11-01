//? Strings will represents a set of characters within double codes or single codes or bacticks
//?  To declare any strings we need to follow ceratain methods
//* 1. toLowerCase 

    let a = "AAKASH"
    let b = a.toLowerCase()
    console.log(b)

//* 2. toUperCase 
    let a1 = "AAKASH"
    let b1 = a1.toUpperCase()
    console.log(b1)


//* substring 
//? This method will return a part of a string from main string between two position starting and ending

    let s = "aakash"
    let s1 = s.substring(0,4) // if we don't give any value entire string will be printed
    console.log(s1)

// start switch
    let x = "India is my country"
    let y=x.startsWith("I",0);
    console.log(y)

    let x1 = "India is my country"
    let y1=x1.endsWith("y");
    console.log(y1)

    //!==================================================================================================================
//! index of and lastIndex Of


    let r = "aakash"
    let c = r.indexOf('s')
    console.log(c)


    let c1=r.lastIndexOf('h')
    console.log(c1)

    //!==================================================================================================================


    //! split ()   it will return the splited string in array

    let abc = "aakash"
    let abc1 = abc.split("")
    console.log(abc1)

//! Trim()
//? trim will remove space from both the ends of a string

    let z = "               aakash"
    let v =z.length;
    console.log(v)
    let d = z.trim()
    console.log(d )

//! Slice () :- it will accept negative values also

    let a2 = "hello world"
    let b2=a2.slice(-5)
    console.log(b2)



//!    concat


    let a3 = "India"
    let b3 = "is my"
    let c3 = "country"
    let d3=a3.concat(" ",b3," ",c3)
    console.log(d3)

//!   replace()    

    let n = "aakash is good boy"
    let m = n.replace("good" , "bad")
    console.log(m)

//!   repeat()    

    let p = "aakash"
    let f = p.repeat(3)
    console.log(f)

