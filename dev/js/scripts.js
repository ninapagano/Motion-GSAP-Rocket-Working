//IMPORTS
import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {CustomEase} from "gsap/CustomEase";
import {CustomWiggle} from "gsap/CustomWiggle";

//register Plugins
gsap.registerPlugin(GSDevTools, MotionPathPlugin, CustomEase, CustomWiggle);


//page ready listener
let ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  //add tools
  //GSDevTools.create();

  /* add your code here */
  //Variables
  let mainTL = gsap.timeline({id:"main"});
  let flamesTL = gsap.timeline({paused:true});


  function init(){

      CustomWiggle.create("myWiggle", {wiggles: 50, type:"uniform"});
    //***********  fadeInTL init ****************
      //gsap.set("#newrocket-01", {x:-100});
      gsap.set("#newrocket-01", { y:"+=200", delay:2});

      gsap.to("#newrocket-01", {duration:1, x:"+=5", ease:"myWiggle"});


    //*********** zoomTL init ****************
    gsap.set(["#newrocket-02","#rnewrocket-03","#newrocket-04","#newrocket-05"], {transformOrigin:"center center"});
    //*********** spaceshipTL init ****************
    //gsap.set(["#newrocket-01"], {transformOrigin:"center"});

    //*********** liftOffTL init ****************
    gsap.set(["#newrocket-01"],{transformOrigin:"center bottom"});
  

    //*********** flightTL init ****************
    gsap.set("#newrocket-01", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});

  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    tl.from("#backcloud", {alpha:0, duration:4, scale:20})
    ;//tl END

    return tl;

  }

  //*********** flightTL ****************
  function flightTL(){
    let tl = gsap.timeline();

    tl.to("#newrocket-01", {
      duration:15,
      motionPath:{
        //path:"#cls-4",
        //align:"#cls-4",
        start: "top 10%",
        end: "bottom 65%",
        alignOrigin:[0.5, 0.5],
        autoRotate:90
        // start: 0.1,
        // end: 0.5,
      },
      ease:"power4.out"


    })
    //.to("#moon", {alpha:1});

    ;//tl END

    return tl;

  }


//*********** moonLandingTL ****************


//*********** flame functions DO NOT INCLUDE IN MAIN TL ****************

//function callBackTest(){

//  console.log("hello");

//}

//1. set initial properties
init();

//2. show content - prevents FOUC
gsap.set('#svg-container',{visibility:"visible"});

//3. BUILD Main timeline
mainTL.add(fadeInTL())
//.add(zoomTL(),"-=4")
//.add(liftOffTL())
//.add(flightTL(),"target")

;//tl END

//mainTL.play("target");



});//ready END
