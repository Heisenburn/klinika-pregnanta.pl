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
  
  
      //lekarze - dodaj button i expand if lekarze > 4 
  
      if(document.querySelectorAll(".doctor").length > 4){
  
        document.querySelector("#showDoctorsButton").style.display = "block";
  
      }
      
  
      //usługi - toggleListView
  
      const servicesCarrousel = document.querySelectorAll("#servicesCarrousel");
  
      const serviceSliderElements = document.querySelectorAll(".serviceSliderElement");
  
      const toggleListViewButton = document.querySelector("#toggleListView")
      toggleListViewButton.addEventListener("click",() =>{
  
       
        if(toggleListViewButton.textContent == "Zobacz w formie listy"){
  
  
       
          $('#servicesCarrousel').slick('unslick');
  
          servicesCarrousel[0].classList.add("listView");
    
          for(const serviceSliderElement of serviceSliderElements){
    
            serviceSliderElement.classList.add("listViewServiceSlider");
    
          }
  
          toggleListViewButton.textContent = "Włącz slider";
  
        }else{
  
          servicesCarrousel[0].scrollIntoView({ 
            behavior: 'smooth' 
          });
  
          $('#servicesCarrousel').slick({
            infinite: true,
            speed: 500,
            slidesToShow: 5,
         
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
  
          });
  
          servicesCarrousel[0].classList.remove("listView");
    
          for(const serviceSliderElement of serviceSliderElements){
    
            serviceSliderElement.classList.remove("listViewServiceSlider");
    
          }
  
          toggleListViewButton.textContent = "Zobacz w formie listy";
        }
   
  
       
   
  
       
     
  
      },false);
  
  
  
      //popup lekarz
    
  
      // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    document.querySelector("body").style.overflow = "visible";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.querySelector("body").style.overflow = "visible";
    }
  }
  
   
  //menu navbar
  
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
  
  