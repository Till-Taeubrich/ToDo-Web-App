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

const listInputField = document.querySelector('.list-name-input');

// EventListener____________
listOfLists.addEventListener('click', (e) => {
	switchActiveList(e);
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		addNewList();
		renderLists();
		clearTasks();
	}
});

addTaskButton.addEventListener('click', () => {
	const listObject = getObjectOfList();
	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(listObject, prompt(''));
	renderTasks();
});

// Functions____________
const clearLists = function () {
	while (listOfLists.firstChild) {
		listOfLists.removeChild(listOfLists.firstChild);
	}
};

const addNewList = function () {
	const input = listInputField.value;
	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createList)(input);
};

const appendLists = function () {
	for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_0__.lists.length; i++) {
		const listElement = document.createElement('li');
		listElement.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.lists[i].name;
		listElement.dataset.id = i;
		listOfLists.append(listElement);
	}
};

const renderLists = function () {
	clearLists();
	appendLists();
	giveNewListActiveStatus();
};

const getActiveList = function () {
	return document.querySelector('.active-list');
};

const getObjectOfList = function () {
	const activeList = getActiveList();
	return _logic__WEBPACK_IMPORTED_MODULE_0__.lists.find((list) => {
		return list.ID === Number(activeList.getAttribute('data-id'));
	});
};

const switchActiveList = function (e) {
	const activeList = getActiveList();
	activeList.classList.remove('active-list');
	e.target.classList.add('active-list');
	renderTasks();
};

const giveNewListActiveStatus = function () {
	listOfLists.lastChild.classList.add('active-list');
};

const clearTasks = function () {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
};

const appendTasks = function () {
	const currentTasks = getObjectOfList().tasks;
	currentTasks.forEach((task) => {
		const taskElement = document.createElement('li');
		taskElement.textContent = task.title;
		taskList.append(taskElement);
	});
};

const renderTasks = function () {
	clearTasks();
	appendTasks();
};

const initialPageLoad = (function () {
	appendLists();
	listOfLists.firstChild.classList.add('active-list');

	renderTasks();
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
		tasks: [{ title: 'dummyTaskOne1' }, { title: 'dummyTaskTwo1' }],
		ID: 0,
	},
	{
		name: 'dummyTwo',
		tasks: [{ title: 'dummyTaskOne2' }, { title: 'dummyTaskTwo2' }],
		ID: 1,
	},
];

class list {
	constructor(name) {
		this.name = name;
		this.tasks = [];
		this.ID = lists.length;
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
	activeList.tasks.push(newTask);
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQyxrREFBVTtBQUNYO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsa0RBQVU7QUFDWDs7QUFFQTtBQUNBLGlCQUFpQixJQUFJLGdEQUFZLEVBQUU7QUFDbkM7QUFDQSw0QkFBNEIseUNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOENBQVU7QUFDbEI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdCQUF3QixJQUFJLHdCQUF3QjtBQUNoRTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsWUFBWSx3QkFBd0IsSUFBSSx3QkFBd0I7QUFDaEU7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlDOzs7Ozs7O1VDaER6QztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05pQjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9VSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxpc3RzLCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH0gZnJvbSAnLi9sb2dpYyc7XG5cbi8vIFZhcmlhYmxlc19fX19fX19fX19fX1xuY29uc3QgbGlzdE9mTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKTtcbmNvbnN0IGFkZExpc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWxpc3QtYnV0dG9uJyk7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuXG5jb25zdCBsaXN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUtaW5wdXQnKTtcblxuLy8gRXZlbnRMaXN0ZW5lcl9fX19fX19fX19fX1xubGlzdE9mTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRzd2l0Y2hBY3RpdmVMaXN0KGUpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRhZGROZXdMaXN0KCk7XG5cdFx0cmVuZGVyTGlzdHMoKTtcblx0XHRjbGVhclRhc2tzKCk7XG5cdH1cbn0pO1xuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zdCBsaXN0T2JqZWN0ID0gZ2V0T2JqZWN0T2ZMaXN0KCk7XG5cdGNyZWF0ZVRhc2sobGlzdE9iamVjdCwgcHJvbXB0KCcnKSk7XG5cdHJlbmRlclRhc2tzKCk7XG59KTtcblxuLy8gRnVuY3Rpb25zX19fX19fX19fX19fXG5jb25zdCBjbGVhckxpc3RzID0gZnVuY3Rpb24gKCkge1xuXHR3aGlsZSAobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCkge1xuXHRcdGxpc3RPZkxpc3RzLnJlbW92ZUNoaWxkKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpO1xuXHR9XG59O1xuXG5jb25zdCBhZGROZXdMaXN0ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBpbnB1dCA9IGxpc3RJbnB1dEZpZWxkLnZhbHVlO1xuXHRjcmVhdGVMaXN0KGlucHV0KTtcbn07XG5cbmNvbnN0IGFwcGVuZExpc3RzID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdGxpc3RFbGVtZW50LnRleHRDb250ZW50ID0gbGlzdHNbaV0ubmFtZTtcblx0XHRsaXN0RWxlbWVudC5kYXRhc2V0LmlkID0gaTtcblx0XHRsaXN0T2ZMaXN0cy5hcHBlbmQobGlzdEVsZW1lbnQpO1xuXHR9XG59O1xuXG5jb25zdCByZW5kZXJMaXN0cyA9IGZ1bmN0aW9uICgpIHtcblx0Y2xlYXJMaXN0cygpO1xuXHRhcHBlbmRMaXN0cygpO1xuXHRnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cygpO1xufTtcblxuY29uc3QgZ2V0QWN0aXZlTGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpO1xufTtcblxuY29uc3QgZ2V0T2JqZWN0T2ZMaXN0ID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRyZXR1cm4gbGlzdHMuZmluZCgobGlzdCkgPT4ge1xuXHRcdHJldHVybiBsaXN0LklEID09PSBOdW1iZXIoYWN0aXZlTGlzdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cdH0pO1xufTtcblxuY29uc3Qgc3dpdGNoQWN0aXZlTGlzdCA9IGZ1bmN0aW9uIChlKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdGFjdGl2ZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxpc3QnKTtcblx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblx0cmVuZGVyVGFza3MoKTtcbn07XG5cbmNvbnN0IGdpdmVOZXdMaXN0QWN0aXZlU3RhdHVzID0gZnVuY3Rpb24gKCkge1xuXHRsaXN0T2ZMaXN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbn07XG5cbmNvbnN0IGNsZWFyVGFza3MgPSBmdW5jdGlvbiAoKSB7XG5cdHdoaWxlICh0YXNrTGlzdC5maXJzdENoaWxkKSB7XG5cdFx0dGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QuZmlyc3RDaGlsZCk7XG5cdH1cbn07XG5cbmNvbnN0IGFwcGVuZFRhc2tzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBnZXRPYmplY3RPZkxpc3QoKS50YXNrcztcblx0Y3VycmVudFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0dGFza0VsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdHRhc2tMaXN0LmFwcGVuZCh0YXNrRWxlbWVudCk7XG5cdH0pO1xufTtcblxuY29uc3QgcmVuZGVyVGFza3MgPSBmdW5jdGlvbiAoKSB7XG5cdGNsZWFyVGFza3MoKTtcblx0YXBwZW5kVGFza3MoKTtcbn07XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9IChmdW5jdGlvbiAoKSB7XG5cdGFwcGVuZExpc3RzKCk7XG5cdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblxuXHRyZW5kZXJUYXNrcygpO1xufSkoKTtcbiIsImNvbnN0IGxpc3RzID0gW1xuXHR7XG5cdFx0bmFtZTogJ2R1bW15T25lJyxcblx0XHR0YXNrczogW3sgdGl0bGU6ICdkdW1teVRhc2tPbmUxJyB9LCB7IHRpdGxlOiAnZHVtbXlUYXNrVHdvMScgfV0sXG5cdFx0SUQ6IDAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlUd28nLFxuXHRcdHRhc2tzOiBbeyB0aXRsZTogJ2R1bW15VGFza09uZTInIH0sIHsgdGl0bGU6ICdkdW1teVRhc2tUd28yJyB9XSxcblx0XHRJRDogMSxcblx0fSxcbl07XG5cbmNsYXNzIGxpc3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0dGhpcy5JRCA9IGxpc3RzLmxlbmd0aDtcblx0fVxufVxuXG5jbGFzcyB0YXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5zdGF0dXMgPSBmYWxzZTtcblx0fVxufVxuXG5jb25zdCBjcmVhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3ROYW1lKSB7XG5cdGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChsaXN0TmFtZSk7XG5cdGxpc3RzLnB1c2gobmV3TGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKFxuXHRhY3RpdmVMaXN0LFxuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRjaGVja2xpc3Rcbikge1xuXHRjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcblx0YWN0aXZlTGlzdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xufTtcblxuZXhwb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xvZ2ljJztcbmltcG9ydCAnLi9VSSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=