<template>
  <div>
    <NavComponent />
    <!-- category datail used  -->
 <section id="t-cards">
  <div class="container">
    
  <h1>{{this.$route.params.category }} Products</h1>
      <div class="row">
        <!-- get category product and detail using loop -->
           <div class="col-sm-6 col-md-4" v-for="category in singlecategory"
          :key="category.id">
              <div class="panel panel-default panel-card">
                  <div class="panel-heading">
                      <img @click="onProduct(category.id)"
              :src="category.thumbnail"
               />
                  </div>
                  <div class="panel-body text-center">
                      <h4 class="panel-header">{{ category.title }}</h4>
                  </div>
                  <!-- use for multiple images  -->
                  <div class="panel-thumbnails">
                      <div class="row" v-for="images in category.images" :key ="images">
                          <div class="col-xs-4" style="display:flex">
                              <div class="thumbnail">
                                  <img :src="images" />
                              </div>
                          </div>
                        
                      </div>
                  </div>
              </div>   
            </div>
</div>
</div>
</section>

<FooterComponent />
          
</div>

 
</template>
<script >
  
import { mapActions, mapGetters } from "vuex";
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name:'CategoryProduct',
components:{
NavComponent,
FooterComponent,
},
computed: {
  ...mapGetters(["singlecategory"]), //get singleCategory product
},
methods: {
  ...mapActions(["singleCategory"]), //apply action on function 
},
created() {
  this.singleCategory();
},
};

</script>
<style scoped>
#state{
display: block;
}
.row{
  margin-left: 60rem;
}

</style>