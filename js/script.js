	/*** i generated 8 unique random colors and stored them in an array called colors***/

	function randomColor(){
			var R = Math.floor(Math.random() * 256);
			var G = Math.floor(Math.random() * 256);
			var B = Math.floor(Math.random() * 256);
			
			return "rgb("+ R +", "+ G +", "+ B +")";}
	var colors=[];
	var randomColour="";
	for( var i=0; i<8; i++){ randomColour = randomColor();
	colors.push(randomColour);
	colors.push(randomColour);/** making a copy of each, so we have a total of 16  colours at the end***/
	}
	/*** made a new array called mixedcolors, and assigned each item from colors, to a new random position in mixedColors arrray,
	so we can have the colours all mixed up***/

		var index;
		var mixedColors = [];
		colors.forEach( function(item){ 
		fixing();
		function fixing(){index = Math.floor(Math.random()* 16);
		if (!mixedColors[index]){mixedColors[index]= item;}
		else {fixing();}

		}

	})

	/**************/
	 
	/** assigned each colour from mixedColor array to a tile on the page***/ 
	var tile = document.querySelectorAll(".tile");

	for (var i=0; i<tile.length; i++) {
		tile[i].style.background = mixedColors[i];
	};

	/**********/

	/***  turn on the opacity and make it visible when clicked  ***/

	document.addEventListener("DOMContentLoaded", function() {
	  	[].forEach.call(document.querySelectorAll(".tile"), function(tile) {
	  tile.addEventListener("click", function() {
	     this.style.opacity =1;
	  });
	});
	});
	/*********/

	/***game play***/
	var tileClass="";
	var openedColor="";
	var colorsOpen= 0;
	var round =1;
	window.onload =  function(){
	       doGame();
	    };
	/*** game rounds***/

	function doGame() {

		tileClass = document.querySelectorAll(".tile");

	    for (var i = 0; i<tileClass.length; i++) {
	    	tileClass[i].addEventListener("click", function(){
	     if (colorsOpen ==0){
	     openedColor = this;
	     colorsOpen +=1;
	    }

	     else {
	      if (this.style.background == openedColor.style.background) {
	      	this.style.display = "none";
			   openedColor.style.display= "none";
		/**alert("you passed this ROUND, press okay to move to next ROUND");**/
		  
			round +=1;
			openedColor="";
			colorsOpen= 0;
			 if (round==9){ alert("GAME OVER!");


			}
			
			}
			else { 
				this.style.opacity = 0;
			   openedColor.style.opacity=0;
			   alert("go to next round");
			   colorsOpen = 0;
		}
	 		}
	     })
	    }	
	}
	    

	/********/



	/**********/