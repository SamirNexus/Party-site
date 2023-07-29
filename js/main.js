$("#openBtn").click(function(){
  if($("#sideBar").width()=="250"){
    closeNav();
  }
  else{
    $("#sideBar").width("250px");
    $("#main").css("margin-left", "250px");
  }
});
function closeNav()
{
    $("#sideBar").width("0px");
    $("#main").css("margin-left", "0px");
};
$("#closebtn").click(function(){
    closeNav();
});
$(document).ready(function(){
    $("#details p:first").css("display","block");
    $("#details h3").click(function(){
        $(this).next().slideToggle(500);
        $("#details p").not($(this).next()).slideUp(500);
    })
});
function countDown(){
    let currentDate =new Date();
    let eventDate =new Date(2023,1,10);

    let currentTime=currentDate.getTime();
    let eventTime=eventDate.getTime();
    let time=eventTime - currentTime;

    let sec=Math.floor(time/1000);
    let min=Math.floor(sec/60);
    let hour=Math.floor(min/60);
    let day=Math.floor(hour/24)-30;

    hour %= 24;
    min %= 60;
    sec %= 60;

    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    $("#days").html(`<h3>${day} D </h3>`);
    $("#hours").html(`<h3>${hour} h </h3>`);
    $("#minutes").html(`<h3>${min} m </h3>`);
    $("#seconds").html(`<h3>${sec} s </h3>`);

    setTimeout(countDown, 1000);
};
countDown();
$("link[href^='#']").click(function(e){
    let path=$(e.target).attr("href");
    let sectionOffset=$(path).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},500);
});
$(function(){
    let max =100;
    $("textarea").keyup(function(e){
        let length=$(e.target).val().length;
        let charNum= max-length;
        if(charNum <=0){
            $("#num").text("your available character finished");
        }
        else{
            $("#num").text(charNum);
        }
    });

});