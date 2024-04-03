<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = $_POST['name'];
    $symbol = $_POST['symbol'];
    $description = $_POST['description'];
    $chain = $_POST['chain'];
    $contractAddress = $_POST['contract_address'];
    $websiteLink = $_POST['website_link'];
    $telegramLink = $_POST['telegram_link'];
    $telegramChinese = $_POST['telegram_chinese'];
    $btokLink = $_POST['btok_link'];
    $twitterLink = $_POST['twitter_link'];
    $discordLink = $_POST['discord_link'];
    $whitelistLink = $_POST['whitelist_link'];
    $projectLink = $_POST['project_link'];
    $dexscreenerLink = $_POST['dexscreener_link'];
    $presaleTime = $_POST['presale_time'];
    $presalePlatform = $_POST['presale_platform'];
    $presaleLink = $_POST['presale_link'];
    $launchTime = $_POST['launch_time'];
    $launchPlatform = $_POST['launch_platform'];
    $launchLink = $_POST['launch_link'];
    

    // Email configuration
    $to ='chinesewhalers@gmail.com'; // Replace with your email address
    $subject = 'Form Submission';
    $message = "Name: $name\n"
        . "Symbol: $symbol\n"
        . "Description: $description\n"
        . "Chain: $chain\n"
        . "Contract Address: $contractAddress\n"
        . "Website Link: $websiteLink\n"
        . "Telegram Link: $telegramLink\n"
        . "Telegram Chinese: $telegramChinese\n"
        . "Btok Link: $btokLink\n"
        . "Twitter Link: $twitterLink\n"
        . "Discord Link: $discordLink\n";
        . "Whitelist Link: $whitelistLink\n"
        . "Project Link: $projectLink\n"
        . "DexScreener Link: $dexscreenerLink\n"
        . "Presale Time: $presaleTime\n"
        . "Presale Platform: $presalePlatform\n"
        . "Presale Link: $presaleLink\n"
        . "Launch Time: $launchTime\n"
        . "Launch Platform: $launchPlatform\n"
        . "Launch Link: $launchLink\n";

    $headers = "From: tripplehay2007@gmail.com"; // Replace with your email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Form submitted successfully. Thank you!";
    } else {
        echo "Failed to send the form. Please try again later.";
    }
}
?>
