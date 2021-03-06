<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Tweet;
use App\User;

use Faker\Generator as Faker;

$factory->define(Tweet::class, function (Faker $faker) {

    return [
        //
        'user_id' => User::pluck('id')->random(),
        'body' => $faker->sentence()
    ];
});
