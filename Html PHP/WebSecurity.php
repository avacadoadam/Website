<?php
?>
<html>
<head><title>Adam on Websecurity</title>
<link href="/CSS/Stylesheet.css" rel="stylesheet" type="text/css">
</head>

<body>
<div class="Header">
<ul>
    <li><a href="Login.html">Login</a></li>
    <li><a href="test.html">Welcome to my website</a></li>
    <li><a href="CreateAccount.php">Create Account</a></li>
</ul>
<!--<span>You are Currently --><?php //echo $Session_Message?><!-- loged in</span>-->
</div>

<div class="Container">
<p>Beginning to delve into Web develpoment you start to learn about the risks of a bad coded website,Their
quite scary not only for the fact of how much damage can be cause to a person from the leak of a password and email,
    but how relativly easy theses attacks</p>

    <h1>SQL Injections</h1><p>SQL Injections a person does not much know how or inside information to perform such a attack,
but if your website has such weakness a whole database can be leaked or deleted.However this attack is very easly avoided with a simply function
build into PHP5 which is "mysqli_real_escape_string"</p>
<h1>html Injection</h1>
    <p>
        Like SQL Injections the attack will inject code into a search box,text field or some sort of input that will be instead of a username
        or product will contain code which the server will reconise as code and excute as if you were to write it.This can be dangerous as attacks can
        use javascript with a script tag and track users cookies allowing the attack to use the website as if he were another user that is login in or is
        ordering products.
    </p>


</div>


</body>
</html>
