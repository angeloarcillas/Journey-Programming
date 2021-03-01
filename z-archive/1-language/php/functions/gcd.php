<?php

function gcd(...$numbers)
{
  if (count($numbers) > 2) {
    return array_reduce($numbers, 'gcd');
  }

  $r = $numbers[0] % $numbers[1];
  return $r === 0 ? abs($numbers[1]) : gcd($numbers[1], $r);
}

gcd(8, 36); // 4
gcd(12, 18, 32); // 2
