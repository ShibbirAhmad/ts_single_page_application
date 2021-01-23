<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Course ;
use App\Models\BlogPost ;
use App\Models\Category;
use App\Models\Slider;
use App\Models\Banner;
use App\Models\CategorySlider;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Models\Comment;
use App\Models\CommentReply;


class HomeController extends Controller
{
     

        public function get_course_list(){
                $courses = Course::where('status',1)->with('category_name')->get();
                return response()->json([
                    "status" => "OK",
                    "courses" => $courses,
                ]);

          }




        public function get_blog_post_list(){

                    $blog_posts = BlogPost::where('status',1)->latest()->take(4)->with('category_name','admin_name')->get();
                    return response()->json([
                        "status" => "OK",
                        "blog_posts" => $blog_posts,
                    ]);
           }


        public function get_category_list(){

                $categories = Category::where('status',1)->get();
                return response()->json([
                    "status" => "OK",
                    "categories" => $categories
                ]);
          }



       public function get_landing_sliders(){

                $landing_sliders = Slider::where('status',1)->get();
                $banner=Banner::where('status',1)->latest()->take(1)->get();
                return response()->json([
                    "status" => "OK",
                    "landing_sliders" => $landing_sliders,
                    "banner" => $banner,
                ]);
        }


      public function get_banner(){
          
                $banner=Banner::where('status',1)->latest()->take(1)->get();
                return response()->json([
                    "status" => "OK",
                    "banner" => $banner,
                ]);
        }


        // to display category slider
        public function get_category_sliders(){

                $category_sliders = CategorySlider::where('page_position',1)->where('status',1)->get();
                return response()->json([
                    "status" => "OK",
                    "category_sliders" => $category_sliders,
                ]);

        }





        public function get_course_details($slug){

          $course = Course::where('slug',$slug)->with('category_name')->first();
          $other_course = Course::where('status',1)->latest()->take(10)->with('category_name')->get();
  
         return response()->json([
                    "status" => "OK",
                    "course" => $course ,
                    "other_course" => $other_course ,
                ]);

        }
      
    public function get_upcoming_course(){

             $upcoming_course = Course::where('status',1)->latest()->with('category_name')->first();
    
            return response()->json([
                        "status" => "OK",
                        "upcoming_course" => $upcoming_course ,
                        
                    ]);

        }


        
    public function get_categorywise_course($id){

         $category=Category::where('id',$id)->with('courses.category_name')->first();
         return response()->json([
             'status' => "OK",
             'category'=> $category,
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



}
