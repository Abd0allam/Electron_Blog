var form = document.getElementById("registration-form");
var validationMessage = document.getElementById("validation-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value.trim();
    var password = document.getElementById("password").value.trim();
    var email = document.getElementById("email").value.trim();
    var gender = document.querySelector('input[name="gender"]:checked');
    var sports = document.querySelectorAll('input[name="sports[]"]:checked');

    var errorMsgs = [];
    if ( typeof name === 'string' && name==null || name=="" ) {
        errorMsgs.push("Invalid User name.");
    }

    if (password.length < 8) {
        errorMsgs.push("Password must contain at least 8 characters .");
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        errorMsgs.push("Invalid email address.");
    }

    if (errorMsgs.length > 0) {
        document.getElementById("validation-message").innerHTML = errorMsgs.join("<br>");
        return false;
    }

    return true;
});