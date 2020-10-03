<?php

namespace App\Http\Controllers;

use App\Answer;
use App\Question;
use Illuminate\Http\Request;

class AnswerController extends Controller
{

    public function store(Question $question, Request $request)
    {
        $attributes = $request->validate(['body' => 'required']);
        $attributes['user_id'] = auth()->user()->id;
        $question->answers()->create($attributes);

        return back()->with('success', 'Your answer has been submitted succesfully');
    }

    public function edit(Answer $answer)
    {
        $this->authorize('update', $answer);
        return view('answer.edit', compact('answer'));
    }

    public function update(Request $request, Answer $answer)
    {
        $this->authorize('update', $answer);
        $answer->update($request->validate([
            'body' => 'required',
        ]));

        // redirect to question
        // return redirect()->with('success', 'Your answer has been updated');
    }

    public function destroy(Answer $answer)
    {
        $this->authorize('delete', $answer);
        $answer->delete();
        return back()->with('success', 'Your answer has been deleted');
    }
}
