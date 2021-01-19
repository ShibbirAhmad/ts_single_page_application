<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
     public function course_name(){

          return  $this->belongsTo('App\Models\Course','course_id') ;

      }


       public function student_info(){

          return  $this->belongsTo('App\Models\Student','student_id') ;

      }


}
