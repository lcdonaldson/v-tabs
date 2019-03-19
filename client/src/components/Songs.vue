<template>
  <div>
    <Header>
      <SideMenu/>
    </Header>
    <div style="display: flex; width: 92vw; padding: 0.5rem; margin: 0 auto;">
      <input  style="flex: 3; margin: 0.2rem; outline: none; background-color: #ddd; border: none; padding: 0 1rem;" type="text">
      <button style="flex: 1; margin: 0.2rem; max-width: 8em; background-color: #ff9411;" type="submit">Search</button>
      <button class="fab" @click="navigateTo({name: 'songs-create'})">+</button>
    </div>
    <Card title="Songs">
      <div v-for="song in songs" :key="song.id">
        <div class="mediaObject">
          <img class="mediaImg" :src="song.albumImageUrl" />
          <div class="mediaInfo">
            <div class="inline">
              <span>Title:</span>
              <p class="metadata">{{song.title}}</p>
            </div>
            <div class="inline">
              <span>Artist:</span>
              <p class="metadata">{{song.artist}}</p>
            </div>
            <div class="inline">
              <span>Genre:</span>
              <p class="metadata">{{song.genre}}</p>
            </div>
            <div class="inline">
              <span>Album:</span>
              <p class="metadata">{{song.album}}</p>
            </div>
            <button class="view" @click="deleteSong(song.id)">Delete</button>
            <button class="view" @click="navigateTo({name: 'song', params: {songId: song.id}})">View Tab</button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>

import SongsService from '../services/SongsService'
import Header from './Header'
import SideMenu from './SideMenu'
import Card from './Card'

export default {
  components: {
    Header,
    SideMenu,
    Card
  },
  data: function () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async deleteSong (id) {
      this.error = null
      try {
        console.dir(SongsService.delete(id))
        await SongsService.delete(id)
        console.log('buzz')
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mediaObject {
    display: flex;
    cursor: pointer;
    background-color: #edecf5;
    border-bottom: 10px solid whitesmoke;
  }
  .mediaInfo {
    width: 100%;
    padding: 0.3rem;
  }
  .view {
    margin: 0.5rem;
    min-width: 10rem;
    float: right;
    padding-top: 0.5em;
  }
  .inline {
    display: flex;
    padding: 0.3rem 0;
  }
  span {
    font-weight: bold;
    flex: 1;
    text-align: left;
  }
  .metadata {
    padding: 0;
    margin: 0;
    flex: 2;
    text-align: left;
  }
  .mediaImg {
    padding: 0.3rem;
    width: 6rem;
    height: 6rem;
  }
  h4 { display: inline; }
  ::-webkit-input-placeholder {
   text-align: center;
  }
  button {
    display: flex;
    text-align: center;
    justify-content: center;
    border: none;
    border-radius: 2rem;
    padding: 0.5rem 0.8rem;
    font-size: 1em;
    outline: none;
    color: white;
    background-color: #09d277;
  }
  .fab {
    margin: 0 -0.5em 0 0.5em;
    padding-bottom: 0.5em;
    border-radius: 4rem;
    font-size: 16pt;
    font-weight: bold;
    background-color: #09d277;
  }
  @media screen and (min-width: 500px) {
    .nav {
      padding: 0.5rem;
      font-size: 1.5em;
      font-weight: bold;
    }
    h4 { padding: 0; }
  }
</style>
