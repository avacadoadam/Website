<?php
include '../Includes/DataBase.php';
include '../Includes/SessionCheck.php';
if(isset($_POST['CreateAccountUsername']) && isset($_POST['CreateAccountPassword'] )) {
    if(CheckLogin()){LogOutOfSession();}
    $Uname = mysqli_real_escape_string($conn, $_POST['CreateAccountUsername']);
    $psw = mysqli_real_escape_string($conn, $_POST['CreateAccountPassword']);
    $ErroMessages = "";
    $SuccessMessage = "";
    $HashedPsw = password_hash($psw, PASSWORD_DEFAULT);
    if (!SearchForUsername($conn, $Uname)) {
        AddAccount($conn, $Uname, $psw);
        $SuccessMessage = "Account Created";
        CreateSession($conn,$Uname);
    } else {
        $ErroMessages = "Error Username already in use";
    }
}else{
    echo "<script type=\"text/javascript\">location.href = 'CreateAccount.html';</script>";

}

/**
 * Created by PhpStorm.
 * User: avaca
 * Date: 11/23/2017
 * Time: 1:59 AM
 */?>
<html>
<head>
    <title>Create Account</title>
    <link rel="stylesheet" href="/CSS/Stylesheet.css" type="text/css">
</head>
<body>
<nav>
    <a href="index.php" id="HomePage">HomePage</a>
    <?php echo NavbarBuild();?>

</nav>
<div class="Container">

    <span><?php echo "<h1>".$SuccessMessage."</h1>"?></span>

    <span><?php echo "<h1>".$ErroMessages."</h1>"?></span>

    <button>Would You Like to Try Again</button>
</div>
</body>
</html>
