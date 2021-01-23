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
								<h4 v-if="blogDetails.admin_name">Written by <b> {{ blogDetails.admin_name.name }} </b> </h4>
								<p>Mauris lectus justo, tempor ac auctor at, congue id erat.
									 Pellentesque et massa odio. Fusce vel fermentum tortor, nec gravida ligula.
									  Vivamus at malesuada tortor, in posuere ex. Phasellus pretium turpis non ipsum vestibulum, 
									  a finibus quam rhoncus.</p>
							</div>
						</div>
						<div class="comment-warp">
							<h4 class="comment-title">{{ blogDetails.comments.length }} Comments</h4>
							<ul class="comment-list">
								<li  v-for="(comment,index) in blogDetails.comments" :key="index">
									<div class="comment">
										<div class="set-bg" >
											<img class="comment-avator" :src="base_url+comment.user.image" >
										</div>
										<div class="comment-content">
											<span class="c-date">{{ timeFormater(comment.created_at) }}</span>
											<h5>{{ comment.user.name }}</h5>
											<p>{{ comment.comment }}</p>
											<a href="" class="c-btn">Like</a>
											<a href="" class="c-btn">Reply</a>
										</div>
									</div>
									<ul v-if="comment.replies.length" class="replay-comment-list">
										<li v-for="(comment_reply,index) in comment.replies " :key="index">
											<div class="comment">
												<div class="set-bg" >
													<img :src="base_url+comment_reply.user.image" >
												</div>
												<div class="comment-content">
													<span class="c-date">{{ timeFormater(comment_reply.created_at) }}</span>
													<h5>{{ comment_reply.user.name }}</h5>
													<p>{{ comment_reply.reply }}</p>
													<a href="" class="c-btn">Like</a>
													<a href="" class="c-btn">Reply</a>
												</div>
											</div>
										</li>
									</ul>
								</li>
								
							</ul>
							<div class="comment-form-warp text-center">
								<h4 class="comment-title">Leave Your Comment</h4>
								<form v-if="Object.keys(user).length"  @submit.prevent="userComment" class="comment-form">
									<div class="row">
										<div class="col-sm-12">
											<textarea v-model="form.comment" :class="{'has-invalid':form.errors.has('comment')}" class="form-control" required  name="comment"  rows="1"></textarea>
											<has-error :form="form"  field="comment" ></has-error>
											<button type="submit" class="site-btn">COMMENT</button>
										</div>
									</div>
								</form>
								<router-link v-else class="btn btn-info" :to="{name:'user_login'}">signin to comment</router-link>
							</div>
						</div>
					</div>
				</div>
				<!-- sidebar -->
				<div class="col-sm-8 col-md-5 col-lg-4 col-xl-3 offset-xl-1 offset-0 pl-xl-0 sidebar">
					<!-- widget -->
					<!-- <div class="widget">
						<form class="search-widget">
							<input type="text" placeholder="Search...">
							<button><i class="ti-search"></i></button>
						</form>
					</div> -->
					<!-- widget -->
					<div class="widget">
						<h5 class="widget-title">Related Article </h5>
						<div class="recent-post-widget">
							
							<!-- recent post -->
							<div v-for="(related_blog,index) in related_blog_posts " :key="index" class="rp-item">
							<div class="rp-thumb set-bg" >
								<router-link :to="{name:'blog_post_details', params:{slug:related_blog.slug} }" >
									<img :src="related_blog.image?base_url+related_blog.image : base_url+'images/no_image.jpg'" >
								</router-link>
						 	 </div>
								<div class="rp-content">
									<h6> <router-link :to="{name:'blog_post_details', params:{slug:related_blog.slug} }" >
										 {{ related_blog.title }}
										 </router-link>
									 </h6>
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

import Vue from "vue";
import { Form, HasError } from "vform";
Vue.component(HasError.name, HasError);
export default {
 
  created() {

    this.getPostDetails();
    this.$store.dispatch('user');
  },

  data() {
    return {
       related_blog_posts: "",
       blogDetails: "",
	   base_url: this.$store.state.storage,
	   form:new Form({
	   post_id:"",	  
       comment:"",
	  }),
	  reply:"",
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
          this.form.post_id = resp.data.blog_post.id;
		  this.related_blog_posts = resp.data.related_blog_posts; 
        }
      });
	},
	
    userComment(){
		 this.form.post('/api/user/comment',{
			 transformRequest:[
				 function(data,headers){
                  return objectToFormData(data) ;
				 }
			 ]
		 })
		 .then((resp)=>{
			 if (resp.data.status=="OK") {
				 this.form.comment="";
				 this.$toasted.show(resp.data.message,{
					 type:'success',
					 position:'top-center',
					 duration:4000,
				 })
				 this.getPostDetails();
			 }
		 }) 
	}
	
  },

 computed:{

	 user(){

		 return this.$store.getters.user;
	 }
 }


};
</script>


<style scoped>



</style>