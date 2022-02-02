<template>
<div>
    <img class="logo" src="../assets/res-logo.jpg">
    <h1>Sigh Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button class="signup" v-on:click="getUserData()">Sign Up</button>
        <p>
            <router-link to="/login">Log In Here</router-link>
        </p>
    </div>
</div>
</template>

<script>

import axios from 'axios'
export default {

    name: "Signup",
    data(){
        return{
            name:"",
            email:"",
            password:"",
            error:[]
        }
    },
    methods:{
        async getUserData(){
            

            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            //console.log("submit Result",result);
            // console.log("submit Result",result.status);

            if(result.status==201){
                alert("Signup done");
                this.$router.push({name:"Home"});
            }
            localStorage.setItem("user-info",JSON.stringify(result.data));

            
        }
    },

    mounted(){
        let userdata = localStorage.getItem("user-info");

        if(userdata){
            this.$router.push({name:"Home"});
        }
    }
}
</script>

<style>

</style>
