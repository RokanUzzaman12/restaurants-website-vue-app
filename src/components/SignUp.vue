<template>
<div>
    <img class="logo" src="../assets/res-logo.jpg">
    <h1>Sigh Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name" v-model="name">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button class="signup" v-on:click="getUserData()">Sign Up</button>
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
            password:""
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
            }
            localStorage.setItem("User Info",JSON.stringify(result.data));

            
        }
    }
}
</script>

<style>
    .logo{
        width:100px;
    }

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
    border-radius: 20px;
}

.signup {
    width: 325px;
    height: 40px;
    background-color: skyblue;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
</style>
