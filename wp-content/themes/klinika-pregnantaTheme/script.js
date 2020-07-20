$(document).ready(function(){
  $('#servicesCarrousel').slick({
  
      infinite: true,
      speed: 500,
      slidesToShow: 5,
   
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
   
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 3,
           
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            
          }
        }
      
      ]

    
    });


     
    $('#doctorsContainer').slick({
      variableWidth: true,
     
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,

      // responsive: [
         
      //   {
      //     breakpoint: 1000,
      //     settings: {
      //       slidesToShow: 1,
      //       variableWidth: false,
            
      //     }
      //   }
      
      // ]


    });
    


    var coll = document.getElementsByClassName("collapsible");
    var i;

    
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

    $('.menu-toggle').click(function() {

      $('ul').toggleClass('opening');
      $(this).toggleClass('open');
    
      $('#mainHeader').toggleClass('fullHeightHeader');
      $('#znanyLekarz-main-header').toggleClass('displayNone');
      $('.site-nav').toggleClass('displayBlock');
      $('#menuOverlaySvg').toggleClass('displayBlock');
      $('#social-icons-menu-overlay').toggleClass('displayFlex');
      $('.site-nav').toggleClass('site-nav-overlayMenu');
    
      $('body').toggleClass('overflowHidden');
      $('.menu-toggle').toggleClass('positionAbsolute');
      
      $('nav ul li').on( "click", function() {
       $('.hamburger').click();
      });
  

      
    })

    
    
    
});

