## Table of Contents
* [Syntax](#Syntax)
* [Types](#Types)
* [Variables](#Variables)
* [Operators](#Operators)
* [Control Structures](#Control-Structures)
* [Functions](#Functions)
* [Class and Objects](#Class-and-Objects)
* [Resource](#Resource)


<small>[Top](#Table-of-Contents)</small>

## Syntax
```php
<?php
$str = "Hello World!";
echo $str; // Hello World!
?>
```
<small>[Top](#Table-of-Contents)</small>

## Types
**Null**
```php
$a = null;
```

**Booleans**
```php
$a = true;
$b = false;
```

**Integer**
```php
$a = 123;
$a = -123;
```

**Float**
```php
$a = 1.23;
$a = -1.23;
```

**String**
```php
$a = "Foobar";
```

**Array**
```php
$a = ["foo", "bar", 1, 2]; // indexed
$b = ["foo" => 1, "bar" => 2]; // associative
```

**Objects**
```php
$object = new Object(); // class Object { ... }
```

**Callables**
```php
$a = function() {
        #...
    }
```
<small>[Top](#Table-of-Contents)</small>

## Variables
> A valid variable name starts with a letter or underscore, followed by any number of letters, numbers, or underscores.

**Basic**
```php
$var;
$_var;
$refVar = &$var; // reference $var
```

**Variable Variables**
```php
$a = "Hello";
$$a = "World!";
echo "$a ${$a}"; // Hello World!
echo "$a $hello"; // Hello World!
```

**Constatnt**
```php
define("FOO", "foobar");
echo FOO; // foobar

const BAR = "foobaz"
echo BAR; // foobaz
```
<small>[Top](#Table-of-Contents)</small>

## Operators
**Arithmetic**
```php
$x = 7;

$x + 1;         // 8
$x - 1;         // 6
$x * 2;         // 14
$x / 1;         // 7
$x ** 2;        // 49 (7^2)
$x % 1;         // 0
$x = (1+1) * 5  // 10
```

**Assignment**
```php
$a = 1;             // assign 1 to $a
$a = $b ?? "foo";   // if $b is empty $a = "foo" else $a = $b
$a = ($b=4) + 5;    // sum a & set b
echo "$a - $b ";    // 9 - 4

$a .= "bar";        // $a . "bar" | string concatination
$a ??= $b           // $a = $a ?? $b | null coalesce
$a += 5;            // $a = $a + 5
$a -= 5;            // $a = $a - 5
$a *= 5;            // $a = $a * 5
$a /= 5;            // $a = $a / 5

$a++                // $a = $a + 1 | increment
$a--                // $a = $a - 1 | decrement
```

**Comparison**
```php
$a = 0;

$a == 0;      // true
$a === '0';   // false
$a != 0;      // false
$a < 1;       // true
$a > 1;       // false
$a <= 1;      // true
$a >= 1;      // false

/* Spacehip Operator */
1 <=> 1;      // 0
1 <=> 2;      // -1
2 <=> 1;      // 1
```

**Logical**
```php
$a = true;
$b = false;
$a && $b      // true if $a and $b are true
$a || $b      // true if $a or $b are true
$a xor $b     // true if neither are equal
```

**Array**
```php
$a = ["a","b","c"];
$b = [1,2,3];
$a + $b;      // union
$a == $b;     // equality
$a != $b;     // inequality
$a <> $b;     // inequality
```
<small>[Top](#Table-of-Contents)</small>

## Control Structures
**If Statement**
```php
if (true) {
    # ...
} elseif (true) {
    # ...
} else {
    # ...
}
```

**Switch statement**
```php
switch ($var) {
    case 'value':
        # ...
        break;

    default:
        # ...
        break;
}
```

**Match Statement**
```php
match($var) {
    'value' => "expression",
    default => "expresion",
};
```

**While loop**
```php
while (true) {
    # ...
}
```

**Do While loop**
```php
do {
    # ...
} while (true);
```

**For loop**
```php
for ($i=0; $i < 5 ; $i++) {
    # ...
}
```

**Foreach loop**
```php
foreach ($iterable as $key => $value) {
    # ...
}
```

**Goto**
```php
goto a; // jump to target point
echo 'Foo';

a: // target point
echo 'Bar';

// result => 'Bar'
```

**Etc**
```php
break;  // stop current loop
continue;   // skip the rest then next iteration

// ternary operator
(true) ? true : false;
(true) ?: false;
```
<small>[Top](#Table-of-Contents)</small>

## Functions
```php
function foo(string $type = "foo"): string // must return string
{
    return $type;
}
echo foo(); // foo
echo foo(null); // error must return string, null returned
echo foo("string"); // string
```

**Return reference from function**
```php
class A {
    public $foo = 0;

    function &getFoo() {
        return $this->foo;
    }
}
$obj = new A();
$x =& $obj->getFoo(); // reference return
$obj->foo = 5; // x=5 since its reference
echo $x; // 5
```

**Variable Functions**
```php
function a() {
    # ...
}

function b() {
    # ...
}

$fn = 'a';
$fn(); // call a()

$fn = 'b';
$fn(); // call b()
```

**Anonymous Function**
```php
$greet = function($name) {
    echo "Hello, $name";
};

$greet('John'); // Hello, John
```

**Inherit variable from parent scope**
```php
$x = "foo";

function () use ($x) { // inherit $x
    var_dump($x); // foo
};

function () use (&$x) { // inherite by reference
    var_dump($x); // foo
};
```

**Arrow Function**
```php
$fn = fn($x) => $x + $y;

// same as above
function ($x) use ($y) {
    return $x + $y;
};
```
<small>[Top](#Table-of-Contents)</small>

## Class and Objects
```php

```
<small>[Top](#Table-of-Contents)</small>

## Resource









# PHP
  - PHP (personal homepage) Hypertext preprocessor
  - Zend engine 3

## Functions
```php
// Set default server timezone
date_default_timezone_set("Asia/Manila");
```