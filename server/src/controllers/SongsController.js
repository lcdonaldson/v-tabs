const { Song } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Error occurred trying to fetch songs'
      })
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error occurred trying to fetch songs'
      })
    }
  },
  async post(req, res) {
    try { 
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error occurred trying to create songs'
      })
    }
  },
  async put(req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.params.songId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Error occurred trying to update the song'
      })
    }
  },
  // async delete(req, res) {
  //   Song.findByIdAndRemove(req.params.songId)
  //   .then(song => {
  //     if (!song) {
  //       return res.status(404).send({
  //         message: "Song not found with id " + req.params.songId
  //       });
  //     }
  //     res.send({
  //       message: "Song deleted successfully!"
  //     });
  //   }).catch(err => {
  //     if (err.kind === 'ObjectId' || err.name === 'NotFound') {
  //       return res.status(404).send({
  //         message: "Song not found with id " + req.params.songId
  //       });
  //     }
  //     return res.status(500).send({
  //       message: "Could not delete song with id " + req.params.songId
  //     });
  //   });
  // },
  async delete(req, res) {
    console.log('delete method: ')
    try {
      // console.log('mila' + req.params.songId);
      const song = await Song.destroy(req.params.songId)
      console.log(song)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Error occurred trying to delete this song'
      })
    }
  },
}