var mem_arr = ['!','!','@','@','#','#','$','$','%','%','&','&','*','*','+','+'];
var mem_vals = [];
var tile_ids = [];
var  opened_tiles = 0;
Array.prototype.memory_tile_mixing = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function restart(){
  opened_tiles = 0;
  var display = '';
    mem_arr.memory_tile_mixing();
  for (var x = 0; x < mem_arr.length; x++){
    display += '<div id="tile_'+x+'" onclick=" doGame(this,\''+mem_arr[x]+'\')"></div>';
  }
  document.getElementById('board').innerHTML = display;
}
function doGame(tile,val){
  if (tile.innerHTML == "" && mem_vals.length < 2){
    tile.style.background = '#FFF';
    tile.innerHTML = val;
    if(mem_vals.length == 0){
      mem_vals.push(val);
      tile_ids.push(tile.id);
    } else if(mem_vals.length == 1){
      mem_vals.push(val);
      tile_ids.push(tile.id);
      if(mem_vals[0] == mem_vals[1]){
         opened_tiles += 2;
        /***empty the two arrays****/
        mem_vals = [];
              tile_ids = [];
        /****checking to see if the entire board is empty***/
        if( opened_tiles == mem_arr.length){
          alert("the game is restarting");
          document.getElementById('board').innerHTML = "";
          restart();
        }
      } else {
        function turntheback(){
            /*** turn the two tiles back***/
            var tile_1 = document.getElementById(tile_ids[0]);
            var tile_2 = document.getElementById(tile_ids[1]);
            tile_1.style.background = 'url("cover.png") no-repeat';
                  tile_1.innerHTML = "";
            tile_2.style.background = 'url("cover.png") no-repeat';
                  tile_2.innerHTML = "";
            /***empty both array***/
            mem_vals = [];
                  tile_ids = [];
        }
        setTimeout(turntheback, 720);
      }
    }
  }
}

