<?php 

require_once 'includes/core.php';

// remove all session variables
session_unset(); 

// destroy the session 
session_destroy(); 

header('location: http://localhost/crud/index.php');

?>