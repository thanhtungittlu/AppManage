<template>
  <div class="container">
    <br />
    <div class="header">
      <h1>Customer Details</h1>
      <router-link to="/user"
        ><button class="btn btn-danger my-btn" @click="firstFnc">
          Back List Users
        </button>
      </router-link>
    </div>
    <hr />
    <ul class="list-group">
      <li class="list-group-item">{{ users.lastName }}</li>
      <li class="list-group-item">{{ users.firstName }}</li>
      <br />
      <li class="list-group-item">{{ users.number }}</li>
      <li class="list-group-item">{{ users.email }}</li>
      <br />
      <li class="list-group-item">{{ users.city }}</li>
      <li class="list-group-item">{{ users.state }}</li>
      <li class="list-group-item">{{ users.address }}</li>
    </ul>
    <hr />
    <div>
      <button class="btn btn-warning" @click="editFnc">Edit User</button>
      <button class="btn btn-primary" @click="deleteFnc">Delete User</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: this.$store.state.key,
      users: {},
      id: this.$route.params.id - 1,
    };
  },
  methods: {
    firstFnc() {
      this.$router.push({name: 'user'})
      
    },
    deleteFnc() {
      if (confirm("Are you sure you want to delete")){
        this.$resource(this.key + ".json").delete()
          .then(response =>{
            this.$router.push({name: 'user'})
          }),error => {
            console.log(error)
          }
      }
    },
    editFnc() {
      this.$router.push({name: 'useredit'})
    },
  },
  created() {
    this.$resource(this.key + ".json")
      .get()
      .then((response) => {
        this.users = response.body;
      });
  },
  
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}
.my-btn {
  margin-top: 10px;
}
</style>
