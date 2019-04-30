var text;
var defaultText = "Enter your text here";
var textColor = "ffffff";
var backgroundColor = "000000";
var defaultFont = "3b313f1a50677b3ab676b9384f253b4e"
var fontID = "3b313f1a50677b3ab676b9384f253b4e"



$(document).ready(function() {

    //Print whatever is in input
    printText($('#text').val());

    //Get ID from image url
    $('#idGen').keyup(function() {
        if ($(this).val().length <= '82') {
            fontID = defaultFont
        } else {
            fontID = $(this).val().slice(50, 82)
        }
        printText($('#text').val())
    });


    //Take input text
    $('#text').keyup(function() {
        text = $(this).val();
        if ($(this).val() == '') {
            text = "Enter your text here"
        }
        printText(text);
    });


    //Change font based on input ID
    $('#fontID').keyup(function() {
        fontID = $.trim($(this).val());
        if ($(this).val() == '') {
            fontID = "3b313f1a50677b3ab676b9384f253b4e"
        }
        printText(text);
    });

})

//Take input paramaters and render image
function printText(textIn) {
    if (!textIn) {
        textIn = defaultText
    }
    var imgsrc = "https://render.myfonts.net/fonts/font_rend.php?id=" + fontID + "&rt=" + textIn + "&rs=32&w=720&sc=2&nie=true&fg=" + textColor + "&bg=" + backgroundColor;
    var dsrc = "https://render.myfonts.net/fonts/font_rend.php?id=" + fontID + "&rt=" + textIn + "&rs=1024&w=9000&sc=2&nie=true&fg=" + textColor + "&bg=" + backgroundColor;
    $('#imgselector').attr('src', imgsrc);
    $('#imgdownloader').attr('href', dsrc);
    console.log(imgsrc);
}


//https://render.myfonts.net/fonts/font_rend.php?id=47f3c2947ccd1a8cc74b346696663dd7&rt=Insta+Story+Thin&rs=32&w=720&sc=2&nie=true&fg=000000&bg=FFFFFF&ft=ccmp%2Cmark%2Cmkmk%2Cliga%2Cclig%2Ckern%2Cpalt&nf=1
//https://www.myfonts.com/WhatTheFont/backend/render?id=3b313f1a50677b3ab676b9384f253b4e&size=57&width=950&text=Dont%20kill%20yourself
//https://render.myfonts.net/fonts/font_rend.php?id=3b313f1a50677b3ab676b9384f253b4e&rt=cheese&rs=32&w=720&sc=2&nie=true&fg=e61212&bg=aa6363&ft=ccmp%2Cmark%2Cmkmk%2Cliga%2Cclig%2Ckern%2Cpalt&nf=1
