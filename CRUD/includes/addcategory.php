<?php
require_once 'dbconnect.php';

$categoryName = $_POST['categoryName'];
$categoryStatus = $_POST['categoryStatus'];
$categoryNote = $_POST['categoryNote'];

$sql = "INSERT INTO category (categoryName, categoryStatus, categoryNote)
VALUES ('$categoryName', '$categoryStatus', '$categoryNote')";

if ($connect->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

header('Location: http://localhost/crud/category.php');

$connect->close();
?>