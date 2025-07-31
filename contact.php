<?php
session_start();

// Generate CSRF token if not exists
if (empty($_SESSION['csrf_token'])) {
    $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
}

// Function to sanitize input
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verify CSRF token
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        die("CSRF token validation failed");
    }

    // Get and sanitize form data
    $name = sanitize_input($_POST['name']);
    $email = sanitize_input($_POST['email']);
    $company = sanitize_input($_POST['company'] ?? '');
    $message = sanitize_input($_POST['message']);

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        die("Please fill all required fields");
    }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format");
    }

    // Email configuration
    $to = "mkwawa666@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: noreply@yourwebsite.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Email body
    $email_body = "<h2>New Contact Form Submission</h2>";
    $email_body .= "<p><strong>Name:</strong> $name</p>";
    $email_body .= "<p><strong>Email:</strong> $email</p>";
    if (!empty($company)) {
        $email_body .= "<p><strong>Organization:</strong> $company</p>";
    }
    $email_body .= "<p><strong>Message:</strong><br>$message</p>";

    // Send email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "<script>alert('Message sent successfully!');</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again later.');</script>";
    }
}
?>
