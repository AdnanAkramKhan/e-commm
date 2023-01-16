<template>
  <div>
    <NavComponent />
    <h1 style="margin-left:10rem">{{ singleproduct.category }}</h1>
    
    <div class="row">
      
               <div class="col-xs-4 item-photo">
                    <img style="max-width:100%;" :src="singleproduct.thumbnail">
                </div>
                <div class="col-xs-5" style="border:0px solid gray">

                    <h3>{{singleproduct.title}}</h3>
                       
                    <h5 style="color:#337ab7"> {{ singleproduct.description }}</h5>
        
                    <!-- Price -->
                    <h6 class="title-price">Price</h6>
                    <h3 style="margin-top:0px;">{{ singleproduct.price }}</h3>
        
                    <!-- discount -->
                    <div class="section">
                        <h6 class="title-attr" style="margin-top:15px;" >Discount:{{ singleproduct.discountPercentage }}</h6>                    
                        <div>
                            <div class="rating">
                              <h6 class="title-attr" style="margin-top:15px;" >Rating:{{ singleproduct.rating }}
                              </h6>
                              </div>
                            <br>
                            <div class="stock">
                              <h6 class="title-attr" style="margin-top:15px;" >
                              Stocks: {{ singleproduct.stock }}
                            </h6>
                            </div>
                        </div>
                    </div>
                    <div class="section" style="padding-bottom:5px;">
                        <h6 class="title-attr">Brand: {{ singleproduct.brand }}</h6>                    
                        <div>
                            <div class="attr2">
                              <h6 class="title-attr" style="margin-top:15px;" >
                              Category:{{ singleproduct.category }}
                            </h6>
                            </div>
                         {{ singleproduct.id }}
                        </div>
                    </div>   
                    <div class="section" style="padding-bottom:20px;">
                        <div>
                          <button class="btn-Delete" @click="Delete(singleproduct.id)">Delete</button>
                          <button class="btn-cart" @click="addCart(singleproduct)">Add Cart</button>
                        </div>
                    </div>                
        
            </div>
            </div>

            <!-- carousel for main page  -->
<div class="container" style="margin-top:3rem">
  <h2> Working Brands </h2>  
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
        <img src="@/assets/images/product_work1.jpg" alt="Laptop" style="width:100%;">
      </div>

      <div class="item">
        <img src="@/assets/images/product_work2.jpg" alt="Mobile" style="width:100%;">
      </div>
    
      <div class="item">
        <img src="@/assets/images/product_work3.jpg" alt="Shoes" style="width:100%;">
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


            <FooterComponent />
  </div>
 
         
  </template>
  <script >
import { mapActions, mapGetters } from 'vuex';
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent"; 
  export default {
    name:'ProductDetail',
    components:{
      NavComponent,
      FooterComponent,
    },
    computed:{
      ...mapGetters(["singleproduct"])
      
    },
    methods:{
      ...mapActions(["singleProducts"]),
    //  singleProduct(){
    //     console.log(this.$store.state.singleproduct)
    //   },

      addCart(product){
          this.$store.dispatch('AddCarts' , product),
          this.$router.push({name:'AddCart'}) 
        },
        Delete(id){
          this.$store.dispatch('DeleteProduct', id)
          alert("Deleted Sucessfully!")
           this.$router.push({name:'home'})

        }
    },
   unmounted(){
      this.Delete(
        alert("are you rell")
      )
    }
    ,
  created() {
    this.singleProducts();
  },
 
};
 
  </script>
<style scoped>
.row{
  margin-left: 10rem;
}
ul > li{
  margin-right:25px;
  font-weight:lighter;
  cursor:pointer
}
li.active{
  border-bottom:3px solid silver;
}

.item-photo{
  display:flex;
  justify-content:center;
  align-items:center;
  border-right:1px solid #f6f6f6;
}
.menu-items{
  list-style-type:none;
  font-size:11px;
  display:inline-flex;
  margin-bottom:0;
  margin-top:20px
}
.btn-success{
  width:100%;
  border-radius:0;
}
.section{
  width:100%;
  margin-left:-15px;
  padding:2px;
  padding-left:15px;
  padding-right:15px;
  background:#f8f9f9
}
.title-price{
  margin-top:30px;
  margin-bottom:0;
  color:black
}
.title-attr{
  margin-top:0;
  margin-bottom:0;
  color:black;
}
.btn-Delete{
  font-weight: 30px;
  background-color: red;
  font-size:17px;
  display:flex;
  align-items:center;
  white-space: 30px;
  padding:5px;
  padding-left:10px;
  padding-right:10px;
  border:1px solid gray;
  border-radius:2px;
  border-right:0;
}
.btn-cart{
  font-weight: 30px;
  background-color: green;
  font-size:17px;
  margin-left: 3px;
  display:flex;
  align-items:center;
  white-space: 30px;
  padding:5px;
  padding-left:10px;
  padding-right:10px;
  border:1px solid gray;
  border-radius:2px;
  border-right:0;
}
div.section > div {
  width:100%;
  display:inline-flex;
}
div.section > div > input {
  margin:0;
  padding-left:5px;
  font-size:10px;
  padding-right:5px;
  max-width:18%;
  text-align:center;
}
.attr{
  cursor:pointer;
  margin-right:5px;
  font-size:10px;
  padding:2px;
  border:1px solid gray;
  border-radius:2px;
}
.attr.active{
   border:1px solid orange;
  }

@media (max-width: 426px) {
    .container {
      margin-top:0px !important;
    }
    .container > .row{
      padding:0 !important;
    }
    .container > .row > .col-xs-12.col-sm-5{
        padding-right:0 ;    
    }
    .container > .row > .col-xs-12.col-sm-9 > div > p{
        padding-left:0 !important;
        padding-right:0 !important;
    }
    .container > .row > .col-xs-12.col-sm-9 > div > ul{
        padding-left:10px !important;
        
    }            
    .section{
      width:104%;}

    .menu-items{
      padding-left:0;
    }
}


</style>
