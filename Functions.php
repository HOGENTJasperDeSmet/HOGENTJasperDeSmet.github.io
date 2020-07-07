<?php require 'PHPMailer/PHPMailerAutoload.php';?>
<?php
function Redirect_to($New_Location)
{header("Location:" . $New_Location);
    exit;
}
// call the register() function if register_btn is clicked
$result = CheckCaptcha($_POST['g-recaptcha-response']);
if ($result['success']) {
    if (isset($_POST['quote_btn'])) {
        quote();
    }
}

function CheckCaptcha($userResponse) {
    $fields_string = '';
    $fields = array(
        'secret' => 6LdYJq4ZAAAAAKVGPjdvQvZqHcI1UXwYMXYEKFGn
        'response' => $userResponse
    );
    foreach($fields as $key=>$value)
    $fields_string .= $key . '=' . $value . '&';
    $fields_string = rtrim($fields_string, '&');

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
    curl_setopt($ch, CURLOPT_POST, count($fields));
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, True);

    $res = curl_exec($ch);
    curl_close($ch);

    return json_decode($res, true);
}

// Quote
function quote()
{
    if (isset($_POST["quote_btn"])) {

        // Email Functionality

        date_default_timezone_set('Etc/UTC');

        $mail2 = new PHPMailer();
        $mail3 = new PHPMailer();

        $mail3->setFrom('isaaccaudron.photo@gmail.com');
        $mail3->addAddress($_POST['email']);

        $mail2->setFrom($_POST['email']);
        $mail2->addAddress('isaaccaudron.photo@gmail.com');

        $mail3->Subject = 'Thanks ' . $name . ' Your form details submitted successfully! We will contact you soon!'; // The subject of the message.

        $mail2->Subject = 'Received Message From Client ' . $name; // The subject of the message.

        $message = '<html><body>';

        $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';

        $message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['name']) . "</td></tr>";

        $message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";

        $message .= "<tr><td><strong>Message:</strong> </td><td>" . strip_tags($_POST['message']) . "</td></tr>";

        $message .= "</table>";
        $message .= "</body></html>";

        $mail3->Body = $message;
        $mail2->Body = $message;

        $mail3->isHTML(true);
        $mail2->isHTML(true);

        if ($mail3->send() && $mail2->send()) {
            Redirect_to("thanks.html");
        } else {
            Redirect_to("contact.html");
        }

    } //Ending of Submit Button If-Condition

}

// escape string
function e($val)
{
    global $db;
    return mysqli_real_escape_string($db, trim($val));
}
