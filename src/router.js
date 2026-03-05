import { createWebHashHistory, createRouter } from 'vue-router'
import Index from './views/Index.vue'
import Hasil from './views/Hasil.vue'
import JuknisSingleSong from './views/JuknisSingleSong.vue'
import JuknisKultum from './views/JuknisKultum.vue'

const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/hasil',
        component: Hasil
    },
    {
        path: '/juknis/single-song',
        component: JuknisSingleSong
    },
    {
        path: '/juknis/kultum',
        component: JuknisKultum
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router