<template>
  <div>
    <Header>
      <SideMenu/>
    </Header>
    <button @click="navigateTo({name: 'song-edit'})">Edit Song</button>
    <div class="contentWrapper fs">
      <Card title="Tabs">
        <textarea
          class="content tabs "
          v-model="song.tab"
          @click="e => e.target.classList.toggle('active')"
          readonly
        />
      </Card>
      <Card title="Lyrics">
        <div
          class="content lyrics"
          readonly
          @click="e => e.target.classList.toggle('active')"
        >
        {{song.lyrics}}
        </div>
      </Card>
      <Card title="Video">
        <div
          class="video"
          readonly
        >
          <youtube
            :video-id="song.youtubeId"
            :player-height="200"
            :player-width="285"
          >
          </youtube>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import SongsService from '../services/SongsService'
import Header from './Header'
import SideMenu from './SideMenu'
import Card from './Card'
// import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  components: {
    Header,
    SideMenu,
    Card
  },
  data () {
    return {
      song: ''
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    console.log('SONG : ' + JSON.stringify(songId, null, 2))
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav { margin-bottom: 0.5em; }
  .content {
    width: 100%;
    padding: 0 0.5rem;
    height: 15em;
    transition: 0.3s ease all;
    overflow: auto;
    border: none;
    outline: none;
    border-style: none;
    border-color: transparent;
    font-family: monospace;
  }
  button {
    display: flex;
    text-align: center;
    margin-left: auto;
    margin-right: 5vw;
    min-height: 2.4rem;
    justify-content: center;
    border: none;
    border-radius: 2rem;
    padding: 0.5rem 0.8rem;
    font-size: 1em;
    outline: none;
    color: white;
    background-color: #09d277;
  }
  .active {
    height: 75vh;
  }
  .contentWrapper {
    display: flex;
    flex-flow: row wrap;
    margin-top: 0.5rem;
  }
  .tabs {
    max-width: 90vw;
    padding: 2em;
  }
  .lyrics {
    line-height: 2;
    padding: 2em;
  }

  @media screen and (min-width: 500px) {
    .nav {
      padding: 0.5rem;
      font-size: 1.5em;
      font-weight: bold;
    }
  }
</style>
