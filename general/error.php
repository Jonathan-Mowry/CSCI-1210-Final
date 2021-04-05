<?php
    //Programmer: Jon Mowry
    //Date Created: 03/31/2021
    //Last Updated: 03/31/2021

    function makeErrorFile($error) { //writes errors to log inside same directory as this file is
        $filePath = dirname(__FILE__) . "\\errors.txt";
        $myfile = fopen($filePath, "a");
        date_default_timezone_set('America/New_York');
        $date = date("m/d/Y g:i A");
        fwrite($myfile, "$date : $error\r\n------------------------------\r\n");
        fclose($myfile);
    }
?>