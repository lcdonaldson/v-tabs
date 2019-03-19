<template>
  <div>
    <Header>
      <SideMenu/>
    </Header>
    <Card title="Login">
      <div class="compContainer">
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Email"/>

        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="Password"/>

        <button @click="login">Login</button>

        <div class="error" v-html="error"/>
      </div>
    </Card>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Header from './Header'
import SideMenu from './SideMenu'
import Card from './Card'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  components: {
    Header,
    SideMenu,
    Card
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .compContainer {
    margin: 0 auto;
    max-width: 35rem;
    padding: 1.5rem 0;
    background-color: #fff;
  }

  h3 { display: inline;}

  .error {
    margin-top: 1rem;
    color: coral;
    font-weight: bold;
  }

  input {
    display: flex;
    width: 13rem;
    margin: 1.5rem auto;
    min-height: 2rem;
    font-size: 1em;
    justify-content: center;
    outline: none;
    border: none;
    padding: 0 0.3rem;
    background-color: #ddd;
  }

  ::-webkit-input-placeholder {
   text-align: center;
  }

  button {
    display: flex;
    text-align: center;
    margin: 0 auto;
    width: 13rem;
    min-height: 2.4rem;
    justify-content: center;
    border: none;
    border-radius: 2rem;
    font-size: 1em;
    outline: none;
    color: white;
    background-color: #09d277;
  }

  @media screen and (min-width: 500px) {
    .nav {
      margin-bottom: 3rem;
      padding: 0.5rem;
      font-size: 1.5em;
      font-weight: bold;
    }
    .compContainer { height: 18rem; }
  }
</style>
