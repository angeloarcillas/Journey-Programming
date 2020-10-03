<?php

namespace App\Traits;

trait Votable
{
    public function votes()
    {
        return $this->morphToMany('App\Vote', 'votable');
    }

    public function vote($vote = true)
    {
        if ($this->isVoted($vote)) {
            return $this->votes()
              ->where('user_id', auth()->user()->id)
              ->where('voted', $vote)->delete();
        }

        return $this->votes()->updateOrCreate(
            [
              'user_id' => auth()->id(),
              'votable' => $this->id
            ],
            [ 'vote' => $vote ]
        );
    }

    public function isVoted($vote = true)
    {
        return (bool) $this->votes()
          ->where('user_id', auth()->user()->id)
          ->where('vote', $vote)
          ->count();
    }
}
