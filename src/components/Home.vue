<template>
    <div>I am From Home components</div>
</template>

<script>


export default {
 name:"Home",
 mounted(){
     let userinfo = localStorage.getItem('user-info');
     if(!userinfo){
         this.$router.push("Signup");
     }
 }
}
</script>
