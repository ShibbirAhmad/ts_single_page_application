<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BlogPost ;
use App\Models\Admin ;


class BlogPostController extends Controller
{
    
    public function get_blog_post_details($slug){

          $blog_post = BlogPost::where('slug',$slug)->with('admin_name')->first();
          $related_blog_posts = BlogPost::where('status',1)->where('category_id',$blog_post->category_id)->latest()->take(10)->with('category_name','admin_name')->get();
  
         return response()->json([
                    "status" => "OK",
                    "blog_post" => $blog_post ,
                    "related_blog_posts" => $related_blog_posts ,
                ]);

        }


}
