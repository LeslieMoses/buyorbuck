$(document).ready(function() {

    $.get("/api/currentproducts", function(data) {
        for (var i = 0; i < data.length; i++) {
            var img = data[i].url;
            var price = data[i].price;
            var type = data[i].type;
            var color = data[i].color;
            var style = data[i].style;
            var imageInfo = "$" + price + " - " + type + " " + color + " " + style;

        }

        $('#blank').replaceWith("<img src='https://s3.us-east-2.amazonaws.com/buyorbuck/" + img + "'>").hide().fadeIn(1500);

       	$('#clothesLabel').append(imageInfo);
    });

});



// Test function to place images on page
// var path = 'https://s3.us-east-2.amazonaws.com/buyorbuck/TEST/',
//     imgs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
//     i = Math.floor(Math.random() * imgs.length);
// $('#main-product-image').append("<img src='" + path + imgs[i] + "'>").hide().fadeIn(1500);
