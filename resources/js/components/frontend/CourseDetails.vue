<template>
  <div>
	  
    <header-section></header-section>

  
	<!-- Blog page section  -->
	<section style="margin-top:20px;" class="blog-page-section spad pt-0">
		<div  class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="post-item post-details">
						<img :src="courseDetails.image?base_url+courseDetails.image : base_url+'images/no_image.jpg'" class="post-thumb-full" alt="">
						<div class="post-content">
							<h3> {{ courseDetails.title }} </h3>
							<div class="post-meta">
								<span><i class="fa fa-calendar-o"></i>{{ timeFormater(courseDetails.start_date) }}</span>
							</div>
							<p v-html="courseDetails.description"> </p>
						</div>

                     <router-link class="btn btn-join-now" :to="{name:'student_register' }" >
                       Join Now 
                    </router-link> 
					
					</div>
				</div>
				<!-- sidebar -->
				<div class="col-sm-8 col-md-5 col-lg-4 col-xl-3 offset-xl-1 offset-0 pl-xl-0 sidebar">
					<!-- widget -->
					<div class="widget">
						<form class="search-widget">
							<input type="text" placeholder="Search...">
							<button><i class="ti-search"></i></button>
						</form>
					</div>
					<!-- widget -->
					<div class="widget">
						<h5 class="widget-title"> OTHER COURSES </h5>
						<div class="recent-post-widget">
							
							<!-- recent post -->
							<div v-for="(other_course,index) in other_course " :key="index" class="rp-item">
								<div class="rp-thumb set-bg" >
										<img :src="other_course.image?base_url+other_course.image : base_url+'images/no_image.jpg'"  >
								</div>
								<div class="rp-content">
									<h6> {{ other_course.name }} </h6>
									<p>Start On <i class="fa fa-clock-o"></i> {{ timeFormater(other_course.created_at) }} </p>
								</div>
							</div>
							<!-- recent post -->
						
						</div>
					</div>
				
				</div>
			</div>
		</div>
	</section>
	<!-- Blog page section end -->

    <footer-section> </footer-section>
  </div>
</template>

<script>


export default {
 
  created() {

    this.getCourseDetails();
   
  },

  data() {
    return {
      related_courses: "",
      courseDetails: "",
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

    getCourseDetails() {
	  axios.get("/api/course/details/"+this.$route.params.slug)
	  .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.courseDetails = resp.data.course;
		  this.other_course = resp.data.other_course; 
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