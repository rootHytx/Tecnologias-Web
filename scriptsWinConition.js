var cavs=0, sems=0, pc=0, diff=0;
var points=[];
var pointsTexts=[];
var pointsSems=[];
var regUser="";
var loginUser="";

function registerB(){
	document.getElementById('entryScreen').style.display="none";
	document.getElementById('registerScreen').style.display = "flex";
}
function register(){
	if(document.getElementById("registerNameBox").value.length==0){
		alert("Introduza um Username!");
	}
	else{
		document.getElementById('entryScreen').style.display="block";
		document.getElementById('registerScreen').style.display = "none";	
	}
}
function loginB(){
	document.getElementById('entryScreen').style.display = "none";
	document.getElementById('loginScreen').style.display = "flex";
}
function login(){
	if(document.getElementById("loginNameBox").value.length==0){
		alert("Introduza um Username!");
	}
	else{
		document.getElementById('entryScreen').style.display="block";
		document.getElementById('loginScreen').style.display = "none";	
	}
}
function cavidades(x){
	cavs=parseInt(x.value);
	switch(cavs){
		case 2:
			document.getElementById('curGamePlayer').style.width="30%";
			document.getElementById('players').style.width="60%";
			break;
		case 3:
			document.getElementById('curGamePlayer').style.width="40%";
			document.getElementById('players').style.width="70%";
			break;
		case 6:
			document.getElementById('curGamePlayer').style.width="60%";
			document.getElementById('players').style.width="80%";
			break;
		case 9:
			document.getElementById('curGamePlayer').style.width="80%";
			document.getElementById('players').style.width="85%";
			break;
	}
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

function createButton(i, player){
	var but = document.createElement("button");
	but.value=sems;
	but.className = "button";
	but.style.position = "relative";
	if(player==1){
		var position = i*30;
		but.style.left = position.toString() + "px";
		but.style.height = "100%";
		but.style.width = "100px";
		but.style.length = "100%";
		but.style.display = "flex";
		but.style.flexDirection = "column-reverse";
		but.style.justifyContent = "space-between";
		but.id="butp1-"+i;
		divPlayer1.appendChild(but);
		var butText = document.createElement("div");
		var butSems = document.createElement("div");
		butText.id = "butp1T-" + i;
		butText.innerText=but.value;
		butText.style.width = "100%";
		butText.style.textAlign = "center";
		butSems.style.height = "80%";
		butSems.style.width = "100%";
		butSems.style.display = "flex";
		butSems.style.justifyContent = "center";
		butSems.style.flexDirection = "column";
		butSems.style.flexWrap = "wrap";
		but.appendChild(butText);
		but.appendChild(butSems);
		points.unshift(but);
		pointsTexts.unshift(butText);
		pointsSems.unshift(butSems);
	}
	else{
		var position = i*30;
		but.style.right = position.toString() + "px";
		but.style.height = "100%";
		but.style.width = "100px";
		but.style.length = "100%";
		but.id="butp2-"+i;
		but.style.display = "flex";
		but.style.flexDirection = "column-reverse";
		but.style.justifyContent = "space-between";
		divPlayer2.appendChild(but);
		var butText = document.createElement("div");
		var butSems = document.createElement("div");
		butText.id = "butp2T-" + i;
		butText.innerText=but.value;
		butText.style.width = "100%";
		butText.style.textAlign = "center";
		butSems.style.height = "80%";
		butSems.style.width = "100%";
		butSems.style.display = "flex";
		butSems.style.justifyContent = "center";
		butSems.style.flexDirection = "column";
		butSems.style.flexWrap = "wrap";
		but.appendChild(butText);
		but.appendChild(butSems);
		points.unshift(but);
		pointsTexts.unshift(butText);
		pointsSems.unshift(butSems);
	}
}

async function gameStart(){
	if(pc==1){
		document.getElementById('entryScreen').style.display="none";
		document.getElementById('gameVSPC').style.display="block";
	}
	else{
		document.getElementById('entryScreen').style.display="none";
		document.getElementById('gameVSPlayer').style.display="block";

		points=[];
		pointsTexts=[];

		var divOasis1 = document.getElementById('divOasis1');
		var divOasis2 = document.getElementById('divOasis2');
		var divPlayer1 = document.getElementById('divPlayer1');
		var divPlayer2 = document.getElementById('divPlayer2');

		var oasis1 = document.createElement("button");
		var oasis1Text = document.createElement("div");
		var oasis1Sems = document.createElement("div");
		oasis1.id="oasis1";
		oasis1.style.whiteSpace = "pre-line";
		oasis1.value=0;
		oasis1.className = "button";
		oasis1.style.height = "90%";
		oasis1.style.width = "100px";
		oasis1.style.display = "flex";
		oasis1.style.flexDirection = "column-reverse";
		oasis1.style.justifyContent = "space-between";
		oasis1Text.id = "butO1T-" + i;
		oasis1Text.innerText= "Player 1:\n" + oasis1.value;
		oasis1Text.style.width = "100%";
		oasis1Text.style.textAlign = "center";
		oasis1Sems.style.height = "80%";
		oasis1Sems.style.width = "100%";
		oasis1Sems.style.display = "flex";
		oasis1Sems.style.justifyContent = "center";
		oasis1Sems.style.flexDirection = "column";
		oasis1Sems.style.flexWrap = "wrap";
		divOasis1.appendChild(oasis1);
		oasis1.appendChild(oasis1Text);
		oasis1.appendChild(oasis1Sems);

		var oasis2 = document.createElement("button");
		var oasis2Text = document.createElement("div");
		var oasis2Sems = document.createElement("div");
		oasis2.id="oasis2";
		oasis2.style.whiteSpace = "pre-line";
		oasis2.value=0;
		oasis2.className = "button";
		oasis2.style.height = "90%";
		oasis2.style.width = "100px";
		oasis2.style.display = "flex";
		oasis2.style.flexDirection = "column-reverse";
		oasis2.style.justifyContent = "space-between";
		oasis2Text.id = "butO2T-" + i;
		oasis2Text.innerText= "Player 2:\n" + oasis2.value;
		oasis2Text.style.width = "100%";
		oasis2Text.style.textAlign = "center";
		oasis2Sems.style.height = "80%";
		oasis2Sems.style.width = "100%";
		oasis2Sems.style.display = "flex";
		oasis2Sems.style.justifyContent = "center";
		oasis2Sems.style.flexDirection = "column";
		oasis2Sems.style.flexWrap = "wrap";
		divOasis2.appendChild(oasis2);
		oasis2.appendChild(oasis2Text);
		oasis2.appendChild(oasis2Sems);

		for(var i=1;i<=cavs;i++){
			createButton(i, 1);
		}
		points.unshift(oasis2);
		pointsTexts.unshift(oasis2Text);
		pointsSems.unshift(oasis2Sems);
		for(var i=1;i<=cavs;i++){
			createButton(i, 2);
		}
		points.push(oasis1);
		pointsTexts.push(oasis1Text);
		pointsSems.push(oasis1Sems);

		var curplay=1;

		for(var i=0;i<points.length;i++){
			updateSems(points[i]);
		}

		points.forEach(async function(x){
			if(x.id!='oasis1' && x.id!='oasis2'){
				x.addEventListener("click", async function(){
					var position=points.indexOf(x);
					var origin = position;
					if(curplay==1 && position<points.length/2){
						var text=document.getElementById("gameStatus").textContent;
						document.getElementById("gameStatus").style.color="red";
						document.getElementById("gameStatus").textContent="AVISO: Turno do Player 1!!!";
						await new Promise(r => setTimeout(r, 3000));
						document.getElementById("gameStatus").style.color="black";
						document.getElementById("gameStatus").textContent=text;
						return;
					}
					if(curplay==2 && position>=points.length/2){
						var text=document.getElementById("gameStatus").textContent;
						document.getElementById("gameStatus").style.color="red";
						document.getElementById("gameStatus").textContent="AVISO: Turno do Player 2!!!";
						await new Promise(r => setTimeout(r, 3000));
						document.getElementById("gameStatus").style.color="black";
						document.getElementById("gameStatus").textContent=text;
						return;
					}
					if(x.value==0) return;
					var xTest=pointsTexts[position];
					var curSems=x.value;
					x.value=0;
					xTest.innerText=x.value;
					updateSems(x);
					position++;
					for(var i=1;i<=curSems;i++ , position++){
						var cur=points[position];
						var curText=pointsTexts[position];
						if(cur.id=="oasis1" && curplay==2){
							i-=1;
							position=-1;
							continue;
						}
						if(cur.id=="oasis2" && curplay==1){
							i-=1;
							continue;
						}
						if(i==curSems && parseInt(cur.value)==0 && ~~((points.length/2)/position)==~~((points.length/2)/origin) && cur.id!='oasis1' && cur.id!='oasis2'){
							var stealFrom;
							if(~~((points.length/2)/position)==0){
								stealFrom=points.length/2-1+Math.abs(points.length/2-1-position);
								cur.value=parseInt(points[stealFrom].value);
								points[stealFrom].value=0;
								curText.innerText=cur.value;
								pointsTexts[stealFrom].innerText=points[stealFrom].value;
								updateSems(cur);
								updateSems(points[stealFrom]);
							}
							else{
								stealFrom=points.length/2-1-Math.abs(points.length/2-1-position);
								cur.value=parseInt(points[stealFrom].value);
								points[stealFrom].value=0;
								curText.innerText=cur.value;
								pointsTexts[stealFrom].innerText=points[stealFrom].value;
								updateSems(cur);
								updateSems(points[stealFrom]);
							}
						}
						cur.value=parseInt(cur.value)+1;
						updateSems(cur);
						if(cur.id=="oasis1"){
							curText.innerText= "Player 1:\n" + cur.value;
						}
						else if(cur.id=="oasis2"){
							curText.innerText= "Player 2:\n" + cur.value;
						}
						else curText.innerText=cur.value;
						if(i==curSems && cur.id=="oasis1"){
							curplay=2;
						}
						else if(i==curSems && cur.id=="oasis2"){
							curplay=1;
						}
						if(position+1>=points.length){
							position=-1;
						}
						await new Promise(r => setTimeout(r, 500));
					}
					if(curplay==1){
						document.getElementById("gameStatus").textContent="Turno: Player 2";
						curplay=2;
					}
					else{
						document.getElementById("gameStatus").textContent="Turno: Player 1";
						curplay=1;
					}
					var totalSum1=0, totalSum2=0;
					for(var i=0;i<points.length/2-1;i++){
						totalSum2+=parseInt(points[i].value);
					}
					for(var i=points.length/2;i<points.length-1;i++){
						totalSum1+=parseInt(points[i].value);
					}
					if(totalSum1==0 || totalSum2==0){
						oasis1.value=parseInt(oasis1.value) + totalSum1;
						oasis2.value=parseInt(oasis2.value) + totalSum2;
						oasis1Text.innerText="Player 1:\n" + oasis1.value;
						oasis2Text.innerText="Player 2:\n" + oasis2.value;
						gameFinished();
  						this.removeEventListener('click', arguments.callee);
					}
				});
			}
		});
	}
}

async function updateSems(x) {
	var curSems=points.indexOf(x);
	var semsList = pointsSems[curSems].querySelectorAll(".semsClass");
	for(var i=0;i<semsList.length;i++){
		semsList[i].remove();
	}
	for(var i=0;i<x.value;i++){
		var temp = document.createElement("div");
		temp.className="semsClass";
		temp.style.height = "4px";
		temp.style.width = "4px";
		temp.style.position = "relative";
		temp.style.background = "white";
		temp.style.borderRadius = "50%";
		temp.style.border = "2px double purple";
		temp.style.borderColor = "purple";
		pointsSems[curSems].appendChild(temp);
	}
}

async function gameFinished(){
	var p1Points = points[points.length-1].value;
	var p2Points = points[points.length/2-1].value;
	for(var i=0;i<points.length-1;i++){
		if(i==points.length/2-1) continue;
		else{
			var oldNode=points[i];
			oldNode.replaceWith(oldNode.cloneNode(true));
		}
	}
	if(p1Points>p2Points) winner(1);
	else if(p1Points<p2Points) winner(2);
	else winner(3);
}

async function winner(x){
	if(x==1){
		document.getElementById("gameStatus").textContent="VENCEDOR: Player 1!!!";
	}
	if(x==2){
		document.getElementById("gameStatus").textContent="VENCEDOR: Player 2!!!";
	}
	if(x==3){
		document.getElementById("gameStatus").textContent="EMPATE!!!";
	}
	/*var parent = document.getElementById("gameStatus");
	var playAgainDiv = document.createElement("div");
	playAgainDiv.className = "buttons";
	var playAgain = document.createElement("button");
	playAgain.className = "button";
	playAgain.innerText = "Play Again";
	playAgain.onclick = gameStart(0);
	parent.appendChild(playAgainDiv);
	playAgainDiv.appendChild(playAgain);*/

	while(true){
			var r=Math.floor(Math.random() * 255) , g=Math.floor(Math.random() * 255) , b=Math.floor(Math.random() * 255);
			var color = "rgb(" + r + "," + g + "," + b + ")";
			document.getElementById("gameStatus").style.color = color;
			await new Promise(r => setTimeout(r, 100));
		}
}

function createDivs(x, parent, onlyChild){
	var n = x.value;
	for(var i=0;i<n;i++){
		var parent = document.getElementById();
		var onlyChild = document.createElement("div");
		onlyChild.style.background = "white";
	    onlyChild.style.borderRadius= "50%";
	    onlyChild.style.borderColor= "purple";
	    onlyChild.style.width= "10px";
	    onlyChild.style.height= "50px";
	    onlyChild.style.transform = "skewX(-10deg)";
	    teste.appendChild(onlyChild);
	}
}
