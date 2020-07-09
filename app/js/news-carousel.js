// (function ($) {
//     $(function () {
//       var slider = $(".news-slider").flickity({
//         imagesLoaded: true,
//         percentPosition: false,
//         prevNextButtons: false,
//         initialIndex: 3,
//         pageDots: false,
//         groupCells: 1,
//         selectedAttraction: 0.2,
//         friction: 0.8,
//         draggable: false
//       });

//       //enable clicking on cards
//       slider.on("staticClick.flickity", function (
//         event,
//         pointer,
//         cellElement,
//         cellIndex
//       ) {
//         if (typeof cellIndex == "number") {
//           slider.flickity("selectCell", cellIndex);
//         }
//       });

//       //resize the selected card (the middle one on page load + any other one when clicked); also center the carousel on page load, because, for some reason, it tends to shift to the right if .resize() and .reposition() aren't applied
//       var flkty = slider.data("flickity");
//       flkty.selectedElement.classList.add("is-custom-selected");
//       flkty.resize();
//       flkty.reposition();
//       let time = 0;
//       function reposition() {
//         flkty.reposition();
//         if (time++ < 10) {
//           requestAnimationFrame(reposition);
//         } else {
//           $(".flickity-prev-next-button").css("pointer-events", "auto");
//         }
//       }
//       requestAnimationFrame(reposition);

//       flkty.on("settle", () => {
//         $(".card").removeClass("is-custom-selected");
//         $(".flickity-prev-next-button").css("pointer-events", "none");
//         flkty.selectedElement.classList.add("is-custom-selected");

//         let time = 0;
//         function reposition() {
//           flkty.reposition();
//           if (time++ < 10) {
//             requestAnimationFrame(reposition);
//           } else {
//             $(".flickity-prev-next-button").css("pointer-events", "auto");
//           }
//         }
//         requestAnimationFrame(reposition);
//       });
//     });
//   })(jQuery);

// var itemPositions = [];
// var numberOfItems = $('#scroller .item').length;

// /* Assign each array element a CSS class based on its initial position */
// function assignPositions() {
//     for (var i = 0; i < numberOfItems; i++) {
//         if (i === 0) {
//             itemPositions[i] = 'left-hidden';
//         } else if (i === 1) {
//             itemPositions[i] = 'left';
//         } else if (i === 2) {
//             itemPositions[i] = 'middle';
//         } else if (i === 3) {
//             itemPositions[i] = 'right';
//         } else {
//             itemPositions[i] = 'right-hidden';
//         }
//     }
//     /* Add each class to the corresponding element */
//     $('#scroller .item').each(function(index) {
//         $(this).addClass(itemPositions[index]);
//     });
// }

// /* To scroll, we shift the array values by one place and reapply the classes to the images */
// function scroll(direction) {
//     if (direction === 'prev') {
//         itemPositions.push(itemPositions.shift());
//     } else if (direction === 'next') {
//         itemPositions.unshift(itemPositions.pop());
//     }
//     $('#scroller .item').removeClass('left-hidden left middle right right-hidden').each(function(index) {
//         $(this).addClass(itemPositions[index]);
//     });        
// }

// /* Do all this when the DOMs ready */
// $(document).ready(function() {

//     assignPositions();

//     /* Click behaviours */
//     $('#scroller').delegate(".left", "click", function() {
//         scroll('prev');
//     });
//     $('#scroller').delegate(".right", "click", function() {
//         scroll('next');
//     });
// });


$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function () {
  $slide = $('.active').width();
  console.log($('.active').position().left);

  if ($(this).hasClass('next')) {
    $('.my-card').removeClass('brief-desc');
    $('.card-carousel').stop(false, true).animate({ left: '-=' + $slide });
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({ left: '+=' + $slide });
  }

  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');

  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function (e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});