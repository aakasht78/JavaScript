//! Operators :-
//?    Operators are predefined symbols which are used to perform some specific operations on operands

    //* a+b
    //* a,b ==> operands
    //* +   => opeartor


//!=========================== 1. Arithmatic Operators :- 

    //! 1. + Operator :-

        // let a = 5;b = 10
        // let sum = a+b
        // console.log(sum) //! This is right way to use
        //console.log(a+b)    //! This is not right way to use


        let x =10; y = "chai"
        let sum1=x+y;
        console.log(sum1)
        
        let x1 =10; y1 = "10"
        let sum11=(x1+y1);  //! When number is added with Strings it act like a concatination
        console.log(sum11)
   
        let y111 = 10; z = false
        let sum3 = y111+z
        console.log(sum3)


    //! 2. - Operator  :-

      let q= 10 ; r=5
      let sub = (q-r)
      console.log(sub)

      let t =10; u = "2"
        let sub1=t-u;
        console.log(sub1 + " " + typeof sub1)
       
        let t1 =10; u1 = true // false
        let sub11=t1-u1;
        console.log(sub11 + " " + typeof sub11)
        
    //! 3. * Operator  :-

      let az = 5 ; ab = 45;
      let ans = (az*ab)
      console.log(ans)

      let az1 = 5 ; ab1= '1';
      let ans1 = (az1*ab1)
      console.log(ans1)
     
      let az2 = 57 ; ab2= true; // false
      let ans2 = (az2*ab2)
      console.log(ans2)
    
    //! 4. % Operator  :-

        let l = 18 ; m = 22;
        let ans3 = l % m;
        console.log(ans3)
        
        let l1 = 18 ; m1 = true;
        let ans31 = l1 % m1;
        console.log(ans31) 

        let l2 = 18 ; m2 = '4';
        let ans32 = l2 % m2;
        console.log(ans32)
        
    //! 5. / Operator  :-

        let l9 = 18 ; m9 = 22;
        let ans39 = l9 / m9;
        console.log(ans39)
        
        let l10 = 18 ; m10 = true;
        let ans310 = l10 / m10;
        console.log(ans31) 

        let l20 = 18 ; m20 = '4';
        let ans320 = l20 / m20;
        console.log(ans320)

//*=======================================================================================

//!==========================Assingment Operator=====================================
//?              +=, -=, *=, /=, %=

        let v =10;
        v+=5;
        console.log(v)

        let v1 =10;
        v1-=5;
        console.log(v1)
        
        let v2 =10;
        v2*="6";
        console.log(v2)


//*=======================================================================================

//!==========================Relational Operator=====================================
//?                          = == ===

        let num1 = 10; num2=10;
        //console.log(num1=num2)  //! (=) It assing the value
        //console.log(num1==num2) //! (==)It check only the condition based on value
        console.log(num1===num2)  //! (===) It is called as strict comparision, It will check only condition and
                                  //!       datatypes also

        