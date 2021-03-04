import {createRouter, createWebHistory} from 'vue-router'

const Home = ()=> import('../views/home')
const Shoppingcar = ()=> import('../views/shoppingcar')
const Person = ()=> import('../views/person')



const routes =[
    {
        path:'',
        redirect:'/home'

    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/shoppingcar',
        component:Shoppingcar
    },
    {
        path:'/person',
        component:Person
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

