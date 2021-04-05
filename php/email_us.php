<?php
    //Programmer: Jon Mowry
    //Date Created: 03/31/2021
    //Last Updated: 03/31/2021
    require_once "../general/error.php";
    
    $name = $email = $text = "";
    $final = "b=1";
    $result = false;
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['text'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $text = $_POST['text'];
        $result = sendEmail($name, $email, $text);
        if  ($result === true)
            $final = "a=1";
        else 
            makeErrorFile($result); //writes error to log
    }
    header("Location: ../html/contact.html?$final");

    function sendEmail($name, $email, $text) {
        //In here is where the info for the IMAP if we had a server that could do that.
        //As well as the email content
        return true;
    }
?>