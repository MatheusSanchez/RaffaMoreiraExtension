console.log("Raffa Moreira Extension Start Bro !");

let p = document.getElementsByTagName('p'); // pega todas as tags p

for (ele of p) { // iterando em p
	ele.innerHTML = 'BROOOOO FAZ SOL !';
}


let all_imgs = document.getElementsByTagName('img'); // pega todas as tags img

let img_names = ["faz_sol.jpg"]; // unica img ainda

for (ele of all_imgs) {

	let img = '777/'+ img_names[0];
	let url = chrome.extension.getURL(img);
	ele.src = url;

	console.log(url);
}