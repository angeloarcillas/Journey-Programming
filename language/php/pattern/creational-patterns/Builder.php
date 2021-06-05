<?php

/**
 * Separate the construction of a complex object 
 * from its representation so that the same construction 
 * process can create different representations.
 */

class Client
{
  public $builder;
  public function build($builder)
  {
    $this->builder = $builder;
    $this->builder->build_part_a();
    $this->builder->build_part_b();
    $this->builder->build_part_c();
  }
}

abstract class Builder
{
  abstract public function build_part_a();
  abstract public function build_part_b();
  abstract public function build_part_c();
  abstract public function getResult();
}

class ConcreteBuilder extends Builder
{
  public $product;

  public function build_part_a()
  {
  }
  public function build_part_b()
  {
  }
  public function build_part_c()
  {
  }
  public function getResult()
  {
    return $this->product;
  }
}


$concreteBuilder = new ConcreteBuilder();
$client = new Client();

$client->build($concreteBuilder);
$product = $concreteBuilder->getResult();
