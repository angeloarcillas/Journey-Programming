<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Tweet;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 10)->create();
        factory(Tweet::class, 30)->create();
    }
}
