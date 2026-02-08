<?php

require_once 'dbconnect.php'; 

$sql = "SELECT id, brandName, brandStatus, brandNote FROM brand";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    echo "<tr><th>ID</th><th>Brand Name</th><th>Brand Status</th><th>Brand Note</th><th>Action</th><th>Update</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["id"]."</td><td>".$row["brandName"]."</td><td>".$row["brandStatus"]."</td><td>".$row["brandNote"]."</td><td><a href='includes/deleteBrand.php?id=".$row["id"]."'><button class='btn btn-danger'><sapn class='fa fa-trash'></span></button></a></td>
		
		<td><a href='includes/updateBrand.php?id=".$row["id"]."'><button class='btn btn-primary'><sapn class='fa fa-update'></span></button></a></td>
		
		</tr>";
    }
} else {
    echo "0 results";
}
$connect->close();
?>