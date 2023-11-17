<!-- <template>
    <div class="container-fluid">
        <div class="grid grid-cols-2 gap-2 bg-gray-200">
            <div class="p-6">
                <h1 class="m-2"> Pourquoi Choisir Madiba !! </h1>
                <p class="m-2">
                    POURQUOI CHOISIR MADIBA SHOPPING INT

                    une entreprise basé en allemangne dans l’export de marchandise de l’europe vers l’afriqueLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Fusce eu elementum quam, nec porta quam. Nam volutpat elit
                    eget magna dignissim imperdiet sit amet </p>

                <p class="m-2"> est une entreprise basé en allemangne dans l’export de marchandise de l’europe vers
                    l’afriqueLorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Fusce eu elementum
                </p>
            </div>
            <div>
                <img src="../assets/pexel7.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template> -->

<template>
    <!--
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    -->

    <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                    Pourquoi Choisir Madiba Shipping INT
                </h2>

                <p class="hidden text-gray-500 md:mt-4 md:block">
                    Madiba Shipping Int offre une expertise approfondie dans le domaine de la logistique et du transport de
                    conteneurs. Grâce à une équipe expérimentée, l'entreprise peut garantir des services fiables et
                    efficaces
                </p>

                <div class="mt-4 md:mt-8">
                    <a href="#"
                        class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                        <router-link to="/apropos">  En Savoir Plus </router-link>
                    </a>
                </div>
            </div>
        </div>

        <img alt="Violin"
            src="../assets/pexel1.jpg"
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
    </section>
</template>