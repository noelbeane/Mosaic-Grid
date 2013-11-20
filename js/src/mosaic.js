/*! mosaicgrid - v0.0.0 - 2013-10-15 */

var subnavState = 0;
var topnavState = 0;
var orientation = "portrait";
var tileState = 0;
var iconFolder = "images/glyphs/";
var tilearr = new Array();
var msnry = new Object();

////////////////////////////////////////////////////////////////
////////// INIT ON DOCUMENT READY 
////////////////////////////////////////////////////////////////

function init(url){
	if(url){
	  loadJSON(url);
	}
	footer();
	
}

$(window).resize(function() {
    checkOrientation();
    footer();
});

function loadJSON(file) {	
  $(document).ready(function(){	
	var url = file;
	var params = {format: 'json'};
	console.log(file);
	$.getJSON(url,params,function(json){
      
      if(json.mosaicgrid){
	    $.each(json.mosaicgrid, function(i,n){
		  var item = json.mosaicgrid[i];
		  tilearr.push(item);
		});
	  }
	  	 
	  createTiles();
	  
	  var container = document.querySelector('.mosaic_container');
	  msnry = new Masonry( container, {
	    columnWidth: 60,
	    gutter: 4,
	    itemSelector: '.msnry_item',
	    isFitWidth: true,
	    isResizeBound: true,
	    transitionDuration: '0.4s',
	    isAnimated: !Modernizr.csstransitions
	  });
	});
  });
    
}

function footer(){
    var offset = $("footer").offset().top;
    var footerHeight = $("footer").height();
    var height = window.innerHeight;
    var diff = height - offset;
    if( offset < height ){
	  $("footer").css({'height':diff});
    }else{
	  $("footer").css({'height':'auto'});
    }
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
	  subnav.style.height = "12em";
	  subnav.style.width = "25%";
	  mainContent.style.width = "66.66666%";
  }else{
	  subnavState = 0;  
	  subnav.style.height = "3em";
	  subnav.style.width = "8.33333%";
	  mainContent.style.width = "83.33333%";
  }
  $(subnavlist).slideToggle();
  $('.mosaic_container').masonry();
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
}

function createTiles() { 
	var tempArr = new Array();
	$.each(tilearr, function(key, value) {
		$.each(value, function(index, value) {
			tempArr.push(value);
		});
	});
	for (var i=0;i<=(tempArr.length-1);i++){
	  var title = tempArr[i].title;
      var image = tempArr[i].field_post_cover;
      var path = tempArr[i].path;
      var date = tempArr[i].created;
      var h = tempArr[i].field_post_cover_height;
      var w = tempArr[i].field_post_cover_width;
      var desc = tempArr[i].field_post_desc;
      var id = i;
      var type = tempArr[i].field_post_type;
      var author = tempArr[i].name;
      drawTile(title,desc,h,w,id,image,type,author,path,date);
	}
}

function drawTile(label,desc,h,w,id,image,type,author,path,date) {
	var tile = document.createElement('div');
	var tileContainer = document.createElement('div');
	var tileBtn = document.createElement('div');
	var tileCover = document.createElement('div');
	var tileLabel = document.createElement('div');
	var tileDesc = document.createElement('div');
	var tilePreloader = document.createElement('div');
	var imgOverlay = image;
	var imgType = "";
	
	switch(type){
		case "Article":
			imgType = "icon-file";
			break;
		case "Audio":
			imgType = "icon-microphone";
			break;
		case "Document":
			imgType = "icon-book";
			break;
		case "Photo":
			imgType = "icon-camera";
			break;
		case "Video":
			imgType = "icon-camera-2";
			break;
		case "Image":
			imgType = "icon-image";
			break;
		case "Link":
			imgType = "icon-forward";
			break;
	}
	
	$('#mosaic').append(tile);
	tile.className = 'msnry_item';
	tile.id = id + '_container';
	tile.style.height = h + 'px';
	tile.style.width = w + 'px';
	
	$(tile).append(tileDesc);
	tileDesc.id = id + '_desc';
	tileDesc.className = 'tile-desc';
	tileDesc.style.height = h + 'px';
	tileDesc.style.width = w + 'px';
	$(tileDesc).append("<p>" + "<span class='tile-title'>" + label + "</span><br><span class='tile-author'>" + author + "</span><br><span class='tile-date'>" + date + "</span><br><br>" + desc + "</p>");
	
	$(tile).append(tileCover);
	tileCover.id = id + '_cover';
	tileCover.className = 'tile-cover tranz_norm';
	tileCover.style.height = h + 'px';
	tileCover.style.width = w + 'px';
	tileCover.style.backgroundColor = '#fff';
	tileCover.style.paddingTop = ((h/2) - 20) + 'px';
	tileCover.style.paddingLeft = ((w/2) - 20) + 'px';	
	
	$(tileCover).append(tilePreloader);
	tilePreloader.style.className = 'preloader';
	tilePreloader.style.height = '40px';
	tilePreloader.style.width = '40px';
	tilePreloader.style.backgroundImage = 'url("http://mosaicgrid.beane.biz/sites/all/themes/mosaicgrid/images/preloader_40x40.gif")';
	
	var img = new Image();
	img.src = imgOverlay;
	$(img).load(function(){
		tileCover.style.backgroundImage = 'url(" ' + imgOverlay + ' ")';
		$(tilePreloader).hide();
	});
		
	$(tile).append(tileLabel);
	tileLabel.id = id + '_label';
	tileLabel.className = 'tile-label';
	$(tileLabel).append("<div class='tile_icon_wrapper'><div class='" + imgType + " tile_icon' ></div></div><div class='tile_icon_point'></div><div class='tile_label_txt'>" + label + "</div>");
	
	$(tile).data("tileState",0);
	
	$(tile).mouseover(function() {
		var cover = id + '_cover';
		tileOpen(cover);
	});
	$(tile).mouseout(function() {
		var cover = id + '_cover';
		var ref = id + '_desc';
		tileClose(cover,ref);
	});
	$(tile).click(function() {
		window.open(path);
	});
}

function tileOpen(target) {
	var h = $(document.getElementById(target)).parent().height();
	$(document.getElementById(target)).data("tileState",1);
	$(document.getElementById(target)).css("opacity", "0");
}
function tileClose(target,ref) {
	var h = $(document.getElementById(ref)).parent().height();
	$(document.getElementById(target)).data("tileState",0);
	$(document.getElementById(target)).css("opacity", "1");
}



