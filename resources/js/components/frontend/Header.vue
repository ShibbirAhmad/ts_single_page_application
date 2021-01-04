<template>
  <div>

   	<!-- header section -->
	<header class="header-section">
		<div class="container">
			<!-- logo -->
			<router-link :to="{ name : 'home' }" class="site-logo"><img :src="base_url+'images/logo.png'" alt="LOGO"></router-link>
			<div class="nav-switch">
				<i class="fa fa-bars"></i>
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
         <a href="" ><i class="fa fa-search"></i> </a> 
          <router-link :to="{name:'student_register'}"><i class="fa fa-user"></i></router-link>
        </div>
        <ul class="main-menu">
          <li
            v-for="(category, index) in categories"
            :key="index"
           
          >
          <a href=""> {{ category.name }} </a>
          </li>
          <li> <a href="">Result</a> </li>
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