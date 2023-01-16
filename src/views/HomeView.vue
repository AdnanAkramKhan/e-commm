<template>
  <div class="home">
    <!-- NavComponent  -->
    <NavComponent/> 
    <!-- Product component  -->
    <ProDuct />
    <!-- FooterComponent  -->
    <FooterComponet />

  </div>
</template>
<script >
import NavComponent from '@/components/NavComponent.vue';
import ProDuct from '@/components/ProDuct.vue';
import FooterComponet from '@/components/FooterComponent.vue'
// import { mapActions } from 'vuex';
export default {
  name:'HomeView',
  components :{
    NavComponent,
    ProDuct,
    FooterComponet,
     },
  //    methods:{
  //   ...mapActions("fetchAllProduct")
  // },
  // mounted(){
  //   this.fetchAllProduct()
  // },
}
</script>