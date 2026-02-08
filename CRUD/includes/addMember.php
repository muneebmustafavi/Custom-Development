<?php
require_once 'dbconnect.php';

$userName = $_POST['userName'];
$Email = $_POST['Email'];
$Password = md5($_POST['Password']);

$sql = "INSERT INTO user (username, email, password)
VALUES ('$userName', '$Email', '$Password')";

if ($connect->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

//header('Location: http://localhost/crud/index.php');

$connect->close();
?>