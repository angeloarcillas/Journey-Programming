<?php

function shortWordLength($words)
{
    return min(array_map('strlen', (explode(' ', $words))));
}