<?php

function reverseOddWords($str) {
    $words = explode(" ", $str); // str to array
    $counter = count($words); // get array length
    for ($i=1; $i<$counter; $i+= 2) { // 1,3,5,...
      $words[$i] = strrev($words[$i]); // reverse word
    }
    return trim(implode(" ", $words));
  }