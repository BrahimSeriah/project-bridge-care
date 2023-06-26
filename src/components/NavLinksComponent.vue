<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

var navLinks = []


if (!route.meta.isPatient) 
    navLinks = ['Profile', 'Dossiers Medicales', 'NV Fiche Medicales', 'Gestion Financiere', 'Appreciations'];
else 
    navLinks = ['Carte Sanitaire', 'Dossier Medicale', 'Therapie Actuelle'];

</script>


<template>
    <div :class="!route.meta.isPatient ? 'bg-gray-200' : 'bg-white' ">
        <div class="flex w-2/3 ml-auto py-4">
            <router-link v-for="(link, index) in navLinks" :key="index" class="py-2 px-6" to="#">
                <div :class="index === 1 ? 'border-b-2 border-b-gray-500' :''" class="pb-2 border-gray-500 text-gray-500">{{ link }}</div>
            </router-link>
        </div>
    </div>
</template>