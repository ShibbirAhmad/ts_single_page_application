<template>
  <div>
      <navbar> </navbar>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          <router-link :to="{ name: 'banner' }" class="btn btn-primary"
            ><i class="fa fa-arrow-left"></i
          ></router-link>
        </h1>
        <ol class="breadcrumb">
          <li>
            <a href="#"><i class="fa fa-dashboard"></i>Dashboard</a>
          </li>
          <li class="active">banner</li>
        </ol>
      </section>
      <section class="content">
        <div style="margin-left:100px;" class="row justify-content-center">
          <div class="col-lg-6 col-lg-offset-2">
            <div class="box box-primary">
              <div class="box-header with-border">
                <h3 class="box-title">Edit banner</h3>
              </div>
              <div class="box-body">
                <form
                  @submit.prevent="updateBanner"
                  enctype="multipart/form-data"
                >
                  <div class="form-group">
                    <img id="preview_image"
                      :src="form.banner?base_url+form.banner:base_url+'no_image.jpg'"
                      style="width: 100%; height: 200px"
                    />
                  </div>
                  <div class="form-group">
                    <label>Banner</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="imageUpload"
                    />
                  </div>
                  <button
                    :disabled="form.busy"
                    class="btn btn-info"
                    type="submit"
                  >
                    <i class="fa fa-spiner"></i> submit
                  </button>
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
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

export default {
  created() {
      this.getEditBanner();
  },

  data() {
    return {
      form: new Form({
        banner: "",
      }),
      base_url:this.$store.state.storage ,
    };
  },
  methods: {

   getEditBanner(){
       this.$Progress.start() ;
       axios.get('/api/get/edit/banner/item/'+this.$route.params.id)
       .then(resp => {
           this.form.banner=resp.data.banner.banner ;
           this.$Progress.finish();
       })
   },

    updateBanner() {
       this.$Progress.start()
      this.form
        .post("/api/edit/banner/"+this.$route.params.id, {
          // Transform form data to FormData
          transformRequest: [
            function (data, headers) {
              return objectToFormData(data);
            },
          ],
        })
        .then((resp) => {
          console.log(resp);
          if (resp.data.status == "OK") {
              this.$Progress.finish()
              this.$toasted.show(resp.data.message,{
                type:'success',
                position:'top-center',
                duration:3000,
              });
              this.$router.push({ name : 'banner'});
          }else{
             this.$Progress.fail()
          }
        });
    },

    imageUpload(event) {
      const file = event.target.files[0];
        this.form.image = file;
      //read upload image
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (evt) => {
        let img = new Image();
        img.onload = () => {
          console.log(
            "image width: " + img.width + "-" + "height:" + img.height
          );
        };
        img.src = evt.target.result;
        document.getElementById('preview_image').src = evt.target.result;
      
      };
    },
  },
};
</script>
