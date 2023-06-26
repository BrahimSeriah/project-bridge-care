<template>
    <div class="w-1/3 h-full absolute">
        <div class="w-4/5 mt-8 mx-auto p-8 bg-white rounded-md shadow-2xl">
            <div class="flex  flex-col">
                <div class="flex flex-col gap-4 mb-12">
                    <img class="w-24 h-24 mx-auto rounded-full" src="../assets/images/defaults/profile-picute.png" alt="profile-picture">
                    <div class="text-center text-2xl text-primary">Patient<br>Nom Prenom</div>
                    <div class="text-center text-accent">en cours de traitement</div>
                </div>
                <div class="flex flex-col gap-4 text-gray-600 font-medium mb-6">
                    <span>Date de Naissance :</span>
                    <span>Age :</span>
                    <span>Poids :</span>
                    <span>Sexe :</span>
                    <span>Groupe Sanguin :</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
hr {
    height: 2px;
}

</style>