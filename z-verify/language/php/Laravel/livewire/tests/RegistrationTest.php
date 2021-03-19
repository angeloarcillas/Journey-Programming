<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use Illuminate\Support\Facades\Hash;
use Livewire\Livewire;
use App\Models\User;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function can_see_register_component_on_register_page()
    {
        $this->get('/register')->assertSeeLivewire('auth.register');
    }

    /** @test */
    public function can_register()
    {
        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'secret')
            ->call('register')
            ->assertRedirect('/');

        $this->assertTrue(User::whereEmail('sample@mail.com')->exists());
        $this->assertEquals('sample@mail.com', auth()->user()->email);
    }

    /** @test */
    public function email_is_required()
    {
        Livewire::test('auth.register')
            ->set('email', '')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'secret')
            ->call('register')
            ->assertHasErrors(['email' => 'required']);
    }

    /** @test */
    public function email_is_a_valid_email()
    {
        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'secret')
            ->call('register')
            ->assertHasNoErrors();
    }

    /** @test */
    public function email_hasnt_been_taken()
    {
        User::create([
            'email' => 'sample2@mail.com',
            'password' => Hash::make('secret'),
        ]);

        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'secret')
            ->call('register')
            ->assertHasNoErrors();
    }

    /** @test */
    public function email_has_been_taken()
    {
        User::create([
            'email' => 'sample@mail.com',
            'password' => Hash::make('secret'),
        ]);

        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'secret')
            ->call('register')
            ->assertHasErrors(['email' => 'unique']);
    }

    /** @test */
    public function see_unique_email_validation_message_as_user_types()
    {
        User::create([
            'email' => 'sample2@mail.com',
            'password' => Hash::make('secret'),
        ]);

        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->assertHasNoErrors()
            ->set('email', 'sample2@mail.com')
            ->assertHasErrors(['email' => 'unique']);
    }

    /** @test */
    public function password_is_required()
    {
        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', '')
            ->set('passwordConfirmation', '')
            ->call('register')
            ->assertHasErrors(['password' => 'required']);
    }

    /** @test */
    public function password_is_minumum_of_six_character()
    {
        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'sec')
            ->set('passwordConfirmation', 'sec')
            ->call('register')
            ->assertHasErrors(['password' => 'min']);
    }

    /** @test */
    public function password_matches_passwordConfirmation()
    {
        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'secret')
            ->call('register')
            ->assertHasNoErrors();
    }

    /** @test */
    public function password_didnt_match_passwordConfirmation()
    {
        Livewire::test('auth.register')
            ->set('email', 'sample@mail.com')
            ->set('password', 'secret')
            ->set('passwordConfirmation', 'not-secret')
            ->call('register')
            ->assertHasErrors(['password' => 'same']);
    }
}
