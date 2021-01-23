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
          <router-link :to="{name:'user_login'}"><i class="fa fa-user"></i></router-link>
           <a v-if="Object.keys(user).length" class="btn btn-secondary dropdown-toggle" type="button" id="dropDownBtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           {{ user.name }}
          </a>
            <div class="dropdown-menu" aria-labelledby="dropDownBtn">
            <button class="dropdown-item btn "  @click="Logout">Logout</button>
           </div>
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
    this.$store.dispatch("user");
    this.$store.dispatch("categories");
    
  },

  data() {
    return {
      base_url:this.$store.state.storage ,
    };
  },

  methods: {
     showAndHide(){
       
     },
     Logout(){
        this.$Progress.start()
        axios.get("/api/logout/the/user")
        .then((resp) => {
            this.user = null;
            localStorage.removeItem("user_token");
            this.$Progress.finish();
            location.reload(); 
        })
     }

  },

  computed: {
    categories() {
    return  this.$store.getters.categories;
    },
    user() {
      return this.$store.getters.user;
    },
  },
};

</script>

<style scoped>

i {
  font-size: 24px;
}


</style>