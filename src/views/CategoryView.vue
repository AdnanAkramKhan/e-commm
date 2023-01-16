<template>
    <div>
      <NavComponent />
      <CateGory />
      <FooterComponent />
       </div>
  </template>
  <script>
  import NavComponent from '../components/NavComponent.vue';
  import CateGory from '@/components/CateGory.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  export default{
      name:'CategoryView',
      components:{
        NavComponent,
        CateGory,
        FooterComponent,
      }
  }
  
  </script>