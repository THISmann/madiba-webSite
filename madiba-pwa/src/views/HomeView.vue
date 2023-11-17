<template>
  <div class="">  
    <Header />
    <AboutHome />
    <PourquoiMadiba />
    <CardComponent />
    <CustomerReview />
    <Footer />
    
  </div>
</template>

<script lang="ts" setup>
import { Options, Vue } from 'vue-class-component' 
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import AboutHome from '@/components/AboutHome.vue';
import PourquoiMadiba from '@/components/PourquoiMadiba.vue';
import CardComponent from '@/components/CardComponent.vue';
import CustomerReview from '@/components/CustomerReview.vue';

 
</script>
