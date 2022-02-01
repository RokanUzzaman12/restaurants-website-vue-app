import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Signup from './components/SignUp.vue'
import Login from './components/Login.vue'

const routes=[
    {
        name:"Home",
        path:"/",
        component:Home
    },
    {
        name:"Signup",
        path:"/signup",
        component:Signup
    },
    {
        name:"Login",
        path:"/login",
        component:Login
    }

];

const route=createRouter({
    history:createWebHistory(),
    routes
});

export default route;


