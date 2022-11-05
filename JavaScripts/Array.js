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

//!======================================04/11/22===============================

    //!  Array Method Using Functions
    //*For of :-
    //?     This method iterates each element one by one which is present in an array in the form if Strings

    let a11 =["hi","hello","good", "evening"]
    for(const b of a11){
        console.log(b)
    }


    //!  For IN :-
//?         This Methods iterates or returns the index value one by one from an array

        let x1 = ["a","b","c","d","e"]

        for(let y in x1){
            console.log(y)
        }

console.log("===============================================================")
        //! For Each method:-
        //?      This method it will iterate elements in an array abd it will also iterates index values from an array    


        let students = ["ambika","amar","shubham","pavan", "pooja"]
        students.forEach(iteratingbot)
        function iteratingbot(element,index){
            console.log(element)
            console.log(index)
        }



        //! Map () :-
//?             This method will create new Array from calling a function for every array element .
//?             It will transform the whole array but it will return the same lenghth of ana array
//?
        const arr=[5,1,3,2,6]
        function double (x){
            return x*2
        }

        const result = arr.map(double)
        console.log(result)
        console.log(arr)
        

        const m = [4,3,2,1,5]
        let n = m.map((a)=>{
            return a*2
        })
        // console.log(n)


        //! Filter Method:-
        //?        This method will filter an element in an array based on condition given inside the function


        const age = [30,18,35,16,19,24]
        function adult (checkadult){
            return checkadult >=18;
        }
        let newage=age.filter(adult)
        console.log(newage)


        //! Reduce Method :-
        //?         it will reduce the elements in an array and return single output


        const red = ["very", "good","evening"]
        function join(a,b) {
            return a+b
        }
        const red1 =red.reduce(join)
        console.log(red1)

        let add=[10,20,30,40,50]
        function adding(a,b){
            return a+b
        }

        let add12=add.reduce(adding)
        console.log(add12)

        const values = [1,2,5,32,1,32,6,323,65,34,326]
        let largest = values.reduce((l1,l2)=>{
            return l1>l2? l1:l2
        })
        console.log(largest)


        //! Call Stack :-
        //?     
        
        console.log("start")
        function hello(){
            console.log("hello")
            hi();
        }
        function hi() {
            console.log("im hi")
        }
        function good(){
            console.log("i am good")
        }

        hello()
        console.log("end")



        //! Lexical scoping :-
        //? how JS recive the file and eexecute acording to the code

        console.log("start")
        console.log(a)
        function v1(){
            var b = 20
            console.log(b)
        }
        v1()
        const c = 30
        console.log(c)
        console.log("end")