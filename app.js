
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

    docuemnt.write(results)
})

$("body").on("click", "button", function() {
    console.log("clicked");
    var buttonText = $(this).attr("id");
    var apikey = "w6louPuZQ3IE5T5h9AcEP91gPGYNd2by";
    var queryURL =
      "http://api.giphy.com/v1/gifs/search?q=" +
      buttonText +
      "&api_key=" +
      apikey +
      "&limit=10";
    //Get array of objects from giphy API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      //Add gifs to page
      var results = response.data;
    }


// var oneMusicURL="https://ideas2it-onemusic.p.rapidapi.com/20131025/release?title=Doolittle&artist=Pixies&maxResultCount=5&user_key=c0f18945b5be93d362d9f8a57cb4bfd6&inc=images"

// var oneMusicTwo="https://api.onemusicapi.com/20151208/release?title=Doolittle&artist=Pixies&user_key=c0f18945b5be93d362d9f8a57cb4bfd6&inc=images&maxResultCount=1"

// $.ajax({
//     url: oneMusicTwo,
//     method: 'GET'
// }).then(function(response){

//     var results = response;
//     console.log(results)
// }).catch(function(err) {
//     console.log(err)
 