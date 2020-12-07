<details>
<summary>Boolean</summary>
<br>

```php
is_bool();
is_null();
isset();
empty();
```
</details>

<details>
<summary>String</summary>
<br>

```php
is_string();
```
</details>

<details>
<summary>Number</summary>
<br>

```php
is_int();
is_float();
```
</details>

<details>
<summary>Array</summary>
<br>

```php
is_array();
```
</details>

<details>
<summary>Object</summary>
<br>

```php
is_object();
```
</details>

<details>
<summary>Function</summary>
<br>

```php
is_callable();
```
</details>

<details>
<summary>CLI</summary>
<br>

```php
is_dir();
is_executable();
is_file();
is_link();
is_readable();
is_uploaded_file();
is_writable();
```
</details>

<details>
<summary>Etc</summary>
<br>

```php
is_countable();
is_iterable();
is_resource();
is_scalar();
```
</details>


## Foo

<details>
<summary>Email header validation</summary>
<br>

```php
$pattern = "(content-type|bcc:|cc:|to:)";
  foreach ($_POST as $value) {
      if (preg_match("/{$pattern}/i", $value)) {
          // detected
      }
  }
```
</details>
