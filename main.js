$(function() {

	var gameInProgress = false


	var maps = [
			[2, 3, 7],
			[10, 11, 12]
		];
 

//2. start the game/hover function to stop cursor and end game/border to 	to stop cursor and end game

$('#startButton').click(function(event){
	console.log("game is started")
	$('.wrap').hover(function(){

		alert('Game Over');

});    
	$('.black').hover(function(){
   		alert('Game Over!');
    });

    $('.exit').hover(function(){
	alert('Well done');
	});	

});





// if (!gameInProgress) {
// 	gameInProgress = true
// 	} else {
// }





//6. make next button to click 

$('#next').click(function(event){
	alert("Get ready for level, '' ");
});

//7. menu button with start function

	// $('#message').click(function(event){
	// alert("start Game");
// });

//8. Coloured blocks to be radomised once you enter new level

	// var currentMap =["#2","#3","#7"]

	// for (var i = 0; i < currentMap.length; i++){
	// $(currentMap[i]).addClass('black');

	// };

// $('#next').click(function(event){
	// $('maps').append('#'+ currentMap[i]);



// });


//9.adding new map when you reach level 2


//when click #next it add the level2('div'), 
// map to appear.

//.Enabling visibility
// $(".hiddenLevel").css('visibility', 'visible' );
// $('.addBox').css('visibility', 'visible');

$('#next').click(function(event){


$(".hiddenLevel").css('display', 'inline-block' );
$('.addBox').css('display', 'inline-block');


$('.wrap').height( $(".wrap").height() + 130);
$('.wrap').width($(".wrap").width()+ 130);


});




});




// });