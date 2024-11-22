
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

// Function to calculate the number of days between two dates
function calculateDaysDifference(date1, date2) {
  const timeDiff = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

// Function to adjust the opacity based on days difference
function adjustOpacity(daysDifference) {
  let opacity = 1; // Default opacity

  if (daysDifference >= 100) {
      opacity = 0;
  } else if (daysDifference >= 50) {
      opacity = 0.5;
  } else if (daysDifference >= 10) {
      opacity = 0.9;
  }

  document.querySelectorAll('*').forEach((element) => {
      element.style.opacity = opacity;
  });
}

// Function to fetch data from the server and process the response
async function fetchDataAndAdjustOpacity() {
  try {
      const response = await fetch('http://new.thebombayforum.com/api'); // Replace with your server URL
      const data = await response.json();

      if (!data.value) {
          const receivedDate = new Date(data.date);
          const today = new Date();
          const daysDifference = calculateDaysDifference(today, receivedDate);
          adjustOpacity(daysDifference);
      }
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

// Call the function
fetchDataAndAdjustOpacity();

