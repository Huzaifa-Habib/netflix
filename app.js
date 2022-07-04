
function btn1 () {
    var input1 = document.getElementById("inputOne").value;
    var error1=document.getElementById("error1");
    var regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input1 === "") {
        error1.innerText="Email is required!";

    }
    else{
        error1.innerText = "";
    }


    if (regex_pattern.test(input1)) {
        error1.innerText = "";
    }

    else{
        error1.innerText='The email address is not valid!';
    }

    console.log(input1)
}

function btn2 () {
    var input2 = document.getElementById("inputTwo").value;
    var error2=document.getElementById("error2");
    var regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input2 === "") {
        error2.innerText="Email is required!";

    }
    else{
        error2.innerText = "";
    }


    if (regex_pattern.test(input2)) {
        error2.innerText = "";
    }

    else{
        error2.innerText='The email address is not valid!';
    }

    console.log(input2)
}

// End of validations============================================================

var ans1=document.getElementById("ans1");
var ans2=document.getElementById("ans2");
var ans3=document.getElementById("ans3");
var ans4=document.getElementById("ans4");
var ans5=document.getElementById("ans5");
var ans6=document.getElementById("ans6");

ans1.style.display="none"
ans2.style.display="none"
ans3.style.display="none"
ans4.style.display="none"
ans5.style.display="none"
ans6.style.display="none"

function que1 () {
    if (ans1.style.display == "none") {
        ans1.style.display = "block" 
        ans2.style.display="none"
        ans3.style.display="none"
        ans4.style.display="none"
        ans5.style.display="none"
        ans6.style.display="none"
    }
    else{
        ans1.style.display = "none"
        
    }
}

function que2 () {
    if (ans2.style.display == "none") {
        ans2.style.display = "block" 
        ans1.style.display="none"
        ans3.style.display="none"
        ans4.style.display="none"
        ans5.style.display="none"
        ans6.style.display="none"
    }
    else{
        ans2.style.display = "none"
        
    }
}

function que3 () {
    if (ans3.style.display == "none") {
        ans3.style.display = "block" 
        ans2.style.display="none"
        ans1.style.display="none"
        ans4.style.display="none"
        ans5.style.display="none"
        ans6.style.display="none"
    }
    else{
        ans3.style.display = "none"
        
    }
}

function que4 () {
    if (ans4.style.display == "none") {
        ans4.style.display = "block" 
        ans2.style.display="none"
        ans3.style.display="none"
        ans1.style.display="none"
        ans5.style.display="none"
        ans6.style.display="none"
    }
    else{
        ans4.style.display = "none"
        
    }
}

function que5 () {
    if (ans5.style.display == "none") {
        ans5.style.display = "block" 
        ans2.style.display="none"
        ans3.style.display="none"
        ans4.style.display="none"
        ans1.style.display="none"
        ans6.style.display="none"
    }
    else{
        ans5.style.display = "none"
        
    }
}

function que6 () {
    if (ans6.style.display == "none") {
        ans6.style.display = "block" 
        ans2.style.display="none"
        ans3.style.display="none"
        ans4.style.display="none"
        ans5.style.display="none"
        ans1.style.display="none"
    }
    else{
        ans6.style.display = "none"
        
    }
}







