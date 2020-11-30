<?php

function thirt($n) {
    $sequence = [1,10,9,12,3,4];
    $sum = 0;
    $index = 0;
    foreach (array_reverse(str_split($n)) as $char) {
      $sum+=(int)$char * $sequence[$index % 6];
      $index++;
    }
    return ($n===$sum) ? $n : thirt($sum);
}