<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Livewire\WithPagination;

class Pagination extends Component
{

    use WithPagination;

    // use bootstrap pagination theme
    protected $paginationTheme = 'bootstrap';

    public $search = '';

    public function updatingSearch()
    {
        $this->resetPage(); // reset pagination
    }

    // set custom pagination view
    public function paginationView()
    {
        return 'custom-pagination-links-view';
    }

    public function render()
    {
        return view('livewire.pagination', [
            'posts' => Post::paginate(10),
        ]);
    }
}
