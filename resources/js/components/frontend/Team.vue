<template>
  <div>
    <header-section></header-section>
    <!-- Courses section -->
    <section class="courses-section spad background_image">
      <div class="container   ">
        <div class="row">
 
            <div style="margin-bottom: 50px" class="container">
              <div
                v-for="(member, index) in team"
                :key="index"
                class="col-md-3 col-sm-6"
              >
                <div
                  class="card box profile_container text-center shadow box-white"
                >
                  <div class="inside_top"></div>
                  <img
                    class="profile_image"
                    :src="base_url + member.avator"
                    alt=""
                  />
                  <div class="inside_bottom"></div>
                  <h4 class="heading">{{ member.name }}</h4>
                  <p>{{ member.designation }}</p>
                </div>
              </div>
            </div>
       
        </div>
      </div>
    </section>

    <footer-section> </footer-section>
  </div>
</template>

<script>
export default {
  created() {
    this.getTeamMember();
  },

  data() {
    return {
      category: "",
      base_url: this.$store.state.storage,
      team: "",
    };
  },

  methods: {
    getTeamMember() {
      axios.get("/api/publish/team").then((resp) => {
        console.log(resp);
        if (resp.data.status == "OK") {
          this.team = resp.data.team;
        }
      });
    },
  },
};
</script>


<style scoped>
.background_image {
  height: 800px;
  width: 100%;
  background-image: url(https://i.pinimg.com/originals/32/d2/a4/32d2a4001121ce419d551a38f9a35acc.png);
  background-size: cover;
  background-attachment: fixed;
}
.profile_image {
  margin-top: -70px;
  margin-left: 20%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #fff;
}
.desc_info p {
  padding: 5px;
  margin: 10px;
  padding-bottom: 20px;
}
.profile_container {
  border-radius: 10px;
  margin-top: 50px;
  background: #fff;
  padding-bottom: 20px;
}
.inside_top {
  width: 100%;
  height: 90px;
  background: #ff4d03;
  border-radius: 5px;
}
.inside_bottom {
  width: 100%;
  background-color: #fff;
}
h4 {
  font-size: 16px;
}
p {
  font-size: 14px;
  line-height: 10px;
}
</style>