<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

console.log(router.currentRoute.value);

function login() {
    if(router.currentRoute.value.query.type === 'patient')
        router.push('/profile/info')
    else
        router.push('/dashboard/medical-files')
}

</script>

<template>
    <div class="flex items-center justify-center h-screen bg-primary">
        <div class="w-3/4 h-3/4 bg-white mx-auto drop-shadow-2xl border-2 border-primary grid grid-cols-2">
            <div class="relative w-full h-full">
                <img class="absolute inset-0 object-cover w-full h-full" src="../assets/images/carousel-background.jpg" alt="background" />
                <div class="absolute inset-0 bg-primary opacity-80"></div>
                <div class="absolute inset-0 p-12">
                    <img class="w-1/2 mb-24" src="../assets/svg/logo-white.svg" alt="bridge-care-logo">
                    <div >
                        <h1 class="text-white text-4xl mb-12">Manage your patient's Document</h1>
                        <p class="text-white leading-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui adipisci id magni sint vitae inventore, repellat doloribus maxime ullam molestiae mollitia a quis. Velit libero expedita vel obcaecati molestias assumenda.</p>
                    </div>
                </div>
            </div>
            <div class="w-full h-full flex justify-center items-center">
                <div class="w-1/2">
                    <h2 class="text-primary text-3xl mb-12">Login</h2>
                    <form class="flex flex-col gap-8">
                        <input type="email" id="email" name="email" placeholder="Email" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <input type="password" id="password" name="password" placeholder="Password" class="flex-1 py-2 border-b-2 border-gray-400 focus:border-accent transition-all duration-500  placeholder-gray-600 outline-none">
                        <button @click.prevent="login()" class="bg-primary hover:bg-accent transition-all duration-500 py-2 px-4 text-white ml-auto">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>