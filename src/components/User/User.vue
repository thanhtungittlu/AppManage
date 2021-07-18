<template>
  <div>
    <div class="container">
      <br />
      <div style="display: flex; justify-content: space-between">
        <h1>Customers</h1>
        <router-link tag="button" class="btn btn-danger" to="/"
          >Back Home</router-link
        >
      </div>
      <hr />
      <input
        class="form-control"
        type="text"
        placeholder="Enter your Name"
        v-model="filterUserByName"
      />
      <hr />
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filterByName" v-bind:key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ user.firstName }}</td>
            <td>{{ user.number }}</td>
            <td>{{ user.city }}</td>
            <td>
              <router-link :to="'/user/' + (index + 1)">
                <button @click="userView(user)">View</button>
              </router-link>
            </td>
            
          </tr>
        </tbody>
      </table>
      <hr />
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      keys: [],
      filterUserByName: "",
    };
  },
  methods: {
    userView(user) {
      this.$store.state.userEdit = user;
      this.$store.state.key = user.keys;
    },
  },
  computed: {
    filterByName() {
      return this.users.filter((element) => {
        return element.firstName.match(this.filterUserByName);
      });
    },
  },
  created() {
    this.$resource(".json")
      .get()
      .then((response) => {
        this.users = Object.values(response.body);
        this.keys = Object.keys(response.body)
      });
    setTimeout(() => {
      this.users.map((obj,index) => {
          obj.keys = this.keys[index];
          return obj;
      })
    },1000)
    
  },
  destroyed() {},
};
</script>

<style>
</style>
