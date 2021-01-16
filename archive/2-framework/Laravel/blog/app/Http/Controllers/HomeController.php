<?php

namespace App\Http\Controllers;

class HomeController extends Controller
{
    // TODO: use view route
    public function __invoke()
    {
        return view('home');
    }
}
