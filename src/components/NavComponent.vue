<template>
  <v-toolbar
    class="darken-2 fixed"
      extended
      style="background-color: #345;"
      extension-height="30"
    >
    <v-toolbar-title @click="Home()">
       <v-btn class=" darken-2"  style="background-color: #345;">
        PF-Store </v-btn> </v-toolbar-title>
      
    <v-spacer></v-spacer>
      <v-text-field
      class="w-8"
       v-model = "search_input"
         single-line
      
      ></v-text-field>
          <!-- clicked function and pass argument  -->
      <v-btn icon  @click="Search(search_input)">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn class=" darken-2"  style="background-color: #345;"
      @click="AddProduct()">Add Product</v-btn>
     
      <v-btn class=" darken-2"  style="background-color: #345;"
      @click="categoryPage()">Category</v-btn>
     <v-badge
          color="white"
          v-model="count"
          
        >
        <span class="material-icons" @click="ShowCart()">  
             shopping_cart
             </span>
        </v-badge>
     
      <v-btn icon  @click="Login">
        <i class="fa fa-user" aria-hidden="true"></i>       </v-btn>

    </v-toolbar>
</template>

<script>
export default {
  name: "NavComponent",
  data() {
    return {
      count:"",
      search_input: "",
    };
  },

  methods: {
    Home() {
      this.$router.push({ name: "home" });
    },
   // funtion push and pass parameter 
    Search() {
      this.$router.push({
        name: "SearchView",
        params: { id: this.search_input },
      });
    },
    AddProduct() {
      this.$router.push({ name: "AddProduct" })
    },
    ShowCart() {
      this.$router.push({ name: "AddCart" })
    },
    categoryPage() {
      this.$router.push({ name: "CategoryView" });
    },
    Login() {
      this.$router.push({ name: "LoginView" });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.tools{
  background-color: #345;
}
</style>
