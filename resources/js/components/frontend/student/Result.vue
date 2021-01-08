<template>
  <div>
    <header-section></header-section>

    <!-- Blog page section  -->
    <section style="margin-top: 20px" class="blog-page-section spad pt-0">
      <div class="container">
        <div class="text-center">
          <h2 class="logo_talibs">
            <a> <b style="color: #000">TALIBS INSTITUTE</b>.COM </a>
          </h2>
        </div>

        <div class="row">
          <div class="col-md-3 col-sm-12"></div>
          <div class="col-md-6 col-sm-12 form_column text-white bg-info">
            <div class="form-wrapper">
              <h4 style="padding-top: 10px; text-align: center">
                Student Login
              </h4>
              <form @submit.prevent="Register">
      
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
                <div class="form-group text-center">
                 <button
                    :disabled="form.busy"
                    class="btn  login_button"
                    type="submit"
                  >
                 <i class="fa fa-spinner fa-spin" v-if="form.busy"></i
                    >LOGIN
                  </button>
                 <br/>
                <router-link :to="{name :'student_register'}"
                  class="btn btn_register"
                  >REGISTER
                </router-link>

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
        email: "",
        password: "",
      }),

    };
  },
  methods: {

    Register() {
      this.form
        .post("/api/merchant/register", {
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
            this.$router.push({ name: "welcome" });
            location.reload();
          }
        })
        .catch();
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