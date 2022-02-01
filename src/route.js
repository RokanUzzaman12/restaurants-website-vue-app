import {createWebHistory,createRouter} from 'vue-router'
import Home from './components/Home.vue'
import Signup from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/update.vue'

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
    },
    {
        name:"Add",
        path:"/add",
        component:Add
    },
    {
        name:"Update",
        path:"/update",
        component:Update
    }

];

const route=createRouter({
    history:createWebHistory(),
    routes
});

export default route;


