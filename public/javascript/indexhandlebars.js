$(document).ready(function() {



    $.get("/api/currentproducts", function(data){
        for (var i = 0; i < data.length; i++) {

            var price = data[i].price;
            var type = data[i].type;
            var color = data[i].color;
            var style = data[i].style;
            var imageInfo = "$" + price + " - " + type + " " + color + " " + style;

        $('#clothesLabel').append(imageInfo);

            function index() {
                var img = [];
                img.push(data[i].url);
                e = Math.floor(Math.random() * img.length);

                $('.pdp-product-image').append("<img src='https://s3.us-east-2.amazonaws.com/buyorbuck/" + img[e] + "'>").hide().fadeIn(1600);
                console.log(img);

            }
        }

    });
});



// // Test function to place images on page
// var path = 'https://s3.us-east-2.amazonaws.com/buyorbuck/TEST/',
//     imgs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
//     i = Math.floor(Math.random() * imgs.length);
// $('.pdp-product-image').append("<img src='" + path + imgs[i] + "'>").hide().fadeIn(1500);



//     $("#buyButton").on("click", function(event) {
//         event.preventDefault();

//     $.post("/api/products", function(data) {
//         function updateProduct(data) {
//             $.ajax({
//                 method: "PUT",
//                 url: "/api/products",
//                 data: data.buy,
//             });
//         }

//     });

// });

// $("#buckButton").on("click", function(event) {
//     event.preventDefault();

//     $.post("api/products", function(data) {



//     });


// });
