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
	renderTasks();
});

addTaskButton.addEventListener('click', () => {
	const listName = getObjectOfList();
	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(listName, prompt(''));
	clearTasks();
});

// Functions____________
const clearLists = function () {
	while (listOfLists.firstChild) {
		listOfLists.removeChild(listOfLists.firstChild);
	}
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
	console.log(currentTasks);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLGtEQUFVLGNBQWM7QUFDekI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMsa0RBQVU7QUFDWDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLElBQUksZ0RBQVksRUFBRTtBQUNuQztBQUNBLDRCQUE0Qix5Q0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3QkFBd0IsSUFBSSx3QkFBd0I7QUFDaEU7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVksd0JBQXdCLElBQUksd0JBQXdCO0FBQ2hFO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ2hEekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5jb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1saXN0LWJ1dHRvbicpO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcblxubGlzdE9mTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRzd2l0Y2hBY3RpdmVMaXN0KGUpO1xufSk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmFkZExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNyZWF0ZUxpc3QocHJvbXB0KCcnKSk7IC8vZ2V0IG5hbWUgb2YgbGlzdC4uLiByZXBsYWNlIGxhdGVyIHdpdGggZm9ybVxuXHRyZW5kZXJMaXN0cygpO1xuXHRyZW5kZXJUYXNrcygpO1xufSk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnN0IGxpc3ROYW1lID0gZ2V0T2JqZWN0T2ZMaXN0KCk7XG5cdGNyZWF0ZVRhc2sobGlzdE5hbWUsIHByb21wdCgnJykpO1xuXHRjbGVhclRhc2tzKCk7XG59KTtcblxuLy8gRnVuY3Rpb25zX19fX19fX19fX19fXG5jb25zdCBjbGVhckxpc3RzID0gZnVuY3Rpb24gKCkge1xuXHR3aGlsZSAobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCkge1xuXHRcdGxpc3RPZkxpc3RzLnJlbW92ZUNoaWxkKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRMaXN0cyA9IGZ1bmN0aW9uICgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3RzW2ldLm5hbWU7XG5cdFx0bGlzdEVsZW1lbnQuZGF0YXNldC5pZCA9IGk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kKGxpc3RFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgcmVuZGVyTGlzdHMgPSBmdW5jdGlvbiAoKSB7XG5cdGNsZWFyTGlzdHMoKTtcblx0YXBwZW5kTGlzdHMoKTtcblx0Z2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKTtcbn07XG5cbmNvbnN0IGdldE9iamVjdE9mTGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldEFjdGl2ZUxpc3QoKTtcblx0cmV0dXJuIGxpc3RzLmZpbmQoKGxpc3QpID0+IHtcblx0XHRyZXR1cm4gbGlzdC5JRCA9PT0gTnVtYmVyKGFjdGl2ZUxpc3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHN3aXRjaEFjdGl2ZUxpc3QgPSBmdW5jdGlvbiAoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cdHJlbmRlclRhc2tzKCk7XG59O1xuXG5jb25zdCBnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcblx0bGlzdE9mTGlzdHMubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG59O1xuXG5jb25zdCBjbGVhclRhc2tzID0gZnVuY3Rpb24gKCkge1xuXHR3aGlsZSAodGFza0xpc3QuZmlyc3RDaGlsZCkge1xuXHRcdHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tMaXN0LmZpcnN0Q2hpbGQpO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRUYXNrcyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gZ2V0T2JqZWN0T2ZMaXN0KCkudGFza3M7XG5cdGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrcyk7XG5cdGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdHRhc2tFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHR0YXNrTGlzdC5hcHBlbmQodGFza0VsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24gKCkge1xuXHRjbGVhclRhc2tzKCk7XG5cdGFwcGVuZFRhc2tzKCk7XG59O1xuXG5jb25zdCBpbml0aWFsUGFnZUxvYWQgPSAoZnVuY3Rpb24gKCkge1xuXHRhcHBlbmRMaXN0cygpO1xuXHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cblx0cmVuZGVyVGFza3MoKTtcbn0pKCk7XG4iLCJjb25zdCBsaXN0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdkdW1teU9uZScsXG5cdFx0dGFza3M6IFt7IHRpdGxlOiAnZHVtbXlUYXNrT25lMScgfSwgeyB0aXRsZTogJ2R1bW15VGFza1R3bzEnIH1dLFxuXHRcdElEOiAwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2R1bW15VHdvJyxcblx0XHR0YXNrczogW3sgdGl0bGU6ICdkdW1teVRhc2tPbmUyJyB9LCB7IHRpdGxlOiAnZHVtbXlUYXNrVHdvMicgfV0sXG5cdFx0SUQ6IDEsXG5cdH0sXG5dO1xuXG5jbGFzcyBsaXN0IHtcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHRcdHRoaXMuSUQgPSBsaXN0cy5sZW5ndGg7XG5cdH1cbn1cblxuY2xhc3MgdGFzayB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMuc3RhdHVzID0gZmFsc2U7XG5cdH1cbn1cblxuY29uc3QgY3JlYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0TmFtZSkge1xuXHRjb25zdCBuZXdMaXN0ID0gbmV3IGxpc3QobGlzdE5hbWUpO1xuXHRsaXN0cy5wdXNoKG5ld0xpc3QpO1xufTtcblxuY29uc3QgY3JlYXRlVGFzayA9IGZ1bmN0aW9uIChcblx0YWN0aXZlTGlzdCxcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRkdWVEYXRlLFxuXHRwcmlvcml0eSxcblx0Y2hlY2tsaXN0XG4pIHtcblx0Y29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG5cdGFjdGl2ZUxpc3QudGFza3MucHVzaChuZXdUYXNrKTtcbn07XG5cbmV4cG9ydCB7IGxpc3RzLCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9sb2dpYyc7XG5pbXBvcnQgJy4vVUknO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9