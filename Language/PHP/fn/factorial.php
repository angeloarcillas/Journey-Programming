<?php

// FACTORIAL
function factorial($n)
{
  if ($n <= 1) {
    return 1;
  }

  return $n * factorial($n - 1);
}

factorial(6); // 720