const BASE_URL = 'https://us-central1-my-portfolio-79c04.cloudfunctions.net/sendMail';

$(function() {

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        var submit_btn = $('#contact-form-submit-btn').val("Sending Message....");
        submit_btn.attr('disabled', true);
        sendMail($(this).serialize());
    });

});

sendMail = function(formData) {
    $.get(BASE_URL, formData,
        function(data, textStatus, jqXHR) {
            swal("Thank You!",
                "Your message has been successfully sent. I will contact you very soon!",
                "success");
            $('#contact-form-reset-btn').click();
            var submit_btn = $('#contact-form-submit-btn').val("Send Message");
            submit_btn.attr('disabled', false);
        },
        "json"
    ).fail(function() {
        swal("Sorry!",
            "An error was encountered while sending your mail, please try again",
            "error");
        var submit_btn = $('#contact-form-submit-btn').val("Send Message");
        submit_btn.attr('disabled', false);
    });
}