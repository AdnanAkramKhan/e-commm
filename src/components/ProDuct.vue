<template>
  <v-app id="inspire" style="background-color:lightblue">
    <!-- carousel for main page  -->
<div class="container">
  <h2>Trending Products</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item active">
        <img src="@/assets/images/laptop.jpg" alt="Laptop" style="width:100%;">
      </div>

      <div class="item">
        <img src="@/assets/images/Trending-Products-to-Sell-Online-1.jpg" alt="Mobile" style="width:100%;">
      </div>
    
      <div class="item">
        <img src="@/assets/images/shoes.jpg" alt="Shoes" style="width:100%;">
      </div>
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
  <!-- static images  -->
  

    <!-- responsive card  -->
<section id="t-cards" v-if="this.page>=1">

  <div class="container" >
    <div class="row">
    
           <div class="col-sm-6 col-md-4" style="box-shadow: 0px 3px 10px grb(0 0 0 / 0.5) "
           v-for="product in product.products"
           @click="onProduct(product.id)"
          :key="product.id">
         
              <div class="panel panel-default panel-card">
                  <div class="panel-heading">
                      <img :src="product.thumbnail"
               />
                  </div>
                  <div class="panel-body">
                      <h4 class="panel-header">{{ product.title }}</h4>
                  </div>
                  <div class="panel-thumbnails">
                      <div class="row" >
                          <div class="col-xs-4" v-for="images in product.images" :key ="images" style="display:flex">
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

<!-- v-pagination start here  -->
<div class="text-center">
  <v-pagination
    v-model="page"
    :length="4"
    @input= "onChange"
  ></v-pagination>
</div>
</v-app>
</template>
<script >
  
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ProDuct",
  data() {
      return {
        items:[],
        page:1,
        limits:24,
        skip:0,
      };
  },
  computed: {
      ...mapGetters(["product"]),
  },
 
  methods: {
      ...mapActions(["fetchAllProduct"]),
      // ...mapActions(["AddProducts"]),
      onProduct(singleproduct) {
        console.log(singleproduct)
          this.$router.push({ name: "product_detail" }),
              this.$store.state.singleproduct = singleproduct;
      },
    
      onChange(page){
        if(page==1){
        this.$store.dispatch('fetchAllProduct', [this.limits,this.skip])
        
        
      }else{
        this.skip = page*this.limits
          this.$store.dispatch('fetchAllProduct', [this.limits,this.skip])
      
      }
     
      },
      addCart(product){
        this.$store.dispatch('AddCarts' , product)
      
      }
     
  },
  
  mounted(){
    this.fetchAllProduct()
  }

}

</script>
<style>
#state{
display: block;
}

</style>