$(document).foundation()

$('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
});

// IMAGE CARD
$('.sim-thumb').on('click', function() {
    $('#main-product-image').attr('src', $(this).data('image'));
})

// designer's profile card from designLogin
// more click
$('.card-profile-stats-more-link').click(function(e){
  e.preventDefault();
  if ( $(".card-profile-stats-more-content").is(':hidden') ) {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
});

// Buy or Buck buttons
$('[data-mobile-app-toggle] .button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});


