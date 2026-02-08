<?php 
require_once 'includes/dbconnect.php';


session_start();

if(isset($_SESSION['userId'])) {
	header('location: dashboard.php');	
}

$errors = array();

if($_POST) {		

	$username = $_POST['username'];
	$password = $_POST['password'];

	if(empty($username) || empty($password)) {
		if($username == "") {
			$errors[] = "Username is required";
		} 

		if($password == "") {
			$errors[] = "Password is required";
		}
	} else {
		$sql = "SELECT * FROM user WHERE username = '$username'";
		$result = $connect->query($sql);

		if($result->num_rows == 1) {
			$password = md5($password);
			// exists
			$mainSql = "SELECT * FROM user WHERE username = '$username' AND password = '$password'";
			$mainResult = $connect->query($mainSql);

			if($mainResult->num_rows == 1) {
				$value = $mainResult->fetch_assoc();
				$user_id = $value['user_id'];

				// set session
				$_SESSION['userId'] = $user_id;

				header('location: dashboard.php');	
			} else{
				
				$errors[] = "Incorrect username/password combination";
			} // /else
		} else {		
			$errors[] = "Username doesnot exists";		
		} // /else
	} // /else not empty username // password
	
} // /if $_POST
?>



<!DOCTYPE html>
<html>
	<head>

		<title>Login</title>

		<link rel="stylesheet" type="text/css" href="css/login.css">

		<link rel="stylesheet" type="text/css" href="css/bootstrap.css">

		<link rel="stylesheet" type="text/css" href="css/fonts.css">
		
		<link rel="stylesheet" href="css/font-awesome.min.css">
  
  <script src="js/jquery.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>

	</head>
<body style=" background-repeat: no-repeat; background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33)); background-size: 100% 100%; height: 850px;">


	<div class="container">

		<h1 class="page-title">
			Gym Menagement System
		</h1>
	
		<div class="login-main">
			
			<div class="profile-pic">

				<img src="images/login.png">

				<h2 class="title">Sign In</h2>

			</div>
						<div class="messages" style="width: 60%; margin: auto;">
							<?php if($errors) {
								foreach ($errors as $key => $value) {
									echo '<div class="alert alert-warning" role="alert">
									<i class="glyphicon glyphicon-exclamation-sign"></i>
									'.$value.'</div>';										
									}
								} ?>
						</div>
			<form class="form" action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" id="loginForm">

				<div class="row">
							
					<div class="col-md-12">
						
						<center><input type="text" class="form-control" id="username" name="username" placeholder="Username" autocomplete="off" autofocus="on" style="width: 60%;"></center>

					</div>

				</div>
				
				<div class="row">	

					<div class="col-md-12">	

						<center><input type="password" class="form-control" id="password" name="password" placeholder="Password" autocomplete="off" style="width: 60%;"></center>

					</div><!-- <br><br><br>

					<div class="col-md-12 box">	

						<input type="checkbox" name="remember"> <small>Remember Password</small>

					</div> -->

				</div>

				<div class="row">

					<div class="col-md-12" style="text-align: center;">	

						<input type="submit" name="signin" value="sign in" class="button">
						<h1>Sign Up</h1>
						<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
							Add New
						</button>

					</div>

				</div>

			</form>
		
		</div>
		
	</div>
	<br><br>
	<footer style="color: #fff; font-family: monospace;">
		<center>
			
			

		</center>
	</footer>

	<!-- The Modal -->
		  <div class="modal fade" id="myModal">
				<div class="modal-dialog">
					<div class="modal-content">
					  
						<!-- Modal Header -->
						<div class="modal-header">
							<h4 class="modal-title">Modal Heading</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
						
						<!-- Modal body -->
						<div class="modal-body">
							<form action="includes/addMember.php" method="POST">
								<div class="form-group">
									<div class="row">
										<div class="col-lg-2">
											<label>Name</label>
										</div>
										<div class="col-lg-10">
											<input type="text" class="form-control" name="userName">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-lg-2">
											<label>Email</label>
										</div>
										<div class="col-lg-10">
											<input type="text" class="form-control" name="Email">
										</div>
									</div>
								</div>	
								<div class="form-group">
									<div class="row">
										<div class="col-lg-2">
											<label>Password</label>
										</div>
										<div class="col-lg-10">
											<input type="password" class="form-control" name="Password" type="md5">
										</div>
									</div>
								</div>
							
						</div>
						
						<!-- Modal footer -->
						<div class="modal-footer">
							<button type="submit" class="btn btn-success">Submit</button>
							<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
						</div>
						</form>
					</div>
				</div>
		  </div>	
	

</body>
</html>

<script type="text/javascript" src="js/bootstrap.js"></script>

<script type="text/javascript" src="js/jq.js"></script>