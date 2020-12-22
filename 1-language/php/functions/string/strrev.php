<?php

function word_reverse(array $sentence)
{
    // reverse sentence
    // str to array
    // reverse array
    // concat array to string
    return implode(' ', array_reverse(explode(' ', strrev($sentence)))) ;
}