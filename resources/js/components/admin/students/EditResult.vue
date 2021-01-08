<template>
  <div>
    <navbar></navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'student_details' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>student Result</a>
          </li>
          <li class="active">Edit</li>
        </ol>
      </section>
      <section class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header text-center with-border">
                <h3 class="box-title">Edit Result</h3>
              </div>
              <div class="box-body">

                <div class="form-group text-center">
                  <img :src="image?base_url+image : base_url+'images/no_image.jpg' " class="profile_image">
                    <h3> Student ID : {{ student_id }} </h3>
                    <h3> Student Name: {{ name }} </h3>
                    <h3 v-show="total_score" > Brand Score: <b> {{ total_score }} </b>  </h3>
                </div>
                <form
                  @submit.prevent="updateResult"
                  @keydown="form.onKeydown($event)"
                  enctype="multipart/form-data"
                >
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                        <label>Speaking Score</label>
                        <input
                          v-model="form.speaking"
                          type="text"
                          @keyup="brandScoreCounter"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('speaking') }"
                          placeholder="speaking"
                        />
                        <has-error :form="form" field="speaking"></has-error>
                      </div>

                      <div class="col-md-6">
                        <label> Writing Score</label>
                        <input
                          v-model="form.writing"
                          type="text"
                          @keyup="brandScoreCounter"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('writing') }"
                          placeholder="writing"
                        />
                        <has-error :form="form" field="writing"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                        <label> Reading Score</label>
                        <input
                          v-model="form.reading"
                          type="text"
                           @keyup="brandScoreCounter"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('reading') }"
                          placeholder="reading"
                        />
                        <has-error :form="form" field="reading"></has-error>
                      </div>

                      <div class="col-md-6">
                        <label> Listening Score</label>
                        <input
                          v-model="form.listening"
                          @keyup="brandScoreCounter"
                          type="text"
                          class="form-control"
                          :class="{
                            'is-invalid': form.errors.has('listening'),
                          }"
                          placeholder="listening"
                        />
                        <has-error :form="form" field="listening"></has-error>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Remark/Comments </label>
                    <textarea
                      name="authority_comment"
                      v-model="form.authority_comment"
                      class="form-control"
                      :class="{
                        'is-invalid': form.errors.has('authority_comment'),
                      }"
                      rows="4"
                    ></textarea>
                    <has-error
                      :form="form"
                      field="authority_comment"
                    ></has-error>
                  </div>
                   <br/>
                  <div class="form-group text-center">
                    <button
                      :disabled="form.busy"
                      type="submit"
                      class="btn btn-primary"
                    >
                      <i class="fa fa-spin fa-spinner" v-if="form.busy"></i
                      >UPDATE
                    </button>
                  </div>
                </form>
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
import datePicker from "vue-bootstrap-datetimepicker";


Vue.component(HasError.name, HasError);

export default {
  created() {
    this.getStudent();
  },
  data() {
    return {
      form: new Form({
        result_id:"",
        reading: "",
        speaking: "",
        writing: "",
        listening: "",
        brand_score: "",
        authority_comment: "",
      }),
      name:"",
      student_id:"",
      image:"",
      base_url: this.$store.state.storage,
      total_score:"",
    };
  },

  methods: {
    getStudent() {
      axios
        .get("/api/get/student/for/result/add/"+this.$route.params.id)
        .then(resp => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.form.result_id = resp.data.student.student_result.id;
            this.form.speaking = resp.data.student.student_result.speaking;
            this.form.reading = resp.data.student.student_result.reading;
            this.form.writing = resp.data.student.student_result.writing;
            this.form.listening = resp.data.student.student_result.listening;
            this.form.brand_score = resp.data.student.student_result.brand_score;
            this.form.authority_comment = resp.data.student.student_result.authority_comment;
            this.name = resp.data.student.name;
            this.image = resp.data.student.image;
            this.student_id = resp.data.student.student_id;
          }
        });
    },

    updateResult() {
      this.form
        .post("/api/edit/student/result/"+this.form.result_id, {
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
            this.$router.push({ name: "student_details" });
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 4000,
            });
          }else{
              this.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 4000,
            });
          }
        });
    },

    brandScoreCounter(){
      let speak = parseInt(this.form.speaking);
      let read  = parseInt(this.form.reading);
      let write = parseInt(this.form.writing);
      let listen= parseInt(this.form.listening);
      let t_score = ((speak+read+write+listen)/4) ;
      this.form.brand_score=parseFloat(t_score) ;
      return  this.total_score=parseFloat(t_score) ;
    }  

  },
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
</style>
