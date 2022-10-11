export function feedValidation(){
    var email1 = document.getElementById("email1");
    var em1 = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/; 
    if(!email1.value.match(em1)){
        alert("Email not valid");
    } 

    var firstName1 = document.getElementById("firstName1");
    var fName1 = /^[a-zA-Z]+$/;
    if(!firstName1.value.match(fName1)){
        alert("First name is not valid");
    }

    var lastName1 = document.getElementById("lastName1");
    var lName1 = /^[a-zA-Z]+$/;
    if(!lastName1.value.match(lName1)){
        alert("Last name is not valid");
    }
}