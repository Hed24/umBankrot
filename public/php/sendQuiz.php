<?php
$toWho = "dutyfree4you24@gmail.com";
$phone = $_POST['phone'];
$data = $_POST['data'];
$message = "data: $data \n Phone: $phone";
if(mail("$toWho", "Letter", "$message")) {
    echo var_dump($_POST);
    } else echo 'Возникли ошибки при отправке данных';
?>