<template>
  <div>
    <header-section></header-section>
    <!-- Hero section -->
    <section class="hero-section">
	  <div class="row">
	  <div class="col-lg-8 col-md-8 col-sm-12">
		  <div class="slider_container">
           <carousel
              v-if="landing_sliders"
              :items="1"
              :nav="false"
              :autoplay="true"
              :autoplayTimeout="2000"
            >
              <a v-for="slider in landing_sliders" :href="slider.url" :key="slider.id">
                <img  :src="slider.image? base_url + slider.image : base_url+'images/no_image.jpg'" />
              </a>
            </carousel>
		  </div>
	  </div>
	  <div class="col-lg-4 col-md-4 col-sm-0">
		    <div class="baner_container">
				<img id="banner" v-if="banner" :src="banner[0].banner? base_url+banner[0].banner : base_url +'images/no_image.jpg'" >
			</div>
	   </div>	
	</div>
 
    </section>
    <!-- Hero section end -->

    <!-- Counter section  -->
    <section class="counter-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="big-icon">
              <i class="fa fa-graduation-cap"></i>
            </div>
            <div class="counter-content">
              <h2>UPCOMING COUSRE: {{ upcoming_course.name }} </h2>
              <h2 v-if="upcoming_course.category_name" > {{ upcoming_course.category_name.name }} </h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
          
             <flip-countdown style="color:#fff" deadline="2021-03-01 00:00:00"></flip-countdown>
           
          </div>
        </div>
      </div>
    
    </section>
   
    <!-- Counter section end --> 

    <!-- Enroll section -->
    <section class="enroll-section spad set-bg" data-setbg="img/enroll-bg.jpg">
      <div class="container">
            <div class="row service_row">

          <div class="col-md-6 col-sm-12">
            
            <div class="service_container">
              <div class="service_outer">
              <div class="service_inner"> 
               <i class="fa fa-american-sign-language-interpreting service_icon1"></i>
              </div>            
             </div>
            <p class="service_description1"> FREE LANGUAGE CLUB EVERY FRIDAY </p>
           </div>
       
         
           <div class="service_container">
              <div class="service_outer">
              <div class="service_inner"> 
                  <i  class="fa fa-money service_icon"> </i>
              </div>            
             </div>
            <p  class="service_description2">MONEY-BACK GURANTEE WITH-IN 3 DAYS</p>
           </div>

       </div>


           <div class="col-md-6 col-sm-12 service_optional">

             <div class="service_container">
              <div class="service_outer">
              <div class="service_inner"> 
                  <i style="margin-left:15px" class="fa fa-thumbs-up service_icon"> </i>
              </div>            
             </div>
            <p class="service_description3"> HIGH SKILL TRAINERS </p>
           </div>
       
         
           <div class="service_container">
              <div class="service_outer">
              <div class="service_inner"> 
                  <i style="margin:14px;" class="fa fa-headphones service_icon"> </i> 
              </div>            
             </div>
            <p class="service_description4"> DEDICATED ONLINE SUPPORT </p>
           </div>
            
        </div>


      </div>
        <div class="row">
          <div class="col-lg-5">
            <div class="section-title text-white">
              <h3>ENROLLMENT SKILL</h3>
              <p>Get started with us to explore english skill</p>
            </div>
            <div class="enroll-list text-white">
              <div class="enroll-list-item">
                <span>1</span>
                <h5>SPEAKING</h5>
                <p>
                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                  Vivamus interdum ultrices augue.
                </p>
              </div>
              <div class="enroll-list-item">
                <span>2</span>
                <h5>LISTENING</h5>
                <p>
                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                  Vivamus interdum ultrices augue.
                </p>
              </div>
              <div class="enroll-list-item">
                <span>3</span>
                <h5>WRITING</h5>
                <p>
                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                  Vivamus interdum ultrices augue.
                </p>
              </div>
                <div class="enroll-list-item">
                <span>4</span>
                <h5>READING</h5>
                <p>
                  Lorem ipsum dolor sitdo amet, consectetur dont adipis elit.
                  Vivamus interdum ultrices augue.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 offset-lg-1 p-lg-0 p-4">
            <img src="img/encroll-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <!-- Enroll section end -->

    <!-- Courses section -->
    <section class="courses-section spad">
      <div class="container">
        <div class="section-title text-center">
          <h3 class="heading">OUR COURSES</h3>
          <p>Building a better world, one course at a time</p>
        </div>
        <div class="row">
          <!-- course item -->
          <div
            v-for="(course, index) in courses"
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

    <!-- Fact section -->
    <section class="fact-section spad set-bg" data-setbg="img/fact-bg.jpg">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-lg-3 fact">
            <div class="fact-icon">
              <i class="ti-crown"></i>
            </div>
            <div class="fact-text">
              <h2>3</h2>
              <p>YEARS</p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 fact">
            <div class="fact-icon">
              <i class="ti-briefcase"></i>
            </div>
            <div class="fact-text">
              <h2>10</h2>
              <p>TEACHERS</p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 fact">
            <div class="fact-icon">
              <i class="ti-user"></i>
            </div>
            <div class="fact-text">
              <h2>500</h2>
              <p>STUDENTS</p>
            </div>
          </div>
          <div class="col-sm-6 col-lg-3 fact">
            <div class="fact-icon">
              <i class="ti-pencil-alt"></i>
            </div>
            <div class="fact-text">
              <h2>800+</h2>
              <p>LESSONS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Fact section end-->

    <!-- Event section -->
    <section class="event-section spad">
      <div class="container-fluid">
            <div class="row">
              
              <div  class="parallax_background">
                <div class="parallax_inside">
                    <div class="parallax_content">
                        <h4> Limited Time Offer </h4>
                        <h1 class="parallax_offer"> 20% off </h1>
                          <router-link :to="{name : 'home' }" class="btn btn-discover "> DISCOVER NOW </router-link>
                    </div>
                </div>
              </div>


            </div>
      </div>
    </section>
    <!-- Event section end -->

    <!-- Blog section -->
    <section class="blog-section spad">
      <div class="container">
        <div class="section-title text-center">
          <h3>LATEST BLOG</h3>
          <p>Get latest article & top stories today</p>
        </div>
        <div class="row">
          <div v-for="(post, index) in blogPosts" :key="index" class="col-xl-6 col-md-6 col-sm-12 ">
            <div class="blog-item">
              <div class="blog-thumb set-bg">
               <router-link :to="{name:'blog_post_details', params:{slug:post.slug} }" >
                  <img class="img-responsive" :src="post.image ? base_url+post.image : base_url+'images/no_image.jpg' " alt="">
               </router-link>
              </div>
              <div class="blog-content">
              <router-link :to="{name:'blog_post_details', params:{slug:post.slug} }" >
                  <h4>{{ post.title }}</h4>
              </router-link>
                <div class="blog-meta">
                  <span
                    ><i class="fa fa-calendar-o"></i>
                    {{ timeFormater(post.created_at) }}
                  </span>
                  <span
                    ><i class="fa fa-user"></i> {{ post.admin_name.name }}
                  </span>
                </div>
                <p v-html="post.description.substr(0,150)"></p>
                <router-link class="btn btn-read-more" :to="{name:'blog_post_details', params:{slug:post.slug} }" >
                     read more...
                </router-link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Blog section -->


    <footer-section> </footer-section>
  </div>
</template>

<script>

import FlipCountdown from 'vue2-flip-countdown'
import carousel from "vue-owl-carousel";
export default {
 
  created() {
    this.getCourseList();
    this.getPostList();
    this.$store.dispatch("landing_sliders");
    this.$store.dispatch("banner");
    this.$store.dispatch("upcoming_course");
  },

  data() {
    return {
      courses: "",
      blogPosts: "",
      base_url: this.$store.state.storage,
    };
  },

  methods: {
    getCourseList() {
      axios.get("/api/display/course/public")
      .then((resp) => {
       // console.log(resp);
        if (resp.data.status == "OK") {
          this.courses = resp.data.courses;
        }
      });
    },


    getPostList() {
      axios.get("/api/blog/post/public")
      .then((resp) => {
        // console.log(resp);
        if (resp.data.status == "OK") {
          this.blogPosts = resp.data.blog_posts;
        }
      });
    },

  
    timeFormater(created_at) {
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

  computed: {
    landing_sliders() {
      return this.$store.getters.landing_sliders;
    },

    banner(){
      return this.$store.getters.banner ;
    },

    upcoming_course(){
      return this.$store.getters.upcoming_course ;
    },

  },

  components: { 
      carousel ,
      FlipCountdown,
	  },


};
</script>


<style scoped>






</style>