<!DOCTYPE>
<html>
<head>
	<title>Test</title>
</head>
<body>
	<h1>This is a test.</h1>
	<form method="post">
			<input type="text" name="name">
			<input type="email" name="email">
			<input type="submit" value="Submit">
	</form>
	<?php
		if(isset($_POST['email'])){
			$name = $_POST['name'];
			$email = $_POST['email'];

			mail('nicko.bsu@gmail.com', 'Contact', 'This is a Test', "From:" . $email);

			echo "Thank you for contacting us!";
		}
	?>
</body>
</html>