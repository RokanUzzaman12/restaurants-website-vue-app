<template>
<Header />
<div>
    <h1>Add Restaurants</h1>
    <div class="add">
        <input type="text" placeholder="Enter Restaurant Name" v-model="restaurants.name">
        <input type="text" placeholder="Enter Address" v-model="restaurants.address">
        <input type="text" placeholder="Enter Contact" v-model="restaurants.contact">
        <button class="addbtn" v-on:click="getRestaurantData()">Add</button>
    </div>
</div>
</template>

<script>
import Header from "./Header.vue"
import axios from "axios"

export default {
    name: "Add",
    data() {
        return {
            restaurants: {
                name: "",
                address: "",
                contact: ""
            }
        }

    },
    components: {
        Header
    },
    methods: {
        async getRestaurantData() {
            let result = await axios.post("http://localhost:3000/restaurants", {
                name: this.restaurants.name,
                address: this.restaurants.address,
                contact: this.restaurants.contact
            });
            if (result.status == 201) {
                alert("Restaurant added successfully");
            }
        }
    },
     mounted() {
        let userinfo = localStorage.getItem('user-info');
        if (!userinfo) {
            this.$router.push({name:"Login"});
        }
    }
}
</script>
