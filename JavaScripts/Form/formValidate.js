//! Form Validation :-
//?        it means to check what ever the data is submitted is right or wrong

//* client validation
//* server validation


// validation means to check what ever the data is submitted is right or wrong 
// client validation 
// server validation 
function validation(){
    var name1=document.getElementById("name").value
    var pass1=document.getElementById("pass").value
    if (name1==""){
        alert("please dont leave the field blank")
        document.form1.name.focus();
        return false ; // it should not go to any page . stay in the same page
    }
    if(!isNaN(name1)){
        alert("enter characters / alphabets only")
        document.form1.name.value=" ";
        document.form1.name.focus();
        return false;
    }
    if(pass1<6){
        alert("enter atlest 6 characters")
        document.form1.pass.value=" ";
        document.form1.pass.focus();
        return false;
    }
        return true;
}
