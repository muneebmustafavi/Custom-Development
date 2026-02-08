<?php
require_once 'dbconnect.php';

$productName = $_POST['productName'];
$productpurchasingRate = $_POST['productpurchasingRate'];
$productsellingRate = $_POST['productsellingRate'];
$productpurchasingDate = $_POST['productpurchasingDate'];
$productexpiryDate = $_POST['productexpiryDate'];
$productbrandName = $_POST['productbrandName'];
$productCategory = $_POST['productCategory'];
$productDistributer = $_POST['productDistributer'];
$productStatus = $_POST['productStatus'];
$productNote = $_POST['productNote'];

$sql = "INSERT INTO product (productName, productpurchasingRate, productsellingRate,productpurchasingDate,productexpiryDate,productbrandName,productCategory,productQuantity,productDistributer,productStatus,productNote)
VALUES ('$productName', '$productpurchasingRate', '$productsellingRate', '$productpurchasingDate', '$productexpiryDate', '$productbrandName', '$productCategory', '$productDistributer', '$productStatus', '$productNote')";

if ($connect->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $connect->error;
}

header('Location: http://localhost/crud/product.php');

$connect->close();
?>