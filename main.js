
$(function() {

	var gameInProgress = false
// var maps = [
// 		[2, 3, 7],
// 		[10, 11, 12]
// 	];
	// var back = "#level1";

	//menu page

$('#start').on('click', function(event){
	$('.menu').hide();
	$('#level1').show();

});

$('#tryAgain').hide();



//2. start the game/hover function to stop cursor and end game/border to stop cursor and end game

	$('.startButton').click(function(event){
		console.log("game is started")
		event.preventDefault();
		timer(7);	

		$('.wrap').hover(function(){
		$('#tryAgain').show();
		$('#20').removeClass('exit');

	});   

	$('.black').hover(function(){
		if (!$(this).hasClass('black')) return;
		console.log('hover-b')
		$('#tryAgain').show();
		$('#20').removeClass('exit');
    });


    $('.exit').hover(function(){
    	if (!$(this).hasClass("exit")) return; 
    	$('#next').css('visibility', 'visible');
    	$('#level1').hide();
    	$('#tryAgain').css('visibility', 'hidden');
    	timer(0);

	});


});


// level 2 start function 



$('.startButton2').click(function(event){
	console.log("game is started")
	$("#level1").remove()
		
	timer(7);	

	triggerWobble();

	$('.wrap').hover(function(){
		$('#tryAgain').css('visibility', 'visible');
		$('#20').removeClass('exit2');

	});   

	$('.black').hover(function(){
		console.log('hover-b')
		if (!$(this).hasClass('black')) return;
		$('#tryAgain').css('visibility', 'visible');
		$('#20').removeClass('exit2');
    });
//moving boxes
    $('#m2').hover(function(){
		$('#m3').addClass('black');
		$('#15').removeClass('black');
		$('#m8').removeClass('black');
		$('#m3').hover(function(){
			$('#tryAgain').css('visibility','visible');
		});



	});


    $('.exit2').hover(function(){
    	if (!$(this).hasClass("exit2")) return; 
    	$('#next').css('visibility', 'visible');
    	$('#level2').hide();
    	$('#tryAgain').css('visibility', 'hidden');
    	timer(0);

	});


});


// //try again function to reset page

$('#tryAgain').click(function(event){
	console.log('click')	
	history.go();	
});





//6. make next button to click 


$('#next').click(function(event){
	$('#level2').show();
	$('#next').hide();

});


//timer

function timer (time) {


    loopTime = time;

    console.log("intTime: " + time);

    var interval = setInterval(function() {

        if(loopTime === 0) {

            console.log("stop");
            clearInterval(interval);
            $('#tryAgain').show();

        } else {

            
            loopTime--;
            $("#time").html(loopTime);

        }
    }, 1000);
}

//switching blocks level 2

function triggerWobble () {
	setTimeout(function () {
		$("#level2").addClass("wobble")
	}, 3000)
}




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

// $('#next').click(function(event){


// $(".hiddenLevel").css('display', 'inline-block' );
// $('.addBox').css('display', 'inline-block');


// $('.wrap').height( $(".wrap").height() + 130);
// $('.wrap').width($(".wrap").width()+ 130);


// });




});




// });