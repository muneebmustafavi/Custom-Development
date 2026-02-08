<?php 

session_start();

require_once 'dbconnect.php';

// echo $_SESSION['userId'];

if(!$_SESSION['userId']) {
	header('location: http://localhost/crud/index.php');	
} 



?>