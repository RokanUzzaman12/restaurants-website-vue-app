<template>

  <router-view></router-view>
  
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
body{
  margin:0px;
  padding:0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

    .logo{
        width:100px;
    }

.register input, .login input, .add input{
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

.signup, .loginbtn, .addbtn{
    width: 325px;
    height: 40px;
    background-color: skyblue;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

</style>
