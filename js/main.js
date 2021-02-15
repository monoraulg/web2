// JavaScript Document



/*  Challenge Maquetación Iguanafix - Raúl Ghioldi */



/*Mobile*/

globalPageMode = "";

var mediaMobile = {



	screenWidth        : $(window).width(),

	mediaQueries       : [1024, 768, 720, 640, 321],

	navStatus          : 0,

	pageMode           : 'desktop',

	

	//Breackpoints

	breackPoints : function(){

		

		mediaMobile.screenWidth = $(window).width();

		

		//768px

		if(mediaMobile.screenWidth <= this.mediaQueries[1]){

			

			//Display mode-vertical

			if(window.orientation === undefined){

				

				$('body').addClass('mode-vertical');

				$('body').removeClass('mode-horizontal');

			

			}else{

				

				if(window.orientation == 0){

					

					$('body').addClass('mode-vertical');

					$('body').removeClass('mode-horizontal');

					//alert(0);

			

				}else{

					

					$('body').addClass('mode-horizontal');

					$('body').removeClass('mode-vertical');

					//alert(90);

		

				}

				

			}		



			this.pageMode = 'mobile';

			this.menuSet.init(this.pageMode);

			$('body').addClass('display-mobile').removeClass('display-desktop');

			//console.log("break mobile");

			

		}else{



			this.pageMode = 'desktop';

			this.resetMenu();

			this.menuSet.init(this.pageMode);

			$('body').addClass('display-desktop').removeClass('display-mobile');

			//console.log("break desktop");

			

		}



		globalPageMode = this.pageMode;

	

	},

	

	menuSet : {

			

		//Seteo Menú

		init : function(display){

			

			if($('#modalWinCanvasMenu').length > 0) $('#modalWinCanvasMenu').remove();

			

			$('#btnNav').children('i.ifix--icon-menu-change').addClass('fa-caret-right').removeClass('fa-caret-left');

			

			$('#menuNav').removeClass('open');

			

			$('#menuNav').css({

				'left'      : '-100%',

				'position'   : 'fixed',

				'top'        : 0,

				'bottom'     : 0,

				'display'    : 'block',

				'z-index'    : 999

			});

			

			$('<div>', {

				'id' : 'modalWinCanvasMenu',

				'class' : 'modal-win-canvas',

				'css' : { 'z-index' : 99 }

			}).appendTo('body');

			

			//Mata el evento si existe

			$('#btnNav').unbind('click');

			//

			

			$('#btnNav').on('click', function(ev){

				

				ev.preventDefault();

				//$(this).attr('disable', 'disable');

				mediaMobile.menuAnimate(display);

				



			});

							

		}

		

	},

	

	menuAnimate : function(display){

		

		//

		var btnW         = $('#menuNav').width(),

			posTop       = $(window).scrollTop(),

			posOpen      = btnW - Number($('#menuNav').find('div').width()),

			speedAnimate = 400;	

		if(display === 'mobile'){
			
			posOpen = posOpen - 70;
			
		}

		if(this.navStatus === 0){



			$('#menuNav').animate({

				 

					'left' : '-' + posOpen + "px"

				

				}, 

				speedAnimate, 

				"swing",

				function(){

					

					$('body').addClass('modal-overflow');

					$(this).addClass('open');

				

			});

			

			$('#btnNav').children('i.ifix--icon-menu-change').addClass('fa-caret-left').removeClass('fa-caret-right');

			

			$('#modalWinCanvasMenu').fadeIn();



			$('body').addClass('modal-overflow');



			this.navStatus = 1;

			//console.log(1);

			

		}else{

			

			$('#menuNav').animate({

				 

					

					'left' : '-100%'

				

				}, 

				speedAnimate, 

				"swing",

				function(){

					

					$('body').removeClass('modal-overflow');

					$(this).removeClass('open');

				

			});

			

			$('#btnNav').children('i.ifix--icon-menu-change').addClass('fa-caret-right').removeClass('fa-caret-left');

			

			$('#modalWinCanvasMenu').fadeOut();

			

			this.navStatus  = 0;

			//console.log(0);

			

		}

		

	},

	

	resetMenu : function(){



		$('#menuNav').removeAttr('style');

		this.navStatus  = 0;

		

	}

	

}

//





var ifixSearchBar = function(){

	

	$('.js--search-bar').each(function(i, e){

		

		$(e).focusin(function(){

			$(e).addClass('activo');

		});

		

		$(e).focusout(function(){

			$(e).removeClass('activo');

		});

		

		$(e).children('i').click(function(){

			

			$(e).children('form').submit();

			

		});

	

	});

	

};



var ifixToolTip = function(){

	

	$('.js--menu-tooltip').each(function(i, e){



		var thisTooltip;

		

		$(this).click(function(ev){



			if(ev){ 

				ev.preventDefault();

				ev.stopPropagation();

			}



			thisTooltip = $(this).parent().children('.ifix--tooltip');

			if(thisTooltip.is(":visible")){

				

				thisTooltip.fadeOut();

				

			}else{

				

				thisTooltip.fadeIn();

				

			}

            

        });

		

		$(document).click(function() {

			if(thisTooltip) thisTooltip.fadeOut();

		});



    });

	

};

//



$(document).ready(function() {



	mediaMobile.breackPoints();

	ifixSearchBar();

	ifixToolTip();



});



//Pantalla: Cambios de orientación

window.addEventListener('orientationchange', function() {

	

	mediaMobile.breackPoints();

	

});





//Pantalla: Cambio de tamaño

$(window).resize(function() {



	mediaMobile.breackPoints();

	

});





//Pantalla: Scroll

$(window).scroll(function() {



	//mediaMobile.breackPoints();

	

});

