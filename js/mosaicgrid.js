var topnavState = 0;
var menuState = 0;
var tileState = 0;
var iconFolder = "images/glyphs/";
var tilearr = new Array();
var msnry = new Object();
var mobileWidth = 680;


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
    footer();
});

function loadJSON(file) {	
  $(document).ready(function(){	
	var url = file;
	var params = {format: 'json'};
	//console.log(file);
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

function menuSlide(){
  var page = document.getElementById("page-wrapper");
  var menu = document.getElementById("menu-wrapper");
  var width = window.innerWidth; //check for mobile screen size
  if(menuState == 0) {
    menuState = 1;
    if(width < mobileWidth){
	    page.style.width = "30%";
      menu.style.width = "70%";
    }else{
	    page.style.width = "70%";
      menu.style.width = "30%";
    }
  }else{
	  menuState = 0;
	  page.style.width = "100%";
    menu.style.width = "0%";
    $("#search_input").val(""); //clear search box on close
  }
}


function settingsMenuSlide(){
  var tools = document.getElementById("tools");
  var sitemenubtn = document.getElementById("sitemenuBtn");
  var drawer = document.getElementById("drawer");
  if(topnavState == 0) {
	  topnavState = 1;
	  drawer.style.height = "9em";
		tools.style.display = "block";
  }else{
	  topnavState = 0;
	  drawer.style.height = "0";
	  tools.style.display = "none";
  }
}

////////////////////////////////////////////////////////////////
////////// MASONRY TILES
////////////////////////////////////////////////////////////////

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
      var likes = tempArr[i].likes;
      var comments = tempArr[i].comments;
      drawTile(title,desc,h,w,id,image,type,author,path,date,likes,comments);
	}
}

function drawTile(label,desc,h,w,id,image,type,author,path,date,likes,comments) {
	var tile = document.createElement('div');
	var tileContainer = document.createElement('div');
	var tileBtn = document.createElement('div');
	var tileCover = document.createElement('div');
	var tileLabel = document.createElement('div');
	var tileDesc = document.createElement('div');
	var tilePreloader = document.createElement('div');
	var tileTitle = document.createElement('div');
	var tileType = document.createElement('div');
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

	$(tile).append(tileCover);
	tileCover.id = id + '_cover';
	tileCover.className = 'tile-cover tranz_norm';
	tileCover.style.height = h + 'px';
	tileCover.style.width = w + 'px';
	tileCover.style.backgroundColor = '#0e112a';
	tileCover.style.paddingTop = ((h/2) - 32) + 'px';
	tileCover.style.paddingLeft = ((w/2) - 32) + 'px';

	$(tileCover).append(tilePreloader);
	tilePreloader.className = 'preloader';
	tilePreloader.style.height = '64px';
	tilePreloader.style.width = '64px';
	tilePreloader.style.backgroundImage = 'url("../images/preloader.gif")';

	var img = new Image();
	img.src = imgOverlay;
	$(img).load(function(){
		tileCover.style.backgroundImage = 'url(" ' + imgOverlay + ' ")';
		$(tilePreloader).hide();		
	});

	$(tile).append(tileLabel);
	tileLabel.id = id + '_label';
	tileLabel.className = 'tile-label';
	$(tileLabel).append(
	"<div class='icomoon'><div class='icon-bubble'></div></div><div class='count'>"+ comments +"</div><div class='icomoon'><div class='icon-heart'></div></div><div class='count'>"+ likes +"</div>");	

	$(tile).append(tileTitle);
	tileTitle.id = id + '_title';
	tileTitle.className = 'tile-cover-title tranz_norm';
	$(tileTitle).append("<div class='tile-title-txt'>" + label + "</div>");	
	
	$(tile).append(tileType);
	tileType.id = id + '_type';
	tileType.className = 'tile-cover-type tranz_norm';
	$(tileType).append("<div class='tile-icon'><div class='" + imgType + "'></div></div>");

	$(tile).data("tileState",0);

	$(tile).mouseover(function() {
		$(this).children("div.tile-cover-title").css("opacity", "0.8");
		$(this).children("div.tile-cover-title").css("top", "1em");
		$(this).children("div.tile-cover-type").css("opacity", "0.8");
		$(this).children("div.tile-cover-type").css("top", "4em");
	});
	$(tile).mouseout(function() {
		$(this).children("div.tile-cover-title").css("opacity", "0");
		$(this).children("div.tile-cover-title").css("top", "0");
		$(this).children("div.tile-cover-type").css("opacity", "0");
		$(this).children("div.tile-cover-type").css("top", "2.5em");
	});
	$(tile).click(function() {
		window.open(path);
	});
}


////////////////////////////////////////////////////////////////
////////// SEARCH
////////////////////////////////////////////////////////////////

function searchAction(){
	var value = $("#search_input").val();
	//console.log(value);
}







