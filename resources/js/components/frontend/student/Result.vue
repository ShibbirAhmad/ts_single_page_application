<template>
  <div>
    <header-section></header-section>

    <!-- Blog page section  -->
    <section style="margin-top: 20px" class="blog-page-section spad pt-0">
      <div class="container">

        <div class="row">
          <div class="col-md-3 col-sm-12"></div>
          <div class="col-md-12 col-sm-12 form_column text-white bg-info">
            <div class="form-wrapper">
              <h4 style="padding-top: 10px; text-align: center">
                Student Result
              </h4>
              <form @submit.prevent="checkStudentResult">
      
                <div class="form-group">
                  <label for="studentID">Student ID</label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('studentID') }"
                    placeholder="Exmaple: TALIBS-4563 "
                    autofocus
                    required
                    v-model="form.studentID"
                    type="text"
                    name="studentID"
                   
                  />
                  <has-error :form="form" field="studentID"> </has-error>
                </div>
             
                <div class="form-group text-center">
                 <button
                    :disabled="form.busy"
                    class="btn  login_button"
                    type="submit"
                  >
                 <i class="fa fa-spinner fa-spin" v-if="form.busy"></i
                    >Submit
                  </button>

                </div>

              </form>
            </div>
          </div>
          <div class="col-md-3 col-sm-12"></div>
        </div>


        <div v-if="result_form" class="row  ">
           <div class="col-md-12 col-sm-12 col-xs-12 student_result_row ">
             <div class="result_container">

               <div class=" header-box">
                 <div class="header_title text-center">
                  <h4 class="title_talibs">TALIBS INSTITUTE</h4>
                 </div>
              
               <div class="row  course_info">
                  <div class="col-md-6 col-sm-12">
                    <p> Course Name: {{ course_name }} </p>
                   </div>
                  <div class="col-md-3 col-sm-6"> <p>Joined: {{ timeFormater(joined_date) }} </p> </div>
                  <div class="col-md-3 col-sm-6"><p> Published: {{ timeFormater(published_date) }}</p> </div>
               </div>
               <div class="row_line0"> </div>
              </div>

              <div class="result_body_section">
               
                <div class="row ">
                  <div class="col-md-2 col-sm-2 col-xs-2 flex ">
                    <p >Name  </p>
                    <p >Father Name  </p>
                    <p >Mother Name</p>
                   </div>
                  <div class="col-md-7 col-sm-7 col-xs-7 flex"> 
                    <div class="form-group"><input type="text" disabled class="form-control m_view1" v-model="name" > </div>
                    <div class="form-group">  <input type="text" disabled class="form-control m_view2" v-model="father_name"> </div>
                    <div class="form-group"> <input type="text" disabled class="form-control m_view3" v-model="mother_name" > </div>
                  </div>
                  <div class="col-md-3 text-center"> <img class="student_profile" :src="image? base_url+image : base_url+'images/no_image.jpg'" alt=""> </div>
                  <div class=" row_line1"> </div>
                </div>
                
                <div  class=" dob_row  row">
                  <div class="form-group">
                    <div class="row">

                      <div class="col-md-5 col-sm-5"> 
                        <div class="row"> 
                          <div class="col-md-5 col-sm-5"> <p>Date Of Birth</p></div>
                          <div class="col-md-7 col-sm-7"><input type="text" disabled class="form-control" v-model="dob" ></div>
                        </div>
                      </div>
                  
                       <div class="col-md-3 col-sm-3"> 
                        <div class="row "> 
                           <div class="col-md-4 col-sm-4"> <p>Gender</p></div>
                           <div class="col-md-8 col-sm-8"><input type="text" disabled class="form-control" v-model="gender" ></div>
                        </div>
                      </div>

                      <div class="col-md-4 col-sm-4"> 
                        <div class="row "> 
                           <div class="col-md-5 col-sm-5"> <p>Student ID</p> </div>
                           <div class="col-md-7 col-sm-7"> <input type="text" disabled class="form-control" v-model="student_id" ></div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

                <div class="studentID_row  row">
                  <div class="col-md-2">
                    <p >Email </p>
                    <p > Phone  </p>
                    <p > Address  </p>
                   </div>
                  <div class="col-md-10"> 
                    <div class="form-group"><input type="text" disabled class="form-control m_view1 family_info" v-model="email" > </div>
                    <div class="form-group">  <input type="text" disabled class="form-control m_view2 family_info" v-model="phone" > </div>
                    <div class="form-group"> <input type="text" disabled class="form-control  m_view3 family_info" v-model="address" > </div>
                  </div>
  
                  <div class=" row_line2"> </div>
                </div>

                 <div  class=" dob_row  row">
                  <div class="form-group">
                    <div class="row">
                     <div class="col-md-12"> <p><b> Result Score</b> </p></div>
                     
                      <div class="col-md-3"> 
                        <div class="row"> 
                          <div class="col-md-8"> <p>Speaking</p></div>
                          <div class="col-md-4"><input type="text" disabled class="form-control speaking_input" v-model="speaking"></div>
                        </div>
                      </div>

                       <div class="col-md-2"> 
                        <div class="row"> 
                           <div class="col-md-6"> <p>Reading</p></div>
                           <div class="col-md-6"><input type="text" disabled class="form-control" v-model="reading" ></div>
                        </div>
                      </div>

                      <div class="col-md-2"> 
                        <div class="row"> 
                           <div class="col-md-6"> <p>Writing</p> </div>
                           <div class="col-md-6"> <input type="text" disabled class="form-control" v-model="writing" ></div>
                        </div>
                      </div>

                     <div class="col-md-2"> 
                        <div class="row"> 
                           <div class="col-md-6"> <p>Listening</p> </div>
                           <div class="col-md-6"> <input type="text" disabled class="form-control"  v-model="listening" ></div>
                        </div>
                      </div>


                    <div class="col-md-3"> 
                        <div class="row"> 
                           <div class="col-md-6"> <p>Brand Score</p> </div>
                           <div class="col-md-6"> <input type="text" disabled class="form-control" v-model="brand_score" ></div>
                        </div>
                      </div>


                    </div>
                  </div>
                  <div class=" row_line3"> </div> 
                </div>

                  <div  class=" comment_row  row">
                    <div class="col-md-12  col-sm-12"> <p><b> Authority Comments</b> </p></div>
                    
                     <div class="col-md-6 col-sm-6"> 
                       <textarea v-model="authority_comment" class="form-control" rows="5">  </textarea>
                     </div>
                     <div class="col-md-6  col-sm-6 col-xs-6">
                       <div class="row ">
                         <div class="col-md-6 col-sm-6 col-xs-6">
                             <img class="img-responsive author_sign1"  :src="base_url+'images/empty_image.jpg'" >
                         </div>
                         <div class="col-md-6 col-sm-6 col-xs-6">
                             <img  class="img-responsive author_sign2" :src="base_url+'images/empty_image.jpg'" >
                         </div>
                       </div>
                  
                     </div>
                  </div>
                  
                 
                
                 <div class=" row result_footer_row ">
                    <div class="row_line4"></div>
                     <div class="col-md-12 col-sm-12 text-center">
                        <p> All informatin is published by Talibs Institute </p>
                     </div>
                 </div>
         

              </div>

             </div>
           </div>
        </div>
      </div>
    </section>
    <!-- Blog page section end -->

    <footer-section> </footer-section>
  </div>
</template>


<script>
import Vue from "vue";
import { Form, HasError } from "vform";
Vue.component(HasError.name, HasError);

export default {
  created() {
  },
  data() {
    return {
      form: new Form({
        studentID: "",
      }),
      base_url:this.$store.state.storage,
      result_form:false,
      course_name:"",
      name:"",
      email:"",
      phone:"",
      gender:"",
      address:"",
      father_name:"",
      mother_name:"",
      mother_name:"",
      student_id:"",
      image:"",
      dob:"",
      speaking:"",
      reading:"",
      writing:"",
      listening:"",
      brand_score:"",
      joined_date:"",
      published_date:"",
      authority_comment:"",
    };
  },
  methods: {

    checkStudentResult() {
      this.form
        .get("/api/check/student/result/"+this.form.studentID)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.speaking = resp.data.result.speaking;
            this.reading = resp.data.result.reading;
            this.writing = resp.data.result.writing;
            this.listening = resp.data.result.listening;
            this.speaking = resp.data.result.speaking;
            this.brand_score = resp.data.result.brand_score;
            this.authority_comment = resp.data.result.authority_comment;
            this.course_name = resp.data.result.course_name.name;
            this.name = resp.data.result.student_info.name;
            this.father_name = resp.data.result.student_info.father_name;
            this.mother_name = resp.data.result.student_info.mother_name;
            this.dob  =   resp.data.result.student_info.dob;
            this.gender = resp.data.result.student_info.gender;
            this.address = resp.data.result.student_info.address;
            this.email = resp.data.result.student_info.email;
            this.phone = resp.data.result.student_info.phone;
            this.image = resp.data.result.student_info.image;
            this.student_id = resp.data.result.student_info.student_id;
            this.joined_date = resp.data.result.student_info.created_at;
            this.published_date = resp.data.result.created_at;
            this.result_form=true;
          }else{
              this.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 5000,
            });
          }
        })
    },
    
    timeFormater(created_at) {
      let dmy = new Date(created_at);
      var day = dmy.getDay();
      var month = dmy.getMonth();
      var year = dmy.getFullYear();

      const d = new Date(year, month, day);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      let r_date = `${da}-${mo}-${ye}`;
      return r_date;
    },

  },
};
</script>


<style scoped>




</style> 