$(document).ready(function() {
    //Get the input and output it in the sentance
    var text;
    $('#text').keyup(function() {
        text = $(this).val();
        if ($(this).val() == '') {
            text = "*"
        }
        printText(text);
    });


    function printText(textIn) {
        var imgsrc = "https://www.myfonts.com/WhatTheFont/backend/render?id=3b313f1a50677b3ab676b9384f253b4e&size=57&width=950&text=" + textIn;
        $('#imgselector').attr('src', imgsrc);
        console.log(imgsrc);
    }

})
//https://www.myfonts.com/WhatTheFont/backend/render?id=3b313f1a50677b3ab676b9384f253b4e&size=57&width=950&text=Dont%20kill%20yourself
