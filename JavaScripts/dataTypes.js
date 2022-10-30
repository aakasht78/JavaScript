//!DataTypes :- 
    //? DataTypes defines what type of data a variable should contains.

//!DataTypes Types :- 
    //? primitive dataTypes
    //? non primitive dataTypes

//* primitive dataTypes :-
    //? immutable datatypes its values can not be changed once created.
    //! Types:-
    //? 1. number
    //? 2. String
    //? 3. boolean
    //? 4. null
    //? 5. undefined

    //! typeof :-
    //*   operator it is used to find out what data  type we are using.

    //! number :-
        //?decimal values or non decimal values
        let x= 10;
        console.log(x);
        console.log(typeof x);

    //! 2. String :-
     //? double codes (" ") , single codes (' '), backticks (` `).
     
     let s1="hello"
     console.log(s1 + " "+typeof s1)

    //  let s2='hello'
    //  console.log(s2 + " "+typeof s2)

    //  let s3=`hello`
    //  console.log(s3 + " "+typeof s3)

     let institute = "jspider"
     console.log(`i am student of ${institute}`); //! concatination we can not do with other two types

    let classTime = "7:00 PM"
    console.log(`Monday To Saturday Class Time is ${classTime}`)

    
    //! 3. boolean :- 
    //*   Boolean : true / false

    let a=true //!   1
    console.log(a + " " + typeof a)
   
    let a1=false//!  2
    console.log(a1 + " " + typeof a1)


    //! 4. null :- (Empty) 

    let n=null
    console.log(n + " " + typeof n )

    //* Undefined Datatype

    let u;
    console.log(u + " " + typeof u)

