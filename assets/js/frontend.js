;(function($){
    $(document).ready(function(){
        
        //Handle contact form
        if(typeof elementor === 'undefined'){
        $('.softlab-contact-form:not(#pre-sales-form)').hide();
        }

        $('.contact-tab').on('click', function(){
            const id = $(this).attr('id');
            const form = $(`#${id}-form`);

            $('.contact-tab').removeClass('active');
            $(this).addClass('active');

            $('.softlab-contact-form').hide();
            form.show();

            
        });
    });
})(jQuery);