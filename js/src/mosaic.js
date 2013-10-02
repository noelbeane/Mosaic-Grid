var subnavState = 0;
var topnavState = 0;
var orientation = "portrait";
var columns = 3;

function clicked(item) {
  console.log($(item).attr("id"));
}

function init() {

  $(window).resize(function() {
    checkOrientation();
    footer();
  });
  
  $('input:text, textarea').on('keydown', toggleLabel);
  $('input:text, textarea').on('paste', toggleLabel);
  $('select').on('change', toggleLabel);
  $('input:text, textarea').on('focusin', function() { $(this).prev('span').css('color', '#ccc'); });
  $('input:text, textarea').on('focusout', function() { $(this).prev('span').css('color', '#999'); });
  $(function() { $('input:text, textarea').each(function() { toggleLabel.call(this); }); }); 
  
  loadJSON();
  footer();
}


////////////////////////////////////////////////////////////////
////////// NAVIGATION AND MENUS 
////////////////////////////////////////////////////////////////

function subnavSlide(){
  var subnav = document.getElementById("subnav");
  var mainContent = document.getElementById("mainContent");
  var subnavlist = document.getElementById("subnavList");
  var subnavbtn = document.getElementById("subnavBtn");
  if(subnavState == 0) {
	  subnavState = 1;
	  subnav.style.height = "10em";
	  subnav.style.width = "25%";
	  mainContent.style.width = "66.66666%";
  }else{
	  subnavState = 0;  
	  subnav.style.height = "3em";
	  subnav.style.width = "8.33333%";
	  mainContent.style.width = "83.33333%";
  }
  $(subnavlist).toggle("slow");
}

function topnavSlide(btn){
  var mainnav = document.getElementById("mainnav");
  var tools = document.getElementById("tools");
  var sitemenubtn = document.getElementById("sitemenuBtn");
  var drawer = document.getElementById("drawer");
  if(topnavState == 0) {
	  topnavState = 1;
	  drawer.style.height = "9em";
	  if(btn == 'menu'){
	  	mainnav.style.display = "block";
	  	tools.style.display = "none";
	  }else{
		tools.style.display = "block";
		mainnav.style.display = "none";
	  }
  }else{
	  topnavState = 0;
	  drawer.style.height = "0";
	  tools.style.display = "none";
	  mainnav.style.display = "none";
  }
}


////////////////////////////////////////////////////////////////
////////// TOGGLE INPUT LABELS
////////////////////////////////////////////////////////////////

function toggleLabel() {
	var input = $(this);
	setTimeout(function() {
		var def = input.attr('title');
		var def = input.attr('title');
            if (!input.val() || (input.val() == def)) {
                input.prev('span').css('visibility', '');
                if (def) {
                    var dummy = $('<label></label>').text(def).css('visibility','hidden').appendTo('body');
                    input.prev('span').css('margin-left', dummy.width() + 3 + 'px');
                    dummy.remove();
                }
            } else {
                input.prev('span').css('visibility', 'hidden');
            }
	}, 0);
}


////////////////////////////////////////////////////////////////
////////// ORIENTATION
////////////////////////////////////////////////////////////////

function checkOrientation() {
	var w = $(window).width();
	var h = $(window).height();
	if (h > w){
		orientation = "portrait";
	}else{
		orientation = "landscape";
	}
	fixIO6PlaceholderBug();
	//console.log(w);
}


////////////////////////////////////////////////////////////////
////////// iOS6 ORIENTATION BUG
////////////////////////////////////////////////////////////////

function fixIO6PlaceholderBug() {
    var $this, originalPlaceholder = "";

    $(document).find("input[placeholder]").each(function() {
        $this = $(this);
        originalPlaceholder = $this.attr("placeholder");
        $this.removeAttr("placeholder").attr("placeholder", originalPlaceholder);
    });
}

function footer(){
    var offset = $('#footer').offset();
    var footerHeight = $('#footer').height();
    var height = window.innerHeight;
    var diff = height - offset.top;
    if( offset.top < height ){
	  $('footer').css({'height':diff});
    }else{
	  $('footer').css({'height':'auto'});
    }
}




