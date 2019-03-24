/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

c=0;
$('#quiz-result').click(
    function(){
        if($("#q1t").is(':checked')) {
            $('#Q1').css("background-color", "green");
            c+=1;
        }
        if($("#q1f").is(':checked')){
            $('#Q1').css("background-color", "red");
        }
        if($("#q2t").is(':checked')) {
            $('#Q2').css("background-color", "green");
            c+=1;
        }
        if($("#q2f").is(':checked')){
            $('#Q2').css("background-color", "red");
        }
        if($("#q3f").is(':checked')) {
            $('#Q3').css("background-color", "green");
            c+=1;
        }
        if($("#q3t").is(':checked')){
            $('#Q3').css("background-color", "red");
        }
        if($("#q4t").is(':checked')) {
            $('#Q4').css("background-color", "green");
            c+=1;
        }
        if($("#q4f").is(':checked')){
            $('#Q4').css("background-color", "red");
        }
        if($("#q5t").is(':checked')) {
            $('#Q5').css("background-color", "green");
            c+=1;
        }
        if($("#q5f").is(':checked')){
            $('#Q5').css("background-color", "red");
        }

        alert("You scored "+c+"/5. Congrats!");
        c=0;
    }
);
