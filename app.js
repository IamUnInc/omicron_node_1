var http = require('http');
var song = require('./songs.js');
var playlists = require('./playlists.js');
var albums = require('./albums.js');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(playlists.artist() + '\n');

  res.write(playlists.favoriteSong() + '\n');

  res.write(albums.title() + '\n');

  res.write(albums.year());

  res.end();
}).listen(3000);

console.log('Listening on port 3000');
