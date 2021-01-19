<template>
  <div>
    <!-- Footer section -->
    <footer class="footer-section text-white">
      <div class="footer-top">
        <div style="margin: 10px;" class="row">
          <div class="contact col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <ul>
              <li class="address">
                <p class="short_desc">
                  <span
                    style="font-size: 24px; color: #ff4d03; font-weight: 700"
                    >Talibs Institute</span
                  >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                  voluptatum alias amet aspernatur fugit eius ea, sunt totam qui
                  molestiae autem expedita itaque, dolorum repellendus soluta
                  possimus omnis non odit.
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
                    >CARRIER</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }"
                    >HOME</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'home' }"
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
                <router-link :to="{ name: 'home' }"
                  >HOW TO ADMIT</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'home' }"
                  >Return Policy</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'home' }"
                  >RESULT
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home' }">
                  TEAM
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'home' }"
                  >ABOUT TALIBS
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
                      placeholder="Email address"
                      v-model="email"
                      class="form-control subscribe_input"
                    />
					<button type="submit" class="btn site-btn">subscirbe</button>
                  </div>
                  
                </div>
              </form>

              <div class="social-icon">
                <a href="" target="_blank" class="social-wrape">
                  <i class="fa fa-lg fa-facebook f-icon"></i>
                </a>

                <a href="" class="social-wrape" target="_blank">
                  <i class="fa fa-lg fa-youtube f-icon"></i>
                </a>

                <a href="#" class="social-wrape" target="_blank">
                  <i class="fa fa-lg fa-twitter f-icon"></i>
                </a>

                <a href="#" class="social-wrape" target="_blank">
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
            Copyright All Rights Reserved Talibs Institute
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
    //  console.log("footer mounetd");
  },
  data() {
    return {
      email: "",
      base_url: this.$store.state.storage,
    };
  },
  methods: {
    subscribe() {
      axios
        .post("/_public/add/subscriber", {
          email: this.email,
        })
        .then((resp) => {
          if (resp.data.success == "OK") {
            this.email = "";
            Swal.fire({
              type: "success",
              text: resp.data.message,
              duration: 2000,
            });
          } else {
            this.email = "";
            Swal.fire({
              type: "warning",
              text: resp.data.message,
              duration: 2000,
            });
          }
        })
        .catch();
    },
  },
};
</script>

