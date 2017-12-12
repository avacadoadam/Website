<?php session_start();echo $_SESSION['LogID'];?>
<html>
<head>
    <title>Login</title>
    <link type="text/css" href="/CSS/Stylesheet.css" rel="stylesheet">
</head>
<body>
<?php
//Gets UserInput
include '../Includes/DataBase.php';
include '../Includes/SessionCheck.php';
$Username = htmlentities($_POST['UserName']);
$Password = htmlentities($_POST['password']);
$Confirmation = "";
$name = mysqli_escape_string($conn,$Username);
$psw = mysqli_escape_string($conn,$Password);
/***
 * Need to add encryption
 */
if(empty($name)  or empty($psw)){
    exit();
}else{

    if(Login($conn,$name,$psw)){
        $Confirmation = "You have Logged in";
        CreateSession($conn,$name);
    }else{
        $Confirmation = "Failed to Login";
    }
}


?>

<nav>
    <a href="index.php" id="HomePage">HomePage</a>
    <?php echo NavbarBuild();?>
</nav>

<div class="Container">
    <h1><?php echo $Confirmation?></h1>


</div>








</body>
</html>





