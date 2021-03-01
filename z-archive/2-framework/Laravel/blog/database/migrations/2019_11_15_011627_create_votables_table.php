<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVotablesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('votables', function (Blueprint $table) {
            //pivot table
            $table->unique(['user_id', 'votable_id', 'votable_type']);
            $table->foreignId('user_id');
            $table->unsignedBigInteger('votable_id');
            $table->string('votable_type');
            $table->bool('vote')->comment('0: down vote, 1: up vote');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('votables');
    }
}
