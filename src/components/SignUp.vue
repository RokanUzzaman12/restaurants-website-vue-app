<template>
<div>
    <img class="logo" src="../assets/res-logo.jpg">
    <h1>Sigh Up</h1>
    <p class="errorcolor" v-for="item in error" :key="item">{{item}} is required</p>
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
    data() {
        return {
            name: "",
            email: "",
            password: "",
            error: []
        }
    },
    methods: {
        async getUserData() {
            this.error = [];
            if (!this.name == '' && !this.email == '' && !this.password == 0) {
                let checkData = await axios.get(`http://localhost:3000/users?email=${this.email}`)
                console.log(checkData.data.length);

                if (checkData.data.length == 0) {
                    let result = await axios.post("http://localhost:3000/users", {
                        name: this.name,
                        email: this.email,
                        password: this.password
                    });
                    //console.log("submit Result",result);
                    // console.log("submit Result",result.status);

                    if (result.status == 201) {
                        alert("Signup done");
                        this.$router.push({ name: "Home" });
                    }
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                } else {
                    alert("Email exist");
                    this.$router.push({ name: "Login" });
                }
            }
            if (this.name == '') {
                this.error.push('Name');
            }

            if (this.email == '') {
                this.error.push('Email');
            }

            if (this.password == '') {
                this.error.push('Password');
            }

        }
    },

    mounted() {
        let userdata = localStorage.getItem("user-info");

        if (userdata) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>

<style>
.errorcolor {
    color: red;
}
</style>
