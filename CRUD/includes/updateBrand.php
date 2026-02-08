<?php

	require_once 'dbconnect.php';

	$id = $_GET["id"];

	// sql to update a record
	$sql = "UPDATE FROM brand WHERE id='$id'";

	if ($connect->query($sql) === TRUE) {
	    echo "Record updated successfully";
	} else {
	    echo "Error updated record: " . $connect->error;
	}

	header("Location:../brand.php");

	$connect->close();
?>