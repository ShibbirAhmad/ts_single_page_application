<?php

namespace App\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Self_;
use Illuminate\Support\Facades\Password;
use Illuminate\Notifications\Notifiable;
use App\Mail\userTokenSend;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
   
   
    public function register(Request $request){

        $validatedData = $request->validate([
            'email' => 'required|email|unique:users',
            'name' => 'required ',
            'password' => 'required|min:6',
        ]);

        $user=new User();
        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=Hash::make($request->password);
        if ($request->hasFile('image')) {           
            $path = $request->file('image')->store('images/user', 'public');
            $user->image=$path ;
        }

        if($user->save()){

            //make login user
            Auth::attempt(['email' => $request->email, 'password' => $request->password]);
            return response()->json([
                'status'=>'OK',
                'message'=>'Thank you for join with us. Enjoy your learning',
                'user'=>Auth::user(),
                'token'=>$user->password
            ]);

        }
        

    }

 
    public function login(Request $request){

        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
          return response()->json([
              'status'=>'OK',
              'message'=>'Login successfully',
              'user'=>Auth::user(),
          ]);
        }
        
    }


    public function chekAuthUser(){
        if(Auth::user()){
            return response()->json([
                'status'=>'AUTHORIZED',
                'message'=>'you are login now',
                'user'=>Auth::user(),
            
            ]);
        }else{
            return response()->json([
                'status'=>'UNAUTHORIZED',
                'message'=>'you are not login'
            ]);

        }
    }



    public function logout(){


        if(Auth::logout()){
            
            return response()->json([
                'status'=>'SUCCESS',
                'message'=>'Log out was successfully'
            ]);

        }
    }


  
    public function resetCode(Request $request){
       

        $validatedData = $request->validate([
            'email' => 'required|email',
            ]);

          $user=User::where('email',$request->email)->first();
        if(empty($user)){
            return response()->json([
                'status'=>"ERROR",
                'message'=>"Email does not match our records"
            ]);
       }else{
            $code=rand(000000,999999);
            $user->remember_token=Hash::make($code);
            $user->save();
            Mail::to($user->email)->send(new userTokenSend($code));

            return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Check your email and verify the six digits code"
            ]);
        }
    }

public function codeVerify(Request $request, $email){
    
     $user=User::where('email',$email)->first();
 
     if(!empty($user)){
        if (Hash::check($request->code,$user->remember_token)) {
           return response()->json([
                'status'=>"SUCCESS",
                'message'=>"Code matched"
            ]);
        }else{
             return response()->json([
                'status'=>"ERROR",
                'message'=>"Code matching error"
            ]);
        }
     }

}


public function ResetPassword(Request $request,$email){

    $user=User::where('email',$email)->first();
        if(!empty($user)){
            $user->password=Hash::make($request->password);
            if($user->save()){
                return response()->json([
                    'status'=>"SUCCESS",
                    'message'=>"Passwrod update successfully"
                ]);
            }else{
                return response()->json([
                    'status'=>"ERROR",
                    'message'=>"Error establish"
                ]);
            }
        }
        else{
            return response()->json([
                'status'=>"ERROR",
                'message'=>"Error estblish"
            ]);
        }

    }

}