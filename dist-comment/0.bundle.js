webpackJsonp([0],{

//对应print.js
/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = printMe;
console.log('print.js has been loaded');
function printMe() {
	console.log('I get called from print.js');
	var elPr = document.createElement('p');
	elPr.innerText = 'this para is added by print.js';
	document.getElementById('div2').appendChild(elPr);
}

/***/ })

});