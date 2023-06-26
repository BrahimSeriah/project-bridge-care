import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import LoginView from './views/LoginView.vue'
import SignupView from './views/SignupView.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import DashboardPatientLayout from './layouts/DashboardPatientLayout.vue'

import MedicalFilesView from './views/Dashboard/MedicalFilesView.vue'
import PatientFileView from './views/Dashboard/PatientFile.vue'


import MedicalFileView from './views/DashboardPatient/MedicalFileView.vue'


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/signup',
        name: 'Signup',
        component: SignupView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardLayout,
        meta: {
            isPatient: false
        },
        children: [
            {
                path: 'medical-files',
                name: 'Medical Files',
                component: MedicalFilesView
            },
            {
                path: 'file',
                name: 'Patient File',
                component: PatientFileView
            }
        ]
    },
    {
        path: '/profile',
        name: 'Profile',
        component: DashboardPatientLayout,
        meta: {
            isPatient: true
        },
        children: [
            {
                path: 'info',
                name: 'Info',
                component: MedicalFileView
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
  
export default router