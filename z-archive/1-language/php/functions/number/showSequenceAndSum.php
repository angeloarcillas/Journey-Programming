<?php

# Sequence of adding & result
function showSequenceAndSum($n) {
  if ($n < 0) return "$n < 0"; // if n is less than zero

  if ($n == 0) return "0 = 0"; // if n is equals to zero

  return implode("+", range(0, $n)) // 0 + n + n... = sum
      .' = '. ($count * ($count + 1) / 2);
}
