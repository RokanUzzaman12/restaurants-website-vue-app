<template>
<div>
    <img class="logo" src="../assets/res-logo.jpg">
    <h1>Log In</h1>
    <div class="login">
        
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button class="loginbtn">Login</button>
        <p>
            <router-link to="/signup">Sign Up Here</router-link>
        </p>
    </div>
</div>
</template>

<script>
export default {
    name: "Login"
}
</script>
