<template>
    <div class="container-fluid h-screen header">
        <div class="flex-col p-16">
            <div class="titleHeader m-4">
                <h1 class=""> Bienvenu chez madiba </h1><h1> shipping International</h1>
            </div>
            <div class="titleBody m-4">
                <h2>MADIBA SHIPPING INTERNATIONAL est une entreprise basé en allemangne </h2>
                <h2>dans l’export de marchandise de l’europe vers l’afrique</h2>
            </div>
            <div class="m-4">
                <button class="titleButton m-1">
                    <router-link to="/apropos">
                        En Savoir plus
                    </router-link>
                </button>
                <button class="titleButton m-1">
                    <router-link to="/contacts">
                        Contactez Nous
                    </router-link>
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
</script>
<style>
.titleHeader {
    display: flex;
    width: 927px;
    height: 185px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #FFF;
    font-family: Kalam;
    font-size: 54px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.titleBody {
    color: #FFF;
    font-family: Kalam;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.titleButton {
    width: 208px;
    height: 68px;
    flex-shrink: 0;
    border: 4px solid #FFF;
    background: rgba(255, 255, 255, 0.15);
    color: #FFF;
}

.header {
    background: url(../assets/pexel6.png), lightgray 50% / cover no-repeat;
    background-size:cover;
    background-attachment: fixed;
    background-repeat: no-repeat; 

}
</style>