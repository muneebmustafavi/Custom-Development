<?php include_once("includes/header.php") ?>
	<div class="container product-main">
		<div class="row">
			<div class="col-md-12 col-md-12 col-sm-12">
				<!-- Breadcrumbs-->
				<ol class="breadcrumb mt-3">
				  <li class="breadcrumb-item">
					<a href="#">Products</a>
				  </li>
				  <li class="breadcrumb-item active">Dashboard</li>
				</ol>
			</div>
		</div>
		
		<div class="row product-main">
			<div class="col-md-12 product-main">
			<!-- Button to Open the Modal -->
			<!-- custom search bar-->
			<strong>Search: </strong><input type="search" class="light-table-filter" data-table="order-table" placeholder="Search..." style="padding: 5px; border:1px solid #ccc; width: 250px;">
			<button type="button" class="btn btn-primary btn  mb-3" data-toggle="modal" data-target="#myModal">
				Add New
			</button>
			<div class="product-main">
				<table class="table table-striped table-hover table-bordered my-4 order-table" id="myMemberTable">
					<?php include_once("includes/selectProduct.php")  ?>
				</table>
			</div>
			</div>
		</div>
	
	
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
							<form action="includes/addProduct.php" method="POST">
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Products Name:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productName">
										</div>
									</div>
								</div>
							<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Purching Rate:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productpurchasingRate">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Selling Rate:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productsellingRate">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Purching Date:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productpurchasingDate">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Expiry Date:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productexpiryDate">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Brand:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productbrandName">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Category:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productCategory">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Distributer:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productDistributer">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Status:</label>
										</div>
										<div class="col-md-8">
											<input type="text" class="form-control" name="productStatus">
										</div>
									</div>
								</div>
								<div class="form-group">
									<div class="row">
										<div class="col-md-4">
											<label>Discription:</label>
										</div>
										<div class="col-md-8">
											<textarea class="form-control" name="productNote"></textarea>
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
  </div>
	</div>
	
		
<?php include_once("includes/footer.php") ?>

<script>

  (function(document) {
  'use strict';

  var LightTableFilter = (function(Arr) {

    var _input;

    function _onInputEvent(e) {
      _input = e.target;
      var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
      Arr.forEach.call(tables, function(table) {
        Arr.forEach.call(table.tBodies, function(tbody) {
          Arr.forEach.call(tbody.rows, _filter);
        });
      });
    }

    function _filter(row) {
      var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
      row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
    }

    return {
      init: function() {
        var inputs = document.getElementsByClassName('light-table-filter');
        Arr.forEach.call(inputs, function(input) {
          input.oninput = _onInputEvent;
        });
      }
    };
  })(Array.prototype);

  document.addEventListener('readystatechange', function() {
    if (document.readyState === 'complete') {
      LightTableFilter.init();
    }
  });

})(document);

</script>