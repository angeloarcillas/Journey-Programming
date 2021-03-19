<div class="h-screen p-12">
  {{now()}}
  <p class="my-6">
    output: {{implode(',', $greeting)}},
    {{ $name }}@if($loud) ! @endif
  </p>
  <input wire:model="name" type="text"
    class="block border p-2 mb-2">

  <input wire:model="loud" type="checkbox"
    class="block mb-2">

  <select wire:model="greeting" multiple
    class="block border p-2 mb-2">
    <option>Hello</option>
    <option>Hey</option>
    <option>Hi</option>
  </select>

  {{-- use default value --}}
  <button wire:click="resetName"
    class="block border p-2 mb-2">
    Reset Name
  </button>

  {{-- pass a value --}}
  <button wire:click="resetName('Doe')"
    class="block border p-2 mb-2">
    Frank
  </button>

  <div class="mb-2">
    <form action="#" {{-- setter --}}
      wire:submit.prevent="$set('name', 'Steve')">
      <button
        class="block border p-2">Steve</button>
    </form>
  </div>

  {{-- refresh current component --}}
  <button wire:click="$refresh">Refresh</button>

  <button wire:click="$emit('someEvent')">Refresh</button>

</div>

{{--
  // emit an event
  fn someMethod() {
    $this->emit($someEvent, $optionalVariable);
  }

  // listen an event
  protected $listeners = ['someEvent'];

  // listen an event with variable
  fn listen($optionalVariable) {

  }

  //# child component
  // only parent will listen this event
  fn someMethod() {
    $this->emitUp($someEvent);
  }
  --}}
