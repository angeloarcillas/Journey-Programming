<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Traits\Votable;

class Answer extends Model
{
    use Votable;

    protected $fillable = ['body', 'user_id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function isBest()
    {
        return $this->id === $this->question->best_answer_id;
    }
}

// public static function boot()
// {
//     parent::boot();
//     static::created(function ($answer) {
//         $answer->question->increment('answers_count');
//     });
//     static::deleted(function ($answer) {
//         // $question = $answer->question;
//         $answer->question->decrement('answers_count');
//         //set best answer to when if user deleted answer
//         if ($question->best_answer_id == $answer->id) { //-> refer to add foreign best ans table
//             $question->best_answer_id = null;
//             $question->save();
//         }
//     });
// }
