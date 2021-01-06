<template>
  <div>
      <navbar> </navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Students</li>
        </ol>
      </section>

      <section class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="student_box">
                <div class="box-header with-border"></div>

                <div class="box-body">
                  <div style="margin-bottom:20px;" class="row">
                    <div class="col-md-2">
                      <select
                        @change="getStudentList"
                        v-model="item"
                        class="form-control"
                        id=""
                      >
                        <option selected value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                    <div class="col-md-5"></div>
                    <div class="col-md-5">
                      <input
                        type="text"
                        v-model="search_data"
                        class="form-control"
                        placeholder="search student name,phone or email "
                        @keyup="searchStudent"
                      />
                    </div>
                  </div>
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th scope="col">Serial</th>
                        <th scope="col">Name</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Student ID</th>
                        <th scope="col">phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Image</th>
                        <th scope="col">Joined</th>
                        <th scope="col">View Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <h1 class="text-center" v-if="loading">
                        <i class="fa fa-spin fa-spinner"></i>
                      </h1>
                      <tr v-else
                        v-for="(student, index) in studentList.data"
                        :key="index"
                      >
                        <td>{{ index + 1 }}</td>
                        <td>
                      
                            {{ student.name }}
                        
                        </td>
                        <td>{{ student.course_name.name }}</td>
                     
                        <td>{{ student.student_id }}</td>

                         <td>{{ student.phone }}</td>
                         <td>{{ student.email }}</td>
                        <td>
                          <img
                            :src="student.image ? base_url+student.image : base_url+'images/no_image.jpg'"
                             class="student_profile" 
                          />
                        </td>
                        <td>
                         <span > {{ timeFormatter(student.created_at) }} </span>
                        </td>
                        <td>
                          <router-link
                            :to="{
                              name: 'add_student_result',
                              params:{ id:student.id },
                            }"
                            class="btn btn-lg btn-success"
                          >
                            <i class="fa fa-eye"> </i>
                          </router-link>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="row">
                    <div class="col-md-6">
                      <pagination
                        :data="studentList"
                        @pagination-change-page="getStudentList"
                      >
                        <span slot="prev-nav">&lt; Previous</span>
                        <span slot="next-nav">Next &gt;</span>
                      </pagination>
                    </div>
                    <div
                      class="col-md-6"
                      style="margin-top: 25px; text-align: right"
                    >
                      <p>
                        showing <strong>{{ studentList.from }} </strong> to
                        <strong>{{ studentList.from }} </strong> of total
                        entities {{ studentList.total }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="box-footer"></div>
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
  mounted() {
  
    this.getStudentList();
  },

  data() {
    return {
      studentList: {},
      loading: true,
      item: 20,
      base_url: this.$store.state.storage,
      search_data: "",
    };
  },

  methods: {
    searchStudent() {
      if (this.search_data.length >= 3) {
        axios
          .get("/api/search/students/" + this.search_data)
          .then((resp) => {
            this.studentList = resp.data.students;
         
          });
      } else {
        this.getStudentList();
      }
    },


    getStudentList(page = 1) {
      axios
        .get("/api/our/student/list?page="+page, {
          params: { item: this.item },
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.studentList = resp.data.students;
            this.loading=false;
          }
        })
      
    },

     timeFormatter(created_at) {
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

.student_box{

   background: #fff;
   width:115%;
   margin-left:-100px;
   margin-top: 50px;;
}

.student_profile{
  width:50px;
  height:50px;
  border-radius: 50%;
}

</style>
