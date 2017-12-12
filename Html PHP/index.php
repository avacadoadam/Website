<?php
include "../Includes/SessionCheck.php";
$LogedInBoolean = CheckLogin();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link href="/CSS/Stylesheet.css" type="text/css" rel="stylesheet">
</head>
<body>
<nav>
    <a href="index.php" id="HomePage">HomePage</a>
    <h3>Portifilo</h3>
    <?php echo NavbarBuild();?>
</nav>
<div class="Container">
    <a href="/MaxiVan/index.html" id="MaxiVan">
        <div>
        <h1>Website Design Project</h1>
        <p>A website for a Moving House Company using javascript to create a dynamic Forum</p>
    </div>
    </a>
    <a href="WebSecurity.php">
    <div class="Blocks" id="Security">
        <h1>Web Security</h1>
        <p>Creating websites has opened my eyes to malicious attacks that can be performed very easy if your website is not coded right</p>
    </div>
    </a>

        <a href="Python.php">
            <div>
        <h1>Python</h1>
        <p>Python a great lauguge and a must know for all programmers or IT people in general.</p>
            </div>
        </a>
    <a href="/Snake/Snake2.html">
    <div class="javascript">
        <h1>Javascript</h1>
        <p>I like javascript as it is a great lauguage that is somewhat simplified over java and usally most computer come with the abilty to run javascript code of that bat</p>
    </div>
    </a>
    <div class="Blocks">
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo labore sed voluptates. Accusamus aperiam consectetur culpa excepturi, illo natus nemo obcaecati quia quidem repellat? Blanditiis, ex, iure? Minus, reiciendis?</span><span>Adipisci consectetur consequuntur ducimus est expedita explicabo facere, fugit libero magnam maiores nam nihil odio porro quaerat, quas quia quidem sapiente sed totam voluptatem. Deserunt, fuga incidunt? Ea, fugit labore.</span></p>
    </div>
    <div class="Blocks">
        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos explicabo labore sed voluptates. Accusamus aperiam consectetur culpa excepturi, illo natus nemo obcaecati quia quidem repellat? Blanditiis, ex, iure? Minus, reiciendis?</span><span>Adipisci consectetur consequuntur ducimus est expedita explicabo facere, fugit libero magnam maiores nam nihil odio porro quaerat, quas quia quidem sapiente sed totam voluptatem. Deserunt, fuga incidunt? Ea, fugit labore.</span></p>
    </div>
</div>
</div>
</body>
</html>