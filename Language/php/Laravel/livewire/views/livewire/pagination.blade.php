<div>
     @foreach ($posts as $post)
        {{-- ... --}}
    @endforeach

    {{-- set custom pagination view --}}
    {{ $posts->links('custom-pagination-links-view') }}
</div>
