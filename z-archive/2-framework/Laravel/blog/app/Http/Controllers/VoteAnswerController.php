<?php

namespace App\Http\Controllers;

use App\Answer;
use Illuminate\Http\Request;

class VoteAnswerController extends Controller
{
    public function store(Request $request, Answer $answer)
    {
        $answer->vote();
        return back();
    }

    public function destroy(Request $request, Answer $answer)
    {
        $answer->vote(false);
        return back();
    }
}
