<template>
  <div class="cardWrapper">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cardWrapper {
    width: 90vw;
    /* min-height: 3rem; */
    margin: 0.5rem auto;
    background-color: #fff;
    margin-bottom: 1rem;
  }
  .title {
    /* margin-top: 1rem; */
    padding: 0.5rem 1rem;
    text-align: left;

    background-color: #ff9512;
    color: #fff;
    font-weight: bold;
  }

  @media screen and (min-width: 500px) {
  }
</style>
