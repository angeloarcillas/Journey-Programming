<?php

namespace App\Http\Livewire\Auth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;
use App\Models\User;

class Register extends Component
{

    public $email = '';
    public $password = '';
    public $passwordConfirmation = '';

    public function updatedEmail()
    {
        $this->validate([
            'email' => 'unique:users'
        ]);
    }

    public function register()
    {
        $data = $this->validate([
           'email' => 'required|email|unique:users',
           'password' => 'required|min:6|same:passwordConfirmation',
        ]);

        $user = User::create([
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        Auth::login($user);
        return redirect('/');
    }

    public function render()
    {
        return view('livewire.auth.register');
    }
}
