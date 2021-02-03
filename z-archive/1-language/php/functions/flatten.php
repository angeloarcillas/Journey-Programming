<?php

// MULTI-ARRAY TO SINGLE ARRAY
function flatten($items)
{
  $result = [];
  foreach ($items as $item) {
    if (!is_array($item)) {
      $result[] = $item;
    } else {
      array_push($result, ...array_values($item));
    }
  }

  return $result;
}

flatten([1, [2], 3, 4]); // [1, 2, 3, 4]