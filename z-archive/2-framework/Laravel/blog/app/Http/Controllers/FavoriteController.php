<?php

namespace App\Http\Controllers;

use App\Question;

class FavoriteController extends Controller
{
    public function store(Question $question)
    {
        $question->favorites()
          ->toggle(auth()
          ->user()
          ->id());
        return back();
    }
}
