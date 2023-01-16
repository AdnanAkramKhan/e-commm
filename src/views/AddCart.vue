<template>

    <div>  
       <NavComponent />
    <div class="container">
        <h1>Cart Products</h1>
        <div class="row">
            <div class="col-sm-12 col-md-10 col-md-offset-1">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th class="text-center">Price</th>
                            <th class="text-center">Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- get cart products -->
                        <tr  v-for="addcart in AddcartReturn" :key="addcart.id">      
                            <td class="col-sm-8 col-md-6">
                            <div class="media">
                                <a class="thumbnail pull-left" href="#"> <img class="media-object" :src="addcart.thumbnail" style="width: 72px; height: 72px;"> </a>
                                <div class="media-body">
                                    <h4 class="media-heading"><a href="#">{{ addcart.title }}</a></h4>
                                    <h5 class="media-heading"> by <a href="#">{{ addcart.brand }}</a></h5>
                                    <span>Status: </span><span class="text-success"><strong>In Stock</strong></span>
                                </div>
                            </div></td>
                            <td class="col-sm-1 col-md-1" style="text-align: center">
                            <input type="number" class="form-control" @click="clicked(addcart.id)" v-model="total_quantity" >
                            </td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>${{ addcart.price }}</strong></td>
                            <td class="col-sm-1 col-md-1 text-center"><strong>${{ total_quantity*addcart.price }}</strong></td>
                            <td class="col-sm-1 col-md-1">
                                <!-- checkout button  -->
                                <button type="button" class="btn btn-success" @click="checkout" >
                                <span class="glyphicon glyphicon-play"> Checkout</span>
                            </button>
                            <!-- delete button  -->
                            <button type="button" class="btn btn-danger" @click="Removecart(addcart.id)">
                                <span class="glyphicon glyphicon-remove" >Remove</span> 
                            </button></td>
                        </tr>
    
                        <tr>
                            <td>  </td>
                            <td>  </td>
                            <td>  </td>
                            <td><h3>Total</h3></td>
                            <td class="text-right"><h3><strong>{{ AddcartReturn.price }}</strong></h3></td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>  </td>
                            <td>  </td>
                            <td>
                            <button type="button" class="btn btn-default">
                                <span class="glyphicon glyphicon-shopping-cart" @click="shoping">Continue Shopping</span> 
                            </button></td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <FooterComponent />
    </div>
    
    
    </template>
    <script>
    import NavComponent from '../components/NavComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    export default{
        name:'AddCart',
        components:{
            NavComponent,
            FooterComponent,
        },
        data(){
            return{
                total_quantity:1,
            }
        },
          computed:{
            // function get state value 
            AddcartReturn(){
                return this.$store.state.addCart
            }
        },
        methods:{
            // Remove cart
            Removecart(id){
                this.$store.dispatch('RemoveCart', id)
            },
            // used for Shopping button 
            shoping(){
                this.$router.push({name:'home'})
            },
            // checkout button 
            checkout(){
                this.$router.push({name:'home'})
                alert("Added successfully")
            },
            clicked(id){
                if(id<0){
                    id=0
                }
            }
        }
    }
    
    </script>