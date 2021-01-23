<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
      public function replies(){

          return $this->hasMany('App\Models\CommentReply','comment_id');
      }


      public function user(){
          return $this->belongsTo('App\User','user_id');
      }
}
