<?php
/**
 * Created by PhpStorm.
 * User: avaca
 * Date: 11/28/2017
 * Time: 6:05 AM
 */
include  "../Includes/SessionCheck.php";
LogOutOfSession();
echo "<script type=\"text/javascript\">location.href = 'index.php';</script>";