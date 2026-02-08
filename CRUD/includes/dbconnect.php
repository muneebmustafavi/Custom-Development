<?php
$localhost = "localhost";
$username = "root";
$password = "";
$dbname = "shop";

// Create connection
$connect = new mysqli($localhost, $username, $password, $dbname);

// Check connection
if ($connect->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>