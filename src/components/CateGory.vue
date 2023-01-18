<template>
<div>
<section id="t-cards">
  
<h1 style="margin-left:10rem">Categories</h1>
  <div class="container">
      <div class="row">
          <!-- we wil use loop for all categories c_d fun move
            ' and use for single category  -->
           <div class="col-sm-6 col-md-3"
                v-for="category in category" :key="category"  
                rounded
                color="primary"
                dark
                @click="Category_Detail(category)">
              <div class="panel panel-default panel-card">
                  <div class="panel-body text-center">
                      <h4 class="panel-header">{{category  }}</h4>
                      <img :src="category.thumbnail" />
                      
                  </div>
              </div>   
            </div>
        </div>
  </div>
</section>
</div>

</template>
<script >
  
import { mapActions, mapGetters } from "vuex";


export default {
  name:'CateGory',

computed: {
  ...mapGetters(["category"]),
},
methods: {
  ...mapActions(["fetchAllCategory"]), //work on action
  Category_Detail(category){
    // move and pass parameter as props 
    this.$router.push({name:'category_product',params:{category:category}})
    this.$store.state.singlecategory=category //value will store in state
  }
},
created() {
  this.fetchAllCategory();  //funtion will intialized
},
};

</script>
<style scoped>



#t-cards {
  padding-top: 80px;
  padding-bottom: 80px;

}

/********************************/
/*          Panel cards         */
/********************************/
.panel.panel-card {
  position: relative;
  height: 241px;
  border: none;
  overflow: hidden;
  background-color: #345;    
}
.panel.panel-card .panel-heading {
  position: relative;
  z-index: 2;
  height: 120px;
  border-bottom-color: #fff;
  overflow: hidden;
  
  -webkit-transition: height 600ms ease-in-out;
          transition: height 600ms ease-in-out;
}
.panel.panel-card .panel-heading img {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 120%;
  
  -webkit-transform: translate3d(-50%,-50%,0);
          transform: translate3d(-50%,-50%,0);
}
.panel.panel-card .panel-heading button {
  position: absolute;
  top: 10px;
  right: 15px;
  z-index: 3;
}
.panel.panel-card .panel-figure {
  position: absolute;
  top: auto;
  left: 50%;
  z-index: 3;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  opacity: 1;
  -webkit-box-shadow: 0 0 0 3px #fff;
          box-shadow: 0 0 0 3px #fff;
  
  -webkit-transform: translate3d(-50%,-50%,0);
          transform: translate3d(-50%,-50%,0);
  
  -webkit-transition: opacity 400ms ease-in-out;
          transition: opacity 400ms ease-in-out;
}

.panel.panel-card .panel-body {
  padding-top: 40px;
  padding-bottom: 20px;

  -webkit-transition: padding 400ms ease-in-out;
          transition: padding 400ms ease-in-out;
} 

.panel.panel-card .panel-thumbnails {
  padding: 0 15px 20px;
}
.panel-thumbnails .thumbnail {
  width: 60px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #fff;
} 


.panel.panel-card:hover .panel-heading {
  height: 55px;
  
  -webkit-transition: height 400ms ease-in-out;
          transition: height 400ms ease-in-out;
}
.panel.panel-card:hover .panel-figure {
  opacity: 0;
  
  -webkit-transition: opacity 400ms ease-in-out;
          transition: opacity 400ms ease-in-out;
}
.panel.panel-card:hover .panel-body {
  padding-top: 20px;
  
  -webkit-transition: padding 400ms ease-in-out;
          transition: padding 400ms ease-in-out;
}
</style>