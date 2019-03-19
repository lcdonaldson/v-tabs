<template>
  <div class="tabz-slideout" :class="{ isOpen: isOpen }">
    <div class="tabz-slideout-opener" @click="toggle">
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <ul class="tabz-slideout-menu">
      <li v-if="!$store.state.isUserLoggedIn" class="tabz-slideout-menu-item" @click="navigateTo({name: 'login'})">Login</li>
      <li v-if="!$store.state.isUserLoggedIn" class="tabz-slideout-menu-item" @click="navigateTo({name: 'register'})">Sign Up</li>
      <li class="tabz-slideout-menu-item" @click="navigateTo({name: 'songs'})">Browse</li>
      <li v-if="$store.state.isUserLoggedIn" class="tabz-slideout-menu-item" @click="logout">Logout</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data: function data () {
    return {
      isOpen: false
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    open: function open () {
      this.openerText = 'Close'
      this.isOpen = true
    },
    close: function close () {
      this.openerText = 'Open'
      this.isOpen = false
    },
    toggle: function toggle () {
      if (this.isOpen) {
        this.close()
      } else {
        this.open()
      }
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
  * {
    box-sizing: border-box;
  }
  ul { margin: 0; }
  li { list-style-type: none; }
  .tabz-slideout {
    position: relative;
    width: 85vw;
    height: 0;
    background-color: #34495e;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    transition: -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1), -webkit-transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .tabz-slideout.isOpen {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  .tabz-slideout-opener {
    position: fixed;
    top: 0;
    left: 100%;
    margin: 0.25rem 0 0 1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    z-index: 10;
  }
  .tabz-slideout-opener:hover {
    text-decoration: underline;
  }
  .tabz-slideout-menu {
    background-color: #ffb300;
    margin: 0;
    padding-left: 0rem;
    min-height: 450px;
  }
  .tabz-slideout-menu-item {
    font-size: 1.5em;
    padding-top: 2rem;
  }

  @media screen and (min-width: 500px) {
    .sideMenu,
    .tabz-slideout { display: none; }
  }

</style>
