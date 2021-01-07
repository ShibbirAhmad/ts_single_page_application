<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'students' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>student Result</a>
          </li>
          <li class="active">details</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title">Student Details</h3>
              </div>
              <div class="box-body">

                <div class="form-group text-center">
                  <img :src="image?base_url+image : base_url+'images/no_image.jpg' " class="profile_image">
                    <h4> Course Name : {{ course_name }} </h4>
                    <h4> Student ID : {{ student_id }} </h4>
                    <h4> Student Name: {{ name }} </h4>
                    <h4 v-if="brand_score" > Result Brand Score: <b> {{ brand_score }}  </b>   ||  <router-link class="btn btn-success" :to="{name:'edit_student_result',params:{id:s_id}}"> <i class="fa fa-edit"> Edit Result</i> </router-link> </h4>
                    <h4 v-else > <router-link :to="{name:'add_student_result',params:{id:s_id}}"></router-link>   </h4>
                </div>
                <div class="row">
                    <div class="col-md-4"> <p>  Father Name: {{ father_name }} </p> </div>
                    <div class="col-md-4"> <p>  Mother Name: {{ mother_name }} </p> </div>
                    <div class="col-md-4"> <p>  Email: {{ email }} </p> </div>
                    <div class="col-md-4"> <p>  Gender: {{ gender }} </p> </div>
                    <div class="col-md-4"> <p>  Birth: {{ dob }} </p> </div>
                    <div class="col-md-4"> <p>  Phone: {{ phone }} </p> </div>
                    <div class="col-md-4"> <p>  Address: {{ address }} </p> </div>
                    <div class="col-md-4"> <p>  Course Fee: {{ fee }} &#2547; </p> </div>
                    <div class="col-md-4"> <p>  Discount: {{ discount?discount:0 }} % </p> </div>
                    <div class="col-md-4"> <p>  Total : {{ total }} &#2547; </p> </div>
                    <div class="col-md-4"> <p>  Payment Method: {{ payment_type }} </p> </div>
                    <div class="col-md-4"> <p>  Bkash Number: {{ bkash_number?bkash_number:'not available' }} </p> </div>
                    <div class="col-md-4"> <p>  Nogod Number: {{ nogod_number?nogod_number:'not available'  }} </p> </div>
                    <div class="col-md-4"> <p>  Transiction ID: {{ transiction_id  }} </p> </div>
                    

                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>


<script>

export default {
  created() {
    this.getStudent();
  },
  data() {
    return {
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
      s_id:"",
      image:"",
      fee:"",
      discount:"",
      dob:"",
      total:"",
      payment_type:"",
      bkash_number:"",
      nogod_number:"",
      transiction_id:"",
      base_url: this.$store.state.storage,
      brand_score:"",
      
    };
  },

  methods: {
    getStudent() {
      axios
        .get("/api/get/student/for/result/add/"+this.$route.params.id)
        .then(resp => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.s_id = resp.data.student.id;
            this.course_name = resp.data.student.course_name.name;
            this.brand_score = resp.data.student.student_result.brand_score;
            this.name = resp.data.student.name;
            this.father_name = resp.data.student.father_name;
            this.mother_name = resp.data.student.mother_name;
            this.dob = resp.data.student.dob;
            this.gender = resp.data.student.gender;
            this.address = resp.data.student.address;
            this.email = resp.data.student.email;
            this.phone = resp.data.student.phone;
            this.image = resp.data.student.image;
            this.student_id = resp.data.student.student_id;
            this.fee = resp.data.student.fee;
            this.discount = resp.data.student.discount;
            this.total = resp.data.student.total;
            this.payment_type = resp.data.student.payment_type;
            this.bkash_number = resp.data.student.bkash_number;
            this.nogod_number = resp.data.student.nogod_number;
            this.transiction_id = resp.data.student.transiction_id;
          }
        });
    },


  } 

};
</script>

<style scoped>
.mb-2 {
  margin-bottom: 5px !important;
}
.profile_image{
  width: 200px;
  height: 200px;
  border-radius:50%;
  border:5px dashed #3c8dbc;
}
p {
    font-size: 18px;
    padding: 5px;
}
</style>
