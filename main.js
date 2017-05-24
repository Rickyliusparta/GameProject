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


//6.make the block randomise

//7. menu button with start function

	$('#d').click(function(event){
	alert("start Game");
});
//8. Coloured blocks to be radomised once you enter new level

	var currentMap =["#2","#3","#7"]

	for (var i = 0; i < currentMap.length; i++){
	$(currentMap[i]).addClass('black');

	};

$('#next').click(function(event){
	$('maps').append('#'+ currentMap[i]);

});




});


// });