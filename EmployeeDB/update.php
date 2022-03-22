<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST,GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");




$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "employeeDB";

// Create connection
$conn =  mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: ". $conn->connect_error);
} 
   $postdata =file_get_contents("php://input");
   if(isset($postdata)&& !empty($postdata)) 
   {
    $req= json_decode($postdata);
   $no=$req->no;
    $fname=$req->firstname;
    $lastname=$req->lastname;
    $age=$req->age;
     $gender=$req->gender;
    $height=$req->height;

  

                  

    $sql="UPDATE employee set firstname='$fname',lastname='$lastname',age='$age',gender='$gender', height='$height' where no='$no'";

     

    $quer=mysqli_query($conn,$sql);
    
   }
   else
   {
    echo "not insert";
   }
















     //convert php data to json data

/*
$trp = mysqli_query($conn, "SELECT * from reactt");
    $rows = array();
    while($r = mysqli_fetch_array($trp)) {
        $rows[] = $r;
        //echo $r.'<br>';
    }
    echo json_encode($rows);

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