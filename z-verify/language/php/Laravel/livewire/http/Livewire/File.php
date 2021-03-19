<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithFileUploads;

class File extends Component
{
    use WithFileUploads;

    public $photo;
    public $photos = [];

    // upload
    public function save()
    {
        $this->validate([
            'photo' => 'image|max:1024', // 1MB Max
            'photos.*' => 'image|max:1024', // 1MB Max
        ]);


        $this->photo->store('photos'); // store the photo

        // multiple photo
        foreach ($this->photos as $photo) {
            $photo->store('photos');
        }

        // save()
    }

    // download
    public function export()
    {
        return Storage::disk('exports')->download('export.csv');
    }

    public function render()
    {
        return view('livewire.file');
    }
}
