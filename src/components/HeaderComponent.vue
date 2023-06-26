<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectPatient() {
    router.push({
        path: '/login',
        query: {
            type: 'patient'
        }
    })
}

function redirectUser() {
    router.push({
        path: '/login',
        query: {
            type: 'user'
        }
    })
}


</script>

<template>
    <div>
        <div class="bg-gradient-blue h-12" />
        <div class="flex justify-between items-center mx-12 my-2">
            <div>
                <router-link to="/">
                    <img src="../assets/images/bridge-care-logo.png" alt="bridge-care-logo" class="h-16">
                </router-link>
            </div>
            <div class="flex gap-8">
                <button @click="redirectPatient()" class="bg-white rounded-full px-6 py-1 drop-shadow-lg flex gap-4 items-center">
                    <img class="h-6" src="../assets/svg/patient.svg" alt="patient">
                    <span>Je suis patient</span>
                </button>
                <button @click="redirectUser()" class="bg-gradient-blue text-white rounded-full px-6 py-1 drop-shadow-lg flex gap-4 items-center">
                    <img class="h-6" src="../assets/svg/user.svg" alt="usert">
                    <span>Je suis soignant</span>
                </button>
            </div>
        </div>
    </div>
</template>