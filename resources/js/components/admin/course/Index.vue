<template>
  <div>
      <navbar> </navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'add_course' }" class="btn btn-primary"
            ><i class="fa fa-plus"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">Course</li>
        </ol>
      </section>
      <section class="content">
        <div class="row table_row justify-content-center">
          <div class="col-md-11 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Course List</h3>
              </div>
              <div class="box-body">
                <table
                  class="table table-responsive text-center table-striped table-bordered"
                >
                  <thead>
                    <tr>
                      <th>Serial</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Duration</th>
                      <th>Start Date</th>
                      <th>Registered Student </th>
                      <th>Image</th>
                      <th>Fee</th>
                      <th>Offer</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(course, index) in courses.data"
                      :key="index"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ course.name }}</td>
                      <td>{{ course.category_name.name }}</td>
                      <td>{{ course.duration }}</td>
                      <td>{{ course.start_date }}</td>
                      <td>  
                        
                      <router-link style="width:70px;" class="btn btn-info" 
                      :to="{name:'course_registered_students', params:{id:course.id}}">
                       {{ course.registered_students.length }} </router-link>
                        
                     </td>
                      <td>
                        <img
                          :src="course.image ? base_url + course.image : base_url+'images/no_image.jpg'"
                          class="small-image"
                        />
                      </td>
                      <td>{{ course.fee }}</td>

                      <td>{{ course.offer }}%</td>
                      <td>
                        <span v-if="course.status == 1" class="badge"
                          >active</span
                        >
                        <span v-else class="badge">De-active</span>
                      </td>
                      <td>
                        <router-link
                          class="btn btn-sm btn-success"
                          :to="{
                            name: 'edit_course',
                            params: { id: course.id },
                          }"
                          ><i class="fa fa-edit"></i
                        ></router-link>
                        <button
                          v-if="course.status == 1"
                          @click="deActiveCourse(course.id)"
                          class="btn btn-sm btn-warning"
                        >
                          <i class="fa fa-ban"> </i>
                        </button>

                        <button
                          v-else
                          @click="activeCourse(course.id)"
                          class="btn btn-sm btn-primary"
                        >
                          <i class="fa fa-check"> </i>
                        </button>

                        <button @click="deleteCourse(course.id)" class="btn btn-sm btn-danger">
                          <i class="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="row">
                  <div class="col-md-6">
                    <pagination
                      :limit="3"
                      :data="courses"
                      @pagination-change-page="getCourseList"
                    >
                      <span slot="prev-nav">&lt; Previous</span>
                      <span slot="next-nav">Next &gt;</span>
                    </pagination>
                  </div>
                  <div
                    class="col-lg-6 mt-1"
                    style="margin-top: 25px; text-align: right"
                  >
                    <p>
                      Showing <strong>{{ courses.from }}</strong> to
                      <strong>{{ courses.to }}</strong> of total
                      <strong>{{ courses.total }}</strong> entries
                    </p>
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
import Vue from "vue";
import { Form, HasError, AlertError } from "vform";
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

export default {
  created() {
    this.getCourseList();
  },

  data() {
    return {
      courses: {},
      base_url: this.$store.state.storage,
    };
  },
  methods: {
    getCourseList(page = 1) {
      this.$Progress.start();
      axios.get("/api/get/course/list?page="+page)
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.courses = resp.data.courses;
          this.$Progress.finish();
        } else {
          this.$Progress.fail();
          this.$toasted.show("something happend wrong", {
            type: "error",
            position: "top-center",
            duration: 3000,
          });
        }
      });
    },

    activeCourse(course_id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/active/course/" + course_id)
            .then((resp) => {
              if (resp.data.status == "OK") {
                this.getCourseList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    deActiveCourse(course_id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want de-active this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/de-active/course/" + course_id)
            .then((resp) => {
              if (resp.data.status == "OK") {
                this.getCourseList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },

    deleteCourse(course_id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want delete this course!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.value) {
          axios
            .get("/api/delete/course/" +course_id)
            .then((resp) => {
              //console.log(resp)
              if (resp.data.status == "OK") {
                this.getCourseList();
                this.$toasted.show(resp.data.message, {
                  position: "top-center",
                  type: "success",
                  duration: 4000,
                });
              } else {
                this.$toasted.show("some thing want to wrong", {
                  position: "top-center",
                  type: "error",
                  duration: 4000,
                });
              }
            })
            .catch((error) => {
              console.log(error);
              this.$toasted.show("some thing want to wrong", {
                position: "top-center",
                type: "error",
                duration: 4000,
              });
            });
        } else {
          this.$toasted.show("Ok ! no action here", {
            position: "top-center",
            type: "info",
            duration: 3000,
          });
        }
      });
    },
  },
};
</script>


<style>

 .box {
     margin-left:-100px;
 }

 .table_row{
    margin-right: 5px;
    margin-left: -169px;
 }

</style>