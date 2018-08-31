console.log("Raffa Moreira Extension Start Bro !");

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