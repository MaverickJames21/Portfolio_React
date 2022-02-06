import {TOTAL_SCREENS} from './commonUtils'
import { BehaviorSubject, Subject } from 'rxjs'

export default class scrollService{
    static scrollHandler = new scrollService();
    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll',this.checkCurrentScreenUnderViewport);
    }
    scrollToHireMe = () =>{
        let contactMeScreen = document.getElementById("Contacte Me")
        if(!contactMeScreen)return;
        contactMeScreen.scrollIntoView({Behavior: "smooth"})
    }

    scrollToHome = () =>{
        let homeScreen = document.getElementById("Home")
        if(!homeScreen)return;
        homeScreen.scrollIntoView({Behavior: "smooth"})
    }

    isElementInView =(elem, type) =>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elementBottom >0;
        let completelyVisible = elementBottom >= elementBottom <= window.innerHeight;

        switch (type){
            case "partial":
                return partiallyVisible;
                default :
                    return false
            case "complete":
                return completelyVisible;
        }

    }

    checkCurrentScreenUnderViewport = (event)=>{
        if (!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS) {
            let screenFromDom = document.getElementById(screen.screen_name);
            if(!screenFromDom)
            continue;

            let fullyVisible = this.isElementInView(screenFromDom, "complete");
            let partiallyVisible = this.isElementInView(screenFromDom, "partial");

            if (fullyVisible || partiallyVisible){
               if (fullyVisible && !screen.alreadyRendered){
                   scrollService.currentScreenFadeIn.next({
                       fadeInScreen: screen.screen_name
                   });
                   screen['alreadyRendered']= true;
                   break;
               }

               if(fullyVisible){
                   scrollService.currentScreenBroadCaster.next({
                       screenInView:screen.screen_name
                     
                   });
                   break;
               }
            }
        }
    };
}