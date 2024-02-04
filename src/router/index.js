import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/HomePage.vue'
import About from '../pages/AboutPage.vue'
import Content from '../pages/ContentPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home - GTAWIKI'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About - GTAWIKI'
        }
    },
    {
        path: '/content/:id/:title/:short',
        name: 'Content',
        component: Content,
        meta: {
            title: 'GTAWIKI'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title
    const titleFromParams = to.params.short

    if (title) {
        document.title = title
    }

    if (titleFromParams) {
        document.title = `${titleFromParams} - ${title}`
    }

    next()
})


export default router