// GET request to our api route that will return every designer
$.get("/api/designers", function(data) {
    for (var i = 0; i < data.length; i++) {
        $(".row").append("<div class='column'><div class='card-user-container'><div class='card-user-avatar'><img src=" + data[i].src + " class='user-image'></div><div class='card-user-bio'><h4 id='name'>" + data[i].name + "</h4><p class='specialty'>" + data[i].type + "</p><span class='location'><span class='location-icon fa fa-map-marker'></span><span class='location-text'>" + data[i].city + "</span></span></div><div class='card-user-button'><a href='/designerProfile' class='hollow button'>PROFILE</a></div></div></div>");
    }
});
