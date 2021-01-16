<?php

function kebabize($string) {
    // replace A-Z => -A,-B,C,...
    // lowercase all
    return strtolower(
      preg_replace(['/[^a-zA-Z]/', '/([A-Z])/', '/^-/'],
      ['', '-$1', ''], $string));
  }