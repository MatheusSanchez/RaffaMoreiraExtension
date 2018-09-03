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

function maisAlto(myAudio){ // uma função pro range não estourar [0,1]	
	if(myAudio.volume < 1){
		myAudio.volume += 0.1;
		console.log(myAudio.volume);
	}	
}

$(document).ready(function(){

	var myAudio = document.createElement("AUDIO"); // inserindo um audio no html
	//myAudio.setAttribute("controls", "controls"); 
	myAudio.setAttribute("src",chrome.extension.getURL('audios/fazsol.mp3')); // unico audio na pasta (ainda hahahaha)
	

	myAudio.muted = true; // tratar tambem o caso do block do chrome,
							// a partir de uma versão ele bloqueia os autoplay :(
	myAudio.muted = false;

	myAudio.volume = 0.1;
	myAudio.play();


   $("*").click(function(){ // todo elemento (é lento procurar outro modo) // pegando mais de um elemento, isso faz 
   																			//	com que o range [0,1] estoure, concertar


    	if(myAudio.paused){ // se o audio ta pausado 
    		console.log("Audio Tocando");
    		myAudio.play(); // play
    		maisAlto(myAudio);
    	}else{
    		console.log("Audio Pausado");
    		myAudio.pause(); // pause
    	} 	

    });

});	
