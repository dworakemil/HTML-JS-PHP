var speed = 50;
var speedCopy;

var direction = Math.floor((Math.random() * 4) + 1);

var starttime = Date.now();


//bardzo fajna funkcja z neta do pobierania atr url
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var points = -1;

var gamesizex = getParameterByName("gsx");
var gamesizey = getParameterByName("gsy");
 // alert(gamesizex);
gamesizexhelper = gamesizex/10;
gamesizexhelper = Math.round(gamesizexhelper);
gamesizexhelper = gamesizexhelper*10;
gamesizeyhelper = gamesizey/10;
gamesizeyhelper = Math.round(gamesizeyhelper);
gamesizeyhelper = gamesizeyhelper*10;



var posy = gamesizeyhelper/2;
var posx = gamesizexhelper/2;


var snakeposx = [];
var snakeposy = [];



var interv = setInterval(function(){update();}, speed*4);



function gametypebuttons(ch){
	if(ch==1){
		window.location.replace("?gsx=25&gsy=25");
	}
	if(ch==2){
		document.getElementById("choosefield").style.display = 'block';
		document.getElementById("startfield").style.display = 'none';
	}
	if(ch==3){
		document.getElementById("startfield").style.display = 'none';
		document.getElementById("settings").style.display = 'block';
	}
	
}




function update(){
	if(posx<0 || posx>gamesizex-1 || posy<0 || posy>gamesizey-1){
		lose();
	}else{
		if(posx == pointposx && posy == pointposy){
			point();
		};
		
//dzialanie ogona, nie dotykac, bardzo newralgiczny kod
		var i = points;
		
		if(points>1){
			while(i>1){
				var h = i-1;
				var snakevar = "snake"+i;
				
				snakeposx[i] = snakeposx[h];
				snakeposy[i] = snakeposy[h];
				
				
				
				document.getElementById(snakevar).style.left = snakeposx[h]+'px';
				document.getElementById(snakevar).style.top = snakeposy[h]+'px';
				
				
				i--;
			}
		}
		if(points>0){
			snakeposx[1] = posx*10;
			snakeposy[1] = posy*10;
			
			
			document.getElementById('snake1').style.left = snakeposx[1]+'px';
			document.getElementById('snake1').style.top = snakeposy[1]+'px';
		}
		move(direction);
		
		
//detekcja kolizji z ogonem
		var i = 1;

		while(i<=points){
			var j = 1;
			while(j<=points){
				if(i!=j){
					if(snakeposx[i] == snakeposx[j] && snakeposy[i] == snakeposy[j]){
						lose();
					}
				}
				if(posx*10 == snakeposx[j] && posy*10 == snakeposy[j]){
					lose();
				}
				j++;
			}
			i++;
		}
	}
}


function lose(){
	engine.pause();
	document.getElementById("resume").style.display = "none";
	document.getElementById("lose").style.display = "block";
	
	if(gamesizex == 25 && gamesizey == 25){
		document.getElementById("all").style.display = "none";
		document.getElementById("ranklose").style.display = "block";
		document.getElementById("ranklose").innerHTML = "Przegrałeś!</br></br>Uzyskałeś "+points+"pkt";
	}
}

var engine = {
	pause: function(){
		clearInterval(interv);
		document.getElementById("pause").style.display = "none";
		document.getElementById("resume").style.display = "block";
	},
	resume: function(){
		interv = setInterval(function(){update();}, speed*4);
		document.getElementById("pause").style.display = "block";
		document.getElementById("resume").style.display = "none";
	},
	restart: function(){
		window.location = "";
	}
}

function point(){
	pointposx = Math.floor((Math.random() * gamesizex-1) + 1);
	pointposy = Math.floor((Math.random() * gamesizey-1) + 1);
	points++;
	speed = speed*0.98;
	document.getElementById("point").style.left = pointposx*10+'px';
	document.getElementById("point").style.top = pointposy*10+'px';
	document.getElementById("pointCounter").innerHTML = points;
	clearInterval(interv);
	interv = setInterval(function(){update();}, speed*4);
	
//ogon
	if(points>0){
		var divbig = document.getElementById('border');
		var div = document.getElementById('snake'),
		clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
		snakeclonevar = "snake"+points;
		clone.id = snakeclonevar;
		divbig.appendChild(clone);
		
		if(points==1){
			snakeposx[points] = posx;
			snakeposy[points] = posy;
		}
		
		if(points>1){
			var pointsdecrement = points-1;
			snakeposx[points] = snakeposx[pointsdecrement];
			snakeposy[points] = snakeposy[pointsdecrement];
		}
	}
}




function start(){
	if(getParameterByName("gsx") && getParameterByName("gsy")){
		document.getElementById("snake").style.left = posx*10+'px';
		document.getElementById("snake").style.top = posy*10+'px';
		document.getElementById("border").style.width = gamesizex*10+'px';
		document.getElementById("border").style.height = gamesizey*10+'px';
		document.getElementById("startfield").style.display = 'none';
		document.getElementById("all").style.display = 'block';
		point();
	}
}


//function update(){
//	var interv = setInterval(function(){move(direction);}, speed*6);
//}









function move(d){
	switch (d){
		case 1:
			posx += 1;
			document.getElementById("snake").style.left = posx*10+'px';
			break;
			
		case 2:
			posx -= 1;
			document.getElementById("snake").style.left = posx*10+'px';
			break;
			
		case 3:
			posy -= 1;
			document.getElementById("snake").style.top = posy*10+'px';
			break;
			
		case 4:
			posy += 1;
			document.getElementById("snake").style.top = posy*10+'px';
			break;
	}
}