<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Action extends Component
{
    public $counter = 0;
    public $isActive = false;
    protected $listeners = ['emitAnEvent', 'increment'];

    public function increment()
    {
        $this->counter++;
    }

    public function emitAnEvent($step = 1)
    {
        for ($i=0; $i < $step; $i++) {
            $this->increment();
        }
        // $this->emit('custom-event');
        // $this->emitUp('custom-event'); // scoping to parent
        // $this->emitTo('component', 'custom-event'); // scoping to component name
        // $this->emitSelf('custom-event'); // scoping to self component
    }

    public function addTodo($todo)
    {
        array_push($this->todos, [$todo]);
    }

    public function render()
    {
        return view('livewire.action');
    }
}
