<?php

namespace App\Http\Controllers;

use App\Question;
use Illuminate\Http\Request;

class VoteQuestionController extends Controller
{
    public function store(Request $request, Question $question)
    {
        $question->vote();
        return back();
    }

    public function destroy(Request $request, Question $question)
    {
        $question->vote(false);
        return back();
    }

}
