<?php
include "../Includes/SessionCheck.php";
$LogedInBoolean = CheckLogin();
?>
<html>
<head><title>Snake</title></head>
<link rel="stylesheet" href="/CSS/Stylesheet.css">
<body>
<style> canvas{border:5px grey solid;}</style>
<nav>
    <a href="index.php" id="HomePage">HomePage</a>
    <h3>Portifilo</h3>
    <?php echo NavbarBuild();?>
</nav>
<div class="Container">
    <canvas id="gc" width="400" height="400"></canvas>
</div>
<script src="Snakejs.js" type="application/javascript"></script>

</body>

</html>

