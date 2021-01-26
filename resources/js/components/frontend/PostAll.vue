<template>
  <div>
    <header-section></header-section>
    <!-- Blog section -->
    <section class="blog-section spad">
      <div class="container">
        <div class="section-title text-center">
          <h3>BLOG</h3>
          <p>Get latest article & top stories today</p>
        </div>
        <div class="row">
          <div
            v-for="(post, index) in blogPosts.data"
            :key="index"
            class="col-xl-6 col-md-6 col-sm-12"
          >
            <div class="blog-item">
              <div class="blog-thumb set-bg">
                <router-link
                  :to="{
                    name: 'blog_post_details',
                    params: { slug: post.slug },
                  }"
                >
                  <img
                    class="img-responsive"
                    :src="
                      post.image
                        ? base_url + post.image
                        : base_url + 'images/no_image.jpg'
                    "
                    alt=""
                  />
                </router-link>
              </div>
              <div class="blog-content">
                <router-link
                  :to="{
                    name: 'blog_post_details',
                    params: { slug: post.slug },
                  }"
                >
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
                <p v-html="post.description.substr(0, 150)"></p>
                <router-link
                  class="btn btn-read-more"
                  :to="{
                    name: 'blog_post_details',
                    params: { slug: post.slug },
                  }"
                >
                  read more...
                </router-link>
              </div>
            </div>
          </div>
        </div>
         <div class="row">
                  <div class="col-md-6">
                    <pagination
                      :limit="3"
                      :data="blogPosts"
                      @pagination-change-page="getAllPost"
                    >
                      <span slot="prev-nav">&lt; Previous</span>
                      <span slot="next-nav">Next &gt;</span>
                    </pagination>
                  </div>
                  <div
                    class="col-lg-6 mt-1"
                    style="margin-top: 25px; text-align: right"
                  >
                    <p>
                      Showing <strong>{{ blogPosts.from }}</strong> to
                      <strong>{{ blogPosts.to }}</strong> of total
                      <strong>{{ blogPosts.total }}</strong> entries
                    </p>
                  </div>
                </div>
      </div>
    </section>
    <!-- Blog section -->

    <footer-section> </footer-section>
  </div>
</template>

<script>
export default {
  created() {
    this.getAllPost();
  },

  data() {
    return {
      category: "",
      base_url: this.$store.state.storage,
      blogPosts: "",
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

    getAllPost(page = 1) {
      axios.get("/api/get/all/bolg/post?="+page)
      .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.blogPosts = resp.data.blog_posts;
        }
      });
    },
  },
};
</script>


<style scoped>
.btn-join-now {
  background: #f6783a;
  color: #fff;
  margin-bottom: 10px;
  margin-left: 40%;
  width: 115px;
  height: 50px;
  padding-top: 12px;
}

.btn-join-now:hover {
  box-shadow: 1px 1px 3px 1px #f6783a;
}
</style>