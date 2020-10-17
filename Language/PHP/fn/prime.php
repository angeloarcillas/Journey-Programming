<?php

// PRIME
function isPrime($number)
{
  $boundary = floor(sqrt($number));
  for ($i = 2; $i <= $boundary; $i++) {
    if ($number % $i === 0) {
      return false;
    }
  }

  return $number >= 2;
}

isPrime(3); // true