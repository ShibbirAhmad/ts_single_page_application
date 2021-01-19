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
                User Register
              </h4>
              <form @submit.prevent="Register" enctype="multipart/form-data">

                 <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('name') }"
                    placeholder="write your name"
                    autofocus
                    required
                    v-model="form.name"
                    type="text"
                    name="name"
                  />
                  <has-error :form="form" field="email"> </has-error>
                </div>
      
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    class="form-control"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    placeholder="write your email"
                    required
                    v-model="form.email"
                    type="email"
                    name="email"
                
                  />
                  <has-error :form="form" field="email"> </has-error>
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
                    autocomplete="off"
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
            
                <br />
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
import { Form, HasError } from "vform";
Vue.component(HasError.name, HasError);

export default {
  created() {
  },
  data() {
    return {
      form: new Form({
        name:"",
        email:"",
        password:"",
        image:"",
      }),
      preview_image:"",

    };
  },
  methods: {

    Register() {
      this.form
        .post("/api/user/register", {
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
              duration: 5000,
            });
            this.$router.push({ name: "user_login" });
          }
        })  
    },

     beforeRouteEnter(to, from, next) {
    next((vm) => {
      console.log();
      vm.pre_route = from.name;
     });
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
  margin-top: 10px;
}
.login_button{
    width:110px;
    background:#367fa9;
    margin-top: 10px;
     color: #fff
}
</style>