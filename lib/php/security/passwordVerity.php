<?php
$password = js;
$options = [
'memory_cost' => 1024,
'time_cost' => 2,
'threads' => 2,
];
$hash = password_hash(
    $password,
    PASSWORD_ARGON2I,
    $options
);
echo $hash;
?>
