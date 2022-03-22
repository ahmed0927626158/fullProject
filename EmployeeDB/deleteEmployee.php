<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST,GET,DELETE");
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
   

    $delet_fname=$req->firstname;
    $delet_lastname=$req->lastname;
    $delet_age=$req->age;
     $delet_gender=$req->gender;
    $delet_height=$req->height;


               
   

   

   
$delete ="DELETE FROM employee where firstname='$delet_fname' and lastname='$delet_lastname'and  age='$delet_age' and gender='$delet_gender' and height='$delet_height'";

    $quer=mysqli_query($conn,$delete);



    
   }
   else
   {
    echo "not insert";
   }









?>