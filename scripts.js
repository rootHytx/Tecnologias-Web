var cavs=0, sems=0, pc=0, diff=0;
function registerB(){
	document.getElementById('entryScreen').style.display="none";
	document.getElementById('registerScreen').style.display = "block";
}
function loginB(){
	document.getElementById('entryScreen').style.display = "none";
}
function cavidades(x){
	cavs=parseInt(x.value);
}
function sementes(x){
	sems=parseInt(x.value);
	if(sems<2 || sems>10){
		alert("AVISO: Número inválido de sementes, valores entre 2 e 10 apenas.");
		x.value='';
	}
}
function playPC(x){
	pc=parseInt(x.value);
}
function showDiff(x){
	if(x.value==="1"){
		document.getElementById('dificuldade').style.display = "block";
		document.getElementById('gameStart').style.display = "block";
	}
	else {
		document.getElementById('dificuldade').style.display = "none";
		document.getElementById('gameStart').style.display = "none";
	}
}
function showGameStart(){
	document.getElementById('gameStart').style.display = "block";
}

function dificuldade(x){
	diff=parseInt(x.value);
}

function aboutUs(){
	document.getElementById('entryScreen').style.display="none";
	document.getElementById('aboutUsPage').style.display = "block";
}
function instructions(){
	document.getElementById('entryScreen').style.display="none";
	document.getElementById('instructionsPage').style.display = "block";
}

function gameStart(){
	if(pc==1){
		document.getElementById('entryScreen').style.display="none";
		document.getElementById('gameVSPC').style.display="block";

		var divOasis1AI = document.getElementById('divOasis1AI');
		var divOasis2AI = document.getElementById('divOasis2AI');
		var divPlayerPC = document.getElementById('divPlayerPC');
		var divPlayer = document.getElementById('divPlayer');
		var buttonList = [];
		var points=[];

		var oasis1 = document.createElement("button");
		oasis1.id="oasis1AI";
		oasis1.style.whiteSpace = "pre-line";
		oasis1.textContent = "Player:\n";
		oasis1.value=0;
		oasis1.textContent+=oasis1.value;
		oasis1.className = "button";
		oasis1.style.height = "100%";
		oasis1.style.width = "100%";
		divOasis1AI.appendChild(oasis1);
		var oasis2 = document.createElement("button");
		oasis2.id="oasis2AI";
		oasis2.style.whiteSpace = "pre-line";
		oasis2.textContent = "PC:\n";
		oasis2.value=0;
		oasis2.textContent+=oasis2.value;
		oasis2.className = "button";
		oasis2.style.height = "100%";
		oasis2.style.width = "100%";
		divOasis2AI.appendChild(oasis2);

		for(var i=1;i<=cavs;i++){
			var position = 2.5*i;
			var butpc = document.createElement("button");
			butpc.value=sems;
			butpc.innerText = butpc.value;
			butpc.className = "button";
			butpc.style.position = "relative";
			butpc.style.left = position.toString() + "%";
			butpc.style.width = "8%";
			butpc.style.length = "100%";
			butpc.id="butpc-"+i;
			buttonList.push(butpc);
			divPlayerPC.appendChild(butpc);
			var butp1 = document.createElement("button");
			butp1.value=sems;
			butp1.innerText = butp1.value;
			butp1.className = "button";
			butp1.style.position = "relative";
			butp1.style.left = position.toString() + "%";
			butp1.style.width = "8%";
			butp1.style.length = "100%";
			butp1.id="butp1-"+i;
			buttonList.unshift(butp1);
			divPlayer.appendChild(butp1);
		}
		for(var i=0, mid=0; i<=buttonList.length; i++){
			if(i==buttonList.length/2 && mid==0){
				points.push(oasis1);
				mid=1;
				i--;
			}
			else if(i==buttonList.length){
				points.push(oasis2);
				break;
			}
			else{
				points.push(buttonList[i]);
			}
		}
		buttonList.forEach(function(x){
			x.addEventListener("click", function(){
				//basta fazer rotacao de sementes + regras adicionais!!!
				var position=points.indexOf(x);
				var curSems=x.value;
				x.value=0;
				x.innerText=x.value;
				for(var i=1;i<=curSems;i++){
					if(position+i>=points.length){
						curSems=curSems-(points.length-position);
						position=0;
						i=-1;
						continue;
					}
					var cur=points[position+i];
					cur.value=parseInt(cur.value)+1;
					if(cur.id=="oasis1") cur.textContent="Player:\n" + cur.value;
					else if(cur.id=="oasis2") cur.textContent="PC:\n" + cur.value;
					else cur.innerText=cur.value;
				}
			});
		});
	}
	else{
		var playwidth = cavs*10;
		document.getElementById("players").style.width= playwidth.toString() + "%";
		document.getElementById('entryScreen').style.display="none";
		document.getElementById('gameVSPlayer').style.display="block";


		var divOasis1 = document.getElementById('divOasis1');
		var divOasis2 = document.getElementById('divOasis2');
		var divPlayer1 = document.getElementById('divPlayer1');
		var divPlayer2 = document.getElementById('divPlayer2');
		var buttonList = [];
		var points=[];

		var oasis1 = document.createElement("button");
		oasis1.id="oasis1";
		oasis1.style.whiteSpace = "pre-line";
		oasis1.textContent = "Player 1:\n";
		oasis1.value=0;
		oasis1.textContent+=oasis1.value;
		oasis1.className = "button";
		oasis1.style.height = "100%";
		oasis1.style.width = "100%";
		divOasis1.appendChild(oasis1);
		var oasis2 = document.createElement("button");
		oasis2.id="oasis2";
		oasis2.style.whiteSpace = "pre-line";
		oasis2.textContent = "Player 2:\n";
		oasis2.value=0;
		oasis2.textContent+=oasis2.value;
		oasis2.className = "button";
		oasis2.style.height = "100%";
		oasis2.style.width = "100%";
		divOasis2.appendChild(oasis2);

		for(var i=1;i<=cavs;i++){
			var position = 2.5*i;
			var butp1 = document.createElement("button");
			butp1.value=sems;
			butp1.innerText = butp1.value;
			butp1.className = "button";
			butp1.style.position = "relative";
			butp1.style.left = position.toString() + "%";
			butp1.style.width = "8%";
			butp1.style.length = "100%";
			butp1.id="butp1-"+i;
			buttonList.push(butp1);
			divPlayer1.appendChild(butp1);
			var butp2 = document.createElement("button");
			butp2.value=sems;
			butp2.innerText = butp2.value;
			butp2.className = "button";
			butp2.style.position = "relative";
			butp2.style.left = position.toString() + "%";
			butp2.style.width = "8%";
			butp2.style.length = "100%";
			butp2.id="butp2-"+i;
			buttonList.unshift(butp2);
			divPlayer2.appendChild(butp2);
		}
		for(var i=0, mid=0; i<=buttonList.length; i++){
			if(i==buttonList.length/2 && mid==0){
				points.push(oasis1);
				mid=1;
				i--;
			}
			else if(i==buttonList.length){
				points.push(oasis2);
				break;
			}
			else{
				points.push(buttonList[i]);
			}
		}
		buttonList.forEach(function(x){
			x.addEventListener("click", async function(){
				//basta fazer rotacao de sementes + regras adicionais!!!
				var prevplay=0;
				if(buttonList.indexOf(x)<buttonList.length/2){
					document.getElementById("gameStatus").textContent="Jogada: Player 1...";
					prevplay=1;
				}
				else{
					document.getElementById("gameStatus").textContent="Jogada: Player 2...";
					prevplay=2;
				}

				var position=points.indexOf(x);
				var curSems=x.value;
				x.value=0;
				x.innerText=x.value;
				for(var i=1;i<=curSems;i++){
					if(position+i>=points.length){
						curSems=curSems-(points.length-position);
						position=0;
						i=-1;
						continue;
					}
					var cur=points[position+i];
					cur.value=parseInt(cur.value)+1;
					if(cur.id=="oasis1") cur.textContent="Player 1:\n" + cur.value;
					else if(cur.id=="oasis2") cur.textContent="Player 2:\n" + cur.value;
					else cur.innerText=cur.value;
					if(i==curSems && parseInt(cur.value)>1 && cur.id!="oasis1" && cur.id!="oasis2"){
						await new Promise(r => setTimeout(r, 1000));
						curSems=cur.value;
						cur.value=0;
						cur.innerText=cur.value;
						position=points.indexOf(cur);
						i=0;
					}
					else if(i==curSems && cur.id=="oasis1"){
						prevplay=2;
					}
					else if(i==curSems && cur.id=="oasis2"){
						prevplay=1;
					}
					else{
						if(prevplay==1) document.getElementById("gameStatus").textContent="Turno: Player 2...";
						else document.getElementById("gameStatus").textContent="Turno: Player 1...";
					}
				}
			});
		});
	}
}

