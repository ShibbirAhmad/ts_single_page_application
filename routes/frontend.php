<?php
 
 use Illuminate\Support\Facades\Route;

  

 Route::group([ 'namespace' => 'Frontend'],function(){

   //user authentication route
    Route::post('api/user/register','AuthController@register');
    Route::post('api/login/to/user','AuthController@login');
    Route::get('api/logout/the/user','AuthController@logout_user');
    Route::get('api/check/user/session','AuthController@chekAuthUser');
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

      //setting route is here
    Route::get('api/get/footer/setting','HomeController@get_footer_setting');
    Route::get('api/get/general/setting','HomeController@get_general_setting');
    Route::get('api/get/theme/setting','HomeController@get_theme_setting');
 
   //subscription
   Route::post('api/subscriber/add','HomeController@add_subscription');


  //get post details 
  Route::get('api/blog/details/{slug}','BlogPostController@get_blog_post_details');
  Route::get('api/course/details/{slug}','HomeController@get_course_details');

  //student route is start from here
  Route::post('api/student/register','StudentController@register_student');
  Route::get('api/check/student/result/{student_id}','StudentController@check_student_result');


  Route::get('api/publish/team','HomeController@get_team_members');
  Route::get('api/get/all/bolg/post','HomeController@get_all_blog_posts');

 });



 Route::group(['namespace'=>'Frontend', 'middleware' => 'auth'],function(){
      
      Route::post('api/user/comment','BlogPostController@user_comment');
      Route::get('api/user/like/to/comment/{comment_id}','BlogPostController@user_like_dislike_on_comment');
      Route::post('api/user/reply/on/comment','BlogPostController@user_reply_on_comment');
      Route::get('api/user/like/to/reply/{reply_id}','BlogPostController@user_like_dislike_on_reply');
 });