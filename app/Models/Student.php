<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
     
      public function course_name(){

          return $this->belongsTo('App\Models\Course','course_id') ;

      }


    public function student_result(){

          return $this->hasOne('App\Models\Result','student_id') ;

      }

      
}
