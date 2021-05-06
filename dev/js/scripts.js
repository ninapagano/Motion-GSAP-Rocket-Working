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


  function init(){

      CustomWiggle.create("myWiggle", {wiggles: 50, type:"uniform"});
    //***********  fadeInTL init ****************
      gsap.set("#Layer_12", { y:"+=200", delay:2});

      gsap.to("#Layer_12", {duration:1, y:"1400", ease:"myWiggle"});


    //*********** zoomTL init ****************
    gsap.set(["#pbubble", "#YObubble"], {transformOrigin:"center center"});
    
    //*********** spaceshipTL init ****************
    //gsap.set(["#newrocket-01"], {transformOrigin:"center"});

    //*********** liftOffTL init ****************
    gsap.set(["#Layer_12"],{transformOrigin:"center center"});
  

    //*********** flightTL init ****************
    gsap.set("#Layer_12", {xPercent:-50, yPercent:-50, transformOrigin:"center top"});

  }

  //Nested Timelines
  //***********  fadeInTL  ****************
  function fadeInTL(){
    let tl = gsap.timeline();

    tl.from("#backcloud", {alpha:0, duration:4, scale:10})
    tl.from("#pbubble", {alpha:0, duration:2, scale:10})
    tl.from("#purple", {alpha:0, duration:2, scale:10})
    ;//tl END

    return tl;

  }

  //*********** flightTL ****************
  function flightTL(){
    let tl = gsap.timeline();

    tl.to("#Layer_12"],{
      duration:10,
      y: 600,
      //motionPath:{
        //start: "bottom 10%",
        //end: "top 65%",
        //alignOrigin:[0.5, 0.5],
        //autoRotate:90
        // start: 0.1,
        // end: 0.5,
    },

    //.to("#moon", {alpha:1});

    //tl END

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
mainTL.add(flightTL())
//.add(zoomTL(),"-=4")
//.add(liftOffTL())
//.add(flightTL(),"target")

;//tl END

//mainTL.play("target");



});//ready END
