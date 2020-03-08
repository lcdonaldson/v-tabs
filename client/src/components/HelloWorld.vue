<template>
  <div>
    <Header/>
    <div class="container hero">
      <h1>{{ msg }}</h1>
      <h3> Tableture, Lyrics, and Video</h3>
    </div>
    <div class="container primaryContentWrapper">
      <p>
        Did you ever want one place that you could
        practice your tabs, watch you tube videos for
        the songs and get the lyrics all in one place?
      </p>
      <h2>Welcome to Tabs</h2>
      <p>
        After signing up ( and btw... it's free ) create
        your profile, and you can add the song tabs, lyrics, videos
        and album covers for your favorite riffs. No more downloading
        folders and files on your desktop.
      </p>
    </div>
    <div class="container secondaryContentWrapper">
      <h2>Yep, its actually that simple</h2>
      <p>
        So go log in, and have all your tabs in one place! Oh and did I
        mention that its free!. Best of all...you don't have to sign up for pro
        accounts, and you don't have to pay to remove annoying ads. No more
        spending a couple of bucks just to store your tabs. Just take your music
        with you to play it whenever you get a free minute.
      </p>
    </div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'This is Tabz'
    }
  },
  components: {
    Header
  }
}
</script>
<style scoped>

h1, h3, p {
  margin: 0;
  padding: 0;
  font-weight: normal;
  color: white;
}

.container {
  padding: 2rem 0.5rem;
  font-size: 1.3em;
}

.hero {
  background-color: #ffb300;
  margin-top: -0.5rem;
}

.primaryContentWrapper { background-color: #fff; }
.primaryContentWrapper > * { color: #ffaa0e; }
.primaryContentWrapper > p { margin-bottom: 1rem; }

.secondaryContentWrapper { background-color: #ffb300; }
.secondaryContentWrapper > * { color: #fff; }
</style>
