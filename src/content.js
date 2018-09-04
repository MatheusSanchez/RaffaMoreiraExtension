/*console.log("Raffa Moreira Extension Start Bro !");

let p = document.getElementsByTagName('p'); // pega todas as tags p

for (ele of p) { // iterando em p
	ele.innerHTML = 'BROOOOO FAZ SOL !';
}


let all_imgs = document.getElementsByTagName('img'); // pega todas as tags img

let img_names = ["faz_sol.jpg",			// vetor de imagens
				"777.jpg",
				"bro.jpg",
				"haters.jpg",
				"heybro.jpg",
				"mano.jpg"]; 

for (ele of all_imgs) { // para todas imagens do site

	let r = Math.floor(Math.random() * img_names.length); // escolhe uma imagem random

	let img = '777/'+ img_names[r]; 
	let url = chrome.extension.getURL(img);

	ele.src = url; // troca o source da img
	//console.log(url);
}




*/

/*

function maisAlto(myAudio){ // uma função pro range não estourar [0,1]	

	if(myAudio.volume + maisAud  < 1){ // por algum motivo bizarro do navegador
										// ele soma alguns centésimos em cada soma entao myAudio.volume + maisAud
										// resolve o problema
		myAudio.volume += maisAud;
		console.log(myAudio.volume);

	}else{
		myAudio.volume = 1;
	}	
}


	var maisAud = 0.1; // icremento do audio


	var myAudio = document.createElement("AUDIO"); // inserindo um audio no html
	//myAudio.setAttribute("controls", "controls"); 
	myAudio.setAttribute("src",chrome.extension.getURL('audios/fazsol.mp3')); // unico audio na pasta (ainda hahahaha)
	

	myAudio.muted = true; // tratar tambem o caso do block do chrome,
							// a partir de uma versão ele bloqueia os autoplay :(
	myAudio.muted = false;

	myAudio.volume = 0.1;
	myAudio.play();

   $(document).click(function(){ 
   																			

    	if(myAudio.paused){ // se o audio ta pausado 
    		console.log("Audio Tocando");
    		myAudio.play(); // play
    		maisAlto(myAudio);
    	}else{
    		console.log("Audio Pausado");
    		myAudio.pause(); // pause
    	}
    	//return false; 	

    });
*/


chrome.runtime.sendMessage(function(response) {
  console.log(`message from background: ${JSON.stringify(response)}`);
});



chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(msg,sender,sendResponse){
	console.log(msg.txt);
}	

function callback(tab){
		let msg = {
			txt: "Hi Mano"
		}
		chrome.tabs.sendMessage(tab.id,msg);		
}
$(document).click(function(){ 
	
});

