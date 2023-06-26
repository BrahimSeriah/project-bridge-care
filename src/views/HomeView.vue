<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import CarouselComponent from "../components/CarouselComponent.vue";
</script>

<template>
  <div>
    <HeaderComponent />
    <div class="bg-carousel">
      <div class="bg-primary opacity-75 text-white">
        <div class="flex justify-end items-center opacity-100">
          <div class="flex gap-8 mx-16 my-12">
            <span class="py-2 m-2">Accuil</span>
            <span class="py-2 m-2 border-b-2">Qui somme-nous ?</span>
            <span class="py-2 m-2">Offre</span>
            <span class="py-2 m-2">Actualites</span>
            <span class="py-2 m-2">Contact</span>
          </div>
        </div>
        <CarouselComponent />
      </div>
    </div>
    <div>
      <div class="flex justify-center gap-6 items-center p-16">
        <div
          class="p-8 w-1/4 rounded-md bg-gradient-white shadow-2xl flex flex-col gap-6 justify-center text-center"
        >
          <img class="h-36" src="../assets/svg/dov.svg" alt="doc" />
          <h3 class="text-2xl text-primary">Medecins</h3>
          <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
        </div>
        <div
          class="p-8 w-1/4 rounded-md bg-gradient-white shadow-2xl flex flex-col gap-6 justify-center text-center"
        >
          <img class="h-36" src="../assets/svg/pills.svg" alt="pills" />
          <h3 class="text-2xl text-primary">Pharmaciens</h3>
          <p>Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
        </div>
        <div
          class="bg-gradient-blue-vertical p-8 w-1/4 rounded-md shadow-2xl flex flex-col gap-6 justify-center text-center"
        >
          <img class="h-36" src="../assets/svg/heart.svg" alt="heart" />
          <h3 class="text-2xl text-accent">Patients</h3>
          <p class="text-white">Lorem ipsum dolor sit amet, consec- tetuer adipiscing elit, sed</p>
        </div>
      </div>
      <div class="p-16">
        <h2 class="text-primary text-3xl text-center">
          Nous formons un collectif avec tous les acteursde la santé
        </h2>
        <p class="text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu
        </p>
      </div>
    </div>
    <div class="w-4/5 mx-auto mb-24">
      <div class="grid grid-cols-3 gap-6">
        <div class="text-white bg-primary p-4 mr-10">
          <h2 class="mb-8 text-3xl font-bold">Actualités</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tin- cidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nos- trud exerci
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hen- drerit in
            vulputate velit esse mo- lestie consequat, vel illum dolore eu
            feugiat nulla facilisis at vero eros et accumsan et iusto odio
          </p>
        </div>
        <div class="grid grid-flow-row gap-6">
          <div class="relative w-full h-full">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="../assets/images/featured-1.png"
              alt="featured-1"
            />
          </div>
          <div class="relative w-full h-full">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="../assets/images/featured-2.jpg"
              alt="featured-2"
            />
          </div>
        </div>
        <div class="grid grid-flow-row gap-6">
          <div class="relative w-full h-full">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="../assets/images/featured-3.jpg"
              alt="featured-3"
            />
          </div>
          <div class="relative w-full h-full">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              src="../assets/images/featured-4.jpg"
              alt="featured-4"
            />
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
