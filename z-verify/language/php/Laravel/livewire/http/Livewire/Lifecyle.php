<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Lifecyle extends Component
{
    public function mount()
    {
        // component is initialized
    }

    public function hydrate()
    {
        // before action is called
    }

    public function hydrateFoo($value)
    {
        // run after $foo is hydrated
    }

    public function dehydrate()
    {
        // ater render() is called
    }

    public function dehydrateFoo($value)
    {
        // run after $foo is dehydrated
    }

    public function updating($value, $name)
    {
        // before any update to data (wire:model)
    }

    public function updated($value, $name)
    {
        // after any update to data (wire:model)
    }

    public function updatingFoo($value)
    {
        // before property is updated
    }

    public function updatedFoo($value)
    {
        // after property is updated
    }

    public function updatingFooBar($value)
    {
        // before updating nested ->bar on $foo property
    }

    public function updatedFooBar($value)
    {
        // after updating nested ->bar on $foo property
    }

    public function render()
    {
        return view('livewire.lifecyle');
    }
}
