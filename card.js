"use scrict" 

$(".next").on("click",function(){
	$(".slider-in").animate( {"left":"-=1800px"})
	$(".bg2").animate({"left":"-=50px"});
	$(".bg3").animate({"left":"-=100px"});
	$(".bg4").animate({"left":"-=20px"});
	$(".bg5").animate({"left":"-=200px"});
	$(".bg6").animate({"left":"-=100px"});
})

$(".prev").on("click",function(){
		$(".slider-in").animate({"left":"+=1800px"})
		$(".bg2").animate({"left":"+=50px"});
		$(".bg3").animate({"left":"+=100px"});
		$(".bg4").animate({"left":"+=20px"});
		$(".bg5").animate({"left":"+=200px"});
		$(".bg6").animate({"left":"+=100px"});
})


$('.audio').click(function(){
    if ($(this).hasClass("muted")) {
        $(this).removeClass("muted");
        $('audio').prop("muted", false);
    } else {
        $(this).addClass("muted");
        $('audio').prop("muted", true);
    }
});