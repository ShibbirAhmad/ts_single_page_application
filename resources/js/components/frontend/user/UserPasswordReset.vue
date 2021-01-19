<template>
  <div>
   
      <header-section></header-section>

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
                Reset your password
              </h4>
              <form @submit.prevent="submitEmail">
                <div class="form-grop">
                  <label class="control-label" for="input-email">your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    class="form-control"
                    autocomplete="off"
                    :class="{ 'is-invalid': form.errors.has('email') }"
                    v-model="form.email"
                    autofocus
                  />
                  <has-error :form="form" field="email"></has-error>
                </div>
                <br />
                <div class="form-group text-center">
                   
                <button :disabled="form.busy" class="btn btn-white " type="submit">
                  <i class="fa fa-spinner fa-spin" v-if="form.busy"></i>Send Code
                </button>
                </div>
               </form>
            </div>
          </div>
          <div class="col-md-3 col-sm-12"></div>
        </div>
      </div>
    </section>

 
    <footer-section> </footer-section>
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
        email: "",
      }),
     
    };
  },
  methods: {
       submitEmail() {
      this.form
        .post("/api/user/password/reset/send/code")
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "SUCCESS") {
            this.$toasted.show(resp.data.message, {
              type: "success",
              position: "top-center",
              duration: 5000,
            });
            this.$router.push({name:'CodeVerified',params:{email:this.form.email}})
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