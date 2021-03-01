<?php

# Track request
$_SERVER['HTTP_X_FORWARDED_FOR'];
$_SERVER['REMOTE_ADDR'];
$_SERVER['HTTP_CLIENT_IP'];
$user = $_SERVER['HTTP_CLIENT_IP'] ?
           $_SERVER['HTTP_CLIENT_IP'] :
          ($_SERVER['HTTP_X_FORWARDED_FOR'] ?
          $_SERVER['HTTP_X_FORWARDED_FOR'] :
          $_SERVER['REMOTE_ADDR']);