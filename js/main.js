$(window).load(function() {
    //$("#loading").fadeOut(500);

    var enterTL = new TimelineMax();

    enterTL.play();

    enterTL
        .to($('#loading'), 0.5, {
            autoAlpha: 0,
            ease: Power4.easeIn
        })
        .from($('.logo'), 1.5, {
            yPercent: '-20%',
            autoAlpha: 0
        })
        .from($('.people'), 1.5, {
            autoAlpha: 0
        }, '-=0.5')
        .from($('#home h2#undr'), 1, {
            yPercent: '-10%',
            autoAlpha: 0
        }, '-=1.3')
        .from($('#scrollToBottom'), 0.5, {
            autoAlpha: 0
        })
        /**/
        .from($('#scrollToBottom'), 2, {
            yPercent: '-20%',
            yoyo: true,
            repeat: -1
        })
})


// ARRAYS
/*var arr = [0, 1166, 2363, 4841, 7519, 10822, 12477, 13556,  16604, 18272, 20690, 21916, 22516, 24250];
var arrTm = [3, 3, 3, 8, 9, 5, 3, 3, 9, 3, 5, 4, 4, 3];
*/

var arr = [0, 1166, 2363, 4841, 7519, 10822, 12477, 18272, 20690, 21916, 22516, 24250];
var arrTm = [3, 3, 3, 8, 9, 5, 3, 15, 5, 4, 4, 3];
var $i = 0;
var $ht = 0;
var screen = 0;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        //alert(screen);
        screen--;
        // alert('up='+screen);
    } else if (e.keyCode == '40') {
        // down arrow
        //alert(screen);
        screen++;
        // alert('down='+screen);
    }
    $(window).off('scroll', chkScroll);
    TweenMax.to($('#scrollToBottom'), 0.5, {
        autoAlpha: 0
    });
    TweenMax.to(window, arrTm[screen], {
        scrollTo: {
            y: arr[screen]
        },
        ease: Sine.easeOut,
        onComplete: function() {
            $(window).on('scroll', chkScroll);
            TweenMax.to($('#scrollToBottom'), 0.5, {
                autoAlpha: 0.5
            })
        }
    });
    //console.log("screen="+screen);
}



$('.dots li').click(function() {
    var tg = $(this).data("target");

    $('.active').removeClass('active');
    $(this).addClass('active');
    console.log(arr[tg], arrTm[tg]);

    TweenMax.to(window, arrTm[tg], {
        scrollTo: {
            y: arr[tg]
        },
        ease: Sine.easeOut,
        onComplete: function() {
            $i++;
            console.log('end');
            TweenMax.to($('#scrollToBottom'), 0.5, {
                autoAlpha: 0.75
            })
        }
    });
});
$('#scrollToBottom').bind("click", function() {

    console.log(arr[$i], arrTm[$i]);
    TweenMax.to($('#scrollToBottom'), 0.5, {
        autoAlpha: 0
    })
    var $ht = $(document).height();
    TweenMax.to(window, 100, {
        scrollTo: {
            y: $ht
        },
        ease: Power0.easeIn
    });
    // $('html, body').animate({ scrollTop: $(document).height() }, 25200);
    return false;
});


$(window).on('scroll', chkScroll);

function chkScroll(e) {

    var val = $(window).scrollTop();
    /**/
    console.log(val);
    if (val < 580) {
        $('.active').removeClass('active');
        $("#nav1").addClass('active');
        screen = 0;
    } else
    if (val < 1166) {
        $('.active').removeClass('active');
        $("#nav2").addClass('active');
        screen = 1;
    } else
    if (val < 2363) {
        $('.active').removeClass('active');
        $("#nav3").addClass('active');
        screen = 2;
    } else
    if (val < 4841) {
        $('.active').removeClass('active');
        $("#nav4").addClass('active');
        screen = 3;
    } else
    if (val < 7519) {
        $('.active').removeClass('active');
        $("#nav5").addClass('active');
        screen = 4;
    } else
    if (val < 10822) {
        $('.active').removeClass('active');
        $("#nav6").addClass('active');
        screen = 5;
    } else
    if (val < 12477) {
        $('.active').removeClass('active');
        $("#nav7").addClass('active');
        screen = 6;
    } else
    if (val < 18272) {
        $('.active').removeClass('active');
        $("#nav8").addClass('active');
        screen = 7;
    } else
    if (val < 20690) {
        $('.active').removeClass('active');
        $("#nav9").addClass('active');
        screen = 8;
    } else
    if (val < 21916) {
        $('.active').removeClass('active');
        $("#nav10").addClass('active');
        screen = 9;
    } else
    if (val < 22516) {
        $('.active').removeClass('active');
        $("#nav11").addClass('active');
        screen = 10;
    } else
    if (val < 24250) {
        $('.active').removeClass('active');
        $("#nav12").addClass('active');
        screen = 11;
        $('#scrollToBottom').hide();
    }
    console.log("Scroll screen=" + screen);
}



if (navigator.userAgent.search("Chrome") >= 0) {
    //alert("CHROME");	
}
document.onkeydown = checkKey;
var $window;
var isTweening;

$(function() {

    $window = $(window);
    isTweening = false;

    document.onmousewheel = function() {
        customScroll();
    }
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', customScroll, false);
    }

    function customScroll(event) {

        var delta = 0;

        if (!event) {
            event = window.event;
        }

        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
        } else if (event.detail) {
            delta = -event.detail / 3;
        }

        if (delta) {

            //console.log(isTweening);

            //if(!isTweening){

            //isTweening = true;

            var scrollTop = $window.scrollTop();
            var finScroll = scrollTop - parseInt(delta * 100) * 3;

            //console.log(finScroll);

            TweenMax.to($window, 0.7, {
                scrollTo: {
                    y: finScroll,
                    autoKill: true
                },
                ease: Sine.easeOut,
                autoKill: true,
                overwrite: 7,
                onComplete: function() {
                    //console.log(isTweening);
                    //isTweening = false; 
                }
            });

            //}
        }

        if (event.preventDefault) {
            event.preventDefault();
        }

        event.returnValue = false;

    }

});



/*Smooth scroll end*/

// init
var ctrl = new ScrollMagic.Controller(
    /*{
    	    globalSceneOptions: {
    	        triggerHook: 'onLeave'
    	    }
    	}*/
);


// logo-container back to stylesheet position
new ScrollMagic.Scene({
        duration: '185%',
    })
    .setPin("#home")
    .addTo(ctrl)
//.addIndicators({name: "scene1"});

var intro = new TimelineMax();
intro
    .to($('.logo-container'), 1.5, {
        top: '5%',
        left: '98%',
        scale: 0.5
    })
    .to($('#home h2#undr'), 1.5, {
        autoAlpha: 0,
        left: '-8%',
        scale: 0.6
    }, '0.5')

new ScrollMagic.Scene({
        duration: '50%',
        offset: '10%'
    })
    .setTween(intro)
    .addTo(ctrl)
//.addIndicators({name: 'Intro'});

var who = new TimelineMax();
who
    .to($('#scrollToBottom'), 0.5, {
        autoAlpha: 0
    })
    .to($('.group1'), 2, {
        autoAlpha: 0,
        left: '-150%'
    })
    .to($('.group3'), 2, {
        autoAlpha: 0,
        left: '150%'
    }, '=-2')
    .to($('.family'), 1, {
        scale: 1.8,
        top: '-20%'
    }, '=-2')
    .from($('.who'), 1, {
        scale: 0
    }, '=-0.9')
    .to($('.who'), 1, {
        autoAlpha: 1
    }, '=-1')
    .to($('#home'), 2, {
        backgroundColor: '#614c73'
    }, '=-1')

new ScrollMagic.Scene({
        duration: '100%',
        offset: '330%'
    })
    .setTween(who)
    .addTo(ctrl)
//.addIndicators({name: 'who'});


var bagFl = new TimelineMax();
bagFl
    .to($('.bag'), 0.01, {
        autoAlpha: 0
    })
    .to($('.bag-fxd'), 0.01, {
        autoAlpha: 1
    }, '0')
    .to($('.bag-fxd'), 10, {
        scale: 2.5,
        left: '44%',
        top: '79%',
        force3D: true
    })
    .from($('#gift'), 5, {
        top: '-160%',
        left: '160%'
    }, '-=4')
    .from($('#dress'), 5, {
        left: '-5%'
    }, "-=8")
    .from($('#microwave'), 2, {
        top: '110%'
    }, '-=2')
    .from($('#iron'), 3, {
        left: '120%'
    }, '-=2')
    .from($('#kettle'), 3, {
        left: '120%',
        top: '-10%'
    })
    .from($('#shoe'), 2, {
        left: '-60%'
    }, '-=1')
    .from($('#basket'), 5, {
        left: '-26%'
    }, '-=2')
    .from($('#camera'), 5, {
        left: '-15%',
        top: '-15%'
    }, '-=4')
    .from($('#want h2'), 3, {
        scale: 0
    })
    .to($('#want h2'), 3, {
        autoAlpha: 1
    }, '-=1')
    .staggerFrom("#want strong", 2, {
        yPercent: '10%',
        opacity: 0,
        delay: 0.5,
        ease: Power3.easeIn,
        force3D: true
    }, 1);

new ScrollMagic.Scene({
        triggerElement: '#want',
        triggerHook: 'onEnter',
        duration: '100%'
    })
    .setTween(bagFl)
    //.addIndicators({name: "bagFl"})
    .addTo(ctrl);

new ScrollMagic.Scene({
        triggerElement: '#want',
        triggerHook: 'onLeave',
        duration: '130%'
    })
    .setPin("#want")
    //.addIndicators({name: "StickWant"})
    .addTo(ctrl);


var basketFl = new TimelineMax();
basketFl
    .to($('#basket'), 0.01, {
        autoAlpha: 0
    })
    .to($('.basket-fxd'), 0.01, {
        autoAlpha: 1
    }, '0')
    .staggerTo("#want strong", 1, {
        yPercent: '10%',
        opacity: 0,
        delay: -0.3,
        force3D: true
    }, '-=5')
    .to($('.basket-fxd'), 6, {
        scale: 0.75,
        left: '48%',
        top: '-9%',
        force3D: true
    }, '-=1')
    .to($('#gift'), 5, {
        top: '-10%',
        left: '126%'
    }, '-=11')
    .to($('#dress'), 2, {
        left: '-5%'
    }, '-=11')
    .to($('#microwave'), 2, {
        top: '110%'
    }, '-=11')
    .to($('#iron'), 3, {
        left: '120%'
    }, '-=11')
    .to($('#kettle'), 3, {
        left: '120%',
        top: '-10%'
    }, '-=8')
    .to($('#shoe'), 2, {
        left: '-60%'
    }, '-=8')
    .to($('#camera'), 5, {
        left: '-15%',
        top: '-15%'
    }, '-=9')
    .from($('.bubble'), 5, {
        transformOrigin: 'left bottom',
        y: '-10%',
        scale: 0,
        force3D: true
    }, '-=5')
    .to($('.basket-fxd'), 0.01, {
        autoAlpha: 0
    }, '-=1')
    .to($('#basket2'), 0.01, {
        autoAlpha: 1
    }, '-=1')
    .from($('.bubble #basket2'), 5, {
        y: '-121%',
        x: '-173%',
        scale: 1.1,
        force3D: true
    }, '-=1.01')
    .from($('#when h3#month'), 2, {
        yPercent: '-10%',
        autoAlpha: 0
    }, '+=4')
    .to($('#basket2'), 1, {
        yPercent: '-10%',
        autoAlpha: 0
    }, '+=4')
    .to($('.bag-fxd'), 0.2, {
        autoAlpha: 0
    })
    .to($('#popcorn'), 2, {
        yPercent: '30%',
        autoAlpha: 1
    })
    .to($('#when h3#month'), 2, {
        yPercent: '10%',
        autoAlpha: 0
    })
    .from($('#when h3#week'), 2, {
        yPercent: '-10%',
        autoAlpha: 0
    }, '-=1')
    .to($('#popcorn'), 2, {
        autoAlpha: 0
    }, '+=5')
    .to($('.man'), 2, {
        autoAlpha: 1
    }, '-=2')
    .to($('#bubble-bg'), 3, {
        autoAlpha: 0,
        transformOrigin: 'left bottom',
        y: '-10%',
        scale: 0,
        force3D: true
    }, '-=2')
    .to($('.cal, #when h3#week'), 4, {
        x: '-240%'
    }, '-=1')
    .to($('#when'), 3, {
        backgroundColor: '#794ef2'
    })
    .to($('#when h2#when-title'), 1, {
        autoAlpha: 0
    }, '-=2')
    .from($('#when h2#why-title'), 3, {
        scale: 0
    }, '-=2')
    .to($('#when h2#why-title'), 3, {
        autoAlpha: 1
    }, '-=1')
    .from($('#when h3#movies'), 8, {
        xPercent: '10%',
        autoAlpha: 0
    }, '-=1')
    .to($('.man'), 5, {
        ease: Power4.easeInOut,
        scale: 0.8,
        xPercent: '-70%',
        yPercent: '-10%'
    }, '-=6')
    .to($('.man'), 2, {
        ease: Power4.easeInOut,
        left: '-20%'
    }, '+=9')
    .to($('#movies'), 2, {
        autoAlpha: 0,
        xPercent: '-5%'
    }, '-=2')
    .from($('#pant'), 0.5, {
        autoAlpha: 0,
        yPercent: '15%'
    }, '-=0.5')
    .from($('#tshirt'), 3, {
        ease: Power4.easeOut,
        scale: 0.8,
        yPercent: '-15%',
        xPercent: '5%',
        autoAlpha: 0,
        transformOrigin: 'right bottom'
    }, '-=0.5')
    .from($('#clothes'), 2, {
        autoAlpha: 0,
        xPercent: '10%'
    }, '-=3')
    .from($('#dress2'), 2, {
        autoAlpha: 0,
        yPercent: '-5%'
    }, '-=0.5')
    .from($('#shoeinf'), 2, {
        autoAlpha: 0,
        left: '-5%'
    }, '-=0.5')
    .from($('#shoe2'), 2, {
        autoAlpha: 0,
        xPercent: '115%'
    }, '-=0.5')
    .to($('#shoe2,#shoeinf, #dress2, #tshirt, #pant'), 0.01, {
        autoAlpha: 0
    }, '+=5')
    .from($('#shoe2Fxd,#shoeinfFxd, #dress2Fxd, #tshirtFxd, #pantFxd'), 0.01, {
        autoAlpha: 0
    }, '-=0.01')

new ScrollMagic.Scene({
        triggerElement: '#when',
        triggerHook: 'onEnter',
        duration: '800%'
    })
    .setTween(basketFl)
    //.addIndicators({name: "basketFl"})
    .addTo(ctrl);


new ScrollMagic.Scene({
        triggerElement: '#when',
        triggerHook: 'onLeave',
        duration: '700%'
    })
    .setPin("#when")
    //.addIndicators({name: "StickWhen"})
    .addTo(ctrl);



var partnerTl = new TimelineMax();
partnerTl
    .to($('#pantFxd'), 5, {
        transformOrigin: 'center center',
        top: '15%',
        left: '55%',
        scale: 0.2
    })
    .to($('#dress2Fxd'), 5, {
        transformOrigin: 'center center',
        top: '8%',
        left: '52%',
        scale: 0.2
    }, '-=5')
    .to($('#shoe2Fxd,#shoeinfFxd'), 5, {
        transformOrigin: 'center center',
        top: '35%',
        left: '55%',
        scale: 0.2
    }, '-=5')
    .to($('#tshirtFxd'), 5, {
        transformOrigin: 'center center',
        top: '20%',
        left: '50%',
        scale: 0.2
    }, '-=5')
    .to($('#shoe2Fxd,#shoeinfFxd, #dress2Fxd, #tshirtFxd, #pantFxd'), 0.5, {
        autoAlpha: 0
    })
    .from($('#lifestyle'), 4, {
        transformOrigin: 'center bottom',
        scale: 0,
        ease: Back.easeOut
    }, '-=1')
    .from($('#where'), 3, {
        scale: 0,
        autoAlpha: 0
    })
    .from($('#lifestyleTxt'), 1, {
        transformOrigin: 'right center',
        scale: 0,
        ease: Back.easeOut
    }, '+=1')
    .from($('#enrich'), 1, {
        transformOrigin: 'center bottom',
        scale: 0,
        ease: Back.easeOut
    })
    .from($('#enrichTxt'), 1, {
        transformOrigin: 'right center',
        scale: 0,
        ease: Back.easeOut
    }, '+=1')
    .from($('#kalyan'), 1, {
        transformOrigin: 'center bottom',
        scale: 0,
        ease: Back.easeOut
    })
    .from($('#kalyanTxt'), 1, {
        transformOrigin: 'right center',
        scale: 0,
        ease: Back.easeOut
    }, '+=1')
    .from($('#health'), 1, {
        transformOrigin: 'center bottom',
        scale: 0,
        ease: Back.easeOut
    })
    .from($('#healthTxt'), 1, {
        transformOrigin: 'left center',
        scale: 0,
        ease: Back.easeOut
    }, '+=1')
    .from($('#regal'), 1, {
        transformOrigin: 'center bottom',
        scale: 0,
        ease: Back.easeOut
    })
    .from($('#regalTxt'), 1, {
        transformOrigin: 'left center',
        scale: 0,
        ease: Back.easeOut
    }, '+=1')
    .staggerFrom("#partner > img", 1, {
        transformOrigin: 'center bottom',
        scale: 0,
        ease: Back.easeOut,
        delay: 1
    }, 0.5);

new ScrollMagic.Scene({
        triggerElement: '#partner',
        triggerHook: 'onEnter',
        offset: '100%',
        duration: '400%'
    })
    .setTween(partnerTl)
    //.addIndicators({name: "partner"})
    .addTo(ctrl);

new ScrollMagic.Scene({
        triggerElement: '#partner',
        triggerHook: 'onLeave',
        duration: '400%'
    })
    .setPin("#partner")
    //.addIndicators({name: "StickPartner"})
    .addTo(ctrl);

var bagTL = new TimelineMax();
bagTL
    .to($('#partner img, .descr'), 1, {
        transformOrigin: 'bottom center',
        autoAlpha: 0,
        scale: 0
    })
    .to($('#lfBag'), 0.1, {
        autoAlpha: 1
    }, 0)
    .to($('#lifestyleTxt'), 0.2, {
        transformOrigin: 'right center',
        autoAlpha: 0,
        scaleX: 0
    })
    .to($('#lfBag'), 1, {
        top: '52%',
        left: '47%'
    })
    .to($('#lfBag'), 0.01, {
        autoAlpha: 0
    }, '-=0.1')
    .to($('#lfBagAbs'), 0.01, {
        autoAlpha: 1
    }, '-=0.1')
    .from($('#lfBagAbs'), 5, {
        top: '-78%',
        left: '170%'
    }, '-=1')
    .staggerFrom($('.cash img'), 1, {
        autoAlpha: 0.25,
        top: '-480%',
        delay: 1
    }, 1)
    .from($('#cc'), 1, {
        rotation: 360,
        left: '520%'
    }, '-=1')

new ScrollMagic.Scene({
        triggerElement: '#spend',
        triggerHook: 'onEnter',
        duration: '250%'
    })
    .setTween(bagTL)
    //.addIndicators({name: "spend"})
    .addTo(ctrl);

new ScrollMagic.Scene({
        triggerElement: '#spend',
        triggerHook: 'onLeave',
        duration: '200%'
    })
    .setPin("#spend")
    //.addIndicators({name: "StickSpend"})
    .addTo(ctrl);

var bankTL = new TimelineMax();
bankTL
    .to($('#cc'), 0.01, {
        autoAlpha: 0
    })
    .from($('#ccFxd'), 0.01, {
        autoAlpha: 0
    }, '-=0.01')
    .to($('#ccFxd'), 1, {
        rotation: -270,
        left: '35%',
        top: '75%'
    })
    .to($('#ccFxd'), 0.01, {
        autoAlpha: 0
    }, '-=0.1')
    .from($('#bank article > img'), 3, {
        autoAlpha: 0,
        yPercent: '-80%',
        ease: Power4.easeOut
    }, '-=0.5')
    .from($('#bank h4#coz'), 2, {
        scale: '0',
        ease: Elastic.easeOut
    }, '-=2')
    .to($('#bank article > img'), 1, {
        autoAlpha: '0',
        yPercent: '-2%'
    }, '+=4')
    .from($('#data'), 3, {
        autoAlpha: 0,
        yPercent: '-20%'
    }, '-=1')
    .to($('#bank h4#coz'), 0.5, {
        autoAlpha: '0'
    })
    .from($('#bank h4#trans'), 1, {
        autoAlpha: '0',
        yPercent: '-2%'
    }, '-=0.25')
    .from($('#bank #machine'), 2, {
        autoAlpha: '0',
        top: '50%'
    })
    .to($('#data'), 3, {
        css: {
            left: '45%',
            top: '65%',
            height: "0%",
            width: "5%"
        }
    }, '-=1.5')
    .to($('#pcidss'), 0.5, {
        autoAlpha: '0'
    }, '-=2')
    //.to($('#bank #machine'),1, {y:'-34%'}, '-=1')	
    .to($('#bank #mask'), 1, {
        autoAlpha: 0
    })
    .to($('#bank #machine'), 3, {
        left: '50%',
        top: '42%',
        yPercent: '-50%',
        xPercent: '-50%',
        scale: 0.6
    }, '-=1')
    .to($('#bank h4#trans'), 1, {
        autoAlpha: '0',
        yPercent: '-2%'
    }, '-=1')
    .from($('.head'), 3, {
        autoAlpha: 0,
        scale: 0.8,
        yPercent: '-50%'
    })
    .from($('.brain'), 3, {
        autoAlpha: 0
    })
    .from($('.txt'), 1, {
        autoAlpha: 0
    })
    .to($('.head'), 3, {
        scale: 5,
        left: '45%'
    }, '+=5')
    .from($('.wish'), 0.5, {
        autoAlpha: 0
    }, '-=3')
    .from($('.magnify'), 3, {
        transformOrigin: 'right bottom',
        autoAlpha: 0,
        rotation: 40
    }, '-=3')
    .from($('#bagTh'), 1, {
        transformOrigin: 'center center',
        scale: 0.5,
    }, '-=2')
    .to($('#bank #machine'), 3, {
        left: '-25%',
        scale: 0.2,
        autoAlpha: 0
    }, '-=3')
    .to($('.txt'), 1, {
        autoAlpha: 0,
        yPercent: '10%'
    }, '+=5')
    .from($('#predict'), 1, {
        autoAlpha: 0,
        yPercent: '2%'
    }, '-=1')



var brainTL = new TimelineMax();
brainTL.to($('#brain'), 2, {
    alpha: '0.5',
    yoyo: true,
    repeat: -1
})
var pciTL = new TimelineMax();
pciTL.to($('#pcidss img'), 1, {
    transformOrigin: 'center center',
    scale: '0.9',
    yoyo: true,
    repeat: -1,
    force3D: true
})


new ScrollMagic.Scene({
        triggerElement: '#bank',
        triggerHook: 'onEnter',
        offset: '200%',
        duration: '800%'
    })
    .setTween(bankTL)
    //.addIndicators({name: "bank"})
    .addTo(ctrl);

new ScrollMagic.Scene({
        triggerElement: '#bank',
        triggerHook: 'onLeave',
        duration: '800%'
    })
    .setPin("#bank")
    //.addIndicators({name: "Stickbank"})
    .addTo(ctrl);


var bagTL2 = new TimelineMax();
bagTL2
    .to($('.bag-fxd'), 0.01, {
        scale: 0.85,
        left: '58%',
        top: '58%'
    }, 0)
    .to($('#bagTh'), 0.01, {
        autoAlpha: 0
    })
    .to($('.bag-fxd'), 0.01, {
        autoAlpha: 1
    }, '-=0.01')
    .to($('.magnify'), 4, {
        transformOrigin: 'right bottom',
        x: '180%',
        y: '50%',
        rotation: 80
    }, '-=0.1')
    .to($('.bag-fxd'), 5, {
        scale: 0.9,
        left: '75%',
        top: '65%'
    }, '-=3')
    .from($('#target h3'), 3, {
        alpha: 0
    }, '-=6')
    .from($('#dart'), 3, {
        x: '300%',
        y: '-350%'
    }, '-=3')
    .from($('#dart-shadow'), 3, {
        x: '300%',
        y: '-250%'
    }, '-=5')
    .from($('#bag-holder'), 3, {
        xPercent: '-50%',
        yPercent: '-50%',
        left: '77%',
        top: '80%',
        scale: 0
    }, '-=3')
    .to($('.bag-fxd'), 0.01, {
        alpha: 0
    }, '-=1')
    .from($('#bag-holder #bagTh'), 0.01, {
        alpha: 0
    }, '-=1')
    .from($('#bag-holder #bagTh'), 1, {
        top: '-50%',
        left: '20%',
        scale: 1.5
    }, '-=1')
    .staggerFrom($('.offer'), 1, {
        ease: Circ.easeOut,
        left: '50%',
        top: '95%',
        scale: 0
    }, 1)

new ScrollMagic.Scene({
        triggerElement: '#target',
        triggerHook: 'onEnter',
        duration: '300%'
    })
    .setTween(bagTL2)
    //.addIndicators({name: "target"})
    .addTo(ctrl);


new ScrollMagic.Scene({
        triggerElement: '#target',
        triggerHook: 'onLeave',
        duration: '290%'
    })
    .setPin("#target")
    //.addIndicators({name: "stickTarget"})
    .addTo(ctrl);


var custTL = new TimelineMax();
custTL
    .to($('#bag-holder #bagTh'), 0.5, {
        left: 0,
        top: '100%'
    })
    .to($('.bag-fxd'), 0.01, {
        left: '74%',
        top: '74.5%',
        scale: 0.7
    }, '-=0.1')
    .to($('#bag-holder #bagTh'), 0.01, {
        alpha: 0
    }, '-=0.1')
    .to($('.bag-fxd'), 0.01, {
        alpha: 1
    }, '-=0.1')
    .to($('#customer .family'), 0.1, {
        autoAlpha: 1,
        scale: 1,
        left: '48%',
        top: 0
    })
    .to($('.bag-fxd'), 0.2, {
        left: '70%',
        top: '80%',
        scale: 0.7
    })
    .to($('.bag-fxd'), 0.01, {
        autoAlpha: 0
    })
    .to($('#customer .bag'), 0.01, {
        autoAlpha: 1
    }, '-=0.01')
    .from($('#customer .bag'), 5, {
        top: '-100%',
        left: '160%'
    })
    .to($('#customer .group3'), 0.5, {
        autoAlpha: 1,
        scale: 1,
        left: '54.5%'
    }, '-=1.2')
    .to($('#customer .group1'), 0.5, {
        autoAlpha: 1,
        scale: 1,
        left: '28%'
    }, '-=1.2')
    .from($('#customer h2#custWhich, #customer h3#custHappy'), 1, {
        autoAlpha: 0
    }, '-=0.5')
    .from($('#customer .statistic'), 1, {
        autoAlpha: 0
    }, '+=2')
    .to($('#customer #family, #customer .group1,#customer .group3,#customer .bag'), 0.5, {
        autoAlpha: '0'
    }, '-=1')
    .from($('#customer .lady'), 0.1, {
        autoAlpha: '0'
    }, '-=1')
    .to($('#customer .statistic'), 1, {
        scale: 0.8
    })
    .to($('#customer h2#custHappy, #customer h3#custWhich'), 0.5, {
        autoAlpha: 0
    }, '-=1')
    .from($('#customer h2#clientHappy, #customer h3#clientWhich'), 0.5, {
        autoAlpha: 0
    }, '-=1')
    .to($('#customer .lady'), 1, {
        scale: 0.6,
        y: '20%',
        x: '42%'
    }, '-=1')
    .from($('#customer .exec'), 0.5, {
        left: '-20%'
    }, '-=0.5')
    .from($('#customer .exec1'), 0.5, {
        left: '100%'
    }, '-=0.5')
    .to($('#customer .bag'), 0.5, {
        autoAlpha: 0
    }, '-=1.5')


new ScrollMagic.Scene({
        triggerElement: '#customer',
        triggerHook: 'onEnter',
        duration: '200%'
    })
    .setTween(custTL)
    //.addIndicators({name: "customer"})
    .addTo(ctrl);


new ScrollMagic.Scene({
        triggerElement: '#customer',
        triggerHook: 'onLeave',
        duration: '190%'
    })
    .setPin("#customer")
    //.addIndicators({name: "stickCustomer"})
    .addTo(ctrl);

var contentTL = new TimelineMax();
contentTL
    .to($('#customer .lady'), 0.25, {
        autoAlpha: 0,
        scale: 0.8
    })
    .from($('#customer .thought'), 0.25, {
        autoAlpha: 0
    }, '-=0.25')
    .to($('#customer .thought'), 0.01, {
        autoAlpha: 0
    }, '+=0.25')
    .from($('#thotFxd'), 0.01, {
        autoAlpha: 0
    }, '-=0.01')
    .to($('#thotFxd'), 1, {
        scale: 0.75,
        top: '30%',
        force3D: true
    })
    .to($('#thotFxd'), 0.01, {
        autoAlpha: 0
    }, '-=0.1')
    .from($('#thot'), 0.01, {
        autoAlpha: 0
    }, '-=0.1')
    .from($('#thot'), 2, {
        top: '-150%',
        left: '-60%',
        scale: 1.7
    }, '-=0.1')
    .from($('#awards'), 0.2, {
        yPercent: '-10%',
        autoAlpha: 0
    })
    .from($('#contact_us, #docs'), 0.5, {
        left: '-1%',
        autoAlpha: 0
    }, '-=0.2')
    .to($('.logo-container'), 0.1, {
        autoAlpha: 0
    }, '-=0.5')
    .from($('#leaders'), 0.2, {
        yPercent: '-5%',
        autoAlpha: 0
    }, '-=0.5')
    .from($('#max-board'), 0.2, {
        scale: 0.9,
        autoAlpha: 0
    }, '-=0.5')
    .from($('#work-img'), 0.25, {
        xPercent: '10%',
        autoAlpha: 0
    }, '-=1')
    .from($('#popThought'), 0.25, {
        scale: '0',
        transformOrigin: 'left bottom',
        autoAlpha: 0
    }, '-=0.8')
    .from($('.furniture h4, #docs a'), 0.5, {
        ease: Circ.easeOut,
        yPercent: '-10%',
        autoAlpha: 0
    })
    .from($('.logo2'), 1, {
        ease: Circ.easeOut,
        yPercent: '-10%',
        scale: 0.5,
        autoAlpha: 0
    })


new ScrollMagic.Scene({
        triggerElement: '#content',
        triggerHook: 'onEnter',
        duration: '250%'
    })
    .setTween(contentTL)
    //.addIndicators({name: "content"})
    .addTo(ctrl);

new ScrollMagic.Scene({
        triggerElement: '#content',
        triggerHook: 'onLeave',
        duration: '130%'
    })
    .setPin("#content")
    //.addIndicators({name: "stickcontent"})
    .addTo(ctrl);

/**************************************************************************************/
var $obj = $(".modal"),
    $overlay = $(".modal-overlay"),
    $frm = $(window).width() + $obj.width();

$("#merchant-info, #merchant-infoTitle, #contactUs, #awardz, #leadershipTeam, #leadershipTitle, #awardzTitle, #director,#program-info, #program-infoTitle, #work-info, #work-infoTitle, #about-info, #about-infoTitle").hide();

function openModal() {
    /*$overlay.css({
      display:"block"
    })*/
    $window = $('.modal');
    isTweening = false;

    $('body').css({
        overflow: "hidden"
    });

    TweenMax.to($overlay, 0.1, {
        autoAlpha: 1
    });

    TweenMax.fromTo($obj, 0.6, {
        x: $frm
    }, {
        delay: 0.2,
        x: "0%",
        ease: Elastic.easeOut,
        easeParams: [1.1, 0.7],
        force3D: true
    });
}

function closeModal() {
    $('body').css({
        overflow: "auto"
    });
    $window = $(window);
    isTweening = false;

    TweenMax.to($overlay, 0.1, {
        delay: 0.55,
        autoAlpha: 0
    });
    /*  TweenMax.to($obj,0.55,{x:$(window).width()+$obj.width(),ease:Back.easeIn,force3D:true});
	$("#contact,#merchant-info, #contactUs, #awardz, #leadershipTeam, #leadershipTitle, #awardzTitle, #director,#program-info, #program-infoTitle,#work-info, #work-infoTitle, #about-info, #about-infoTitle,#merchant-infoTitle").hide();*/
}
$(".furniture").hover(function() {
    TweenMax.to($(this), 0.2, {
        ease: Circ.easeOut,
        yPercent: '-2%'
    });
    $("#contact").hide();
}, function() {
    TweenMax.to($(this), 0.2, {
        ease: Circ.easeOut,
        yPercent: '0'
    });
})
$("#about_us,  #docs a").hover(function() {
    TweenMax.to($(this), 0.2, {
        ease: Circ.easeOut,
        yPercent: '-25%'
    });
}, function() {
    TweenMax.to($(this), 0.2, {
        ease: Circ.easeOut,
        yPercent: '0'
    });
})


if ($('input[type=checkbox]').is(":checked")) {
    openModal();
} else {
    closeModal();
}

/*$("#leaders").click(function(){
	    openModal();
		$("#leadershipTeam, #leadershipTitle").show();
  })
    $("#awards").click(function(){
	    openModal();
		$("#awardz, #awardzTitle").show();
  })
  
   $("#contact_us").click(function(){
	    openModal();
		$("#contact, #contactUs").show();
  })
  $("#program").click(function(){
	    openModal();
		$("#program-info, #program-infoTitle").show();
  })
    $("#merchant").click(function(){
	    openModal();
		$("#merchant-info, #merchant-infoTitle").show();
  })
    $("#work_us").click(function(){
	    openModal();
		$("#work-info, #work-infoTitle").show();
  })
    $("#about_us").click(function(){
	    openModal();
		$("#about-info, #about-infoTitle").show();
  })
  
  
  $(".close-modal,.modal-overlay,.input-submit").click(function(){
    closeModal();
  })*/
TweenMax.to($overlay, 0.01, {
    delay: 0.55,
    autoAlpha: 0
});
TweenMax.to($obj, 0.01, {
    x: $(window).width() + $obj.width(),
    force3D: true
}, 0);

function setClock() {
    var time = new Date(),
        minutes = time.getMinutes() * 6,
        hours = time.getHours() % 12 / 12 * 360 + (minutes / 12),
        seconds = time.getSeconds() * 6;

    $(".hours").css("transform", "rotate(" + hours + "deg)");
    $(".seconds").css("transform", "rotate(" + seconds + "deg)");
    $(".minutes").css("transform", "rotate(" + minutes + "deg)");
}

function refresh() {
    /**/
    setClock();
    setTimeout(refresh, 1000);
}
refresh();
//alert($(window).screen.width());
/**/