<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->integer('course_id');
            $table->string('name');
            $table->string('father_name');
            $table->string('mother_name');
            $table->string('email');
            $table->string('student_id');
            $table->string('gender');
            $table->date('dob');
            $table->string('phone');
            $table->text('address');
            $table->text('image');
            $table->string('our_payment_number');
            $table->string('payment_type');
            $table->string('bkash_number')->nullable();
            $table->string('nogod_number')->nullable();
            $table->string('transiction_id');
            $table->integer('fee');
            $table->integer('discount');
            $table->integer('total');
            $table->string('password');
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
        Schema::dropIfExists('students');
    }
}
