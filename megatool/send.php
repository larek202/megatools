<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

// другие важные переменные
$sender = 'toolworldkz@gmail.com';

// настройки кодировок и прочего
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->isHTML(true);

// переменные для вывода 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$text = $_POST['text'];

// настройки сервера
$mail->Host       = 'smtp.elasticemail.com';
$mail->SMTPAuth   = true;
$mail->Username   = $sender;
$mail->Password   = '17D5A3105FCFBE743C336204A606BC93B46B';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port       = 465;

// от кого письмо
$mail->setFrom($sender, 'Klient (No reply)');
// кому отправить
$mail->addAddress('toolworldkz@gmail.com');

// тема письма
$mail->Subject = 'Nowy wniosek o kontakt';

// тело письма
$body = '<p><strong>Imię:</strong> ' . $name . '</p>';
$body .= '<p><strong>E-mail:</strong> ' . $email . '</p>';
$body .= '<p><strong>Numer Telefonu:</strong> ' . $phone . '</p>';
$body .= '<p><string>Text:</strong> ' . $text . '</p>';

$mail->Body = $body;

// проверка отправки
if (!$mail->send()) {
  $message = 'error';
} else {
  $message = 'sended';
}

// получаем ответ и возвращаем его
$response = ['message' => $message];

header('Content-type: aplication/json');
echo json_encode($response);
