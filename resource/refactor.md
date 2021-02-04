source: https://refactoring.guru/
<hr>

## Methods

<br>

**Extract method**

- group code fragment that can be grouped.

```php
function extracted() {
  $this->validate();
  $this->printDetails();
}
```

**Inline Method**

- less code, easy to maintain

```php
function inline() {
    return $a ? 1 : 2;
}
```

**Extract Variable**

- Extract complex expression

```php
$a = $foo->index->all();
$b = $bar->isFoo();
$c = $baz->bar->foo;

if ($a || $b || $c) { ... }
```

**Inline Temp**

- less code, easy to maintain

```php
return $product->price > 100;
```

**Replace Temp with query**

- improve code readability

```php
if (basePrice($product) > 100) {}

function basePrice($product) {
    return $product->quantity * $product->price;
}
```

**Split tempory variable**

- use different temporary variable,
Each element of the program should
be responsible for only one thing.

```php
$a[] = $value[$i];
echo $a[0];

$b = 2 + 2;
echo $b;
```

**Remove assignments to parameter**

- Each element of the program should
be responsible for only one thing.

```php
function discount($value, $quantity) {
  $result = $value;

  if ($quantity > 50) {
    $result -= 2;
  }
```

**Replace Method with Method Object**

- Use when **Extract Method** is not possible
due to tangled masses of local variables that
are hard to isolate from each other.

```php
class Order {
  // ...
  public function price() {
    return (new PriceCalculator($this))->compute();
  }
}

class PriceCalculator {
  private $primaryBasePrice;
  private $secondaryBasePrice;
  private $tertiaryBasePrice;

  public function __construct(Order $order) {
      // Copy relevant information from the
      // order object.
  }

  public function compute() {
    // Perform long computation.
  }
}
```
