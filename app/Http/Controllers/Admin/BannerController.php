<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage ;
use Image;
use App\Models\Banner;

class BannerController extends Controller
{
    
    
    public function get_banner_list(){

           $banners = Banner::orderBy('id','desc')->paginate(10);
           return response()->json([
                  "status" => "OK",
                  "banners" => $banners ,
           ]);
    }

    

     public function get_edit_banner_item($id){

           $banner = Banner::findOrFail($id);
           return response()->json([
                  "banner" => $banner ,
           ]);
    }

   
    // function for store banner 
    public function add_banner(Request $request){

         $validateData=$this->validate($request,[
               'image.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
          ]);

              $banner = new banner();
              $banner->status=1;
          if ($request->hasFile('image')) {           
                $path = $request->file('image')->store('images/banner', 'public');
                $banner->banner=$path ;
          }

          if ($banner->save()) {
              return response()->json([
                  'status' => 'OK',
                  'message' => 'New banner added',
              ]);
          }

    }



    // function for store banner 
    public function edit_banner(Request $request,$id){

         $validateData=$this->validate($request,[
               'image.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
          ]);

              $banner = Banner::findOrFail($id);
              $banner->status=1;
          if ($request->hasFile('image')) {

              if ($banner->image) {
                  unlink("storage/".$banner->banner);
              }
              
                $path = $request->file('image')->store('images/banner', 'public');
                $banner->banner=$path ;
          }

          if ($banner->save()) {
              return response()->json([
                  'status' => 'OK',
                  'message' => 'this banner updated',
              ]);
          }

    }



    
     public function deActive_banner($id){

           $banner = Banner::findOrFail($id);
           $banner->status=0 ;
           if ($banner->save()) {
                return response()->json([
                  "status" => "OK",
                  "message" => "this banner deactivated" ,
           ]);
           }
    }


        
     public function active_banner($id){

           $banner = Banner::findOrFail($id);
           $banner->status=1 ;
           if ($banner->save()) {
                return response()->json([
                  "status" => "OK",
                  "message" => "this banner activated" ,
           ]);
           }
    }



     public function delete_banner($id){

           $banner = Banner::findOrFail($id);
           if ($banner->delete()) {
                return response()->json([
                  "status" => "OK",
                  "message" => "this banner destroyed" ,
           ]);
           }
    }




}
