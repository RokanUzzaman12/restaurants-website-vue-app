<template>
<div>
    <img class="logo" src="../assets/res-logo.jpg">
    <h1>Sigh Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name">
        <input type="text" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
        <button class="signup">Sign Up</button>
    </div>
</div>
</template>

<script>
export default {
    name: "Signup"
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
