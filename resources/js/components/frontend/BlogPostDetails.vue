<template>
  <div>
	  
    <header-section></header-section>

	<!-- Blog page section  -->
	<section style="margin-top:20px;" class="blog-page-section spad pt-0">
		<div  class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="post-item post-details">
						<img :src="blogDetails.image?base_url+blogDetails.image : base_url+'images/no_image.jpg'" class="post-thumb-full" alt="">
						<div class="post-content">
							<h3> {{ blogDetails.title }} </h3>
							<div class="post-meta">
								<span><i class="fa fa-calendar-o"></i>{{ timeFormater(blogDetails.created_at) }}</span>
								<span v-if="blogDetails.admin_name"><i class="fa fa-user"></i> {{ blogDetails.admin_name.name }} </span>
							</div>
							<p v-html="blogDetails.description"> </p>
						</div>
						<div class="post-author">
							<div>
								<img class="pa-thumb set-bg" :src="blogDetails.admin_name.image? base_url+blogDetails.admin_name.image : base_url+'images/no_image.jpg'" alt="">
							</div>
							<div class="pa-content">
								<h4 v-if="blogDetails.admin_name">Written by <bold> {{ blogDetails.admin_name.name }} </bold> </h4>
								<p>Mauris lectus justo, tempor ac auctor at, congue id erat. Pellentesque et massa odio. Fusce vel fermentum tortor, nec gravida ligula. Vivamus at malesuada tortor, in posuere ex. Phasellus pretium turpis non ipsum vestibulum, a finibus quam rhoncus.</p>
							</div>
						</div>
						<div class="comment-warp">
							<h4 class="comment-title">3 Comments</h4>
							<ul class="comment-list">
								<li>
									<div class="comment">
										<div class="comment-avator set-bg" data-setbg="img/blog/comment/1.jpg"></div>
										<div class="comment-content">
											<span class="c-date">24 Mar 2018</span>
											<h5>Kelly Richardson</h5>
											<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
											<a href="" class="c-btn">Like</a>
											<a href="" class="c-btn">Reply</a>
										</div>
									</div>
									<ul class="replay-comment-list">
										<li>
											<div class="comment">
												<div class="comment-avator set-bg" data-setbg="img/blog/comment/2.jpg"></div>
												<div class="comment-content">
													<span class="c-date">24 Mar 2018</span>
													<h5>Gordon Browns</h5>
													<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.</p>
													<a href="" class="c-btn">Like</a>
													<a href="" class="c-btn">Reply</a>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li>
									<div class="comment">
										<div class="comment-avator set-bg" data-setbg="img/blog/comment/3.jpg"></div>
										<div class="comment-content">
											<span class="c-date">24 Mar 2018</span>
											<h5>Scott Langton</h5>
											<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
											<a href="" class="c-btn">Like</a>
											<a href="" class="c-btn">Reply</a>
										</div>
									</div>
								</li>
							</ul>
							<div class="comment-form-warp">
								<h4 class="comment-title">Leave Your Comment</h4>
								<form class="comment-form">
									<div class="row">
										<div class="col-sm-6">
											<input type="text" placeholder="Your Name">
										</div>
										<div class="col-sm-6">
											<input type="email" placeholder="Your Email">
										</div>
										<div class="col-sm-12">
											<textarea placeholder="Your Message"></textarea>
											<button class="site-btn">SEND COMMENT</button>
										</div>
									</div>
								</form>
							</div>
						</div>
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
						<h5 class="widget-title">Related Article </h5>
						<div class="recent-post-widget">
							
							<!-- recent post -->
							<div v-for="(related_blog,index) in related_blog_posts " :key="index" class="rp-item">
								<div class="rp-thumb set-bg" >
										<img :src="related_blog.image?base_url+related_blog.image : base_url+'images/no_image.jpg'"  >
								</div>
								<div class="rp-content">
									<h6> {{ related_blog.title }} </h6>
									<p><i class="fa fa-clock-o"></i> {{ timeFormater(related_blog.created_at) }} </p>
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

    this.getPostDetails();
   
  },

  data() {
    return {
      related_blog_posts: "",
      blogDetails: "",
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

    getPostDetails() {
	  axios.get("/api/blog/details/"+this.$route.params.slug)
	  .then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.blogDetails = resp.data.blog_post;
		  this.related_blog_posts = resp.data.related_blog_posts; 
        }
      });
    },

  
	
  },

 


};
</script>


<style scoped>



</style>