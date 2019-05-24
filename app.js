
const apiKey = 'AIzaSyCkrudrWOfe_tgbrb2Vhuyg9nWVkGRyvZc'
const apiKey10 = "3210dee919595df6a421526e3f0a6d13"
const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + search + '&type=video&videoEmbeddable=true&order=viewCount' + '&maxResults=25&key=' + apiKey
const url1 = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dJZAoTE5oJZcb8BOEXkAExAi85YngNzf&limit=10"
//?method=artist.gettoptracks
const url2 = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+ search +"&api_key="+ apiKey10 +"&format=json"
//Get Artist TOP Tracks
const url3 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist="+ search +"&api_key="+ apiKey10 +"&format=json"
// ================== YOUTUBE API ==================== // 

AOS.init();

$("#submitBtn").on("click", function(event){
  event.preventDefault();
  var search=$("#searchName").val().trim();

$.ajax({
    url: url, 
    method: 'GET'
}).then(function(response){
   // ================== GIPHY API ==================== // 
    $.ajax({
        url: url1,
        method: 'GET'
    }).then(function(gifResponse){
        for(var j = 0; j < 9; j++){
            var gif = $('<img>', {
                id: 'gifImg',
                src: gifResponse.data[j].images.fixed_height.url
            })
            gif.appendTo($('#gif'))
            console.log(gifResponse)
        }
    })
// ================== Last FM API ==================== // 
    $.ajax({
        url: url2,
        method: 'GET'
    }).then(function(lastFMResponse){
        console.log(lastFMResponse)
        var artist = lastFMResponse.artist.name
        var artistBio = lastFMResponse.artist.bio.summary
        console.log(artist + " " + artistBio)
        $('#artist').append(artist)
        $('#artistBio').append(artistBio) 
    })
// ================== Last FM API For Getting Top Tracks ==================== // 
    $.ajax({
        url: url3,
        method: 'GET'
    }).then(function(lastFMResponseTopTracks) {
        console.log(lastFMResponseTopTracks)
      
        for(var a = 0; a < 10; a++){
        console.log(lastFMResponseTopTracks.toptracks.track[a].name)
        console.log(lastFMResponseTopTracks.toptracks.track[a].url)
        var topTracks = lastFMResponseTopTracks.toptracks.track[a].name
        $('#topTracks').append(topTracks + "<br>")
        }
    })
    for (var i = 0; i < 9; i++) {
    var videoSrc='https://www.youtube.com/embed/' + response.items[i].id.videoId + '?autoplay=0'
    console.log(videoSrc)
    var video = $('<iframe />', {
        id: 'video',
        src: videoSrc
    });
    video.appendTo($('#vid-1'))
    var results = response;
    console.log(results.items)
    }
})
// Init Animations data-aos = ...
AOS.init();
Collapse

})