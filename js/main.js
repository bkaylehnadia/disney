// **set initial screen number
let screenNum = 1;

// **total number of screens
let totalScreens = $("section").length;

// **transition duration
let dur = .5;

/**
 ** delay for starting screen animations
 ** make equal to duration... The time it takes content to transition off screen
 ** add more time to delay the build on a little more
*/
let delay = dur + .5;
// disables nav when transitioning from screen to screen
let navActive = true;
// vars used for nav
let currentScreen, prevScreen, nextScreen;
// hides all screens except for screen 1
$("section:gt(0)").hide();
// set up main div on paused timeline until begin button clicked
let main = gsap.from("main", {
    duration: dur,
    opacity: 0
}).pause();



// set up begin button on paused timeline until page load
let begin = gsap.from("#btnContainer", {
    duration: 2,
    opacity: 0,
    x: $(window).height(),
    opacity: 0,
    ease: "expo",
    onReverseComplete: function() {
        console.log("Reverse Complete");
        loadScreen1();
        // show the main div
        $("main").show();
        main.play();

        
    }

    
}).pause();


// preload all content and then reveal begin button
$(window).on("load", function() {
    console.log("LOADED!");
    // fade out preloader GIF
    gsap.to("#loading", {
        duration: 2,
        opacity: 0,
        onComplete: function() {
            $("#begin").show();
            // when done show begin button
            begin.play(); 
            
        }
    });
});

// begin button click function
$("#begin").click(function() {
    // console.log("BEGIN!");
    begin.reverse();
});

// next and previous navigation functions
function showNextScreen(){
    // check if nav is active
    if(navActive){
        console.log("nextScreen");
        navActive = false;
        // ! Make sure you got that hashtag!
        // target the current
        currentScreen = "#screen" + screenNum;
        // set the next screen number 
        screenNum++;
        showHideNav(screenNum);
        // target the next screen
        nextScreen = "#screen" + screenNum;
        // transitions current screen out
        gsap.fromTo(currentScreen, {
            x: 0
        }, {
            duration: dur,
            delay: 0.5,
            x: -960,
            ease: "power2.inOut"
        });
        // show next screen
        $(nextScreen).show();
        gsap.fromTo(nextScreen, {
            x: 960
        }, {
            duration: dur,
            delay: 0.5,
            x: 0,
            ease: "power2.inOut",
            onComplete: function() {
                console.log("Next Screen Animation Finished");
                // hide current screen
                $(currentScreen).hide();
                // re-enable nav
                navActive = true;
            }
        });

        // ! ACCESS FIELD OF AN OBJECT [] allows for a field but we have a variable
        // ! CAN CONCATENATE BUT ALSO RUN THE FUNCTION
        // load function to animate conents of the screen
        // set up off screen
        window["loadScreen" + screenNum]();
    }
}

function showPrevScreen(){
    // check if nav is active
    if(navActive){
        console.log("prevScreen");
        navActive = false;
        // ! Make sure you got that hashtag!
        // target the current
        currentScreen = "#screen" + screenNum;
        // set the prev screen number 
        screenNum--;
        showHideNav(screenNum);
        // target the prev screen
        prevScreen = "#screen" + screenNum;
        // transitions current screen out
        gsap.fromTo(currentScreen, {
            x: 0
        }, {
            duration: dur,
            delay: 0.5,
            x: 960,
            ease: "power2.inOut"
        });

        // show prev screen
        $(prevScreen).show();

        gsap.fromTo(prevScreen, {
            x: -960
        }, {
            duration: dur,
            delay: 0.5,
            x: 0,
            ease: "power2.inOut",
            onComplete: function() {
                console.log("Prev Screen Animation Finished");
                // hide current screen
                $(currentScreen).hide();
                // re-enable nav
                navActive = true;
            }
        });

        // ! ACCESS FIELD OF AN OBJECT [] allows for a field but we have a variable
        // ! CAN CONCATENATE BUT ALSO RUN THE FUNCTION
        // load function to animate conents of the screen
        // set up off screen
        window["loadScreen" + screenNum]();
    
    }
}
// next and previous button clicks
$("#next").click(showNextScreen);
$("#prev").click(showPrevScreen);
// show/hide next/prev buttons
function showHideNav(currentScreen) {
    console.log("showHideNav reached");
    if(currentScreen == 1) {
        console.log("should show just the next");
        $("#prev").fadeOut(1000);
        $("#next").fadeIn(1000);
    } else if(currentScreen == totalScreens) {
        console.log("should show just the prev")
        $("#prev").fadeIn(1000);
        $("#next").fadeOut(1000);
    }
    else {
        console.log("show all nav")
        $("#prev").fadeIn(1000);
        $("#next").fadeIn(1000);
    }

}

// set up nav on page load
showHideNav(screenNum);

// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1() {




    gsap.from(".title1", {
        duration: 2,
        delay: .5,
        scale: 0,
        ease: "bounce"
    });

    gsap.from(".sparkles", {
        duration: 2,
        delay: .5,
        scale: 0,
        ease: "bounce"
    });

    gsap.from(".sparkles2", {
        duration: 2,
        delay: .5,
        scale: 0,
        ease: "bounce"
    });

    gsap.from(".castle", {
        duration: dur,
        delay: delay + 0.5,
        left: -960,
        ease: "power3.out"
    });

    gsap.from(".tinkerbell", {
        duration: dur,
        delay: delay + 1,
        left: -960,
        ease: "power3.out"
    });

    gsap.from(".mickey", {
        duration: dur,
        delay: delay + 1.5,
        x: 960,
        ease: "power3.out"
    });

}

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2() {
    // animate content on with delays


    gsap.from(".money", {
        duration: 4,
        delay: .5,
        y: 960,
        ease: "bounce"
    });

    gsap.from(".world", {
        duration: 2,
        delay: delay + .2,
        left: -960,
        ease: "power3.out"
    });

    gsap.from(".phone ", {
        duration: dur,
        delay: delay + 1.5,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".companys", {
        duration: dur,
        delay: delay + 1.7,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".apps ", {
        duration: dur,
        delay: delay + 1.9,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".apps2 ", {
        duration: dur,
        delay: delay + 2.0,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".apps3 ", {
        duration: dur,
        delay: delay + 2.1,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".smallbill ", {
        duration: dur,
        delay: delay + 2.2,
        x: 960,
        ease: "power3.out"
    });

    $(".smallbill").hover(function() {
        console.log("Hover On!")
        gsap.to(".billbubble", {
            duration: 0.5,
            left: 680,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".billbubble ", {
            duration: 0.5,
            left: -680,
            ease: "power2.in"
        });

    });

    $(".income").hover(function() {
        console.log("Hover On!")
        gsap.to(".moneybubble", {
            duration: 0.5,
            left: 230,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".moneybubble ", {
            duration: 0.5,
            left: -230,
            ease: "power2.in"
        });

    });


    gsap.from(".income ", {
        duration: dur,
        delay: delay + 2.1,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".title2 ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".moneyfly ", {
        duration: 5,
        delay: delay + .5,
        x: 960,
        ease: "bounce"
    });

    gsap.from(".bill ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });


    gsap.from(".billspeech ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".dailyguests ", {
        duration: dur,
        delay: delay + 2.0,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".guestnumbers ", {
        duration: dur,
        delay: delay + 2.0,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".underline", {
        duration: 2,
        delay: delay + .2,
        left: 960,
        ease: "power3.out"
    });
}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3() {

    gsap.from(".stats ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });


    gsap.from(".barbar ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });
 
 
    $("#ele8").hover(function() {
        console.log("Hover On!")
        gsap.to("#ele8hover", {
            duration: 0.5,
            right: 500,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to("#ele8hover ", {
            duration: 0.5,
            right: -600,

            ease: "power2.in"
        });

    });

    gsap.from(".agedemo ", {
        duration: dur,
        delay: delay + 0.8,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".statistics ", {
        duration: dur,
        delay: delay + 1,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".underline", {
        duration: 2,
        delay: delay + .2,
        left: 960,
        ease: "power3.out"
    });

    gsap.from(".bars", {
        duration: 1.2,
        delay: delay +.2,
        left: 960,
        ease: "power3.out"
    });

    gsap.from(".gender", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });

    gsap.from("#ele9", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });

    gsap.from(".layway", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });


    gsap.from(".laywaytext", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });

    gsap.from("#ele8", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });

        // reset bars on graph
        $(".bars").css({height: 5});

        // click to execute multiple tweens 
        $("#ele9").click(function() {
            
            gsap.fromTo("#bar1", {
                height: 5
            }, {
                duration: dur,
                height: 120,
                ease: "power2.out"
            });
    
            gsap.fromTo("#bar2", {
                height: 5
            }, {
                duration: dur,
                height: 100,
                ease: "power2.out"
            });
        });
}

// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4() {

    gsap.from(".storytitleimg", {
        duration: 2,
        delay: delay + .3,
        left: 960,
        ease: "power3.out"
    });

    gsap.from(".storytitle", {
        duration: 2,
        delay: delay + .2,
        left: 960,
        ease: "power3.out"
    });

    gsap.from(".boo", {
        duration: 2,
        delay: delay + 2.5,
        left: 960,
        ease: "power3.out"
    });


    gsap.from(".display", {
        duration: 2,
        delay: delay + .1,
        left: 960,
        ease: "power3.out"
    });



    gsap.from(".haunted ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });

    $(".gngeorge").hover(function() {
        console.log("Hover On!")
        gsap.to("#goodnightgeorgestory", {
            duration: 0.5,
            left: 400,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to("#goodnightgeorgestory ", {
            duration: 0.5,
            left: -350,
            ease: "power2.in"
        });

    });


    $(".witch").hover(function() {
        console.log("Hover On!")
        gsap.to("#witchcraftstory", {
            duration: 0.5,
            left: 400,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to("#witchcraftstory ", {
            duration: 0.5,
            left: -350,
            ease: "power2.in"
        });

    });

    $(".walter").hover(function() {
        console.log("Hover On!")
        gsap.to("#walterstory", {
            duration: 0.5,
            left: 400,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to("#walterstory ", {
            duration: 0.5,
            left: -350,
            ease: "power2.in"
        });

    });


    $(".water").hover(function() {
        console.log("Hover On!")
        gsap.to("#waterstory", {
            duration: 0.5,
            left: 400,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to("#waterstory ", {
            duration: 0.5,
            left: -350,
            ease: "power2.in"
        });

    });

    $(".tower").hover(function() {
        console.log("Hover On!")
        gsap.to("#towerstory", {
            duration: 0.5,
            left: 400,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to("#towerstory ", {
            duration: 0.5,
            left: -350,
            ease: "power2.in"
        });

    });

    gsap.from(".underline", {
        duration: 2,
        delay: delay + .2,
        left: 960,
        ease: "power3.out"
    });
}

// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5() {
    $(".bubble").hover(function() {
        console.log("Hover On!")
        gsap.to(".textbubble", {
            duration: 0.5,
            left: 630,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".textbubble ", {
            duration: 0.5,
            left: -630,
            ease: "power2.in"
        });

    });

    $(".family").hover(function() {
        console.log("Hover On!")
        gsap.to(".textbubble2", {
            duration: 0.5,
            left: 630,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".textbubble2 ", {
            duration: 0.5,
            left: -630,
            ease: "power2.in"
        });

    });

    $(".simpsons").hover(function() {
        console.log("Hover On!")
        gsap.to(".textbubble3", {
            duration: 0.5,
            left: 630,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".textbubble3 ", {
            duration: 0.5,
            left: -630,
            ease: "power2.in"
        });

    });

    $(".bobs").hover(function() {
        console.log("Hover On!")
        gsap.to(".textbubble4", {
            duration: 0.5,
            left: 630,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".textbubble4 ", {
            duration: 0.5,
            left: -630,
            ease: "power2.in"
        });

    });


    $(".american").hover(function() {
        console.log("Hover On!")
        gsap.to(".textbubble5", {
            duration: 0.5,
            left: 630,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".textbubble5 ", {
            duration: 0.5,
            left: -630,
            ease: "power2.in"
        });

    });


    $(".tv").hover(function() {
        console.log("Hover On!")
        gsap.to(".textbubble6", {
            duration: 0.5,
            left: 630,
            ease: "power2.out",
            
        });

    }, function() {
        console.log("Hover Off!");
        gsap.to(".textbubble6 ", {
            duration: 0.5,
            left: -630,
            ease: "power2.in"
        });

    });

    gsap.from(".underline", {
        duration: 2,
        delay: delay + .2,
        left: 960,
        ease: "power3.out"
    });



    gsap.from(".bobs", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });


    gsap.from(".simpsons", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });


    gsap.from(".american", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });


    gsap.from(".family", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });

    gsap.from(".tv", {
        duration: 1.2,
        delay: delay +.2,
        left: -960,
        ease: "power3.out"
    });

    gsap.from(".title5 ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".bubble ", {
        duration: 2,
        delay: delay + .5,
        x: 960,
        ease: "bounce"
    });

    gsap.from(".donut ", {
        duration: 2,
        delay: delay + 1,
        x: 960,
        ease: "bounce"
    });

    gsap.from(".corr ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".textupgrade ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });
}

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6() {


    gsap.from(".billion", {
        duration: 4,
        delay: 1,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".moneymickey", {
        duration: 4,
        delay: 1,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".charities", {
        duration: 4,
        delay: 2,
        y: 960,
        ease: "power3.out"
    });


    gsap.from(".moneygo ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });


    gsap.from(".billion ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });


    gsap.from(".line1 ", {
        duration: 2,
        delay: delay + 2.8,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".line2 ", {
        duration: 2,
        delay: delay + 2.8,
        x: 960,
        ease: "power3.out"
    });


    gsap.from(".line3 ", {
        duration: 2,
        delay: delay + 2.8,
        x: 960,
        ease: "power3.out"
    });

    gsap.from(".line4 ", {
        duration: 2,
        delay: delay + 2.6,
        x: 960,
        ease: "power3.out"
    });


    gsap.from("#ele7", {
        duration: dur,
        delay: delay + (dur * 2),
        opacity: 0,
    });

    gsap.from("#ele7instructions", {
        duration: dur,
        delay: delay + (dur * 3),
        opacity: 0,
    });


    $("#ele7").hover(function() {
        gsap.to(this, {
            duration: 0.5,
            width: 230,
            height: 300,
            ease: "power3.out"
        });
        gsap.to("#ele7content",{
            duration: 0.5,
            opacity: 1
        });

    }, function(){
        // reverse (remove delay on #ele7content)
        gsap.to(this, {
            duration: 0.5,
            width: 200,
            height: 50,
            ease: "power3.in"
        });
        gsap.to("#ele7content",{
            duration: 0.5,
            opacity: 0
        });
    });

    

    gsap.from("#ele10", {
        duration: dur,
        delay: delay + (dur * 2.2),
        opacity: 0,
    });

    gsap.from("#ele10instructions", {
        duration: dur,
        delay: delay + (dur * 3),
        opacity: 0,
    });


    $("#ele10").hover(function() {
        gsap.to(this, {
            duration: 0.5,
            width: 430,
            height: 180,
            ease: "power3.out"
        });
        gsap.to("#ele10content",{
            duration: 0.5,
            opacity: 1
        });

    }, function(){
        // reverse (remove delay on #ele7content)
        gsap.to(this, {
            duration: 0.5,
            width: 200,
            height: 50,
            ease: "power3.in"
        });
        gsap.to("#ele10content",{
            duration: 0.5,
            opacity: 0
        });
    });

    


    gsap.from("#ele11", {
        duration: dur,
        delay: delay + (dur * 2.4),
        opacity: 0,
    });

    gsap.from("#ele11instructions", {
        duration: dur,
        delay: delay + (dur * 3),
        opacity: 0,
    });


    $("#ele11").hover(function() {
        gsap.to(this, {
            duration: 0.5,
            width: 430,
            height: 170,
            ease: "power3.out"
        });
        gsap.to("#ele11content",{
            duration: 0.5,
            opacity: 1
        });

    }, function(){
        // reverse (remove delay on #ele7content)
        gsap.to(this, {
            duration: 0.5,
            width: 200,
            height: 50,
            ease: "power3.in"
        });
        gsap.to("#ele11content",{
            duration: 0.5,
            opacity: 0
        });
    });

    


    gsap.from("#ele12", {
        duration: dur,
        delay: delay + (dur * 2.6),
        opacity: 0,
    });

    gsap.from("#ele12instructions", {
        duration: dur,
        delay: delay + (dur * 3),
        opacity: 0,
    });


    $("#ele12").hover(function() {
        gsap.to(this, {
            duration: 0.5,
            width: 430,
            height: 130,
            ease: "power3.out"
        });
        gsap.to("#ele12content",{
            duration: 0.5,
            opacity: 1
        });

    }, function(){
        // reverse (remove delay on #ele7content)
        gsap.to(this, {
            duration: 0.5,
            width: 200,
            height: 50,
            ease: "power3.in"
        });
        gsap.to("#ele12content",{
            duration: 0.5,
            opacity: 0
        });
    });



    gsap.from(".underline", {
        duration: 2,
        delay: delay + .2,
        left: 960,
        ease: "power3.out"
    });




}

// LOAD SCREEN 7 ///////////////////////////////////////////////
function loadScreen7() {

    gsap.from(".cited ", {
        duration: dur,
        delay: delay + .5,
        y: 960,
        ease: "power3.out"
    });

    gsap.from(".mickey2", {
        duration: dur,
        delay: delay + 1.5,
        x: 960,
        ease: "power3.out"
    });


}