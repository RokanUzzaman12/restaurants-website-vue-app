<template>
<Header />
<div>
    <h1>Add Restaurants</h1>
    <div class="add">
        <div class="error">
            <ul>
                <li v-for="item in error" :key="item">{{item}} not valid</li>
            </ul>
        </div>

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
            },
            error: []
        }

    },
    components: {
        Header
    },
    methods: {
        async getRestaurantData() {
            this.error = [];
            console.log("hello");

            for (let item in this.restaurants) {
                //    console.log(this.restaurants[item]);
                if (this.restaurants[item] == "") {
                    this.error.push(item);
                }

            }

            if (this.error.length === 0) {
                let result = await axios.post("http://localhost:3000/restaurants", {
                    name: this.restaurants.name,
                    address: this.restaurants.address,
                    contact: this.restaurants.contact
                });
                if (result.status == 201) {
                    alert("Restaurant added successfully");
                    this.$router.push({ name: "Home" });
                }

            }

            // let result = await axios.post("http://localhost:3000/restaurants", {
            //     name: this.restaurants.name,
            //     address: this.restaurants.address,
            //     contact: this.restaurants.contact
            // });
            // if (result.status == 201) {
            //     alert("Restaurant added successfully");
            //     this.$router.push({name:"Home"});
            // }
        }
    },
    mounted() {
        let userinfo = localStorage.getItem('user-info');
        if (!userinfo) {
            this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    color: red;
    text-align: left;
}
.error{
    width: 20%;
    margin: 0 auto;
    font-size: 18px;
}
</style> >
