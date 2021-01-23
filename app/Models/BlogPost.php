<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
      public function admin_name(){

        return  $this->belongsTo('App\Models\Admin','admin_id') ;
      }


      public function category_name(){

        return  $this->belongsTo('App\Models\Category','category_id') ;
      }


      
      public function comments(){

        return  $this->hasMany('App\Models\Comment','blog_post_id') ;
      }


}
