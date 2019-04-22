<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "jacobfenwick11@yahoo.com";
    $headers = "From: ". $mailFrom;
    $txt = "Name: ".$name."\n".
    "Email: ".$mailFrom."\n".
    "Phone: ".$phone."\n".
    "Address: ".$address."\n\n".
    $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: ../index.html?mailsend");
}
    
?>