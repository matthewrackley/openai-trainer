<?php
include 'nonce.php';
header("Content-Security-Policy: default-src 'self' 'nonce-$nonce'; style-src 'self' 'nonce-$styleNonce'; script-src 'self' 'nonce-$scriptNonce';");
header('X-Frame-Options: SAMEORIGIN');
header('X-XSS-Protection: 1; mode=block');
header('X-Content-Type-Options: nosniff');
header('Strict-Transport-Security: max-age=31536000; includeSubDomains');
header('Referrer-Policy: strict-origin-when-cross-origin');
?>
