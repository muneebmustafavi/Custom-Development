<?php

require_once 'dbconnect.php'; 

$sql = "SELECT id, productName, productpurchasingRate, productsellingRate, productpurchasingDate, productexpiryDate, productbrandName, productCategory, productDistributer, productStatus, productNote FROM product";
$result = $connect->query($sql);

if ($result->num_rows > 0) {
    echo "<tr><th>Action</th><th>ID</th><th>Product Name</th><th>Purchasing Rate</th><th>Selling Rate</th><th>Purchasing Date</th><th>Expiry Date</th>
			<th>Brand Name</th><th>Product Category</th><th>Product Distributer</th><th>Product Status</th><th>Product Note</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td><a href='includes/deleteProduct.php?id=".$row["id"]."'><button class='btn btn-danger'><sapn class='fa fa-trash'></span></button></a></td><td>".$row["id"]."</td><td>".$row["productName"]."</td><td>".$row["productpurchasingRate"]."</td><td>".$row["productsellingRate"]."</td><td>".$row["productpurchasingDate"]."</td><td>".$row["productexpiryDate"]."</td><td>".$row["productbrandName"]."</td><td>".$row["productCategory"]."</td><td>".$row["productDistributer"]."</td><td>".$row["productStatus"]."</td><td>".$row["productNote"]."</td></tr>";
    }
} else {
    echo "0 results";
}
$connect->close();
?>