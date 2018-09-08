console.log("Hey Bro Mano !");

//audio disparado toda vez que o usuario clicka no content, mesmo audio da play e para com o click
/********************************/

var audioContent = document.createElement("AUDIO"); // inserindo um audio no html
audioContent.setAttribute("src",chrome.extension.getURL("audios/fazsol.mp3")); // sempre que clicar mesma musica que toca
audioContent.volume = 0.01;

chrome.runtime.onMessage.addListener(gotMessage); // listener do click no content

function gotMessage(msg, sender, sendResponse){
	if(msg.txt == "click"){
		if(audioContent.paused){ // se o audio ta pausado 
    		console.log("Audio Content Tocando");
    		maisAlto(audioContent); // aumenta o som e da play
    	}else{
    		console.log("Audio Content Pausado");
    		audioContent.pause(); // pause
    	}	
	}else if(msg.txt == "play"){
		if(audioContent.paused){ // se o audio ta pausado 
    		console.log("Audio Content Tocando");
    		maisAlto(audioContent); // aumenta o som e da play
    	}
	}

}

/********************************/

// audio disparado para alguns eventos do browser
/********************************/

chrome.browserAction.onClicked.addListener(browserEvents); // listener do click icon do browser
chrome.tabs.onCreated.addListener(browserEvents); // listener abrir nova aba
chrome.tabs.onRemoved.addListener(browserEvents);	// listener fechar aba
chrome.tabs.onActivated.addListener(browserEvents); // listener troca de aba
chrome.tabs.onUpdated.addListener(browserEvents); // listener atualizar url

var audioBack = document.createElement("AUDIO"); // inserindo um audio no html
audioBack.volume = 0.01;

let audio_names = ["brofazsol.mp3",			// vetor de audios
				"fernandoclothing.mp3",
				"jesusmano.mp3",
				"parisshit.mp3",
				"pineaple.mp3",
				"raffamoreiramano.mp3"]; 

let audio;
let src;				

function browserEvents(){ 
	if(audioBack.paused){
		audio = Math.floor(Math.random() * audio_names.length); // escolhe um audio random
		src = 'audios/' + audio_names[audio];
		audioBack.setAttribute("src",chrome.extension.getURL(src)); //troca o src do audio atual
		console.log("Audio Back Play");
		maisAlto(audioBack); // aumenta o som e da play;
	}
}

/********************************/

// uma função pro range não estourar [0,1]	
/********************************/
var aumenta = 0.1;
function maisAlto(myAudio){ 
	
	if(myAudio.volume + aumenta  < 1){ // por algum motivo bizarro do navegador
										// ele soma alguns centésimos em cada soma entao audioContent.volume + maisAud
										// resolve o problema
		myAudio.volume += aumenta;
	}else{
		myAudio.volume = 1;
	}	

	myAudio.play(); // play
}

//


/*
function troca(tab){ 
	browserEvents();
	let msg = {
		txt: "troca"
	}

	chrome.tabs.getSelected(null, function(tab) { // pega o id da tab atual
	    var tab = tab.id;
    });
		
	setInterval(function(){
     	chrome.tabs.sendMessage(tab,msg); // a cada 10 sec troca as img
 	}, 10000);
}
*/
