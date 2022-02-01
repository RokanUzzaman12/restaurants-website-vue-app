<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurants</router-link>
        <router-link to="/update">Update Restaurants</router-link>
        
        <a v-on:click="logout()" href="#">Log Out</a>
    </div>
</template>

<script>
export default {
    name:"Header",
    methods:{
        logout(){
            localStorage.clear("user-info");
            this.$router.push({name:"Login"});
        }
    }

}
</script>

<style>
.nav{
    background-color: #3A3B3C;
    overflow: hidden;
}

.nav a {
    float: left;
    padding: 10px 14px;
    color: white;
    text-align: center;
    text-decoration: none;
    margin-right: 5px;
    border:none;
}

.nav a:hover{
    background-color: #C9C0BB;
    color: white;
    border-radius: 7px;
    border:none;
    

}

</style>