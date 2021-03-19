<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Properties extends Component
{

    public $name;
    public $age = 5;
    public $message = "Hello World!";

    // https://foo.com?foo="bar"&search="john"&page="5"
    public $foo;
    public $search = '';
    public $page = 1;
    protected $queryString = [
        'foo',

        // if empty exclude search from query string
        'search' => ['except' => ''],
        'page' => ['except' => 1],
    ];



    public function mount()
    {
        $this->name = "John"; // initialize property

        // mass fill properties
        $this->fill([
            'name' => 'John Doe',
            'age' => 55,
            'message' => 'Hello World!'
        ]);
    }

    public function resetProps()
    {
        // reset to initial state
        $this->reset(['isAdmin', 'isActive']);
    }


    // getter
    public function getPostProperty()
    {
        // return Post::find($this->postId);
    }

    public function render()
    {
        return view('livewire.properties');
    }
}
