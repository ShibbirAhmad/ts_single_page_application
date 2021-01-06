<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

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



     public function students_to_add_result($id){

             $student=Student::findOrFail($id);   
             return  response()->json([ 
                 "status" => "OK",
                 "student" => $student,
             ]);

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
