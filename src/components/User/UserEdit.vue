<template>
  <div class="container">
    <br />
    <div style="display: flex; justify-content: space-between">
      <h1>Edit Customer</h1>
      <router-link tag="button" class="btn btn-danger" to="/"
        >Back Home</router-link
      >
    </div>
    <hr />
    <div class="row my-row">
      <h4>Customer Info</h4>
      <h6>First Name</h6>
      <input style="" v-model="users.firstName" type="text" />
      <h6>Last Name</h6>
      <input placeholder="Lê Thanh " v-model="users.lastName" type="text" />
    </div>
    <br />
    <div class="row my-row">
      <h4>Customer Contact</h4>
      <h6>Email</h6>
      <input
        placeholder="99lethanhtung@gmail.com"
        v-model="users.email"
        type="email"
      />
      <h6>Phone</h6>
      <input placeholder="0364 959 199" v-model="users.number" type="number" />
    </div>
    <br />
    <div class="row my-row">
      <h4>Customer Location</h4>
      <h6>City</h6>
      <input placeholder="Hà Nội" v-model="users.city" type="text" />
      <h6>State</h6>
      <input placeholder="Hoàng mai" v-model="users.state" type="text" />
      <h6>Address</h6>
      <input placeholder="HH1A Linh Đàm" v-model="users.address" type="text" />
    </div>
    <br />
    <button class="btn btn-primary" @click="submit">Submit</button>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      key: this.$store.state.key,
      users: {},
    };
  },
  methods: {
    submit() {
      this.$resource(this.key + ".json")
        .update({}, this.users)
        .then((response) => {
          alert("Successfully edited Customer")
          this.$router.push({name: 'user'})
        }),
        (error) => {
          console.log(error);
        };
      
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
.my-row {
  background-color: rgb(230, 230, 230);
  padding: 30px 0px;
  border: 1px solid #ccc;
}
h4 {
  margin-left: 15px;
}
h6 {
  margin-left: 15px;
  font-weight: bold;
  margin-top: 5px;
}
input {
  margin-left: 30px;
  width: 94% !important;
}
</style>
