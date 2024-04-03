<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $whitelistLink = $_POST['whitelist_link'];
    $presaleTime = $_POST['presale_time'];
    $presalePlatform = $_POST['presale_platform'];
    $presaleLink = $_POST['presale_link'];
    $launchTime = $_POST['launch_time'];
    $launchPlatform = $_POST['launch_platform'];
    $launchLink = $_POST['launch_link'];

    // Email configuration
    $to = 'tripplehay2007@gmail.com', 'chinesewhalers@gmail.com'; // Replace with your email address
    $subject = 'Form Submission';
    $message = "Whitelist Link: $whitelistLink\n"
        . "Presale Time: $presaleTime\n"
        . "Presale Platform: $presalePlatform\n"
        . "Presale Link: $presaleLink\n"
        . "Launch Time: $launchTime\n"
        . "Launch Platform: $launchPlatform\n"
        . "Launch Link: $launchLink\n";
    $headers = "From: your-email@example.com"; // Replace with your email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully. Thank you!";
    } else {
        echo "Failed to send the form. Please try again later.";
    }
}
?>
