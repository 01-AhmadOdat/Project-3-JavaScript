var i = 0;
function signup() {
    var flag = true;
    localStorage.setItem("i", i);

    //take rom input box (sign up)
    var firstname = document.getElementById("firstname").value;


    var x = 0;
    for (x = 0; x < 10; x++) {
        if (firstname == localStorage.getItem("firstname" + x)) {
            alert("username is already taken");
            flag = false;
            break;

        }





    }
    if (flag) {
        //set to local storage
        localStorage.setItem("firstname" + i, firstname);
        // console.log(typeof "result");
        // if (result == 0) {
        //     location.href = 'project3.html';
        // }
        // console.log(localStorage.getItem("result" + userrepeat));
        var lastname = document.getElementById("lastname").value;
        // console.log(lastname);
        localStorage.setItem("lastname" + i, lastname);
        var gEmail = document.getElementById("email").value;
        // console.log(gEmail);
        localStorage.setItem("Email" + i, gEmail);
        var pass = document.getElementById("password").value;
        localStorage.setItem("password" + i, pass);
        var Confirmpass = document.getElementById("confirmpassword").value;
        localStorage.setItem("Confirm-password" + i, Confirmpass);


        i++;
        location.href="../Batool/project3.html"
    }
}
// localStorage.clear();

// var lastname = document.getElementById("lastname");
// var lastname = document.getElementById("lastname", lastname.value);

function ValidateEmail(p) {
    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var email = p.value;
    console.log(email);
    if (!(email.match(mailformat))) {
        alert("This is not a valid email address");
        return false;
    }
}


function ValidatePassword(p) {
    var passFormat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    var pass = p.value;
    console.log(pass);
    if (!(pass.match(passFormat))) {
        alert("This is not a valid Password");
        return false;
    }
}


flag = true;
function equalpass(p) {
    if (flag) {
        alert("Not match");
        flag = false;
    }
}