<template>
  <div>
    <nav class="navbar navbar-light bg-light my-nav">
      <router-link style="margin-left: 20px; font-weight: 700; font-size:24px; opacity: 0.7;" class="navbar-brand" to="/">vCustomers</router-link>
      <div>
        <ul style="flex-direction:row; margin-right: 20px" class="navbar-nav mr-auto">
          <router-link
            tag="li"
            class="nav-item my-nav-child"
            to="/"
            active-class="activeClass"
            exact
            ><a class="nav-link"> Home </a></router-link
          >
          <router-link
            tag="li"
            class="nav-item my-nav-child"
            to="/user"
            active-class="activeClass"
            ><a class="nav-link" > User </a></router-link
          >
          <router-link
            tag="li"
            class="nav-item my-nav-child"
            to="/adduser"
            active-class="activeClass"
            ><a class="nav-link"> Add Customer </a></router-link
          >
          <router-link
            tag="li"
            class="nav-item my-nav-child"
            to="/about"
            active-class="activeClass"
            ><a class="nav-link"> About </a></router-link
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {

  },
};
</script>

<style>
.my-nav{
  display:flex;
  flex-direction: row;
}
.my-nav-child {
  padding: 0px 20px;
}

.activeClass {
  font-weight: 800;
}
</style>
