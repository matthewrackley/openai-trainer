<?php
$nonce = base64_encode(random_bytes(16));
$strongNonce = base64_encode(random_bytes(32));
$styleNonce = base64_encode(random_bytes(16));
$strongStyleNonce = base64_decode(random_bytes(32));
$scriptNonce = base64_encode(random_bytes(16));
$strongScriptNonce = base64_encode(random_bytes(32));
?>
