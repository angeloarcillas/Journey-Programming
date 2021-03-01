<?php

// set reference function
function &collector()
{
    // declare var
    static $collection = array();

    // return var
    return $collection;
}

// reference &collector return statement
$collection = &collector();

// push 'foo' to $collection
array_push(collector(), 'foo');
