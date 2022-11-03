//! Array :-
//?  It is an object than can store multipule values at once
//? Array will store diffrent dataTypes or Mixed DataTypes in one single variable
//? Array is identified with index value. Index value will always start with 0

//!  How To Creat a Array

    //? Using Litrals [ ]

    const array1=["hello",true,3,'w',null]
    console.log(array1)


    //! 1. Index Of

    const r = [2,true,"hello","good",5]
    const r1 = r.indexOf("hello")
    console.log(r1)

    const r2 =r.lastIndexOf(5)
    console.log(r2)

    //! 2. Include :- return true or false

    const a = ["hello","hi", "good"]
    const a1=a.includes("hi")
    console.log(a1)


    //! 3. concat():-
    const x= ["chaithanya"]
    const y = ["web tech"]
    const z = ["trainer"]
    const con=x.concat(y,z)
    console.log(con)


    //! 4. Fill() :-  It will  overrirde the original array

    const fruits = ["apple","orange","banana"]
    const fruits1 = fruits.fill("mango",2,3)
    console.log(fruits1)
    console.log(fruits)


    //! 5. Push() :- adding
    //? It will add from end of the array

    const veg =["carrot", "beans", "raddish"]
    console.log(veg)
    const veg1 = veg.push("cuucmabar","brinjal")
    console.log(veg1)
    console.log(veg)

    //! 6. Pop() :- this method remove from end of the array
    const veg2 = veg.pop()
    console.log(veg2)
    console.log(veg)

    //! 7. Shift () :- It is use to remove 1st element of array 
    const clr = ["white","black","green","pink"]
    const clr1 = clr.shift()
    console.log(clr1)
    //! 8. UnShift ()
    const clr3 = clr.unshift("pink")
    console.log(clr3)



    //!  9. slice():- It will not override

    const car = ["BMW", "TESLA", "TATA"]
    const car1 = car.slice(1,2)
    // console.log(car1)

    //! 10. Splice() Method :-
    //? Syntax (Indexvalue, delete count, item add)

    const products = ["mobile", "laptop", "iphone", "radio"]
    const pro1 = products.splice(1,0,"headphones")
    console.log(pro1)
    console.log(products) 
    
    const pro2 = products.splice(0,1,"airpods")
    console.log(pro2)
    console.log(products)

    //! 11. ToString :- Converting any value to String value

    const z1 = ["car","bike","train"]
    console.log(z1)
    const z2=z1.toString()
    console.log(z2)

    //! 12. Sort :- It will overRide Your original array , ascending order

    const js = ["web", "react","angular", "express","mongoDB"]
    const js1 = js.sort()
    console.log(js1)



    