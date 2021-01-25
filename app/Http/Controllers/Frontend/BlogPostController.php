<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost ;
use App\Models\Admin ;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Models\Comment;
use App\Models\CommentReply;
use App\Models\CommentLike;
use App\Models\ReplyLike;


class BlogPostController extends Controller
{
    
    public function get_blog_post_details($slug){

          $blog_post = BlogPost::where('slug',$slug)->with(['admin_name','comments.likes','comments.replies.user','comments.replies.likes','comments.user'])->first();
          $related_blog_posts = BlogPost::where('status',1)->where('category_id',$blog_post->category_id)->latest()->take(10)->with('category_name','admin_name')->get();
  
         return response()->json([
                    "status" => "OK",
                    "blog_post" => $blog_post ,
                    "related_blog_posts" => $related_blog_posts ,
                ]);

        }




        

    public function user_comment(Request $request){

          $validateData=$request->validate([
              'comment' => 'required',
              'post_id' => 'required',
          ]);

         $comment=new Comment();
         $comment->blog_post_id=$request->post_id;
         $comment->user_id=Auth::user()->id;
         $comment->comment=$request->comment;
         if ($comment->save()) {
             return response()->json([
                 'status'=>'OK',
                 'message'=>'comment added successfully'
             ]);
         }

    }
      


    public function user_reply_on_comment(Request $request){

          $validateData=$request->validate([
              'comment_id' => 'required',
              'comment_reply' => 'required',
          ]);

         $reply=new CommentReply();
         $reply->comment_id=$request->comment_id;
         $reply->user_id=Auth::user()->id;
         $reply->reply=$request->comment_reply;
         if ($reply->save()) {
             return response()->json([
                 'status'=>'OK',
                 'message'=>'reply added successfully'
             ]);
         }

    }


    public function user_like_dislike_on_comment($comment_id){

         $user_id=Auth::user()->id;
         $checkLike=CommentLike::where('comment_id',$comment_id)->where('user_id',$user_id)->first();
         if (!$checkLike) {
            $comment_like=new CommentLike();
            $comment_like->comment_id=$comment_id;
            $comment_like->user_id=$user_id;
            $comment_like->like=1;
            if ($comment_like->save()) {
                return response()->json([
                    'status'=>'LIKE',
                ]);
            }  
         }else{   
            if ($checkLike->delete()) {
                  return response()->json([
                    'status'=>'DISLIKE',
                ]);
            } 
         }
        

    }




   public function user_like_dislike_on_reply($reply_id){

         $user_id=Auth::user()->id;
         $checkLike=ReplyLike::where('reply_id',$reply_id)->where('user_id',$user_id)->first();
         if (!$checkLike) {
            $comment_like=new ReplyLike();
            $comment_like->reply_id=$reply_id;
            $comment_like->user_id=$user_id;
            $comment_like->like=1;
            if ($comment_like->save()) {
                return response()->json([
                    'status'=>'LIKE',
                ]);
            }  
         }else{   
            if ($checkLike->delete()) {
                  return response()->json([
                    'status'=>'DISLIKE',
                ]);
            } 
         }
        

    }





}
