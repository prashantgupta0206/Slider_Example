var slider;
var output;

$(document).ready(function () {
    $('div').find('img').eq(0).css('opacity', 1);
    slider = $("#myRange").attr('value');
    $('#demo').text(slider);
    console.log(slider);
    $('#myRange').on('input', function (e) {
        console.log($(e.target).val());
        output = $(e.target).val();
        $('#demo').text(output);

        /* Image Opacity Functionality*/
        if (output) {
            $('div').find('img').eq(0).css('opacity', 1 - output);
            $('div').find('img').eq(1).css('opacity', output);
            $('div').find('img').eq(2).css('opacity', output - output);
        }
        if (output > 1) {
            $('div').find('img').eq(0).css('opacity', output - output);
            $('div').find('img').eq(1).css('opacity', 2 - output);
            $('div').find('img').eq(2).css('opacity', (output - 1).toFixed(1));
        }
        if (output == 1) {
            $('div').find('img').eq(1).css('opacity', output);
            $('div').find('img').eq(2).css('opacity', (output - 1).toFixed(1));
        }
    });

});