<?php 

$toWho = "dutyfree4you24@gmail.com";
$phone = $_POST['phone'];
$social = $_POST['social'];
$message = "phone: $phone  social: $social";
if(mail("$toWho", "Letter", "$message")) {
    echo 'Отправленно';
    } else echo 'Возникли ошибки при отправке данных';
?>

