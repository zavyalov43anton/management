function timer() {
    var nowDate = new Date();
    var achiveDate = new Date(2019,10,22,4,0,0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate)+1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' -   - - : - - : - - ';
        return undefined;
    }
    var seconds = Math.floor((result/1000)%60);
    var minutes = Math.floor((result/1000/60)%60);
    var hours = Math.floor((result/1000/60/60)%24);
    var days = Math.floor(result/1000/60/60/24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    //дни в текст
    var elmnt = document.getElementById('days');
    elmnt.innerHTML = days;

    //склонение числительных для дней
    var text_forms4 = ['день', 'дня', 'дней'];
    var days_text = document.getElementById('days__text');
    var n6 = Math.abs(days) % 100;
    var n7 = n6 % 10;
    if (n6> 10 && n6 < 20) { days_text.innerHTML = text_forms4[2];}
    else if (n7 > 1 && n7 < 5) { days_text.innerHTML = text_forms4[1]; }
    else if (n7 == 1) { days_text.innerHTML = text_forms4[0];}
    else {days_text.innerHTML = text_forms4[2]}

    //часы в текст
    var elmnt__second = document.getElementById('hours');
    elmnt__second.innerHTML = hours;

    //склонение числительных для часов
    var text_forms3 = ['час', 'часа', 'часов'];
    var hours_text = document.getElementById('hours__text');
    var n4 = Math.abs(hours) % 100;
    var n5 = n4 % 10;
    if (n4> 10 && n4 < 20) { hours_text.innerHTML = text_forms3[2];}
    else if (n5 > 1 && n5 < 5) { hours_text.innerHTML = text_forms3[1]; }
    else if (n5 == 1) { hours_text.innerHTML = text_forms3[0];}
    else {hours_text.innerHTML = text_forms3[2]}

    //Минуты в текст
    var elmnt__third = document.getElementById('minutes');
    elmnt__third.innerHTML = minutes;

    //склонение числительных для минут
    var text_forms = ['минута', 'минуты', 'минут'];
    var minutes_text = document.getElementById('minutes__text');
    var n = Math.abs(minutes) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { minutes_text.innerHTML = text_forms[2];}
    else if (n1 > 1 && n1 < 5) { minutes_text.innerHTML = text_forms[1]; }
    else if (n1 == 1) { minutes_text.innerHTML = text_forms[0];}
    else {minutes_text.innerHTML = text_forms[2]}

    //Секунды в текст
    var elmnt__fourth = document.getElementById('seconds');
    elmnt__fourth.innerHTML = seconds;

    //склонение числительных для секунд
    var text_forms2 = ['секунда', 'секунды', 'секунд'];
    var seconds_text = document.getElementById('second__text');
    var n2 = Math.abs(seconds) % 100;
    var n3 = n2 % 10;
    if (n2 > 10 && n2 < 20) { seconds_text.innerHTML = text_forms2[2];}
    else if (n2 > 1 && n3 < 5) { seconds_text.innerHTML = text_forms2[1]; }
    else if (n3 == 1) { seconds_text.innerHTML = text_forms2[0];}
    else {seconds_text.innerHTML = text_forms2[2];}

    setTimeout(timer, 1000);
}

window.onload = function() {
    timer();
}

function replace__main(id) {
    var div = document.getElementById(id).innerHTML;
    if (div === '+') {
        document.getElementById(id).innerHTML = "-";
    } else {
        document.getElementById(id).innerHTML = "+";
    }
}


new fullpage('#fullpage', {
    //Навигация
    //menu: '#menu',
    //lockAnchors: false,
    anchors:['top__section','target','ForWhat', 'after', 'ideal','schedule','Prices','About__Vladimir','Advantages','end'],
    navigation: true,
    navigationPosition: 'right',
    //navigationTooltips: ['Главная', 'Цель','Вам знакомо?','После','','','',''],
    //showActiveTooltip: false,
    //slidesNavigation: false,
    //slidesNavPosition: 'bottom',

    //Скроллинг
    css3: true,
    scrollingSpeed: 1000,
    //autoScrolling: false,
    //fitToSection: true,
    //fitToSectionDelay: 1000,
    //scrollBar: false,
    //easing: 'easeInOutCubic',
    //easingcss3: 'ease',
    //loopBottom: false,
    //loopTop: false,
    /*loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,*/
    normalScrollElements: '.scrollable-content',
    //sectionSelector: '.page',
    scrollOverflow: true,
    /*scrollOverflowReset: false,
    scrollOverflowOptions: null,*/
    touchSensitivity: 50,
    /*bigSectionsDestination: null,

    //Доступ
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Дизайн
    controlArrows: true,
    verticalCentered: true,
    sectionsColor : ['#ccc', '#fff'],
    paddingTop: '3em',*/
    //paddingBottom: '50px',
    //fixedElements: '#header, .footer',*/
    responsiveWidth: 992,
    /*responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
    cards: false,
    cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

    //Настроить селекторы
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //события
    onLeave: function(origin, destination, direction){},
    afterLoad: function(origin, destination, direction){},
    afterRender: function(){},
    afterResize: function(width, height){},
    afterReBuild: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(section, origin, destination, direction){},
    onSlideLeave: function(section, origin, destination, direction){}*/
});
