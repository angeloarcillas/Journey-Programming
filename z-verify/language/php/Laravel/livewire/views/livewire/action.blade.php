<div class="m-12">
  <div class="mb-6">
    {{-- Do your work, then step back. --}}
    <p class="mb-6">Clicked: <span
        class="font-semibold">{{ $counter }}</span>
    </p>

    <button wire:click="increment"
      class="border rounded py-2 px-3">Click</button>
  </div>

  <div class="mb-6">
    <div class="mb-6">
      {{-- update a property --}}
      <button wire:click="$set('counter', 99)"
        class="block py-2 px-3 border rounded">$set</button>
    </div>
    <div class="mb-6">
      <div class="mb-2">
        <input type="checkbox" @if ($isActive)
          checked @endif>
        <label class="ml-1 mb-2">isActive</label>
      </div>

      {{-- toggle boolean property --}}
      <button wire:click="$toggle('isActive')"
        class="block border rounded py-2 px-3">$toggle</button>
    </div>

    <div class="mb-6">
      {{--
        emmit an event: $listeners will listen for this event
            protected $listeners = ['custom-event' => 'doSomething']
        --}}
      <button
        wire:click="$emit('emitAnEvent')"
        class="py-2 px-3 border rounded">
        $emit
      </button>
      <button
        wire:click="$emit('emitAnEvent', 2)"
        class="py-2 px-3 border rounded">
        $emit + param
      </button>
    </div>
  </div>

  {{-- re-render component w/out firing any action --}}
  <button wire:click="$refresh"
    class="block py-2 px-3 border rounded">$refresh</button>
</div>
