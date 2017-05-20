// // GET request to our api route that will return every designer

// $.get("/api/currentproducts", function(data) {
//         $('.pdp-product-image').append("<img src='https://s3.us-east-2.amazonaws.com/buyorbuck/" + data.url + "'>").hide().fadeIn(1500);
//    }
// });


// Test function to place images on page
var path = 'https://s3.us-east-2.amazonaws.com/buyorbuck/TEST/',
    imgs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    i = Math.floor(Math.random() * imgs.length);
$('.pdp-product-image').append("<img src='" + path + imgs[i] + "'>").hide().fadeIn(1500);
