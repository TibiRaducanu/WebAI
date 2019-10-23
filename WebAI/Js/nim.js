var numeJucator, diff = 5, time;
var lastMouseX = 0;
var lastMouseY = 0;
var mouseDown = 0;
var svgLine, newLine;
var v, startFirst = 1;
var clickDisabled = 0;

window.onload = function(){
	var sheet = document.createElement("DIV");
	sheet.style.fontFamily = "'Press Start 2P', Helvetica, sans-serif";
	sheet.style.transition = "all 0.5s ease";
	sheet.id = "background";
	sheet.style.position = "relative";
	sheet.style.backgroundColor = "black";
	sheet.style.width = "80%";
	sheet.style.height = "80%";
	sheet.style.paddingLeft = "20px";
	sheet.style.paddingRight = "20px";
	sheet.style.margin = "0 auto";
	sheet.style.opacity = "1";
	document.body.appendChild(sheet);
	Reload();
}

function Reload(){
	AfisareReguli();
	AfisareAnimatie();
	var sheet = document.getElementById("background");
	var btnUnderstood = document.createElement("BUTTON");
	btnUnderstood.className = "btn";
	btnUnderstood.innerHTML = "Understood";
	btnUnderstood.addEventListener("click", function(){
		Clean();
		Page2();
	});
	sheet.appendChild(btnUnderstood);
}

function PrintRule(text, p){
	var text1 = document.createTextNode(text);
	p.appendChild(text1);
	var line = document.createElement("BR");
	p.appendChild(line);
	line = document.createElement("BR");
	p.appendChild(line);
}

function AfisareReguli(){
	var sheet = document.getElementById("background");
	var p = document.createElement("p");
	p.id = "instructiuni";

	PrintRule("Welcome to NIM game!", p);
	PrintRule("Rules:", p);
	PrintRule("1. You can pick at least one stone at every step, you can pick many stones as well", p);
	PrintRule("2. You can pick stones from only one line at a time", p);
	PrintRule("3. The player that picks the last stone loses", p);
	PrintRule("4. You can press 'R' to restart the game or simply press the 'Restart' button", p);

	p.style.opacity = "1";
	p.style.color = "green";
	var line6 = document.createElement("BR");
	sheet.appendChild(p);
	sheet.insertBefore(line6,p);
}

function AfisareAnimatie(){
	var sheet = document.getElementById("background");
	var line = document.createElement("BR");
	sheet.appendChild(line);
	var ob = document.createElement("DIV");
	ob.style.position = "relative";
	ob.style.margin = "0 auto";
	ob.style.backgroundColor = "black";
	ob.style.width = parseInt(sheet.clientWidth) * 0.8 + 'px';
	ob.style.height = "200px";
	sheet.appendChild(ob);
	var child = document.createElement("DIV");
	child.style.position = "absolute";
	child.style.backgroundColor = "green";
	child.style.width = "100px";
	child.style.height = "100px";
	child.style.border = "4px dotted orange";
	child.style.top = "50px";
	child.style.left = "0px";
	child.innerHTML = "|<br>||<br>|||<br>";
	ob.appendChild(child);

	setInterval(function(){
		if(parseInt(child.style.left) >= 800) child.style.left = "0px";
		else{
			child.style.left = (parseInt(child.style.left) + 4) + 'px';
		}
	}, 15);
}

function Clean(){
	var sheet = document.getElementById("background");
	while (sheet.firstChild) {
	    sheet.removeChild(sheet.firstChild);
	}
}

function CreateInputText(){
	numeJucator = document.createElement("INPUT");
	numeJucator.type = "text";
	numeJucator.style.width = "450px";
	numeJucator.style.fontFamily = "'Press Start 2P', Helvetica, sans-serif";
	numeJucator.placeholder = "Type your name here.";
	var sheet = document.getElementById("background");
	sheet.appendChild(numeJucator);
	var line = document.createElement("BR");
	sheet.insertBefore(line, numeJucator);
}

function Page2(){
	var sheet = document.getElementById("background");
	CreateInputText();
	var btnGo = document.createElement("BUTTON");
	btnGo.className = "btn";
	btnGo.innerHTML = "Next";
	btnGo.addEventListener("click", function(){
		Clean();
		Page3();
	});
	sheet.appendChild(btnGo);
}

function CreateInputRange(){
	intensitate = document.createElement("INPUT");
	intensitate.type = "range";
	intensitate.id = "range";
	intensitate.min = "8";
	intensitate.max = "10";
	intensitate.onchange = function(){
		var sheet = document.getElementById("background");
		sheet.style.opacity = this.value / 10;
	}
	var sheet = document.getElementById("background");
	sheet.appendChild(intensitate);

	var label = document.createElement("LABEL");
	label.htmlFor = "range";
	label.innerHTML = "Select background intensity: ";
	label.style.color = "white";
	sheet.insertBefore(label,intensitate);
}

function Page3(){
	var sheet = document.getElementById("background");
	CreateInputRange();
	var btnGo = document.createElement("BUTTON");
	btnGo.className = "btn";
	btnGo.innerHTML = "Next";
	btnGo.addEventListener("click", function(){
		Clean();
		Page4();
	});
	sheet.appendChild(btnGo);
}

function CreateInputSelect(){
	culoare = document.createElement("SELECT");
	culoare.style.fontFamily = "'Press Start 2P', Helvetica, sans-serif";

	var option1 = document.createElement("option");
	option1.text = "black";
	culoare.add(option1);

	var option2 = document.createElement("option");
	option2.text = "gray";
	culoare.add(option2);

	var option3 = document.createElement("option");
	option3.text = "indigo";
	culoare.add(option3);

	culoare.id = "culoare";
	culoare.onchange = function(){
		var sheet = document.getElementById("background");
		var selOption = this.options[this.selectedIndex]; 
		sheet.style.backgroundColor = selOption.text;
	}
	var sheet = document.getElementById("background");
	sheet.appendChild(culoare);

	var label = document.createElement("LABEL");
	label.htmlFor = "culoare";
	label.innerHTML = "Select background colour: ";
	label.style.color = "white";
	sheet.insertBefore(label,culoare);
}

function Page4(){
	var sheet = document.getElementById("background");
	CreateInputSelect();
	var btnGo = document.createElement("BUTTON");
	btnGo.className = "btn";
	btnGo.innerHTML = "Next";
	btnGo.addEventListener("click", function(){
		Clean();
		Page5();
	});
	sheet.appendChild(btnGo);
}

function CreateInputCheckBox(){
	var sheet = document.getElementById("background");
	btn1 = document.createElement("INPUT");
	btn1.id = "first";
	btn1.type = "checkbox";
	btn1.innerHTML = "Yes";
	btn1.checked = true;
	var label1 = document.createElement("LABEL");
	label1.style.color = "white";
	label1.htmlFor = "first";
	label1.innerHTML = "Yes";

	btn2 = document.createElement("INPUT");
	btn2.id = "notfirst";
	btn2.type = "checkbox";
	btn2.innerHTML = "No";
	btn2.checked = false;
	var label2 = document.createElement("LABEL");
	label2.style.color = "white";
	label2.htmlFor = "notfirst";
	label2.innerHTML = "No";

	var line1 = document.createElement("BR");
	sheet.appendChild(line1);
	var p = document.createElement("P");
	var txt = document.createTextNode("Do you want to have the first move?");
	p.style.color = "white";
	p.appendChild(txt);
	sheet.appendChild(p);
	var line2 = document.createElement("BR");
	sheet.appendChild(line2);
	sheet.appendChild(label1);
	sheet.insertBefore(btn1, label1);
	sheet.appendChild(label2);
	sheet.insertBefore(btn2, label2);

	btn1.onchange = function(e){
		btn2 = document.getElementById("notfirst");
		if(e.currentTarget.checked){
			btn2.checked = false;
			startFirst = 1;
		}
		else{
			btn2.checked = true;
			startFirst = 0;
		}
	} 
	btn2.onchange = function(e){
		btn1 = document.getElementById("first");
		if(e.currentTarget.checked){
			btn1.checked = false;
			startFirst = 0;
		}
		else{
			btn2.checked = true;
			startFirst = 1;
		}
	} 
}

function Page5(){
	var sheet = document.getElementById("background");
	CreateInputCheckBox();
	var btnGo = document.createElement("BUTTON");
	btnGo.className = "btn";
	btnGo.innerHTML = "Next";
	btnGo.addEventListener("click", function(){
		Clean();
		Page6();
	});
	var line = document.createElement("BR");
	sheet.appendChild(line);
	sheet.appendChild(btnGo);
}

function CreateOneRadio(dificultate, nr, checked){
	var radio = document.createElement("INPUT");
	radio.type = "radio";
	radio.name = "dificultate";
	radio.id = dificultate;
	radio.value = nr;
	radio.checked = checked;
	if(checked) diff = nr;

	var label = document.createElement("LABEL");
	label.innerHTML = dificultate;
	label.htmlFor = dificultate;
	label.style.color = "white";

	var sheet = document.getElementById("background");
	sheet.appendChild(label);
	sheet.insertBefore(radio, label);

	var line = document.createElement("BR");
	sheet.appendChild(line);
}

function CreateInputRadio(){
	var sheet = document.getElementById("background");
	var h1 = document.createElement("H1");
	h1.innerHTML = "Select the difficulty:";
	h1.style.color = "white";
	var line1 = document.createElement("BR");
	sheet.appendChild(h1);
	sheet.insertBefore(line1, h1);
	var line2 = document.createElement("BR");
	sheet.appendChild(line2);

	CreateOneRadio("Infant", 1, 1);
	CreateOneRadio("Easy", 2, 0);
	CreateOneRadio("Medium", 3, 0);
	CreateOneRadio("Hard", 4, 0);
	CreateOneRadio("Extreme", 5, 0);
	CreateOneRadio("Random", 6, 0);
}

function SetDiff(){
	var nodes = document.querySelectorAll("input[type=radio]");
	for(var i = 0; i < nodes.length; i++){
		if(nodes[i].checked) diff = parseInt(nodes[i].value);
	}
}

function Page6(){
	var sheet = document.getElementById("background");
	CreateInputRadio();
	var btnGo = document.createElement("BUTTON");
	btnGo.className = "btn";
	btnGo.innerHTML = "Next";
	btnGo.addEventListener("click", function(){
		SetDiff();
		Clean();
		Page7();
	});
	sheet.appendChild(btnGo);
}

function CreateTextArea(){
	var textArea = document.createElement("textarea");
	textArea.placeholder = "Type a message. This message will appear when you will win.";
	textArea.style.width = "300px";
	textArea.style.height = "100px";
	textArea.style.fontFamily = "'Press Start 2P', Helvetica, sans-serif";
	textArea.onchange = function(){
		localStorage.setItem("winningText",textArea.value);
		var win = localStorage.getItem('winningText');
	}
	var sheet = document.getElementById("background");
	sheet.appendChild(textArea);
}

function Page7(){
	var sheet = document.getElementById("background");
	CreateTextArea();
	var btnGo = document.createElement("BUTTON");
	btnGo.className = "btn";
	btnGo.innerHTML = "Start";
	btnGo.addEventListener("click", function(){
		Clean();
		StartGame();
	});
	sheet.appendChild(btnGo);
}

function StartGame(){
	CreateButtons();
	CreateSVG();
	CreatePiles();
	AddMouseEvents();
	if(!startFirst){
		setTimeout(function(){
			BotMove();
		}, 300);
	}
}

function CreatePiles(){
	switch(diff) {
	  	case 1:
		    v = new Array(2);
		    v[0] = 2; v[1] = 3;
		    break;

	  	case 2:
		    v = new Array(3);
		    v[0] = 1; v[1] = 3; v[2] = 5;
		    break;

 		case 3:
 			v = new Array(4);
 			v[0]=1; v[1]=3; v[2]=5;
        	v[3]=8;
        	break;

        case 4:
         	v = new Array(5);
        	v[0]=1; v[1]=3; v[2]=5;
        	v[3]=7; v[4]=9;
        	time = 1700;
        	break;

        case 5:
        	v = new Array(6);
        	v[0]=1; v[1]=3; v[2]=5;
        	v[3]=7; v[4]=9; v[5]=11;
        	break;

	    case 6:
	    	var nr = Math.floor(Math.random() * 4) + 3;
	    	v = new Array(nr);
	        for(var i=0;i<nr;i++) v[i]=Math.floor(Math.random() * 5) + 2;
	        v.sort();
	    	break;
	    }

	    if(diff == 5) time = 250;
	    else time = 1700;

	    var sheet = document.getElementById("background");

	    for(var i = 0; i < v.length; i++){
	    	var line = document.createElement("BR");
	    	line.style.clear = "both";
	    	line.line = i;
	    	line.className = "line";
	    	sheet.appendChild(line);
	    	line = document.createElement("BR");
	    	line.style.clear = "both";
	    	line.line = i;
	    	line.className = "line";
	    	sheet.appendChild(line);

	    	for(var j = 0; j < v[i]; j++){
	    		var pile = document.createElement("DIV");
	    		pile.className = "pile";
	    		pile.line = i;
	    		pile.checked = 0; 
	    		pile.style.width = "20px";
	    		pile.style.height = "70px";
	    		pile.style.display = "block";
	    		pile.style.marginLeft = "27px";
	    		pile.style.float = "left";
	    		pile.style.backgroundColor = "green";
	    		pile.style.border = "2px solid orange";
	    		sheet.appendChild(pile);
	    	}
	    }

}

function CreateButtons(){
	var btn1 = document.createElement("BUTTON");
	btn1.className = 'inGameBtn';
	btn1.style.display = "block";
	btn1.style.float = "right";
	btn1.innerHTML = "Random Theme";
	btn1.style.margin = "10px";
	btn1.addEventListener("click", function(){
		var sheet = document.getElementById('background');
		sheet.style.backgroundColor = getRandomColor();
		var piles = document.getElementsByClassName('pile');
		for(var i = 0; i < piles.length; i++) {
			piles[i].style.backgroundColor = getRandomColor();
		}
	});
	
	var btn2 = document.createElement("BUTTON");
	btn2.className = 'inGameBtn';
	btn2.style.display = "block";
	btn2.style.float = "right";
	btn2.innerHTML = "Restart";
	btn2.style.margin = "10px";
	btn2.addEventListener("click", function(){
		if(!clickDisabled){
			Clean();
			StartGame();
		}
	})

	var sheet = document.getElementById("background");
	sheet.appendChild(btn1);
	sheet.appendChild(btn2);
}

function AddMouseEvents(){
	var sheet = document.getElementById('background');
	var sheetX = $(sheet).offset().left;
	var sheetY = $(sheet).offset().top;

	$(sheet).on('mousedown', function(e) {
		if(!clickDisabled){
		    lastMouseX = parseInt(e.pageX-sheetX);
			lastMouseY = parseInt(e.pageY-sheetY);
		    mouseDown = true;
		}
	});

	$(sheet).on('mouseup', function(e) {
		if(!clickDisabled){
			mouseDown = false;
		    if(newLine){
		    	newLine.parentNode.removeChild(newLine);
		    	newLine = null;
		    }
		    DeletePiles();
		}
	});

	$(sheet).on('mousemove', function(e) {
		if(!clickDisabled){
		    var mouseX = parseInt(e.pageX-sheetX);
			var mouseY = parseInt(e.pageY-sheetY);
		    if(mouseDown) {
		    	if(newLine){
		    		newLine.parentNode.removeChild(newLine);
		    		newLine = null;
		    	}
		        CreateLine(mouseX, mouseY);
		    }
		}
	});

	$('.pile').on('mouseout', function(e) {
		if(mouseDown && !clickDisabled){
			e.currentTarget.checked ^= 1;
		}
	});

	$(window).keypress(function(e) {
	   var cod = e.charCode ? e.charCode : e.keyCode;
        var tasta = String.fromCharCode(cod);
        if(tasta == 'r' && !clickDisabled){
        	Clean();
			StartGame();
        }
	});

}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function CreateSVG(){
	svgLine = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgLine.setAttribute('id','svg');
	svgLine.style.position = "absolute";
    svgLine.style.height = document.getElementById("background").clientHeight;
    svgLine.style.width = document.getElementById("background").clientWidth;
    svgLine.style.pointerEvents = "none";
	svgLine.style.top = "0";
	svgLine.style.left = "0";
	var sheet = document.getElementById("background");
    sheet.appendChild(svgLine);
}

function CreateLine(mouseX, mouseY){
	svgLine = document.getElementById("svg");
	if(!svgLine) return;
	newLine = document.createElementNS("http://www.w3.org/2000/svg",'line');
    newLine.setAttribute('x1',lastMouseX);
    newLine.setAttribute('y1',lastMouseY);
    newLine.setAttribute('x2',mouseX);
    newLine.setAttribute('y2',mouseY);
    newLine.setAttribute("stroke", "white");
    newLine.setAttribute("stroke-width", "4");
    svgLine.appendChild(newLine);
}

function DeletePiles(){
	var piles = document.getElementsByClassName("pile");
	var linie = -1;
	var cnt = 0;
	for(var i = 0; i < piles.length; i++){
		var ob = piles[i];
		var obCheck = parseInt(ob.checked);
		var obLine = parseInt(ob.line);
		if(obCheck){
			if(linie != -1 && linie != obLine){
				ClearPiles();
				return;
			}
			linie = obLine;
			cnt++;
		}
	}

	if(!cnt) return;
	v[linie] -=cnt;
	for(var i = piles.length - 1; i >= 0; i--){
		if(!cnt) break;
		var ob = piles[i];
		var obCheck = parseInt(ob.checked);
		var obLine = parseInt(ob.line);
		if(obLine == linie){
			ob.parentNode.removeChild(ob);	
			cnt--;	
		}
	}
	if(!v[linie]) ClearLines(linie);
	ClearPiles();
	BotMove();
}

function ClearLines(linie){
	var brLines = document.getElementsByTagName("BR");
	for(var i = brLines.length - 1; i >= 0; i--){
		var ob = brLines[i];
		var obLine = ob.line;
		if(obLine == linie) ob.parentNode.removeChild(ob);
	}
}

function ClearPiles(){
	var piles = document.getElementsByClassName("pile");
	for(var i = 0; i < piles.length; i++) piles[i].checked = "0";
}

function BotMove(){
	var sheet = document.getElementById("background");
	var p = document.createElement("P");
	p.id = 'think';
	var text = document.createTextNode("Thinking..");
	p.style.textAlign = "center";
	p.style.color = "white";
	p.appendChild(text);
	sheet.appendChild(p);
	clickDisabled = 1;
	var id = setTimeout(function(){
		p = document.getElementById('think');
		if(p) p.parentNode.removeChild(p);
		AiMagic();
		clickDisabled = 0;
	}, time);

	var suma = 0;
	for(i = 0; i < v.length; i++) suma += v[i];
	if(suma == 0){
		if(p) p.parentNode.removeChild(p);
		clearTimeout(id);
		setTimeout(function(){
			ComputerHasWon();
			clickDisabled = 0;
		}, 500);
	}
	if(suma == 1){
		if(p) p.parentNode.removeChild(p);
		clearTimeout(id);
		clickDisabled = 0;
		setTimeout(function(){
			PlayerHasWon();
			clickDisabled = 0;
		}, 500);
	}
}

function AiMagic(){
	var suma = 0, xor = 0, maxim = 0;
	var pos = 0, pickedLine = 0, stonesNumber = 0;

	for(var i = 0; i < v.length; i++){
		suma += v[i];
		xor ^= v[i];
		if(v[i] > maxim){
			maxim = v[i];
			pos = i;
		}
	}

	if(xor == 0){
		pickedLine = pos;
		stonesNumber = 1;
		suma--;
		v[pos]--;
		BotDelete(pos, 1);
	}
	else{
		var oneLines = 0;
		for(var i = 0; i < v.length; i++){
			if(v[i] == 1) oneLines++;
		}

		var xorS = 0;
		for(var i = 0; i < v.length; i++){
			if(!v[i]) continue;
			xorS = xor ^ v[i];

			if(suma - v[i] == oneLines){
				if(oneLines % 2 == 0){
					pickedLine = i;
					stonesNumber = v[i] - 1;
				}
				else{
					pickedLine = i;
					stonesNumber = v[i];
				}
				break;
			}
			if(v[i] >= xorS){
				pickedLine = i;
				stonesNumber = v[i] - xorS;
				break;
			}
		}

		v[pickedLine] -= stonesNumber;
		suma -= stonesNumber;
		BotDelete(pickedLine, stonesNumber);
	}
}

function BotDelete(linie, numar){
	var piles = document.getElementsByClassName("pile");
	for(i = piles.length - 1; i >= 0; i--){
		if(!numar) break;
		var ob = piles[i];
		var obLine = ob.line;
		if(obLine == linie){
			ob.parentNode.removeChild(ob);
			numar--;
		} 
	}
	if(numar == v[linie]) ClearLines(linie);
}

function AddEndingButton(text, flag){
	var sheet = document.getElementById("background");
	var btn = document.createElement("BUTTON");
	btn.className = "btn";
	btn.innerHTML = text;
	btn.style.display = "block";
	btn.style.margin = "0 auto";
	btn.style.marginTop = "50px";
	if(flag == 0){
		btn.addEventListener("click", function(){
			Clean();
			var sheet = document.getElementById("background");
			StartGame();
		});
	}
	else{
		btn.addEventListener("click", function(){
			Clean();
			var sheet = document.getElementById("background");
			ResetValues();
			Reload();
		});
	}
	sheet.appendChild(btn);
}

function DisplayEnding(text){
	var sheet = document.getElementById("background");
	var p = document.createElement("P");
	var text = document.createTextNode(text);
	p.style.textAlign = "center";
	p.style.color = "white";
	p.appendChild(text);
	sheet.appendChild(p);
	var line = document.createElement("BR");
	sheet.insertBefore(line, p);
	AddEndingButton("Restart", 0);
	AddEndingButton("Main page", 1);
}

function PlayerHasWon(){
	Clean();
	var text = document.createTextNode('');
	if(numeJucator.value =='') text.nodeValue = "Random name";
	else text.nodeValue = numeJucator.value;
	var winningText = localStorage.getItem('winningText');
	if(!winningText) localStorage.setItem('winningText', 'Hoooorayy');
	DisplayWinningText();
	setTimeout(function(){
		if(id) clearInterval(id);
		Clean();
		DisplayEnding(text.nodeValue + " has won!");
	}, 4000);
}

function ComputerHasWon(){
	Clean();
	DisplayEnding("Computer has won!");
}

function ResetValues(){
	numeJucator = '', diff = 5, startFirst = 1;
	clickDisabled = 0;
	var sheet = document.getElementById('background');
	sheet.style.backgroundColor = "black";
	sheet.style.opacity = "1";
}

function DisplayWinningText(){
	var sheet = document.getElementById('background');
	var div = document.createElement('DIV');
	div.style.width = "300px";
	div.style.height = "100px";
	div.style.fontFamily = "'Press Start 2P', Helvetica, sans-serif";
	div.innerHTML = localStorage.getItem('winningText');
	div.style.textAlign = 'center';
	div.style.position = "absolute";
	div.style.backgroundColor = "orange";
	div.style.overflow = 'hidden';
	div.style.border = "4px dotted green";
	div.style.top = "0px";
	div.style.left = "0px";
	sheet.appendChild(div);
	var val = 3, sign = 1;

	id = setInterval(function(){
		if(parseInt(div.style.top) >= parseInt(sheet.clientHeight) - 200) sign = -1;
		div.style.left = (parseInt(div.style.left) + val) + 'px';
		div.style.top = (parseInt(div.style.top) + val * sign) + 'px';
	}, 15);
}