<template>
  <div >
    <header-section></header-section>

    <div id="container">
      <div class="container">
        <!-- Breadcrumb End-->
        <div class="row">
          <div class="col-lg-3"></div>
          <div id="content" class="col-sm-12 col-lg-5">
            <div class="custom-box">
              <h2 class="title">Update Password</h2>
              <form @submit.prevent="submitPassword">
                <div class="form-grop">
                  <label class="control-label" for="input-email">New Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="xxxxx"
                    class="form-control"
                    autocomplete="off"
                   :class="{ 'is-invalid': form.errors.has('password') }"
                    v-model="form.password"
                    autofocus />
                  <has-error :form="form" field="password"></has-error>
                </div>
                <br />
                
                <button :disabled="form.busy" class="btn btn-block btn-primary" type="submit">
                  <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>Update Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-section></footer-section>
  </div>
</template>
<script>

import { Form, HasError } from "vform";
export default {
  created() {
  
  },
  data() {
    return {
      form: new Form({
        password: "",
      }),
    
    };
  },
  methods: {
    submitPassword() {
      this.form
        .post("/api/user/password/reset/"+this.$route.params.email)
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 2000,
            });
            this.$router.push({name:"user_login"});
          } else {
           this.$toasted.show(resp.data.message, {
              type: "error",
              position: "top-center",
              duration: 3000,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.$toasted.show("some thing want to wrong", {
            type: "error",
            position: "top-center",
            duration: 2000,
          });
        });
    },
  },
 
 
};
</script>