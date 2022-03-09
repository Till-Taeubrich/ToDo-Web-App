/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


// Variables____________
const listOfLists = document.querySelector('.lists');
const addListButton = document.querySelector('.add-list-button');

const taskList = document.querySelector('.tasks');
const addTaskButton = document.querySelector('.add-task-button');

listOfLists.addEventListener('click', (e) => {
	switchActiveList(e);
});

// EventListener____________
addListButton.addEventListener('click', () => {
	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createList)(prompt('')); //get name of list... replace later with form
	renderLists();
});

addTaskButton.addEventListener('click', () => {
	const activeList = document.querySelector('.active-list');
	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(activeList, prompt(''));
});

// Functions____________
const renderLists = function () {
	clearLists();
	appendLists();
};

const clearLists = function () {
	while (listOfLists.firstChild) {
		listOfLists.removeChild(listOfLists.firstChild);
	}
};

const appendLists = function () {
	_logic__WEBPACK_IMPORTED_MODULE_0__.lists.forEach((list) => {
		const listElement = document.createElement('li');
		listElement.textContent = list.name;
		listOfLists.append(listElement);
	});
};

const switchActiveList = function (e) {
	const activeList = document.querySelector('.active-list');
	activeList.classList.remove('active-list');
	e.target.classList.add('active-list');
};

const initialPageLoad = (function () {
	renderLists();
	listOfLists.firstChild.classList.add('active-list');

	//renderTasks
})();


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "lists": () => (/* binding */ lists)
/* harmony export */ });
const lists = [
	{
		name: 'dummyOne',
		tasks: [{ name: 'dummyTaskOne1' }, { name: 'dummyTaskTwo1' }],
		ID: 1,
	},
	{
		name: 'dummyTwo',
		tasks: [{ name: 'dummyTaskOne2' }, { name: 'dummyTaskTwo2' }],
		ID: 1,
	},
];

class list {
	constructor(name) {
		this.name = name;
		this.tasks = [];
		this.ID = lists.length + 1;
	}
}

class task {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.status = false;
	}
}

const createList = function (listName) {
	const newList = new list(listName);
	lists.push(newList);
	console.table(lists);
};

const createTask = function (
	activeList,
	title,
	description,
	dueDate,
	priority,
	checklist
) {
	const newTask = new task(title, description, dueDate, priority, checklist);
	activeList.push(newTask);
	console.table(lists);
};

// createList('gym');
// console.log(lists);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLGtEQUFVLGNBQWM7QUFDekI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLGtEQUFVO0FBQ1gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLGlEQUFhO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSx1QkFBdUIsSUFBSSx1QkFBdUI7QUFDOUQ7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVksdUJBQXVCLElBQUksdUJBQXVCO0FBQzlEO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3JEekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5jb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1saXN0LWJ1dHRvbicpO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcblxubGlzdE9mTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRzd2l0Y2hBY3RpdmVMaXN0KGUpO1xufSk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmFkZExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNyZWF0ZUxpc3QocHJvbXB0KCcnKSk7IC8vZ2V0IG5hbWUgb2YgbGlzdC4uLiByZXBsYWNlIGxhdGVyIHdpdGggZm9ybVxuXHRyZW5kZXJMaXN0cygpO1xufSk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKTtcblx0Y3JlYXRlVGFzayhhY3RpdmVMaXN0LCBwcm9tcHQoJycpKTtcbn0pO1xuXG4vLyBGdW5jdGlvbnNfX19fX19fX19fX19cbmNvbnN0IHJlbmRlckxpc3RzID0gZnVuY3Rpb24gKCkge1xuXHRjbGVhckxpc3RzKCk7XG5cdGFwcGVuZExpc3RzKCk7XG59O1xuXG5jb25zdCBjbGVhckxpc3RzID0gZnVuY3Rpb24gKCkge1xuXHR3aGlsZSAobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCkge1xuXHRcdGxpc3RPZkxpc3RzLnJlbW92ZUNoaWxkKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRMaXN0cyA9IGZ1bmN0aW9uICgpIHtcblx0bGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3QubmFtZTtcblx0XHRsaXN0T2ZMaXN0cy5hcHBlbmQobGlzdEVsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHN3aXRjaEFjdGl2ZUxpc3QgPSBmdW5jdGlvbiAoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0Jyk7XG5cdGFjdGl2ZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxpc3QnKTtcblx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbn07XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9IChmdW5jdGlvbiAoKSB7XG5cdHJlbmRlckxpc3RzKCk7XG5cdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblxuXHQvL3JlbmRlclRhc2tzXG59KSgpO1xuIiwiY29uc3QgbGlzdHMgPSBbXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlPbmUnLFxuXHRcdHRhc2tzOiBbeyBuYW1lOiAnZHVtbXlUYXNrT25lMScgfSwgeyBuYW1lOiAnZHVtbXlUYXNrVHdvMScgfV0sXG5cdFx0SUQ6IDEsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlUd28nLFxuXHRcdHRhc2tzOiBbeyBuYW1lOiAnZHVtbXlUYXNrT25lMicgfSwgeyBuYW1lOiAnZHVtbXlUYXNrVHdvMicgfV0sXG5cdFx0SUQ6IDEsXG5cdH0sXG5dO1xuXG5jbGFzcyBsaXN0IHtcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHRcdHRoaXMuSUQgPSBsaXN0cy5sZW5ndGggKyAxO1xuXHR9XG59XG5cbmNsYXNzIHRhc2sge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlO1xuXHR9XG59XG5cbmNvbnN0IGNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdE5hbWUpIHtcblx0Y29uc3QgbmV3TGlzdCA9IG5ldyBsaXN0KGxpc3ROYW1lKTtcblx0bGlzdHMucHVzaChuZXdMaXN0KTtcblx0Y29uc29sZS50YWJsZShsaXN0cyk7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKFxuXHRhY3RpdmVMaXN0LFxuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRjaGVja2xpc3Rcbikge1xuXHRjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcblx0YWN0aXZlTGlzdC5wdXNoKG5ld1Rhc2spO1xuXHRjb25zb2xlLnRhYmxlKGxpc3RzKTtcbn07XG5cbi8vIGNyZWF0ZUxpc3QoJ2d5bScpO1xuLy8gY29uc29sZS5sb2cobGlzdHMpO1xuXG5leHBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbG9naWMnO1xuaW1wb3J0ICcuL1VJJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==