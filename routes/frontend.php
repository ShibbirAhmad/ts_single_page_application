<?php
 
 use Illuminate\Support\Facades\Route;
 
 Route::group([ 'namespace' => 'Frontend'],function(){

  
   Route::get('api/display/course/public','HomeController@get_course_list');
   Route::get('api/blog/post/public','HomeController@get_blog_post_list');
   Route::get('api/get/categories/to/display/frontend','HomeController@get_category_list');
   Route::get('api/get/landing/sliders/public','HomeController@get_landing_sliders');
   Route::get('api/get/banner/public','HomeController@get_banner');
   Route::get('api/get/category/sliders/public','HomeController@get_category_sliders');
   Route::get('api/get/upcoming/course/public','HomeController@get_upcoming_course');
   

  //get post details 
  Route::get('api/blog/details/{slug}','BlogPostController@get_blog_post_details');
  Route::get('api/course/details/{slug}','HomeController@get_course_details');

  //student route is start from here
  Route::post('api/student/register','StudentController@register_student');
  Route::get('api/student/login','StudentController@login_student');

 });

