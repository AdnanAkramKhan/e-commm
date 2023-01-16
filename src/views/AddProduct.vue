<template>
    <div class="add_product">   
		<NavComponent /> 
  <!--  add product  -->
  <div class="container">
			<div class="main">
				<div class="main-center">
					<form action="post">
						<h1>User Product</h1>
						<!-- add title input from user -->
						<div class="form-group">
							<label for="name">Title</label>
								<div class="input-group">
									<span class="input-group-addon"></span>
								<input type="text" class="form-control" name="text" 
									id="name" required placeholder="Title" v-model="input.add_title"/>
							</div>
						</div>
						<!-- add description input from user -->
						
						<div class="form-group">
							<label for="description">Description</label>
								<div class="input-group">
									<span class="input-group-addon"></span>
									<input type="textarea" class="form-control" 
										name="description" v-model="input.add_description" 
										placeholder="Enter Description" required />
							</div>
						</div>
						<!-- add price input from user -->
						
						<div class="form-group">
							<label for="price">Price</label>
								<div class="input-group">
									<span class="input-group-addon"></span>
									<input type="text" class="form-control" 
										name="price" placeholder="Enter Price"
										v-model="input.add_price" required />
								</div>
						</div>
						<!-- add brand input from user -->
						
						<div class="form-group">
							<label for="brand">Brand</label>
								<div class="input-group">
									<span class="input-group-addon"></span>
									<input type="text" class="form-control" 
										name="brand" placeholder="Enter your brand"
										v-model="input.add_brand" required />
								</div>
						</div>
						<!-- add category input from user -->
						
						<div class="form-group">
							<label for="category">Category</label>
								<div class="input-group">
									<span class="input-group-addon"></span>
									<input type="text" class="form-control" 
											name="category" placeholder="your Category"
											v-model="input.add_category" required />
								</div>
						</div>
						<!-- submit form  -->
				<button @click="Add_Product()">Add Product</button>  
						
					</form>
				</div><!--main-center"-->
			</div><!--main-->
		</div><!--container-->
		<!-- carousel for main page  -->
<div class="container">
  <h2>Our Latest Products</h2>  
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
        <img src="@/assets/images/user_product1.jpg" alt="Laptop" style="width:100%;">
      </div>

      <div class="item">
        <img src="@/assets/images/user_product2.jpg" alt="Mobile" style="width:55%;">
      </div>
    
      <div class="item">
        <img src="@/assets/images/user_product3.jpg" alt="Shoes" style="width:100%;">
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
<script>
import NavComponent from '../components/NavComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
export default{
    name:'AddProduct',
	components:{
		NavComponent,
		FooterComponent,
	},
    data(){
        return{
			// input fields bind 
        input:
		{
			add_title: "",
			add_description:"",
			add_price: "",
			add_brand:"",
			add_category:"",
			}
        }
    },
    methods:{
		Add_Product(){
			this.$store.dispatch('AddProducts', [this.input]) //dispatch and payload
			alert("added successfully")
			this.$router.push({name:'home'}) //push on the page
		}
	
    },
}
</script>
<style>
.main{
    padding: 40px 0;
}
.main input,
.main input::-webkit-input-placeholder {
    font-size:11px;
    padding-top:3px;
}.main-center{margin-top: 30px;margin: 0 auto;max-width: 400px;padding: 10px 40px;background:#009edf;
color: #FFF;
    text-shadow: none;
	-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);

}
span.input-group-addon i {
    color: #009edf;
    font-size: 17px;
}

</style>+