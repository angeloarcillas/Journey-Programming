<?php

function stringEndsWith($str, $ending)
{
    // if string is empty return '';
    // compare string & return boolean
    return $ending == '' || substr_compare($str, $ending, -strlen($ending)) == 0;
}