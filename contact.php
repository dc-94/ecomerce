<?php
 
if($_POST) {
    $visitor_name = "";
    $visitor_tel  = "";
    $visitor_email = "";
    $email_title = "";
    $visitor_message = "";
     
    if(isset($_POST['visitor_name'])) {
      $visitor_name = filter_var($_POST['visitor_name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['visitor_tel'])) {
        $visitor_tel = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_tel']);
        $visitor_tel = filter_var($visitor_tel);
    }
    if(isset($_POST['visitor_email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['visitor_email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['email_title'])) {
        $email_title = filter_var($_POST['email_title'], FILTER_SANITIZE_STRING);
    }
     
     
    if(isset($_POST['visitor_message'])) {
        $visitor_message = htmlspecialchars($_POST['visitor_message']);
    }
     
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $visitor_email . "\r\n"
    .'Reply-To: ' . $visitor_email . "\r\n";
    $returnpath = '-f mr.d413@yahoo.com' ;
    $msg = '
    <html>
        <body>
            <table width="100%" border="0">
                <tr><td><strong>Nombre:</strong></td><td>' . $visitor_name . '</td></tr>
                <tr><td><strong>Teléfono:</strong></td><td>' . $visitor_tel . '</td></tr>
                <tr><td><strong>Email:</strong></td><td>' . $visitor_email . '</td></tr>
                <tr><td><strong>Consulta:</strong></td><td>' . $visitor_message . '</td></tr>
            </table>
        </body>
    </html>';
    if(mail($recipient, $email_title, $msg, $headers, $returnpath)) {
        echo "<script>alert('Gracias por escribirnos $visitor_name. Te contactaremos a la brevedad.');</script>";
        echo "<script type='text/javascript'>window.location.href='http://www.imfloors.com.ar/contact.html'</script>";

    } else {
        echo "<script>alert('Hubo un error, intentalo de nuevo.');</script>";
    }
     
} else {
    echo "<script>alert('Hubo un error, intentalo de nuevo.');</script>";
}
 
?>