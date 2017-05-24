$(function() {

	// var gameInProgress = false
		var maps = [
			[2, 3, 7],
			[10, 11, 12]
		];




//2.hover function to stop cursor and end game

    // $('.black').hover(function(){
    // 	// alert('Game Over!');
    // });

//4. border to 	to stop cursor and end game

	// $('.wrap').hover(function(){
	// 	if (!gameInProgress) {
	// 		gameInProgress = true
	// 	} else {
	// 		alert('Game Over');
	// }
	// });

//5.alert when game is completed

// $('#h').hover(function(){
// 	alert('Well done');
// });

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

// $('#next').click(function(event){
// 	('.wrap').addAttr('id','level2');
// });

// $("#level2").removeAttr("styl.css");

$(".hiddenLevel").css('visibility', 'none' );

});




// });