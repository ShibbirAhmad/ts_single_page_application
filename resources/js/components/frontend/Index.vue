<template>
  <div>
    <header-section></header-section>
    <!-- Hero section -->
    <section class="hero-section">
	<div class="row">
	  <div class="col-lg-8 col-md-8 col-sm-8">
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
	  <div class="col-lg-4 col-md-4 col-sm-4">
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
          
             <flip-countdown style="color:#fff" deadline="2021-02-01 00:00:00"></flip-countdown>
           
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
               <i style="margin:10px" class="fa fa-american-sign-language-interpreting service_icon"></i>
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
            <p  class="service_description2">MONEY-BACK GURANTEE WITH-IN 7 DAYS</p>
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
      <div class="container-fluid">
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
              <i class="fa fa-clock-o"></i> {{ courseTimeFormater(course.start_date) }} 
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
                        <h1 class="parallax_offer"> 40% off </h1>
                          <router-link :to="{name : 'landing_page' }" class="btn btn-read-more "> DISCOVER NOW </router-link>
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
                    {{ postTimeFormater(post.created_at) }}
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
      // upcoming_date:'2021-01-25 00:00:00',
	  
    };
  },

  methods: {
    getCourseList() {
      axios.get("/api/display/course/public")
      .then((resp) => {
        console.log(resp);
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

    courseTimeFormater(start_date) {
      let dayMonthYear = new Date(start_date);
      var days = dayMonthYear.getDay();
      var months = dayMonthYear.getMonth();
      var years = dayMonthYear.getFullYear();

      const dm = new Date(years, months, days);
      const yea = new Intl.DateTimeFormat("en", { year: "numeric" }).format(dm);
      const mon = new Intl.DateTimeFormat("en", { month: "short" }).format(dm);
      const dy = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(dm);
      let c_date = `${dy}-${mon}-${yea}`;
      return c_date;
    },

    postTimeFormater(created_at) {
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


.slider_container{
   margin:5px;
   margin-right:0px;
	 box-shadow: 1px 2px 1px #ddd;
}

.baner_container{
    margin: 5px;
    width: 530px;
    height: 365px;
    box-shadow: 1px 2px 1px #ddd;
    margin-left: -15px;
}

#banner{
  width:530px;
  height: 365px !important;
}

.course_container{
  box-shadow: 2px 1px 10px 1px #ddd;
}

.course_container:hover {
 
  box-shadow: 2px 1px 10px 1px #2e2e2e ;
  margin-left:15px;
  padding:2px;
  transition: .5s;
   
}


.blog-item:hover {
 
  box-shadow: 2px 1px 10px 1px #2e2e2e ;
  margin-left:10px;
  padding:2px;
  transition: .5s;
   
}

.btn-read-more{
  background:#f6783a;
  color:#fff;
  margin-bottom: 20px;
  padding-bottom:10px;
}



.btn-read-more:hover{
    animation: fly 1s ease 1;   
}

@keyframes fly {
    0% {
      transform: translateY(0%);
    }
  
    50% {
      transform: translateY(100%);
    }
  
    100% {
      transform: translateY(0);
    }
  }



.parallax_background {

    width: 100%;
    height: 350px;
    background-image: url(https://biniblog.localbini.com/wp-content/uploads/2019/02/green-1080x608.jpg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}


.parallax_inside {

    margin: 60px;
    position: absolute;
    border: 2px solid #fff;
    width: 40%;
    height: 230px;
}

.parallax_content {

    margin: 10px;
    position: absolute;
    background: #fff;
    width: 96%;
    height: 195px;
    text-align:center;

}

.parallax_content h4 {
  margin-top: 20px;
}

.parallax_offer {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
}



.service_row{

    width: 100%;
    height: 145px;
    background:#2e2e2e;
    margin-bottom:50px;
    border: 2px dashed #fff;
 

 }


.service_container{

  float:left;

  }

.service_outer {

    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: dashed 1px #fff;
    background: #222;
    margin: 0px 94px;
    margin-top: 20px;

}

.service_inner {

    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    margin: 6.5px 6px;

}


.service_icon{
    position: absolute;
    margin: 11px;
    font-size: 35px;
}

.service_outer:hover>.service_inner>.service_icon{
  
   -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    cursor: pointer;
    transition: 0.5s;

}

.service_description1 {

    color:#fff;
    padding:10px;
    font-size:13px;

}


.service_description2 {

    color:#fff;
    padding:9px;
    font-size:13px;

}

.service_description3 {

    color:#fff;
    padding:10px;
    margin-left:45px;
    font-size:13px;

}


.service_description4 {

    color:#fff;
    padding:10px;
    margin-left:40px;
    font-size:13px;

}






@media screen and (max-width: 400px) {

  
.parallax_inside {
    width: 60%;
}

.parallax_content {
  width: 91% ;
} 


.parallax_offer {
  margin-top: 15px !important;
  margin-bottom: 15px !important;
} 


  .service_row{

    width: 100%;
    height: 160px;
    background: #2e2e2e;
    margin-left: 0px;

 }

 .service_optional{
   display: none;
 }

.service_container{
  display:flex ;
}
.service_outer {

    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: dashed 1px #fff;
    background: #222;
    margin-left: 23px;
    margin-top: 26px;

}

.service_inner {

    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #fff;
    margin: 7px 6px;

}

.service_icon{
    position: absolute;
    margin: 7px;
    font-size: 30px;
}

.service_outer:hover>.service_inner>.service_icon{
  
   -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    cursor: pointer;
    transition: 0.5s;

}

.service_description1 {

    position: absolute;
    font-size: 15px !important;
    line-height: 22px !important;
    margin-left: 95px;
    padding-top: 15px;


}

.service_description2 {

    position: absolute;
    font-size: 15px !important;
    line-height: 22px !important;
    line-height: 22px !important;
    margin-left: 95px;
    padding-top: 27px;
 

}


}




</style>