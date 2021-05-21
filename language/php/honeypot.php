<!-- index.php -->
<form>
  <input type="text" name="_honeypot" id="honeypot" autocomplete="off" />
  <input type="text" name="name" />
  <button type="submit">Submit</button>
</form>

<script>
  // most bots don't have js enabled
  document.querySelector('#honeypot').style.display = "hidden";
</script>


<?php
// server.php
$time = 123;
if ($_POST['honeypot' !== '']) sleep($time);

// code...
?>