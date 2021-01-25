<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentReply extends Model
{
    
      public function user(){
          return $this->belongsTo('App\User','user_id');
      }


      
     public function likes(){

          return $this->hasMany('App\Models\ReplyLike','reply_id');
      }


}
