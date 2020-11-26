<?php

namespace App\Http\Controllers;

use App\Answer;

class BestAnswerController extends Controller
{
    public function __invoke(Answer $answer)
    {
        $this->authorize('accept', $answer);
        $answer->bestAnswer();
        return back();
    }
}