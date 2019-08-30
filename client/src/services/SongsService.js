import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('songs', {
      params: {
        search: search
      }
    })
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  },
  post (song) {
    return Api().post('songs', song)
  },
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  },
  delete (songId) {
    // console.log(`songs/${songId}`, { params: {} })
    return Api().delete(`songs/${songId}`)
    // axios.get(`http://localhost:8081/songs/${songId}`)
    //   .then(res => song.splice(index, 1));
  }
}
