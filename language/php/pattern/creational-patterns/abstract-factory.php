<?php

/**
 * Provide an interface for creating families of related 
 * or dependent objects without specifying 
 * their concrete classes.
 */
abstract class Shape
{
  abstract public function draw();
}

class Circle extends Shape
{
  public function draw()
  {
    return __CLASS__ . 'Shape';
  }
}

class Square extends Shape
{
  public function draw()
  {
    return __CLASS__ . 'Shape';
  }
}

class Rectangle extends Shape
{
  public function draw()
  {
    return __CLASS__ . 'Shape';
  }
}

class Ellipse extends Shape
{
  public function draw()
  {
    return __CLASS__ . 'Shape';
  }
}

abstract class Factory
{
  abstract public function createCurvedInstance();
  abstract public function createStraightInstance();
}

class SimpleShapeFactory extends Factory
{
  public function createCurvedInstance()
  {
    return new Circle();
  }

  public function createStraightInstance()
  {
    return new Square();
  }
}


class RobustShapeFactory extends factory
{
  public function createCurvedInstance()
  {
    return new Ellipse();
  }

  public function createStraightInstance()
  {
    return new Rectangle();
  }
}

$simple = new SimpleShapeFactory();
$robust = new RobustShapeFactory();

// result
sprintf(
  "SimpleShapeFactory:\n1. %s\n2. %s\n\nRobustShapeFactory:\n1. %s\n2. %s",
  $simple->createCurvedInstance()->draw(),
  $simple->createStraightInstance()->draw(),
  $robust->createCurvedInstance()->draw(),
  $robust->createStraightInstance()->draw()
);
