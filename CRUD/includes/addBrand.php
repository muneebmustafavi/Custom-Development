<?php
require_once 'dbconnect.php';

$brandName = $_POST['brandName'];
$brandStatus = $_POST['brandStatus'];
$brandNote = $_POST['brandNote'];

$sql = "INSERT INTO brand (brandName, brandStatus, brandNote)
VALUES ('$brandName', '$brandStatus', '$brandNote')";

if ($connect->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

header('Location: http://localhost/crud/brand.php');

$connect->close();
?>