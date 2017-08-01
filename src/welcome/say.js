console.log('say.js has been loaded');
export default function printMe() {
	console.log('I get called from say.js');
	var elPr = document.createElement('p');
	elPr.innerText = 'this para is added by say.js';
	document.getElementById('div2').appendChild(elPr);
}