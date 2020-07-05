$(document).ready(function(){
    $('#servicesCarrousel').slick({
    
        infinite: true,
        speed: 300,
        slidesToShow: 5,
     
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
     
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        
      
      });
 

      var coll = document.getElementsByClassName("collapsible");
      var i;

       console.log(coll)
      
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
      
  });

