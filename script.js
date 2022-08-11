const range = document.getElementById("range");
const monthlyPrice = document.getElementById('monthlyPrice');
const pageViews = document.getElementById('pageviews-count')
const switcher = document.getElementById('switcher');
let clickButton = false;
let enter = 0;
let rangeValue = 50 ;
switcher.addEventListener('click',(event)=>{
    if(enter %2 ===0){
        clickButton = true;
    }else{
        clickButton = false;
    }
    enter++
    if(!clickButton){
        if(rangeValue>=0&&rangeValue<25){
            monthlyPrice.textContent = "$"+10+".00";
            pageViews.textContent = 50+"K Pageviews";
        }else if (rangeValue>=25&&rangeValue<50) {
            monthlyPrice.textContent = "$"+12+".00";
            pageViews.textContent = 75+"K Pageviews";
        } else if (rangeValue>=50&&rangeValue<=70){
            monthlyPrice.textContent = "$"+16+".00";
            pageViews.textContent = 100+"K Pageviews";
        }else if (rangeValue>70&&rangeValue<90){
            monthlyPrice.textContent = "$"+20+".00";
            pageViews.textContent = 150+"K Pageviews";
        }else{
            monthlyPrice.textContent = "$"+25+".00";
            pageViews.textContent = 200+"K Pageviews";
        }
    }else{
        if(rangeValue>=0&&rangeValue<25){
            monthlyPrice.textContent = "$"+7.5;
            pageViews.textContent = 50+"K Pageviews";
        }else if (rangeValue>=25&&rangeValue<50) {
            monthlyPrice.textContent = "$"+9+".00";
            pageViews.textContent = 75+"K Pageviews";
        } else if (rangeValue>=50&&rangeValue<=70){
            monthlyPrice.textContent = "$"+12.00+".00";
            pageViews.textContent = 100+"K Pageviews";
        }else if (rangeValue>70&&rangeValue<90){
            monthlyPrice.textContent = "$"+15.00+".00";
            pageViews.textContent = 150+"K Pageviews";
        }else{
            monthlyPrice.textContent = "$"+18.75;
            pageViews.textContent = 200+"K Pageviews";
        }
    }
})

range.addEventListener("input",(event)=>{
    range.style.backgroundSize = `${Number(event.target.value)}% 100%`
    if(!clickButton){
        if(event.target.value>=0&&event.target.value<25){
            monthlyPrice.textContent = "$"+10+".00";
            pageViews.textContent = 50+"K Pageviews";
        }else if (event.target.value>=25&&event.target.value<50) {
            monthlyPrice.textContent = "$"+12+".00";
            pageViews.textContent = 75+"K Pageviews";
        } else if (event.target.value>=50&&event.target.value<=70){
            monthlyPrice.textContent = "$"+16+".00";
            pageViews.textContent = 100+"K Pageviews";
        }else if (event.target.value>70&&event.target.value<90){
            monthlyPrice.textContent = "$"+20+".00";
            pageViews.textContent = 150+"K Pageviews";
        }else{
            monthlyPrice.textContent = "$"+25+".00";
            pageViews.textContent = 200+"K Pageviews";
        }
    }else{
        if(event.target.value>=0&&event.target.value<25){
            monthlyPrice.textContent = "$"+7.5;
            pageViews.textContent = 50+"K Pageviews";
        }else if (event.target.value>=25&&event.target.value<50) {
            monthlyPrice.textContent = "$"+9+".00";
            pageViews.textContent = 75+"K Pageviews";
        } else if (event.target.value>=50&&event.target.value<=70){
            monthlyPrice.textContent = "$"+12.00+".00";
            pageViews.textContent = 100+"K Pageviews";
        }else if (event.target.value>70&&event.target.value<90){
            monthlyPrice.textContent = "$"+15.00+".00";
            pageViews.textContent = 150+"K Pageviews";
        }else{
            monthlyPrice.textContent = "$"+18.75;
            pageViews.textContent = 200+"K Pageviews";
        }
    }
    rangeValue = event.target.value;
})