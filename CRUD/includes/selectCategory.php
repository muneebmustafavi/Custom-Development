<?php

require_once 'dbconnect.php'; 

$sql = "SELECT id, categoryName, categoryStatus, categoryNote FROM category";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    echo "<tr><th>ID</th><th>Category Name</th><th>Category Status</th><th>Category Note</th><th>Action</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["id"]."</td><td>".$row["categoryName"]."</td><td>".$row["categoryStatus"]."</td><td>".$row["categoryNote"]."</td><td><a href='includes/deleteCategory.php?id=".$row["id"]."'><button class='btn btn-danger'><sapn class='fa fa-trash'></span></button></a></td></tr>";
    }
} else {
    echo "0 results";
}
$connect->close();
?>