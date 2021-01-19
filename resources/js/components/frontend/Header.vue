<template>
  <div>


   	<!-- header section -->
	<header class="header-section">
		<div class="container">
			<!-- logo -->
			<router-link :to="{ name : 'home' }" class="site-logo"><img :src="base_url+'images/logo.png'" alt="LOGO"></router-link>
			<div class="nav-switch">
				<i  type="button" data-toggle="collapse" data-target="#navbarContent"
         aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation"  class="fa fa-bars"></i>
			</div>
			<div class="header-info">
				<div class="hf-item">
					<i class="fa fa-clock-o"></i>
					<p><span>Working time:</span>Satarday - Thrusday: 10.00 AM - 08.00 PM</p>
				</div>
				<div class="hf-item">
					<i class="fa fa-map-marker"></i>
					<p><span>Find us:</span>40 School Road 133/2, Moulvibazar,Sylhet</p>
				</div>
			</div>
		</div>
	</header>

    <nav class="nav-section">
      <div class="container">
        <div class="nav-right">
         <a href="" ><i @click="showAndHide" class="fa fa-search"></i> </a> 
          <router-link :to="{name:'user_login'}"><i class="fa fa-user"></i></router-link>
        </div>
        <ul id="navbarContent"  class="main-menu">
          <li
            v-for="(category, index) in categories"
            :key="index"
           
          >
          <router-link :to="{name : 'category_wise_course',params:{id:category.id }}"> {{ category.name }} </router-link>
          </li>
          <li> <router-link :to="{ name:'check_student_result' }">Result</router-link> </li>
          <li> <router-link :to="{ name:'student_register' }">Register</router-link> </li>
        </ul>
      </div>
    </nav>
    <!-- Header section end -->
  </div>
</template>

<script>
export default {
  mounted() {

    this.$store.dispatch("categories");
    
  },

  data() {
    return {
      base_url:this.$store.state.storage ,
    };
  },

  methods: {
     showAndHide(){
       
     }
  },

  computed: {
    categories() {
    return  this.$store.getters.categories;
    },
  },
};

</script>

<style scoped>

i {
  font-size: 24px;
}


</style>