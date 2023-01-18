<template>

  <v-app id="inspire" style="background-color:lightblue">
    <h1 style="margin-left:2rem; margin-top:2rem">New Products</h1>
     
    <!-- Most Views product -->
  <div class="container">
    <div class="row">
<!-- card 1 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/product_work1.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">iPhone</h5>
    <p class="card-text">An apple mobile which is nothing like apple</p>
    <p>rating: 4.5</p>
  </div>
</div>
<!-- card 2 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Nike shoe</h5>
    <p class="card-text"> Core associations for Nike include: innovative technology, high quality/stylish products, joy and celebration of sports, maximum performance, self-empowerment and inspiring</p>
    <p>rating:4.0</p>
  </div>
</div>

<!-- card 3 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card4.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">OutFitters Shoe</h5>
    <p class="card-text">an outer covering for the human foot typically having a thick or stiff sole with an attached heel and an upper part of lighter material (such as leather) :</p>
    <a href="#">rating:4.0</a>
  </div>
</div>
</div>
   
<!-- row 2 -->
<div class="row">
<!-- card 1 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card3.jpg" style="height:15rem" alt="">
  <div class="card-body">
    <h5 class="card-title">Sumsung A32</h5>
    <p class="card-text">Glass front (Gorilla Glass 5), plastic frame, plastic back</p>
    <p>rating:3.5</p>
  </div>
</div>
<!-- card 2 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card5.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Sumsung A32</h5>
    <p class="card-text">Glass front (Gorilla Glass 5), plastic frame, plastic back</p>
    <p>rating:3.5</p>
</div>
</div>

<!-- card 3 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card6.jpg" style="height:15rem" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">SHirt</h5>
    <p class="card-text">Denizen Roll-Up Shirt; an everyday piece you'll wear for comfort and style.</p>
    <p>rating:5.0</p>
  </div>
</div>
</div>
   
<!-- row 3 -->
<div class="row">
<!-- card 1 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card7.jpg" style="height:12rem" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Samsung A30</h5>
    <p class="card-text">The phone has a huge battery of 4000 mAh, Li-Polymer. With Samsung Galaxy A30 you can see a design that fits easily in your hands, pocket, or bag. Effortlessly look through photographs and send messages on the 6.4 inches HD screen.</p>
    <p href="#">rating:4.0</p>
  </div>
</div>
<!-- card 2 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card8.jpg" style="height:10rem" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Brogan Shoes</h5>
    <p class="card-text">Borjan offers its customers the best shoes for men in Pakistan. We have the highest quality men’s shoes and leather shoes in Pakistan for great prices. </p>
    <p>rating:5.0</p>
  </div>
</div>

<!-- card 3 -->
<div class="card col-md-4 col-sm-4">
  <img src="../assets/images/card9.jpg" style="height:13rem" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">
Brandsroots
</h5>
    <p class="card-text">Summer Crew Neck Long Sleeve Tee Shirt For Men</p>
    <p>rating:3.5</p>
  </div>
</div>
</div>
   
</div>
  
    <!-- carousel for main page  -->
<div class="container-fluid">
  <h2 style="margin-top:2rem; margin-top:2rem;padding:2rem">Trending Products</h2>  
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
<style scoped>
*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;
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

.search input{
 background-color: bisque;
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