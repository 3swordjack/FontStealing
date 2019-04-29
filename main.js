var text;
var defaultText = "Enter your text here";
var textColor = "ffffff";
var backgroundColor = "000000";
var fontID = "3b313f1a50677b3ab676b9384f253b4e"
$(document).ready(function() {

    printText($('#text').val());

    $('#text').keyup(function() {
        text = $(this).val();
        if ($(this).val() == '') {
            text = "Enter your text here"
        }
        printText(text);
    });

    $('#fontID').keyup(function() {
        fontID = $.trim($(this).val());
        if ($(this).val() == '') {
            fontID = "3b313f1a50677b3ab676b9384f253b4e"
        }
        printText(text);
    });

})

function printText(textIn) {
    if (!textIn) {
        textIn = defaultText
    }
    var imgsrc = "https://render.myfonts.net/fonts/font_rend.php?id=" + fontID + "&rt=" + textIn + "&rs=32&w=720&sc=2&nie=true&fg=" + textColor + "&bg=" + backgroundColor;
    $('#imgselector').attr('src', imgsrc);
    console.log(imgsrc);
}

//https://www.myfonts.com/WhatTheFont/backend/render?id=3b313f1a50677b3ab676b9384f253b4e&size=57&width=950&text=Dont%20kill%20yourself
//https://render.myfonts.net/fonts/font_rend.php?id=3b313f1a50677b3ab676b9384f253b4e&rt=cheese&rs=32&w=720&sc=2&nie=true&fg=e61212&bg=aa6363&ft=ccmp%2Cmark%2Cmkmk%2Cliga%2Cclig%2Ckern%2Cpalt&nf=1
