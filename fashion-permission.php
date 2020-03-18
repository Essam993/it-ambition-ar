<?php
$name = $_POST['name'];
$email = $_POST['email'];
$purpose = $_POST['purpose'];


$message_sent =         "Name: ". $name. "\n".
                        "email: ".$email. "\n".
                        "purpose: ".$purpose;
if($name = null || $email == null || $purpose == null)
{
    header("Location: http://www.itambition.com/clothes.html");

}

else
{
    
mail('info@itambition.com','New fashion toys demo request',$message_sent,'from: noreply@itambition.com');

header("Location: http://www.clothes.itambition.com");

}

?>

