$(document).ready(function() {
    $('.answer').hide();
    $('.question').click(function(e) {
        $('.answer').slideUp();
        $(this).nextAll(".answer").stop(true, false).slideToggle();
    });
    
    $('#contactForm').submit(function(e) {
        var name = $('#name').val().trim();
        var phone = $('#phone').val().trim();
        
        
        if (name === "" && phone === "" ) {
            document.getElementById("erro1").style.display = "block";  
            document.getElementById("erro2").style.display = "none";
            document.getElementById("erro3").style.display = "none";
            document.getElementById("sucesso1").style.display = "none";  
            e.preventDefault();
        }else if(phone === ""){
            document.getElementById("erro2").style.display = "block";
            document.getElementById("erro1").style.display = "none";
            document.getElementById("erro3").style.display = "none";
            document.getElementById("sucesso1").style.display = "none";
            e.preventDefault();
        }else if( name === ""){
            document.getElementById("erro3").style.display = "block";
            document.getElementById("erro1").style.display = "none";
            document.getElementById("erro2").style.display = "none";
            document.getElementById("sucesso1").style.display = "none";
            e.preventDefault();
        }else{ 
            document.getElementById("sucesso1").style.display = "block";
            document.getElementById("erro3").style.display = "none";
            document.getElementById("erro1").style.display = "none";
            document.getElementById("erro2").style.display = "none";
             }
             setTimeout(function() {
        document.getElementById("erro1").style.display = "none";
        document.getElementById("erro2").style.display = "none";
        document.getElementById("erro3").style.display = "none";
        document.getElementById("sucesso1").style.display = "none";
        }, 15000);    
    });
});