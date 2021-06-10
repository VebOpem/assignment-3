console.log('linked validation ');
//form validation invoket with the "onclick" of the CONFIRM CONTACT button
function validateForm() {
    var x = document.forms['myForm']['uName'].value;
    //checks if name is null or has less characters than 3
    if (x == null || x == "") {
        alert("Please enter your name");
        document.getElementById('uName').focus();
        return false;
    } else if (x.length < 3) {
        alert("Your name cannot be shorter than 3 characters");
        document.getElementById('uName').focus();
        return false;
    }
    var a = document.forms['myForm']['age'].value;
    //checks if age is null and if the values are between 12 and 95
    if (a == null || a == "") {
        alert("age can not be empty");
        document.getElementById('age').focus();
        return false;
    }
    else if (parseInt(a) < 12 || parseInt(a) > 95) {
        alert("age should be between 12 and 95");
        document.getElementById('age').focus();
        return false;
    }
    var n = document.forms['myForm']['number'].value;
    //checks if number is not equal to 7 in length and if it is not a number
    if (n.length != 7) {
        alert("Your phone number must be 7 digits.");
        document.getElementById('tlf').focus();
        return false;
    } else if (isNaN(n)) {
        alert("Your phone number can only contain numbers.");
        document.getElementById('tlf').focus();
        return false;
    }
    var em = document.forms['myForm']['email'].value;
    var atpos = em.indexOf("@");
    var dotpos = em.lastIndexOf(".");
    //checks if email is null and if the "@" position and "." position would make for a valid adress. 
    if (em == null || em == "") {
        alert("email can not be empty");
        document.getElementById('email').focus();
        return false;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
        alert("Not a valid e-mail address");
        document.getElementById('email').focus();
        return false;
    }
};
