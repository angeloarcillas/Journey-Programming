<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Authorize extends Component
{

    use AuthorizesRequests;

    public function save()
    {
        $this->authorize('update', $this->post);

        $this->post->update(['title' => $this->title]);
    }

    public function render()
    {
        return view('livewire.authorize');
    }
}
