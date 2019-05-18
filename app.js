
const search = 'tswift'

var apiKey = 'AIzaSyCkrudrWOfe_tgbrb2Vhuyg9nWVkGRyvZc'

// var url1 = 'http://gdata.youtube.com/feeds/api/videos?q=foo&alt=json/channels?key=' + apiKey;

var url1 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + search + '&maxResults=25&key=' + apiKey

// var url1 = 'https://www.googleapis.com/youtube/v3/channels?key=' + apiKey ;

$.ajax({
    url: url1,
    method: 'GET'
}).then(function(response){

    var results = response;
    console.log(results)
})
