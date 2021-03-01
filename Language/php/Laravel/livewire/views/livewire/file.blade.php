<div>

    {{-- preview inputed photo --}}
    @if ($photo)
        Photo Preview:
        <img src="{{ $photo->temporaryUrl() }}">
    @endif

    {{-- loading state --}}
    <div wire:loading wire:target="photo">Uploading...</div>
</div>
