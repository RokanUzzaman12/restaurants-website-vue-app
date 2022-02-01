<template>
<Header />
<div>
    <h1>Hello User, Welcome to Update Restaurants page</h1>
</div>
</template>

<script>
import Header from "./Header.vue"

export default {
    name: "Update",
    components: {
        Header
    },
    mounted() {
        let userinfo = localStorage.getItem('user-info');
        if (!userinfo) {
            this.$router.push("Signup");
        }
    }
}
</script>
