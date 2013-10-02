var tileState = 0;
var paramsCount = 10;
var iconFolder = "images/glyphs/";
var templateID = 0;
var maxWidth = 0.8333333; ///////// 20 of 24 columns grid system  ///////////////

var tilearr = new Array();
  
function loadJSON() {	
  $(document).ready(function(){
	var url = "../mosaicgrid.json";
	var params = {format: 'json'};
	$.getJSON(url,params,function(json){
      if(json.mosaicgrid){
	    $.each(json.mosaicgrid, function(i,n){
		  var item = json.mosaicgrid[i];
		  tilearr.push(item);
		});
	  }
	  createTiles();
	});
  });
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
      var image = tempArr[i].field_image;
      var path = tempArr[i].path;
      var date = tempArr[i].created;
      var h = tempArr[i].field_imgheight;
      var w = tempArr[i].field_imgwidth;
      var desc = tempArr[i].field_desc;
      var id = i;
      var type = "video";
      //console.log(image);
      drawTile(title,desc,h,w,id,image,type);
	}	
}

function drawTile(label,desc,h,w,id,image,type) {
	var tileContainer = document.createElement('div');
	var tileBtn = document.createElement('div');
	var tileCover = document.createElement('div');
	var tileLabel = document.createElement('div');
	var tileDesc = document.createElement('div');
	var imgOverlay = image;
	var imgType = "";
	
	switch(type){
		case "article":
			imgType = "icon-file";
			break;
		case "photo":
			imgType = "icon-camera";
			break;
		case "video":
			imgType = "icon-camera-2";
			break;
		case "image":
			imgType = "icon-image";
			break;
	}
	
	$('#mosaic').append(tileContainer);
	tileContainer.id = id + '_container';
	tileContainer.className = 'msnry_item';
	tileContainer.style.height = h + 'px';
	
	$(tileContainer).append(tileDesc);
	tileDesc.id = id + '_desc';
	tileDesc.className = 'tile-desc';
	tileDesc.style.height = h + 'px';
	tileDesc.style.width = '100%';
	$(tileDesc).append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>");
	
	$(tileContainer).append(tileCover);
	tileCover.id = id + '_cover';
	tileCover.className = 'tile-cover tranz_norm';
	tileCover.style.height = h + 'px';
	tileCover.style.width = '100%';
	tileCover.style.backgroundImage = 'url(" ' + imgOverlay + ' ")';
	
	$(tileContainer).append(tileLabel);
	tileLabel.id = id + '_label';
	tileLabel.className = 'tile-label';
	$(tileLabel).append("<div class='tile_icon_wrapper'><div class='" + imgType + " tile_icon' ></div></div><div class='tile_icon_point'></div><div class='tile_label_txt'>" + label + "</div>");


	////////////////////////////////////////////////////////////////
	////////// SET VARIABLES
	////////////////////////////////////////////////////////////////
	$(tileCover).data("tileState",0);

	////////////////////////////////////////////////////////////////
	////////// BUTTON EVENT
	////////////////////////////////////////////////////////////////
	$(tileCover).on('mouseover', function(event){
		var cover = id + '_cover';
		tileOpen(cover);
	});
	$(tileCover).on('mouseout', function(event){
		var cover = id + '_cover';
		var ref = id + '_desc';
		tileClose(cover,ref);
	});

	////////////////////////////////////////////////////////////////
	////////// CALCULATE HEIGHT
	////////////////////////////////////////////////////////////////
	var tcWidth = document.getElementById(id + '_container').offsetWidth;
	var scale = tcWidth / w;
	var newHH = h * scale;

	$(tileContainer).css("height", newHH);
	$(tileCover).css("height", newHH);
	$(tileDesc).css("height", newHH);
		
	return true;
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
$(window).resize(function() {	
	$('.msnry_item').each(function(index){
		var newWW = $(this).offsetWidth;
		var scale = newWW / $(this).data('w');
		var newHH = $(this).data('h') * scale;
		$(this).children('.tile-cover').height(newHH);
	});
});



