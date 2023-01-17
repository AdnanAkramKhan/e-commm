import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  // all store state of ecomerce 
  state: {
    product:[],
    category:[],
    singleproduct:[],
    singlecategory:[], 
    searchState:[],
    addCart:[],
  
  },
  // complete mutations work 
  mutations: {
    // for  all product 
    setProduct(state,product){
      state.product = product
    },
    // single product 
    singleProduct(state,singleproduct){
      state.singleproduct = singleproduct
    },
    // product new added 
    addProduct(state,product){
      state.products= product   
     },
      // search product  
     searched(state,searchState){
      state.searchState= searchState 
       },
    // for all category 
    setCategory(state,category){
      state.category = category
    },
      // single category 
    singleCategory(state,singlecategory){
      state.singlecategory=singlecategory
    },
      //  update the cart 
       updateCart(state, addCart){
        state.addCart = addCart
       },
      //  RemoveProduct(state,Delproduct){
      //   let singleproduct = state.singleproduct.filter(v=>v.id !=Delproduct.id)
      //   state.singleproduct = singleproduct
      //  }
  },
  
  actions: {
    // for products 
    async fetchAllProduct({commit},[limits,skip]) {
       await fetch( `https://dummyjson.com/products?limit=${limits}&skip=${skip} `) //for pagination
        .then((response) => response.json())
        .then((data) => {
          commit("setProduct", data);  //mutate the data          
        })
         .catch((err) => console.error(err));
    },
    // single product 
    async singleProducts(context) {
      return await fetch(`https://dummyjson.com/products/${this.state.singleproduct}` ) //pass product
        .then((response) => response.json())
        .then((data) => {
          context.commit("singleProduct", data); //mutate the data
        })
        .catch((err) => console.error(err));
    },
    //  add product 
    async AddProducts(_,input) {  
      await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // add value in api 
          title: input.add_title,
          description: input.add_description,
          price: input.add_price,
          brand: input.add_brand,
          category: input.add_category
          /* other product data */
        })
      })
      .then(res => res.json())
      .then(console.log);
    },

    //add cart
    AddCarts( { commit }, id ){
     const cartproduct = this.state.addCart //here get state
     cartproduct.push(id) //store value in state
     commit('updateCart',cartproduct) //mutate data 
           },
    //search product 
    async searchProduct({commit}, id) {
       return await fetch(`https://dummyjson.com/products/search?q=${id}`)
      .then(res => res.json()) 
      .then((data) => {
         commit("searched", data); //mutate data
        })
        .catch((err) => console.error(err));
    },
    // for category 
    async fetchAllCategory(context) {
      return await fetch("https://dummyjson.com/products/categories")
        .then((response) => response.json()) 
        .then((data) => {
          context.commit("setCategory", data); //mutate data
        })
        .catch((err) => console.error(err));
    }, 
      // for single category 
    async singleCategory(context) {
      return await fetch(` https://dummyjson.com/products/category/${this.state.singlecategory}` )
        .then((response) => response.json())
        .then((data) => {
          // mutate data 
         context.commit("singleCategory", data.products);

         console.log(data)
        },
        )
        .catch((err) => console.error(err));
    },
    async DeleteProduct(_,id){
     return await fetch(` https://dummyjson.com/products/${id}` , {
        method: 'DELETE',
      })
      .then(res => res.json()) //show reponse in console
      .then(console.log);
      },
    
      RemoveCart(_,id){
        let addcart = this.state.addCart.filter(s=>s.id !=id)
        this.state.addCart = addcart
      

      }

  },
  // getter will use getting state in view component 
  
  getters: {
    product(state) {
      return state.product;
    },
    category(state) {
      return state.category;
    },
    singleproduct(state){
      return state.singleproduct
    },
    singlecategory(state){
      return state.singlecategory
    },
   
  },
  
});