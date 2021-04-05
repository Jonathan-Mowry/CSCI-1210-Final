//Programmer: Jon Mowry
//Date Created: 03/31/2021
//Last Updated: 03/31/2021

function validate() {
    var name = document.getElementById("txt_name").value;
    var email = document.getElementById("txt_email").value;
    var text = document.getElementById("txt_area").value;

    if (name == "" || email == "" || text == "") {
        display(1);
        return false;
    }
    return true;
}
function display(option = 0) {
    var sp = new URLSearchParams(window.location.search);
    var div = document.getElementById("alert_msg");
    var span = document.getElementById("span_msg");
    if (sp.has("a")) {
        span.innerHTML = "Email sent...Please allow 3 business days for us to process and reply. Thank you."
        div.className = "show";
    }
    else if (sp.has("b")) {
        span.innerHTML = "An error has occured. If the problem persists, please email *OUR EMAIL HERE* and we'll get it sorted. Thank you.";
        div.className = "show";
    }
    if (option == 1) {
        span.innerHTML = "Please fill out all the text boxes before clicking 'Submit'.";
        div.className = "show";
    }
}
display();