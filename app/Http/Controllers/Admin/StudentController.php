<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Result;

class StudentController extends Controller
{
    

      public function get_registered_students(Request $request){

             $item = $request->item ?? 20 ; 
             $students=Student::orderBy('id','desc')->with('course_name')->paginate($item);   

             return  response()->json([ 
                 "status" => "OK",
                 "students" => $students,
             ]);
      }



      public function registered_students_of_course($id){

             $students=Student::where('course_id',$id)->orderBy('id','desc')->with('course_name')->paginate(20);   

             return  response()->json([ 
                 "status" => "OK",
                 "students" => $students,
             ]);
      }


      
     public function students_to_add_result($id){

             $student=Student::where('id',$id)->with(['course_name','student_result'])->first();   
             return  response()->json([ 
                 "status" => "OK",
                 "student" => $student,
             ]);

      }





     public function edit_student_result(Request $request,$id){

            $validatedData = $request->validate([
                'speaking'  => 'required',
                'reading'  => 'required',
                'writing'  => 'required',
                'listening'  => 'required',
                'brand_score'  => 'required',
                'authority_comment'  => 'required', 
            ]);

            $result=Result::findOrFail($id);
            $result->speaking=$request->speaking ;
            $result->reading=$request->reading ;
            $result->writing=$request->writing ;
            $result->listening=$request->listening ;
            $result->brand_score=$request->brand_score ;
            $result->authority_comment=$request->authority_comment ;

            if ($result->save()) {
                return response()->json([
                    "status" => "OK",
                    "message" => "Result updated successfully"
                ]);
            }else{
                return response()->json([
                    "status" => "FAIL",
                    "message" => "Update Failed"
                ]);
            }

     }  




      public function get_searched_students($data){

               $students = Student::where('name','like','%'.$data.'%')
                                    ->orWhere('phone','like','%'.$data.'%')
                                    ->orWhere('email','like','%'.$data.'%')
                                    ->orWhere('student_id','like','%'.$data.'%')
                                    ->with('course_name')->paginate(10);
        
                return response()->json(['students' => $students]); 
         
      }





}
