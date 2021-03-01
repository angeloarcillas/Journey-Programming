<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// DOCS
Route::get('/properties', \App\Http\Livewire\Properties::class);
Route::get('/action', \App\Http\Livewire\Action::class);













// return component with layout
Route::get('/hello', function () {
    return view('livewire.hello-world');
});



Route::middleware('guest')->group(function () {
    Route::get('/register', \App\Http\Livewire\Auth\Register::class);
    Route::view('/login', 'auth.login');
    Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'login'])->name('login');
});


Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    });

    Route::get('/profile', \App\Http\Livewire\Profile::class);
});
