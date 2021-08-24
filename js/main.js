/*-----------------------------------------------------------------------------------*/
/*   Isotop*/
/*-----------------------------------------------------------------------------------*/

jQuery(function($) {
  
        var $container = $('.isotope');

        var first_scroll = true;

        $(window).scroll(function() {
            if(first_scroll) {
                $container.isotope();
                first_scroll = false;
            }
        });

        $(window).focus(function(){
            $container.isotope();
        });


        $container.isotope({
            itemSelector : '.isotope li',
            layoutMode: 'fitRows',
            animationOptions: {
                duration: 750,
                queue: false,
            }
        });

        $('.filter button').on('click', function() {
            $('.filter button').removeClass('selected');
            $(this).addClass("selected");
            $container.isotope({ filter: "." + $(this).attr('data-filter') });
        });

        $(window).smartresize(function(){
            $container.isotope({ filter: "." + $('.filter button.selected').attr('data-filter') });
        });

});