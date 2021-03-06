<?php

function revRot($s, $sz)
{
    $result = '';

    while ($sz > 0 && strlen($s) >= $sz) {
        $chunk   = substr($s, 0, $sz);
        $reverse = array_sum(str_split($chunk)) % 2 === 0;
        $result .= $reverse ? strrev($chunk) : substr($chunk . $chunk[0], 1);

        $s = substr($s, $sz);
    }

    return $result;
}
