$(document).ready(function() {

    $.get("/api/currentproducts", function(data) {
        for (var i = 0; i < data.length; i++) {
            var imageArray = [];
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



