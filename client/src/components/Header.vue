<template>
  <div class="nav">
    <SideMenu class="sideMenu"/>
    <h3 class="home" @click="navigateTo({name: 'root'})">Tabz</h3>
    <button class="header-button browse" @click="navigateTo({name: 'songs'})">Browse</button>
    <span v-if="pathIsHome">
      <button v-if="!$store.state.isUserLoggedIn" class="header-button logIn" @click="navigateTo({name: 'login'})">Log in</button>
    </span>
    <span v-if="pathIsHome">
      <button v-if="!$store.state.isUserLoggedIn" class="header-button signUp" @click="navigateTo({name: 'register'})">Sign Up</button>
    </span>
    <span v-if="pathIsHome">
      <button v-if="$store.state.isUserLoggedIn" class="header-button logout" @click="logout">Logout</button>
    </span>
  </div>
</template>

<script>
import SideMenu from './SideMenu'
export default {
  name: 'Header',
  computed: {
    pathIsHome () {
      return this.$route.path === '/'
    }
  },
  components: {
    SideMenu
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
}
</script>

<style>
  .nav {
    padding-top: 0.3rem;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0.5rem;
    min-height: 3rem;
    font-size: 24px;
    background-color: #ff9512;
    color: #fff;
  }
  .signUp,
  .logIn,
  .browse,
  .logout { display: none; }
  .home { margin: 0 auto;}

  @media screen and (min-width: 500px) {
    .nav {
      padding: 0.5rem;
    }
    .sideMenu { display: none; }
    .home {
      display: inline-block;
      position: absolute;
    }
    .browse {
      display: inline-block;
      position: absolute;
      left: 1rem;
    }
    .logIn {
      display: inline-block;
      position: absolute;
      right: 6.5rem;
    }
    .signUp {
      display: inline-block;
      position: absolute;
      right: 0.5rem;
    }
    .logout {
      display: inline-block;
      position: absolute;
      right: 0.5rem;
    }
  }
</style>
