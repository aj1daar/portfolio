import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage/HomePage.vue'
import ProjectsPage from '@/pages/ProjectsPage/ProjectsPage.vue'
import ExperiencePage from '@/pages/ExperiencePage/ExperiencePage.vue'
import CertificationsPage from '@/pages/CertificationsPage/CertificationsPage.vue'
import ResumePage from '@/pages/ResumePage/ResumePage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectsPage },
    { path: '/experience', component: ExperiencePage },
    { path: '/certifications', component: CertificationsPage },
    { path: '/resume', component: ResumePage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
