<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
     
      public function course_name(){

          return $this->belongsTo('App\Models\Course','course_id','id') ;

      }


      
}
