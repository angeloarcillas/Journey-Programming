<?php

namespace App\Http\Controllers;

// use App\Http\Requests\AskQuestionRequest; // custom request
use App\Question;

class QuestionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {
        return view('questions.index', [
            'questions' => Question::with('user')->latest()->paginate(5)
            ]);
    }

    public function show(Question $question)
    {
        $question->increment('views_count');
        return view('questions.show', compact('question'));
    }

    public function create()
    {
        return view('questions.create');
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'title' => 'required',
            'body' => 'required'
          ]);
        $attributes['user_id'] = auth()->user()->id;
        $question->create($attributes);

        return redirect('/questions')->with('success', 'your question has been submitted');
    }


    public function edit(Question $question)
    {
        $this->authorize('update', $question);
        return view('questions.edit', compact('question'));
    }

    public function update(Request $request, Question $question)
    {
        $this->authorize('update', $question);
        $attributes = $request->validate([
            'title' => 'required',
            'body' => 'required'
        ]);
        $question->update($attributes);

        return redirect('/questions')->with('success', 'your question has been updated');
    }

    public function destroy(Question $question)
    {
        $this->authorize('delete', $question);
        $question->delete();
        return redirect('/questions')->with('success', 'your question has been deleted');
    }
}
