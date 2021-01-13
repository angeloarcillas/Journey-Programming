<?php

function getMiddle($str)
{
    $count = strlen($str);
    $pos = $count/2 - 1;
    return ($count % 2) ? substr($str, ceil($pos), 1) : substr($str, $pos, 2);
}