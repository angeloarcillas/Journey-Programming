<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Traits\Votable;

class Question extends Model
{
    use Votable;

    protected $fillable = ['title', 'body'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class)
          ->orderBy('votes_count', 'DESC');
    }

    public function isFavorited()
    {
        return (bool) $this->favorites()
          ->where('user_id', auth()->id())->count();
    }

    public function isAccepted($answer)
    {
        return $this->best_answer_id === $answer->id;
    }
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['slug'] = Str::slug($value, '-');
    }

    public function getPathAttribute($append = 'index')
    {
        return route("questions.{$append}", $this->slug);
    }
}

    // todo: move to controller
    // public function acceptBestAnswer(Answer $answer)
    // {
    //     $this->best_answer_id = $answer->id;
    //     $this->save();
    // }

    // public function getFavoritesCountAttribute()
    // {
    //     return $this->favorites->count();
    // }

    // public function voteQuestions()
    // {
    //     return $this->morphedByMany(Question::class, 'votable');
    // }

    // public function voteAnswers()
    // {
    //     return $this->morphedByMany(Answer::class, 'votable');
    // }
