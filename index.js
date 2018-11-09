var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var env = require('dotenv');
var app = express();


app.listen('8090', function(req,res){

    console.log("El Servidor esta en Linea")
})

app.use(cors());
app.use(bodyparser());


app.get('/v1/search', function(req, res){
    
    var songs = req.body.songs;
    var cover = req.body.cover;
    var songTitle = req.body.songTitle;
    var songlength = req.body.songlength;
    var artist = req.body.artist;
    var genre = req.body.genre;
    var count = req.body.count;
    

        var result = {
            songs : songs || "Recientes",
            cover : cover || "https://i.ytimg.com/vi/xWhN4Gx4fLM/hqdefault.jpg",
            songTitle : songTitle || "La Gasolina",
            songlength : songlength || "4.1", 
            artist : artist || "Daddy Yankee",
            genre : genre || "Regueton", 
            count : count || "10",
        }

        res.send(result);


})