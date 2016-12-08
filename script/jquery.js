$( document ).ready(function() {


    var listy = [
    "SASS",
    "Javascript",
    "CSS 3",
    "HTML 5",
    "C#",
    "SQL",
    "PHPmyadmin",
    "PHP",
    "jQuery",
    "Bootstrap",
    "UX / UI",
    "GitHub",
    "Dota 2",
    "Guitar",
    "Badminton",
    "Photoshop"
    ];
    var classList = [
    "lv1",
    "lv2",
    "lv3",
    ];

  var i = 0;
  var skillX = Math.floor((Math.random() * 90) + 10);
  var skillY = Math.floor((Math.random() * 90) + 10);

  function skillInit(loop){
    while (i < loop) {
      $.each( listy, function( s, value ) {
        var classRan = Math.floor((Math.random() * 3) + 0);
        var currClass = classList[classRan];
        $( "<div class='skills-container"+" "+ currClass+"'>"+value+" </div>" ).appendTo( "#Skills" );
      });
      i++;
    }
  }
  function skillCSS(){
    $(".skills-container").each(function() {
      var skillX = Math.floor((Math.random() * 125) + -25);
      var skillY = Math.floor((Math.random() * 125) + -35);
      $(this).css({
        position: 'absolute',
        left: skillX+'%',
        top: skillY+'%'
      })
    });
  }

  function skillParralax(multiplier) {
    $( "#Skills" ).mousemove(function( event ) {
      var pageX = event.pageX;
      var pageY = event.pageY;
      $('.lv1').css({
        transform: 'translateX('+pageX/multiplier+'px)' +" "+ 'translateY('+pageY/multiplier+'px)'
      })
      $('.lv2').css({
        transform: 'translateX('+pageX/(multiplier+2)+'px)' +" "+ 'translateY('+pageY/(multiplier+2)+'px)'
      })
      $('.lv3').css({
        transform: 'translateX('+pageX/(multiplier+4)+'px)' +" "+ 'translateY('+pageY/(multiplier+4)+'px)'
      })
    });
  }

  skillParralax(3)
  skillInit(8)
  skillCSS();


  //intro-text buildup
  var introLi = $('.intro-text > ul > li');

  introLi.each(function(i){
    $(this).css({
      top: 0,
      opacity: 1,
      'transition-delay': i/5+'s',
      'letter-spacing': 0
    });
    i++;
  })
  //intro-text buildup

  //nav
  var navLi = $('.nav-container > ul > li');
  var navHandle = $('#sideNav');
  var navLine1= $('.nav-lines-1');
  var navLine2= $('.nav-lines-2');
  var navLine3= $('.nav-lines-3');

  navHandle.on('click', function(){
    navLine1.toggleClass('active');
    navLine2.toggleClass('active');
    navLine3.toggleClass('active');

    navLi.each(function(i){
      $(this).toggleClass('active');
      $(this).css({
        'transition-delay': i/10+'s',
      });
      i++;
    })
  })
  //nav
  $('.hof-content-container').slick({
    slidesToShow: 1,
    buttons: false,
    arrows: false,
    dots: true
  });
  $('.frame').on('click', function(){
    $(this).toggleClass('clicked')
  })

});
