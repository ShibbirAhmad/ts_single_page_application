<template>
  <div>
    <header-section></header-section>

    <!-- Blog page section  -->
    <section style="margin-top: 20px" class="blog-page-section spad pt-0">
      <div class="container">
        <div class="text-center">
          <h3 class="logo_talibs">
            <a> <b style="color: #000">TALIBS INSTITUTE</b>.COM </a>
          </h3>
        </div>

        <div class="row">
          <div class="col-md-3 col-sm-12"></div>
          <div class="col-md-6 col-sm-12 form_column text-white bg-info">
            <div class="form-wrapper">
              <h4 style="padding-top: 10px; text-align: center">
                Student Registration
              </h4>
              <form @submit.prevent="Register">
                <div class="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="EX:mohammod"
                    class="form-control"
                    
                    v-model="form.name"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                  />
                  <has-error :form="form" field="name"></has-error>
                </div>
                  <div class="form-group">
                  <label>Father Name</label>
                  <input
                    type="text"
                    name="father_name"
                    required
                    placeholder="father name"
                    class="form-control"
                    
                    v-model="form.father_name"
                    :class="{ 'is-invalid': form.errors.has('father_name') }"
                  />
                  <has-error :form="form" field="father_name"></has-error>
                </div>
                 <div class="form-group">
                  <label>Mother Name</label>
                  <input
                    type="text"
                    name="mother_name"
                    required
                    placeholder="mother name"
                    class="form-control"
                    
                    v-model="form.mother_name"
                    :class="{ 'is-invalid': form.errors.has('mother_name') }"
                  />
                  <has-error :form="form" field="mother_name"></has-error>
                </div>
                <br/>
                <div class="form-group">
                  <select
                    class="form-control"
                    v-model="form.gender"
                    name="gender"
                   >
                    <option disabled value="select gender">
                     Selecet Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
               <div class="form-group">
                 <label>Date Of Birth</label>
                 <date-picker
                      :class="{ 'is-invalid': form.errors.has('dob') }"
                      
                      v-model="form.dob"
                      :config="options"
                    >
                   </date-picker>
                  <has-error :form="form" field="dob"></has-error>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    placeholder="write your email"
                    autofocus
                    required
                    v-model="form.email"
                    type="email"
                    name="email"
                    id=""
                  />
                  <has-error :form="form" field="email"> </has-error>
                </div>

                <div class="form-grop">
                  <label class="form-label" for="input-email"
                    >Mobile Number</label
                  >
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="01xxx-xxxxx"
                    class="form-control"
                    
                    maxlength="11"
                    :class="{ 'is-invalid': form.errors.has('phone') }"
                    v-model="form.phone"
                  />
                  <has-error :form="form" field="phone"></has-error>
                </div>
                <br />
                <div class="form-group">
                  <select
                    class="form-control"
                    v-model="form.course_id"
                    name="course_id"
                    @change="courseInfoShow"
                  >
                    <option disabled value="selecet course">
                     selecet course
                    </option>
                    <option
                      v-for="(course, index) in courses"
                      :key="index"
                      :value="course.id"
                    >
                      {{ course.name }}
                    </option>
                  </select>
                  <has-error :form="form" field="course_id"> </has-error>
                </div>

                 <div v-if="amount_info" class="form-group amount_group">
                     <div class="row">
                         <div class="col-md-6 col-sm-6"> Course Fee : {{ form.fee }} &#2547 </div>
                         <div class="col-md-6 col-sm-6"> Discount : {{ form.discount }} % </div>
                         <div class="col-md-8 col-sm-10"> Total : {{ form.total }} &#2547</div>
                     </div>
                 </div>
                
                 <div v-if="payment_info" class="form-group payment_group">

                  <select
                    class="form-control"
                    v-model="form.payment_type"
                    name="payment_type"
                    @change="paymentInfoShow"
                   >
                    <option disabled value="select payment">
                     selecet payment
                    </option>
                    <option value="bkash">Bkash</option>
                    <option value="nogod">Nogod</option>
                  </select>
                </div>
                
                <div v-if="bkash_info" class="form-grop nogod_group">
                   <label for="our_payment">select our payment number, in which number you have sent money</label>
                     <select
                    class="form-control"
                    v-model="form.our_payment_number"
                    name="payment_type"
                   >
                    <option disabled value="select payment number">
                     selecet payment number
                    </option>
                    <option value="01773996752"> 01773996752   Bkash/Nogod</option>
                    <option value="01773996752"> 01773996752 Rocket</option>
                  </select>
                  <br/>
                  <label class="form-label" for="input-email"
                    >Your Bkash Number</label
                  >
                  <input
                    type="text"
                    name="bkash_number"
                    placeholder="01xxx-xxxxx"
                    class="form-control"
                    
                    maxlength="11"
                    :class="{ 'is-invalid': form.errors.has('bkash_number') }"
                    v-model="form.bkash_number"
                  />
                  <has-error :form="form" field="bkash_number"></has-error>
                  <br/>
                  <label class="form-label" for="input-email"
                    >Transiction ID</label
                  >
                  <input
                    type="text"
                    name="transiction_id"
                    placeholder="D18#HGIWDK1242"
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('transiction_id') }"
                    v-model="form.transiction_id"
                  />
                  <has-error :form="form" field="transiction_id"></has-error>
                </div>

                 <div v-if="nogod_info" class="form-grop bkash_group">
                    
                    <label for="our_payment">select our payment number, in which number you have sent money</label>
                     <select
                    class="form-control"
                    v-model="form.our_payment_number"
                    name="payment_type"
                   >
                    <option disabled value="select payment number">
                     selecet payment number
                    </option>
                    <option value="01773996752"> 01773996752   Bkash/Nogod</option>
                    <option value="01773996752"> 01773996752 Rocket</option>
                  </select>
                    <br/>
                  <label class="form-label" for="input-email"
                    >Your Nogod Number</label
                  >
                  <input
                    type="text"
                    name="nogod_number"
                    placeholder="01xxx-xxxxx"
                    class="form-control"
                    
                    maxlength="11"
                    :class="{ 'is-invalid': form.errors.has('nogod_number') }"
                    v-model="form.nogod_number"
                  />
                  <has-error :form="form" field="nogod_number"></has-error>
                  <br/>
                  <label class="form-label" for="input-email"
                    >Transiction ID</label
                  >
                  <input
                    type="text"
                    name="transiction_id"
                    placeholder="01xxx-xxxxx"
                    class="form-control"
                    
                    maxlength="11"
                    :class="{ 'is-invalid': form.errors.has('transiction_id') }"
                    v-model="form.transiction_id"
                  />
                  <has-error :form="form" field="transiction_id"></has-error>
                </div>

                <div class="form-group">
                  <label for="address">Write Address</label>

                  <textarea
                    name="address"
                    :class="{ 'is-invalid': form.errors.has('address') }"
                    placeholder="type address details"
                    class="form-control"
                    v-model="form.address"
                    rows="3"
                  ></textarea>
                  <has-error :form="form" field="address"> </has-error>
                </div>
                <div class="form-group">
                  <label class="form-label" for="input-password"
                    >Password</label
                  >
                  <input
                    type="password"
                    name="password"
                    value
                    placeholder="Password"
                    id="input-password"
                    class="form-control"
                    
                    :class="{ 'is-invalid': form.errors.has('password') }"
                    v-model="form.password"
                  />
                  <has-error :form="form" field="password"></has-error>

                </div>
                 <div v-show="preview_image" class="form-group text-center" >
                    <img :src="preview_image"  class="img-responsive" >
                 </div>
                 <div class="form-group">
                    <label>Profile Image</label>
                    <input
                      class="form-control"
                      :class="{'is-invalid': form.errors.has('image') }"
                      type="file"
                      @change="uploadImage"
                      name="image"
                    />
                    <has-error :form="form" field="image"></has-error>
                  </div>
              
                <div class="form-group text-center">
                 <button
                    :disabled="form.busy"
                    class="btn  btn_register"
                    type="submit"
                  >
                 <i class="fa fa-spinner fa-spin" v-if="form.busy"></i
                    >REGISTER
                  </button>
                </div>
  
              </form>
            </div>
          </div>
          <div class="col-md-3 col-sm-12"></div>
        </div>
      </div>
    </section>
    <!-- Blog page section end -->

    <footer-section> </footer-section>
  </div>
</template>


<script>

import Vue from "vue";
  
  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';
  
  // Import date picker css
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

export default {
  created() {
    this.getCourseList();
  },
  data() {
    return {
      form: new Form({
        name: "",
        email: "",
        course_id:"selecet course",
        address: "",
        payment_type:"select payment",
        bkash_number:"",
        our_payment_number:"select payment number",
        nogod_number:"",
        transiction_id:"",
        father_name: "",
        mother_name: "",
        gender:"select gender",
        dob:"",
        image:"",
        phone:"",
        password:"",
        total:"",
        fee:"",
        discount:"",
      }),
       date: new Date(),
       options: {
       format: "YYYY-MM-DD",
        useCurrent: true,
        },
      courses: "",
      preview_image: "",
      amount_info: false,
      payment_info:false,
      bkash_info: false,
      nogod_info: false,
      base_url:this.$store.state.storage,
    };
  },
  methods: {
    getCourseList() {
      axios.get("/api/display/course/public").then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.courses = resp.data.courses;
        }
      });
    },

    courseInfoShow(){
      if (this.form.course_id) {
         this.courses.forEach(element => {
             if (element.id==this.form.course_id) {
                 this.form.fee=element.fee ;
                 this.form.discount=element.offer ;
                 let c_fee = parseInt(element.fee) ;
                 let c_discount = parseInt(element.offer) ;
                 let discount_amount = c_fee*(c_discount/100) ;
                 this.form.total = c_fee - discount_amount ;
                 this.amount_info=true;
                 this.payment_info=true;
             }
         });
      }
    },

    paymentInfoShow(){
      if (this.form.payment_type=="bkash") {
          this.bkash_info=true ;
          this.nogod_info=false ;
      }
      if(this.form.payment_type=="nogod"){
          this.nogod_info=true ;
          this.bkash_info=false ;
      }
    },


    Register() {
      this.form
        .post("/api/student/register", {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 8000,
            });
            location.reload();
          }
        })
        
    },


     
    uploadImage(event) {
      const file = event.target.files[0];
      this.form.image = file;
      //read upload image
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
       
        };
        img.src = evt.target.result;
        this.preview_image = evt.target.result;
      };
    },

  },
};
</script>


<style scoped>
.form-wrapper {
  margin: 0px 10px;
}

.form_column {
  margin-bottom: 20px;
}

.logo_talibs {
  margin-top: 30px;
  margin-bottom: 5px !important;
}

.btn_register {
  background: #00acd6;
  color: #fff;
}
.login_button{
    width:110px;
    background:#367fa9;
    margin-top: 10px;
     color: #fff
}
</style>