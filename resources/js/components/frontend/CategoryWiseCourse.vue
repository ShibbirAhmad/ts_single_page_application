<template>
  <div>
	  
    <header-section></header-section>

  
    <!-- Courses section -->
    <section class="courses-section spad">
      <div class="container">
        <div class="section-title text-center">
          <h3 class="heading"> {{ category.name }}  </h3>
        </div>
        <div class="row">
          <!-- course item -->
          <div 
            v-for="(course, index) in category.courses"
            :key="index"
            class="col-lg-4 col-md-6 col-sm-12 course-item "
          >
          <div class="course_container">
              <div class="course-thumb img-responsive">
              <router-link :to="{name:'course_details',params:{slug:course.slug}}" >
               <img
                :src="
                  course.image
                    ? base_url + course.image
                    : base_url + 'images/no_image.jpg' "
                />
               </router-link>
              <div class="course-cat">
                <span>{{ course.category_name.name }}</span>
              </div>
            </div>
            <div class="course-info">
              <div class="date">
              <i class="fa fa-clock-o"></i> {{ timeFormater(course.start_date) }} 
              </div>
                <router-link :to="{name:'course_details',params:{slug:course.slug}}" >
                   <h4>{{ course.name }}</h4>
                </router-link>
              <h4 class="cource-price">{{ course.duration }}</h4>
            </div>
          </div>
   

          </div>
          
        </div>
      </div>
    </section>
    <!-- Courses section end-->

    <footer-section> </footer-section>
  </div>
</template>

<script>


export default {
 
  created() {

    this.getCoureseOfCategory();
   
  },

  data() {
    return {
      category: "",
	  base_url: this.$store.state.storage,
	  
    };
  },

  methods: {

   timeFormater(created_at) {
      let dt = new Date(created_at);
      var day = dt.getDay();
      var month = dt.getMonth();
      var year = dt.getFullYear();

      const d = new Date(year, month, day);
      const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
      const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
      const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
      let formated_date = `${da}-${mo}-${ye}`;
      return formated_date;
	},

    getCoureseOfCategory() {
	  axios.get("/api/get/categorywise/course/"+this.$route.params.id)
	  .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
		      this.category = resp.data.category; 
        }
      });
    },

  
	
  },

 


};
</script>


<style scoped>


.btn-join-now{
     background: #f6783a;
    color: #fff;
    margin-bottom: 10px;
    margin-left: 40%;
    width: 115px;
    height: 50px;
    padding-top: 12px;
}

.btn-join-now:hover{
 
    box-shadow: 1px 1px 3px 1px #f6783a;
}


</style>