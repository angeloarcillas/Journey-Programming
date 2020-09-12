<?php
/**
 * Return item name from $items within $collection
 */

// v1
$collection->pluck('items')->flatten()->pluck('name')->unique();

// v2 | pluck(items . every item . item name)
$collection->pluck('items.*.name')->flatten()->unique(); // Using dot notation
