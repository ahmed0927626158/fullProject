<?php 



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "employeeDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
    $trp = mysqli_query($conn, "SELECT * from employee");
    $rows = array();
    while($r = mysqli_fetch_array($trp)) {
        $rows[] = $r;
        //echo $r.'<br>';
    }
    echo json_encode($rows); //convert php data to json data

/*
$data="Ahmed";

	$connect=mysqli_connect("localhost","root","","student");
	if(mysqli_connect_errno())
	{
		die("failded".mysqli_connect_error());
	}
	mysqli_set_charset($connect,"utf8");
	return $connect;

$conn=$connect;


$postdata=file_get_contents("php://input");

if(isset($postdata)&&!empty($postdata))
{
	$request=json_decode($postdata);
	$fname=$request->name;
	$email=$request->email;

	$sql="INSERT INTO reacts  values('$fname',' $email')";
}
else
{
	echo "not set";
}
*/
?>