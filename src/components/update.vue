<template>
<Header />
<div>
    <h1> Update Restaurants</h1>
        <div class="add">
        <input type="text" placeholder="Enter Restaurant Name" v-model="restaurants.name">
        <input type="text" placeholder="Enter Address" v-model="restaurants.address">
        <input type="text" placeholder="Enter Contact" v-model="restaurants.contact">
        <button class="addbtn" v-on:click="updateRestaurantData()">Update</button>
    </div>
</div>
</template>

<script>
import Header from "./Header.vue"
import axios from "axios"

export default {
    name: "Update",
    components: {
        Header
    },
        data() {
        return {
            restaurants: {
                name: "",
                address: "",
                contact: ""
            }
        }

    },
 async mounted() {
        let userinfo = localStorage.getItem('user-info');
        if (!userinfo) {
            this.$router.push({name:"Login"});
        }

        // console.log(this.$router.params.id);
        // console.log(this.$route.params.id);
        let result = await axios.get(`http://localhost:3000/restaurants/${this.$route.params.id}`);
        // console.log(result.data);
        this.restaurants = result.data;
        
        
    },
    methods:{
      async  updateRestaurantData(){
            let result = await axios.put(`http://localhost:3000/restaurants/${this.$route.params.id}`,{
                name:this.restaurants.name,
                address:this.restaurants.address,
                contact:this.restaurants.contact
            });

            if(result.status==200){
                alert("Restaurant Updated");
                this.$router.push({name:"Home"});
            }
        }
    }
}
</script>
