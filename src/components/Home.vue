<template>
<Header />
<div>
    <h1>Hello {{name}}, Welcome to Home page</h1>
<div class="restu_table">
        <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in restaurants" :key='item.id'>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.contact}}</td>
                <td> <router-link :to="'/update/'+item.id">Update</router-link> </td>

            </tr>
        </tbody>

    </table>
</div>
</div>
</template>

<script>
import Header from "./Header.vue"
import axios from 'axios'

export default {
    name: "Home",
    data() {
        return {
            name: "",
            restaurants: []
        }
    },
    components: {
        Header
    },
    async mounted() {

        let userinfo = localStorage.getItem('user-info');
        //  this.name = JSON.parse(userinfo).name

        if (!userinfo) {
            this.$router.push("Signup");
        } else {
            this.name = JSON.parse(userinfo).name
        }

        let allrestaurants = await axios.get("http://localhost:3000/restaurants");
        // console.log(allrestaurants.data);
        this.restaurants = allrestaurants.data;

    }
}
</script>
<style>
.restu_table table{
      font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.restu_table th{
      padding: 12px 5px 0px 5px;
  padding-bottom: 12px;
  text-align: left;
  background-color: skyblue;
  color: white;
    
}

.restu_table tr:nth-child(even){
    background-color: #f2f2f2;
    
    }
.restu_table tr{
    text-align: left;
    
}
.restu_table td{
    padding:5px
}
.restu_table tr:hover {
    background-color: #ddd;
    }

</style>
