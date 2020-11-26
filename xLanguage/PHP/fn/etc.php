<?php


function reject($items, $func)
{
  return array_values(array_diff($items, array_filter($items, $func)));
}

reject(['Apple', 'Pear', 'Kiwi', 'Banana'], function ($item) {
  return strlen($item) > 4;
}); // ['Pear', 'Kiwi']
