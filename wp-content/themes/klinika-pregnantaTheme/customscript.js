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

    
   

    var doctors = document.querySelectorAll('.doctor');
    var button = document.querySelectorAll('.doctorButton');
  
 
      doctors[0].classList.add('doctorActive');

      if(button.length > 4 ){

       
        document.querySelector("#leftColumnArrow").style = "display: block; top: 100px;";
      }

      if (window.screen.width >= 1000 ) {
       
      

      if(button.length > 4 ){

      
        document.querySelector("#leftColumnArrow").style.display = "block";
        document.querySelector("#leftColumn").style.height = "35rem";

       }

       if(button.length<2){
        document.querySelector("#leftColumn").style.height = "auto";
       }

      }

    for (var i = 0; i < button.length; i++) {    
        button[i].addEventListener('click', ((indexOfClickedElement) => {         
    
          return function() {

            if (window.screen.width >= 1000 ) {
     
            document.querySelector("#leftColumn").style.height = "auto";
            }else{
              document.querySelector("#rightColumn").style.display = "block";
            
            }

          for (var l = 0; l < doctors.length; l++) { 
            
            if(doctors[l].classList.contains("doctorActive")){
              doctors[l].classList.remove("doctorActive");
            }
        

           }


           doctors[indexOfClickedElement].classList.add('doctorActive');
          
         

        }
      })(i))
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

