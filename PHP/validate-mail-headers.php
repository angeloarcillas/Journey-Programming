<?php

$pattern = "(content-type|bcc:|cc:|to:)";
  foreach ($_POST as $value) {
      if (preg_match("/{$pattern}/i", $value)) {
          // detected
      }
  }
