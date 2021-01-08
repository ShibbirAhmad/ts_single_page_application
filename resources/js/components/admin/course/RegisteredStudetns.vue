<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'course_list' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>course student </a>
          </li>
          <li class="active">students</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-12 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title"> {{ course_name  }} </h3>
              </div>
              <div class="box-body">
                 <div class="row"> 
                <div v-for="(student,index) in students.data " :key="index" class="col-md-3 profile_container text-center">
                  <img :src="student.image?base_url+student.image : base_url+'images/no_image.jpg' " class="profile_image">
                    <h4> Student ID : {{ student.student_id }} </h4>
                    <h4 >Name: {{ student.name }}  </h4>
                    <h4><router-link class="btn btn-lg btn_details btn-primary" :to="{name:'student_details',params:{id:student.id}}"> <i class="fa fa-lg fa-eye"></i> </router-link> </h4>
                </div>
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
    this.getStudents();
  },
  data() {
    return {
      students:{},
      base_url: this.$store.state.storage,
      course_name:"",
      
    };
  },

  methods: {
    getStudents(page=1) {
      axios
        .get("/api/get/registered/student/of/course/"+this.$route.params.id)
        .then(resp => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.students = resp.data.students;
            this.course_name = resp.data.students.data[0].course_name.name;

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

.box {
    margin-left: -233px;
}

.profile_container{
    box-shadow: 2px 1px 5px 2px #ddd;
    padding:10px;
    margin-left:20px;
}

.profile_image{
  width: 150px;
  height: 150px;
  border-radius:50%;
  border:5px dashed #3c8dbc;
}
.btn_details{
    width:100px;
}
</style>
