<?php

function hashPasswd($password)
{
  // Hash password
  $hashed = password_hash($password,PASSWORD_DEFAULT);

  // Check if password needs to be rehash
  while(password_needs_rehash($hashed,PASSWORD_DEFAULT))
  {
    $hashed = password_hash($password,PASSWORD_DEFAULT);
    continue;
  }

  return $hashed;
}

// Verify password
$verify = password_verify($password, $hashed);
