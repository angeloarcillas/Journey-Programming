<?php
/**
 * visibility
 */
public // global scope
protected // inheritance scope
private // class scope

/**
 * Scope resolution (::)                                                                                                                                                                                                                                                             operator
 */
static::foo();
self::foo();
parent::foo();
Foo::foo();


// anonymous class
$object = new class() {
  public function helloWorld()
  {
      echo "Hello Word!";
  }
};


class_exist() - if class defined
interface_exist() - if interface defined
method_exist() - if method defined
get_class() - return class name of object
get_parent_class() - return parent class name of object
is_subclass() - if object has parent
get_declared_classes() - return list of declared class
get_class_methods() - return class name of methods
get_class_vars() - return default properties of class

/**
 * Magic methods
 */
public function __construct()
public function __destruct()
public function __get()
public function __set()
public function __call()
public function __callStatic()
public function __invoke()
public function __clone()
public function __isset()
public function __unset()
public function __toString()
public function __serialize()
public function __unserialize()
public function __sleep()
public function __wakeup()
public static function __set_state()
public function __debugInfo()

/**
 * Final keyword
 *
 * Prevent overriding
 */
final class A {} // cannot extend
final public function speak() {} // cannot override

/**
 * ABSTRACT
 *
 * cannot be instantiated
 * Mixed of normal class & interface
 */
abstract class A
{
  public $prop;

  public function __construct() {
    $this->prop = 'Hello';
  }

  // abstract function - non-defined method
  abstract function speak();
}

class B extends A
{
  // implement speak function
  // can be public or protected
  public function speak()
  {
    echo "Speaking...";
  }
}

$obj = new B();
$obj->speak(); // Speaking...
echo $obj->prop; // Hello

/**
 * INTERFACE
 *
 * Not a class
 * A blueprint;
 * can declare only constant variable
 */
interface FooInterface
{
  const X = 'speakFoo';
  function speakX();
}
interface BarInterface
{
  const Y = 'speakBar';
  function speakY();
}
interface FooBarInterface
{
  const Z = 'speakFoobar';
  const X = 'speakFoobar';
  const Y = 'speakFoobar';
  function speakZ();
}



class Foobar implements FooInterface, BarInterface, FooBarInterface
{
  function speakX(){
  }
  function speakY(){
  }
  function speakZ(){
  }
}

$object = new Foobar();
echo Foobar::X; // echo const X var
echo Foobar::Y;
echo Foobar::Z;

/**
 * TRAIT
 *
 * Not a class
 * Contract between itself and class that impletements interface
 * similar to include() function
 */
trait FooTrait
{
  public $x = 'string';
  function functionName()
  {
    return $this->x;
  }
}

class Foo implements FooInterface
{
  use FooTrait;
}

$object = new Foo();
echo $object->functionName();


/* BETTER


**Interface**
- not a class
- blueprint for class
- cannot define methods
- can declare constant variable only
```php
interface A
{
  const FOO = 123;
  pulic function required($a, $b, $c);
}

class B implements A
{
  public function required($a, $b, $c) {
    // code...
  }
}

$obj = new B();
$obj->required();
$obj::FOO; // 123
```

**Abstract Class and Method**
- cannot be instantiated
- mixed of normal class & interface
```php
abstract class A
{
  public $prop;

  public function __construct() {
    $this->prop = 'Hello';
  }

  // abstract function - non-defined method
  abstract function speak();
  public function walk() {}
}

class B extends A
{
  // implement speak function
  // can be public or protected
  public function speak()
  {
    echo "Speaking...";
  }
}

$obj = new B();
$obj->speak(); // Speaking...
$obj->walk();
echo $obj->prop; // Hello
```

**Final Class and Method**
- prevent overriding
```php
final class A {} // cannot extend
final public function speak() {} // cannot override
```

**Traiit**
- not a class
- group of methods
```php
trait A
{
 public function speak() {}
 public function walk() {}
}

class B
{

  use A; // inherit trait A methods
}

$obj = new B();
$obj->speak();
$obj->walk();
```