<?php

	require_once 'dbconnect.php';

	$id = $_GET["id"];

	// sql to delete a record
	$sql = "DELETE FROM product WHERE id='$id'";

	if ($connect->query($sql) === TRUE) {
	    echo "Record deleted successfully";
	} else {
	    echo "Error deleting record: " . $connect->error;
	}

	header("Location:../product.php");

	$connect->close();
?>
