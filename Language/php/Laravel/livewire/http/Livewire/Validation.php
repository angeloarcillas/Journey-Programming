<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Validator;

class Validation extends Component
{
    // fields to validate
    protected $rules = [
        'name' => 'required|min:6',
        'email' => 'required|email',
    ];

    // custom message
    protected $messages = [
        'email.required' => 'The Email Address cannot be empty.',
        'email.email' => 'The Email Address format is not valid.',
    ];

    protected $validationAttributes = [
        'email' => 'email address'
    ];

    public function mounted()
    {
        // add a validation message to the error bag.
        $this->addError('email', 'The email field is invalid.');

        // clear the error bag.
        $this->resetErrorBag();
        $this->resetValidation();
        // $this->resetErrorBag('email'); // clear specific errors

        // error bag instance
        $errors = $this->getErrorBag();
        $errors->add('some-key', 'Some message'); // append to error bag

        // custom validator
        Validator::make(
            ['email' => $this->email],
            ['email' => 'required|email'],
            ['required' => 'The :attribute field is required'],
        )->validate();
    }

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function save()
    {
        $validated = $this->validate();
        // $this->validate([ 'email' => 'required']); // if no rules

        // inline custom validation message
        $this->validate(
            ['email' => 'required|email'],
            [
                'email.required' => 'The :attribute cannot be empty.',
                'email.email' => 'The :attribute format is not valid.',
            ],
            ['email' => 'Email Address']
        );

        // flash a custom message
        session()->flash('message', 'Post successfully updated.');
    }

    public function render()
    {
        return view('livewire.validation');
    }
}
