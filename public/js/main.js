function bridgeMove() {
	$(".brige_box").animate({
      'bottom': "0px",
    }, 3000,function(){
      peopleIn();
    });
}

function peopleIn() {
	$(".people_box").fadeIn(4000,function() {
		moonIn();
	});
}

function moonIn() {
	$(".moon_box").fadeIn(3000,function() {
		moonMove();
	});	
}

function moonMove() {
	$(".moon_box").animate({
			'margin-top':'2em',
		},2000, function() {
			textShow();
	});
}

function textShow() {
	$(".text_1").fadeIn(2000, function() {
		$(".text_2").fadeIn(2000, function() {
			$(".text_3").fadeIn(2000,function() {
				$(".text_4").fadeIn(2000,function(){

				});
			});
		});
	});
}

function startMusic() {
	var audio2 = HTML5Audio('http://www.imooc.com/upload/media/two.mp3', true);
}

function HTML5Audio(url, loop) {
    var audio = new Audio(url);
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        }
    }
}

function start() {
	startMusic();
	bridgeMove();
}

start();