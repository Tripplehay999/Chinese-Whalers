<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'tripplehay2007@gmail.com'; // Replace with your email address
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = 'New Contact Form Submission';

    // Construct the email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    $success = mail($to, $subject, $message, $headers);

    // Redirect back to the form with a success message
    if ($success) {
        header('Location: index.html?status=success');
    } else {
        header('Location: index.html?status=error');
    }
} else {
    header('Location: index.html');
}
?>
