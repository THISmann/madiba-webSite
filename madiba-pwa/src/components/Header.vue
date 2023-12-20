<template>
    <div>
        <transition name="fade" mode="out-in">
            <div :key="currentSlide" class="slide" :style="{ backgroundImage: `url(${slides[currentSlide].url})` }">
                <div class="container-fluid h-screen header">
                    <div class="flex-col p-16">
                        <div class="w-2/3 m-4 mb-24">
                            <h1 class="text-5xl text-white">{{ slides[currentSlide].title }}</h1>
                        </div>
                        <div class="w-1/2 m-4 mb-12">
                            <h2 class="text-2xl text-white">{{ slides[currentSlide].description }}</h2>
                        </div>
                        <div class="flex p-1">
                            <button class="m-1 bg-transparent hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                En Savoir plus
                            </button>
                            <button class="m-1 bg-transparent hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                Contactez Nous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
  
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slides = [
    { title: "shipping International", description: "MADIBA SHIPPING INTERNATIONAL est une entreprise basé en allemangne dans l’export de marchandise de l’europe vers l’afrique", url: require("../assets/bg/6.png") },
    { title: "Douane et Transit", description: "MADIBA SHIPPING INTERNATIONAL est une entreprise basé en allemangne dans l’export de marchandise de l’europe vers l’afrique", url: require("../assets/bg/7.png") },
    { title: "Envoi de colis ", description: "MADIBA SHIPPING INTERNATIONAL est une entreprise basé en allemangne dans l’export de marchandise de l’europe vers l’afrique", url: require("../assets/bg/9.png") },
    { title: "Achat de voiture", description: "MADIBA SHIPPING INTERNATIONAL est une entreprise basé en allemangne dans l’export de marchandise de l’europe vers l’afrique", url: require("../assets/bg/10.png") },
    // Add more slides as needed
];

const currentSlide = ref(0);

const showNextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
};

onMounted(() => {
    const intervalId = setInterval(showNextSlide, 5000); // 5000 milliseconds or 5 seconds

    onBeforeUnmount(() => {
        clearInterval(intervalId);
    });
});
</script>
  
<style scoped>
.slide {
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.9s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0.9;
}
</style>
  