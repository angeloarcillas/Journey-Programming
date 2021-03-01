<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use Livewire\Livewire;

class LivewireTest extends TestCase
{
    /** @test*/
    public function name_and_email_fields_are_required_for_saving_a_contact()
    {
        Livewire::test('contact-form')
            ->set('name', '')
            ->set('email', '')


            // assert validation ($this->validate())
            ->assertHasNoErrors(['email' => 'required'])
            ->assertHasErrors([
                'name' => 'required',
                'email' => 'required',
            ]);
    }

    /** @test */
    public function can_upload_photo()
    {
        Storage::fake('avatars');

        $file = UploadedFile::fake()->image('avatar.png');

        Livewire::test(UploadPhoto::class)
            ->set('photo', $file)
            ->call('upload', 'uploaded-avatar.png');

        Storage::disk('avatars')->assertExists('uploaded-avatar.png');
    }
}
