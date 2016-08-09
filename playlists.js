var songs = require('./songs.js');

exports.artist = function () {
  return 'Beyonce';
};

exports.favoriteSong = function () {
  return songs();
};

//module.exports = favoriteSong;
