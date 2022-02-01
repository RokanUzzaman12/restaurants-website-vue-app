<template>
<div>
    <img class="logo" src="../assets/res-logo.jpg">
    <h1>Log In</h1>
    <div class="login">
        
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button class="loginbtn" v-on:click="login()">Login</button>
        <p>
            <router-link to="/signup">Sign Up Here</router-link>
        </p>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Login",
    data(){
        return {
            email:"",
            password:""
        }
    },
    methods:{
       async login(){

           let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
           if(result.status==200 && result.data.length>0){
               localStorage.setItem('user-info',JSON.stringify(result.data[0]));
               this.$router.push({name:"Home"});
           }
        // console.log(result.data[0]);

            //http://localhost:3000/users?email=ava@gmail.com&password=ava123
        }
    },

    mounted(){
        let userinfo = localStorage.getItem("user-info");
        if(userinfo){
            this.$router.push({name:"Home"});
        }
    }
}
</script>
