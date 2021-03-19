<div class="m-12">
  <form wire:submit.prevent="method">
    <div class="mb-8">
      <div class="mb-6">
        <label class="block">Name</label>
        {{-- bind to $name property --}}
        <input wire:model="name" type="text">
      </div>

      <div>
        <label class="block">Age</label>
        {{-- update after 500ms --}}
        <input type="text"
          wire:model.debounce.500ms="age">
      </div>

      <div>
        <label class="block">Message</label>
        {{-- update after unfocus --}}
        <input type="text"
          wire:model.lazy="message">

        {{-- update on next request not after unfocus  --}}
        <input type="text"
          wire:model.defer="query">
      </div>
    </div>
  </form>

  <div class="p-4 bg-blue-200 rounded">

    <p class="text-gray-700">Name: <span
        class="text-black font-semibold">{{ $name }}</span>
    </p>
    <p class="text-gray-700">Age: <span
        class="text-black font-semibold">{{ $age }}</span>
    </p>
    <p class="text-gray-700">Message: <span
        class="text-black font-semibold">{{ $message }}</span>
    </p>
  </div>


  <div>
     @foreach ($posts as $post)
        <p wire:key={{ $post.id}}>{{ $post }}</p>
    @endforeach
  </div>

</div>
