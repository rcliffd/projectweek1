
const search = 'tswift'

var apiKey = 'AIzaSyCkrudrWOfe_tgbrb2Vhuyg9nWVkGRyvZc'

// var url1 = 'http://gdata.youtube.com/feeds/api/videos?q=foo&alt=json/channels?key=' + apiKey;

var url1 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + search + '&maxResults=25&key=' + apiKey

// var url1 = 'https://www.googleapis.com/youtube/v3/channels?key=' + apiKey ;

$.ajax({
    url: url1,
    method: 'GET'
}).then(function(response){

    var video = $('<video />', {
        id: 'video',
        src: videoSrc,
        type: 'video/mp4',
        controls: true
    });
    video.appendTo($('#videoPlayer'))

    var results = response;
    console.log(results)

    docuemnt.write(results)


})




var oneMusicURL="https://ideas2it-onemusic.p.rapidapi.com/20131025/release?title=Doolittle&artist=Pixies&maxResultCount=5&user_key=c0f18945b5be93d362d9f8a57cb4bfd6&inc=images"

// var oneMusicTwo="https://api.onemusicapi.com/20151208/release?title=Doolittle&artist=Pixies&user_key=c0f18945b5be93d362d9f8a57cb4bfd6&inc=images&maxResultCount=1"

// $.ajax({
//     url: oneMusicTwo,
//     method: 'GET'
// }).then(function(response){

//     var results = response;
//     console.log(results)
// }).catch(function(err) {
//     console.log(err)
// })