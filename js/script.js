$(document).ready(function () {
    //Menu Services
    $('#menu-services').click(function(){
        $('html, body').animate({scrollTop:830}, 'slow');
    });
    //End Menu Services

    // Menu Contact
    $('#menu-Contact').on('click', function () {
        $('body,html').animate({scrollTop: $(document).height()}, 2500);
    });
    // End Menu Contact

    // Header Buuton Down
    $('#top1').click(function(){
        $('html, body').animate({scrollTop:830}, 800); //slow
    });
    //En Header Button Down

    //Puzzle
    $('#pics').sortable();
    $('#pics').disableSelection();
    //End Puzzle

    //Top Button
    $('#top').on('click', function () {
        $('html').animate({scrollTop: 0}, 1500);
    });
    //End Top Button

    //Title Attribute
    $("[title]").tooltip({
        hide: {
            effect: "explode",
            delay: 250
        }
    });
    //End Title Attribute



    // $('#top1').on('click', function () {
    //   setInterval($('body,html').animate({scrollTop: $(document)}, 2500) ,2500);
    //});
 });





