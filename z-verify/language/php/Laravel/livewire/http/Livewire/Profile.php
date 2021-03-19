<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Profile extends Component
{

    public $username = '';
    public $about = '';

    public function save()
    {
        $this->validate([
            'username' => 'max:24',
            'about' => 'max:140',
        ]);

        auth()->user()->update([
            'username' => $this->username,
            'about' => $this->about
        ]);
    }

    public function render()
    {
        return view('livewire.profile');
    }
}
