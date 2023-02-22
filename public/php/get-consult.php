<?php 

$toWho = "dutyfree4you24@gmail.com";
$phone = $_POST['phone'];
$message = "phone: $phone";
if(mail("$toWho", "Letter", "$message")) {
    echo 'Отправленно';
    } else echo 'Возникли ошибки при отправке данных';
?>

