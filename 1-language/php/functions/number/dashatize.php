<?php

function dashatize(int $num): string {
    // replace and trim extra dash
  return trim(str_replace('--', '-',
    // replace all odd number
    preg_replace('/([13579])/','-$1-', $num)
    ), '-');
}