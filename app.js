$("#submitBtn").on("click", function (event) {
    var search = $("#searchName").val().trim();
    if (search == "") {
        var errorAlert = '* please enter an artist';
        console.log('please enter an artist');
        $('#errorAlert').text(errorAlert)
        return false
    } else {
    var noError = "";
    $('#errorAlert').text(noError)
    $("#gif").empty();
    $("#topTracks").empty();
    event.preventDefault();
    const apiKey = 'AIzaSyCkrudrWOfe_tgbrb2Vhuyg9nWVkGRyvZc'
    const apiKey10 = "3210dee919595df6a421526e3f0a6d13"
    const url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + search + '&type=video&videoEmbeddable=true&order=viewCount' + '&maxResults=25&key=' + apiKey
    const url1 = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dJZAoTE5oJZcb8BOEXkAExAi85YngNzf&limit=10"
    //?method=artist.gettoptracks
    const url2 = "https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + search + "&api_key=" + apiKey10 + "&format=json"
    //Get Artist TOP Tracks
    const url3 = "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + search + "&api_key=" + apiKey10 + "&format=json"
    $.ajax({
        url: url,
        method: 'GET'
    }).then(function (response) {
        console.log(response)
        // ================== GIPHY API ==================== // 
        $.ajax({
            url: url1,
            method: 'GET'
        }).then(function (gifResponse) {
            for (var j = 0; j < 9; j++) {
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
        }).then(function (lastFMResponse) {
            console.log(lastFMResponse)
            var artist = lastFMResponse.artist.name
            var artistBio = lastFMResponse.artist.bio.summary
            console.log(artist + " " + artistBio)
            // // var bioDiv=$("#bio");
            // var newbioDiv=$("<div>" + artistBio + "</div>");
            // bioDiv.append(newbioDiv)

            // $('#artist').append(artist)
            $('#bio').html(artistBio)
        })
        // ================== Last FM API For Getting Top Tracks ==================== // 
        $.ajax({
            url: url3,
            method: 'GET'
        }).then(function (lastFMResponseTopTracks) {
            console.log(lastFMResponseTopTracks)

            for (var a = 0; a < 10; a++) {
                console.log(lastFMResponseTopTracks.toptracks.track[a].name)
                console.log(lastFMResponseTopTracks.toptracks.track[a].url)
                $('#topTracks').append(lastFMResponseTopTracks.toptracks.track[a].name + "<br>")

            }
        })
        for (var i = 1; i < 10; i++) {
            var videoSrc = 'https://www.youtube.com/embed/' + response.items[i].id.videoId + '?autoplay=0'
            var thumbSrc = response.items[i].snippet.thumbnails.high.url
            console.log


                console.log(videoSrc)
            const iFrame = $("#vid-" + i)
            iFrame.attr("src", videoSrc)
            const iThumb=$("#img-" + i)
            iThumb.attr("src", thumbSrc)
            console.log(iThumb + "this is not working")


            // var video = $('<iframe />', {
            //     id: 'video',
            //     src: videoSrc
            // });
            // video.appendTo($('#vid-[i]'))
            // var results = response;
            // console.log(results.items)
            // }
        }
        // Init Animations data-aos = ...
        // AOS.init();
    })
    }
}) 