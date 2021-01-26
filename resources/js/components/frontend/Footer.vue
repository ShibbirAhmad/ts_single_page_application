<template>
  <div>
    <!-- Footer section -->
    <footer class="footer-section text-white">
      <div class="footer-top">
        <div style="margin: 10px;" class="row">
          <div class="contact col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <ul>
              <li class="address">
                <p v-html="footer_setting.footer_description "  class="short_desc">
                  
                </p>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
            <div class="quick_link">
              <h5>QUICK LINKS</h5>
              <div class="line"></div>
              <ul class="link_line">
               <li>
                  <router-link :to="{ name: 'home' }"
                    >HOME</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }"
                    >CARRIER</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'blog' }"
                    >BLOG</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }"
                    >ABOUT US</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }"
                    >CONTACT US</router-link
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-6 col-xs-6">
            <h5>INFORMATION</h5>
            <div class="line"></div>
            <ul class="link_line">
              <li>
                <router-link :to="{ name: 'student_register' }"
                  >HOW TO ADMIT</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'home' }"
                  >Return Policy</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'check_student_result' }"
                  >RESULT
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'talibs_team' }">
                  TEAM
                </router-link>
              </li>
             
            </ul>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="news_letter">
              <h5>NEWSLETTER</h5>
              <div class="line"></div>
              <form @submit.prevent="subscribe()">
                <div class="row ">
                  <div class="form-group">
                    <label
                      >Subscribe to get the latest useful tips, advice and best
                      offer.</label
                    >
                    <input
                      type="email"
                      required
                      placeholder="example@gmail.com"
                      v-model="email"
                      name="email"
                      class="form-control subscribe_input"
                      
                    />
				           	<button type="submit" class="btn subscribe-btn">subscirbe</button>
                  </div>
                  
                </div>
              </form>

              <div class="social-icon">
                <a :href="footer_setting.facebook_url" target="_blank" class="social-wrape">
                  <i class="fa fa-lg fa-facebook f-icon"></i>
                </a>

                <a :href="footer_setting.youtube_url" class="social-wrape" target="_blank">
                  <i class="fa fa-lg fa-youtube f-icon"></i>
                </a>

                <a :href="footer_setting.twitter_url" class="social-wrape" target="_blank">
                  <i class="fa fa-lg fa-twitter f-icon"></i>
                </a>

                <a :href="footer_setting.linkedin_url" class="social-wrape" target="_blank">
                  <i class="fa fa-lg fa-linkedin f-icon"></i>
                </a>

                <a href="#" class="social-wrape" target="_blank">
                  <i class="fa fa-lg fa-instagram f-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- copyright -->
      <div class="copyright">
        <div class="container">
          <p>
            {{ footer_setting.copyright_info  }}
            <i class="fa fa-heart-o" aria-hidden="true"></i> Developed By
            <a href="https://shibbirit.com" target="_blank">CODER SHIBBIR</a>
          </p>
        </div>
      </div>
    </footer>
    <!-- Footer section end-->
  </div>
</template>



<script>

export default {
  mounted() {
     this.$store.dispatch('footer_setting');
  },
  data() {
    return {
     email:"",
    };
  },
  methods: {
    subscribe() {
     
      axios.post('/api/subscriber/add',{
			     email:this.email 
		    })
        .then((resp) => {
          if (resp.data.success == "OK") {
            this.email = "";
            Swal.fire({
              type: "success",
              text: resp.data.message,
          
            });
          }else{
            this.email = "";
            Swal.fire({
              type: "error",
              text: resp.data.message,
        
            });
          }
        })
        
    },
  },
  computed:{
    footer_setting(){
      return this.$store.getters.footer_setting ;
    }
  }
};
</script>

