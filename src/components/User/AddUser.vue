<template>
  <div class="container">
    <br />
    <div style="display: flex; justify-content: space-between">
      <h1>Add Customer</h1>
      <router-link tag="button" class="btn btn-danger" to="/"
        >Back Home</router-link
      >
    </div>
    <hr />
    <div class="row my-row">
      <h4>Customer Info (*)</h4>
      <div class="head">
        <h6>First Name</h6>
        <p class="error" v-if="error.isFirstName">
          Please enter your first name
        </p>
      </div>
      <input
        style=""
        placeholder="Tùng"
        @blur="blurFirstName"
        @input="inputFirstName"
        v-model="user.firstName"
        type="text"
      />
      <div class="head">
        <h6>Last Name</h6>
        <p class="error" v-if="error.isLastName">Please enter your last name</p>
      </div>
      <input
        placeholder="Lê Thanh"
        @blur="blurLastName"
        @input="inputLastName"
        v-model="user.lastName"
        type="text"
      />
    </div>
    <br />
    <div class="row my-row">
      <h4>Customer Contact (*)</h4>
      <div class="head">
        <h6>Email</h6>
        <p class="error" v-if="error.isEmail">Please enter your email</p>
      </div>

      <input
        required
        @blur="blurEmail"
        @input="inputEmail"
        placeholder="99lethanhtung@gmail.com"
        v-model="user.email"
        type="email"
      />

      <div class="head">
        <h6>Phone</h6>
        <p class="error" v-if="error.isPhone">Please enter your phone</p>
      </div>

      <input
        @blur="blurPhone"
        @input="inputPhone"
        placeholder="0364 959 199"
        v-model="user.number"
        type="number"
      />
    </div>
    <br />
    <div class="row my-row">
      <h4>Customer Location (*)</h4>
      <div class="head">
        <h6>City</h6>
        <p class="error" v-if="error.isCity">Please enter your City</p>
      </div>
      <input
        placeholder="Hà Nội"
        required
        @blur="blurCity"
        @input="inputCity"
        v-model="user.city"
        type="text"
      />

      <div class="head">
        <h6>State</h6>
        <p class="error" v-if="error.isState">Please enter your State</p>
      </div>

      <input
        @blur="blurState"
        @input="inputState"
        placeholder="Hoàng mai"
        required
        v-model="user.state"
        type="text"
      />

      <div class="head">
        <h6>Address</h6>
        <p class="error" v-if="error.isAddress">Please enter your Address</p>
      </div>
      <input
        @blur="blurAddress"
        @input="inputAddress"
        placeholder="HH1A Linh Đàm"
        required
        v-model="user.address"
        type="text"
      />
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
      user: {
        firstName: null,
        lastName: null,
        email: null,
        number: null,
        city: null,
        state: null,
        address: null,
      },
      error: {
        isFirstName: true,
        isLastName: true,
        isEmail: true,
        isPhone: true,
        isCity: true,
        isState: true,
        isAddress: true,
      },
    };
  },
  computed: {},
  methods: {
    blurFirstName(e) {
      if (e.target.value.trim() == "") {
        this.error.isFirstName = true;
      }
    },
    inputFirstName() {
      this.error.isFirstName = false;
    },
    blurLastName(e) {
      if (e.target.value.trim() == "") {
        this.error.isLastName = true;
      }
    },
    inputLastName() {
      this.error.isLastName = false;
    },
    blurEmail(e) {
      if (e.target.value.trim() == "") {
        this.error.isEmail = true;
      }
    },
    inputEmail() {
      this.error.isEmail = false;
    },
    blurPhone(e) {
      if (e.target.value.trim() == "") {
        this.error.isPhone = true;
      }
    },
    inputPhone() {
      this.error.isPhone = false;
    },
    blurCity(e) {
      if (e.target.value.trim() == "") {
        this.error.isCity = true;
      }
    },
    inputCity() {
      this.error.isCity = false;
    },
    blurState(e) {
      if (e.target.value.trim() == "") {
        this.error.isState = true;
      }
    },
    inputState() {
      this.error.isState = false;
    },
    blurAddress(e) {
      if (e.target.value.trim() == "") {
        this.error.isAddress = true;
      }
    },
    inputAddress() {
      this.error.isAddress = false;
    },

    submit() {
      if (
        this.error.isFirstName == true ||
        this.error.isLastName == true ||
        this.error.isEmail == true ||
        this.error.isNumber == true ||
        this.error.isCity == true ||
        this.error.isState == true ||
        this.error.isAddress == true
      ) {
        alert("You entered missing");
      } else {
        this.$resource(".json")
          .save({}, this.user)
          .then((response) => {
            this.user = {};
            setTimeout(() => alert("Successfully added Customer"), 200);
          }),
          (error) => {
            console.log(error);
          };
      }
    },
  },
  created() {
    //   this.resource = this.$resource('')
  },
};
</script>

<style>
.head {
  display: flex;
}
.error {
  margin-top: 5px;
  margin-bottom: 8px;
  margin-left: 20px;
  color: red;
  font-size: 14px;
}
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
