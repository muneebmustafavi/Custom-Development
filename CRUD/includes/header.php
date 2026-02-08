<!DOCTYPE html>
<html lang="en">

<head>

  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>My Project</title>

  <link rel="stylesheet" href="css/font-awesome.min.css">
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/style.css">
  
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

</head>
<body>
	
	<!--navbar-->
	
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-4 pb-4 mynav">
		<button type="button" id="sidebarCollapse" class="btn btn-info togler-button-sidebar">
			<i class="fa fa-align-left"></i>
		</button>
		<a class="navbar-brand" href="#">Management System</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarTogglerDemo02"
			aria-controls="navbarTogglerDemo02" aria-expanded="false" 
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
			
		</div>
		<li> <a href="logout.php"><i class="fa fa-power-off"></i> Logout</a> </li>
	</nav>
	
	<!--//navbar-->
	<!--sidebartogler-->
	
	
	<div class="wrapper">
		<!-- Sidebar -->
		<nav id="sidebar">
			<ul class="list-unstyled components">
				<li>
					<form class="m-3">
					  <div class="input-group">
						<input type="text" class="form-control mr-0" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2">
						<div class="input-group-append">
						  <button class="btn btn-primary" type="button">
							<i class="fa fa-search ml-0"></i>
						  </button>
						</div>
					  </div>
					</form>
				</li>
				<li>
					<a href="dashboard.php"><i class="fa fa-dashboard"></i> Dashboard</a>
				</li>
				<li>
					<a href="brand.php"><i class="fa fa-diamond"></i> Brand</a>
				</li>
				<li>
					<a href="category.php"><i class="fa fa-sitemap"></i> Category</a>
				</li>
				<li>
					<a href="product.php"><i class="fa fa-shopping-cart"></i> Products</a>
				</li>
			</ul>
		</nav>