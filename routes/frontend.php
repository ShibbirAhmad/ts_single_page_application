<?php
 
 use Illuminate\Support\Facades\Route;

  

 Route::group([ 'namespace' => 'Frontend'],function(){

   //user authentication route
    Route::post('api/user/register','AuthController@register');
    Route::post('api/user/login','AuthController@login');
    Route::get('api/user/check','AuthController@chekAuthUser');
    Route::post('api/user/password/reset/send/code','AuthController@resetCode');
    Route::post('api/user/password/verify/code/{email}','AuthController@codeVerify');
    Route::post('api/user/password/reset/{email}','AuthController@ResetPassword');
   
  
   Route::get('api/display/course/public','HomeController@get_course_list');
   Route::get('api/blog/post/public','HomeController@get_blog_post_list');
   Route::get('api/get/categories/to/display/frontend','HomeController@get_category_list');
   Route::get('api/get/landing/sliders/public','HomeController@get_landing_sliders');
   Route::get('api/get/banner/public','HomeController@get_banner');
   Route::get('api/get/category/sliders/public','HomeController@get_category_sliders');
   Route::get('api/get/upcoming/course/public','HomeController@get_upcoming_course');
   Route::get('api/get/categorywise/course/{id}','HomeController@get_categorywise_course');
 
   //user logon and register
   Route::post('api/user/store','UserController@user_store');


  //get post details 
  Route::get('api/blog/details/{slug}','BlogPostController@get_blog_post_details');
  Route::get('api/course/details/{slug}','HomeController@get_course_details');

  //student route is start from here
  Route::post('api/student/register','StudentController@register_student');
  Route::get('api/check/student/result/{student_id}','StudentController@check_student_result');

 });

