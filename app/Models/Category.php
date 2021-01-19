<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

       public function courses(){

            return $this->hasMany('App\Models\Course','category_id');

       }
}
