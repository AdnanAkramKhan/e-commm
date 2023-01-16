<template>
    <div>
        <NavComponent />

    <section id="t-cards">
    <div class="container" >
        <h1 style="margin: 3rem"> Search Products</h1>
      <div class="row">
             <div class="col-sm-6 col-md-4" 
             v-for="searchstate in GetSearched.products" :key="searchstate"
            
           >
                <div class="panel panel-default panel-card">
                    <div class="panel-heading">
                        <img :src="searchstate.thumbnail"
                 />
                    </div>
                    <div class="panel-body">
                        <h4 class="panel-header">{{ searchstate.title }}</h4>
                    </div>
                    <div class="panel-thumbnails">
                        <div class="row" >
                            <div class="col-xs-4" v-for="images in searchstate.images" :key ="images" style="display:flex">
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
<script>
import NavComponent from "../components/NavComponent.vue";
import FooterComponent from "../components/FooterComponent";

// import {mapActions} from 'vuex'
export default{
    name:'SearchView',
    components:{

        NavComponent,
        FooterComponent,
    },

    mounted(){
        this.$store.dispatch('searchProduct',this.$route.params.id)
    },
    computed:{
        GetSearched(){
        return this.$store.state.searchState
    }},
    
}


</script>