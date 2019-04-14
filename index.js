$('#Science').on('click', function t() {

    swal({
      title: "Science!",
      text: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
      button: "OK!",
    });
});
$('#DIY').on('click', function a() {
    // change background color of stop light to red
    swal({
      title: "DIY!",
      text: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
      button: "OK!",
    });
});
$('#Music').on('click', function b() {
    // change background color of stop light to red
    swal({
      title: "Music!",
      text: "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
      button: "OK!",
    });

});

$('#Dark').on('click', function switchDark() {
    // change background to gray
    $('body').css('background-color','black');
    // change font to white
    $('h1 , p').css('color', 'white');

    $('#Dark').css('background', 'black')
    $('#Dark').css('color','black')
      $('#Dark').css('border-color','black')
    $('#White').css('color','black')
});

$('#White').on('click', function switchWhite() {
    // change background to white
    $('body').css('background-color','white');
    // change font to white
    $('p').css('color', 'black');
    $('h1').css('color', 'gray');
    $('.carousel-inner h1, .carousel-inner p').css('color', 'white');
$('aa').css('color','white');
    $('#Dark').css('background', 'black')
    $('#Dark').css('color','white')

      $('#White').css('color','white')
});
