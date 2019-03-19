<template>
  <div class="pb-md">
    <Header>
      <SideMenu/>
    </Header>
    <div class="m-sm">
      <Card title="Song Metadata">
        <div class="pad-sm">
          <input type="title"
            name="title"
            required
            :rules="[required]"
            v-model="song.title"
            placeholder="Title"
          />
          <input type="text"
            name="artist"
            required
            :rules="[required]"
            v-model="song.artist"
            placeholder="Artist"
          />
          <input type="text"
            name="genre"
            required
            :rules="[required]"
            v-model="song.genre"
            placeholder="Genre"
          />
          <input type="text"
            name="album"
            required
            :rules="[required]"
            v-model="song.album"
            placeholder="Album"
          />
          <input type="text"
            name="img"
            required
            :rules="[required]"
            v-model="song.albumImageUrl"
            placeholder="Image Url"
          />
          <input type="text"
            name="yt-id"
            required
            :rules="[required]"
            v-model="song.youtubeId"
            placeholder="YouTube ID"
          />
        </div>
      </Card>
    </div>

    <div>
      <Card title="Song Structure">
        <div class="pad-sm">
          <textarea
            type="text"
            v-model="song.tab"
            placeholder="Tabs"
          />
          <textarea
            type="text"
            v-model="song.lyrics"
            placeholder="Lyrics"
          />
        </div>
      </Card>

      <div class="danger-alert" v-if="error">
        {{error}}
      </div>

      <button
        @click="create">
        Create Song
      </button>
    </div>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Header from './Header'
import SideMenu from './SideMenu'
import Card from './Card'

export default {
  components: {
    Header,
    SideMenu,
    Card
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
  .m-sm { margin: 1rem; }
  .mt-sm { margin-top: 1rem; }
  .pad-sm { padding: 1rem; }
  .pb-md { padding-bottom: 2rem; }
  input {
    display: -ms-flexbox;
    width: 12rem;
    margin: 1rem auto;
    min-height: 2rem;
    font-size: 1em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    outline: none;
    border: none;
    padding: 0 0.3rem;
    background-color: #ddd;
  }
  ::-webkit-input-placeholder {
   text-align: center;
  }
  textarea {
    display: flex;
    margin-bottom: 1.5rem;
    min-height: 10rem;
    min-width: 100%;
    max-width: 100%;
    padding: 0.5rem;
    outline: none;
    border: none;
    background-color: #ddd;
    font-size: 1em;
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
    padding-top: 0.4em;
    background-color: #09d277;
  }
  .danger-alert {border: 3px solid red;}
</style>
