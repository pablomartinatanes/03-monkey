<?php
	
  $toemail = "monkeyscymbal@gmail.com";
  $name =($_POST["Name"]);
  $email = ($_POST["Email"]);
  $subject = ($_POST["Subject"]);
  $message = ($_POST["Message"]);
  $contenido = "Name: " . $name . "\nMail: " . $email . "\nSubject: " . $subject . "\nMessage: " . $message; //Variable con todo el contenido

  mail($toemail, "$subject", $contenido); //Envío del mail
  header("Location:index.html"); // Acción después de enviar el correo
