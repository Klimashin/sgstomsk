$( "span.menu" ).click(function() {
     $( ".head-nav ul" ).slideToggle(300, function() {
           // Animation complete.
     });
 });
 
 $(document).ready(function(){
    $.parallax({
       speed: .95
    });
});