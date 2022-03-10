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

const form = document.querySelector('.task-form');
const addButton = document.querySelector('[data-add-button]');
const closeButton = document.querySelector('[data-close-button]');

// EventListener____________
listOfLists.addEventListener('click', (e) => {
	switchActiveList(e);
});

listInputField.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		addNewList();
		renderLists();
		renderTasks();
		listInputField.value = '';
	}
});

addTaskButton.addEventListener('click', () => {
	showForm();
});

addButton.addEventListener('click', () => {
	const listObject = getObjectOfList();

	const title = document.querySelector('[data-form-title]').value;
	const description = document.querySelector('[data-form-description]').value;
	const date = document.querySelector('[data-form-date]').value;
	const priority = document.querySelector('input[name="priority"]:checked').value;

	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(listObject, title, description, date, priority);
	renderTasks();
	closeForm();
});

closeButton.addEventListener('click', closeForm);

// Functions____________
function clearLists() {
	while (listOfLists.firstChild) {
		listOfLists.removeChild(listOfLists.firstChild);
	}
}

function addNewList() {
	const input = listInputField.value;
	(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createList)(input);
}

function appendLists() {
	for (let i = 0; i < _logic__WEBPACK_IMPORTED_MODULE_0__.lists.length; i++) {
		const listElement = document.createElement('li');
		listElement.textContent = _logic__WEBPACK_IMPORTED_MODULE_0__.lists[i].name;
		listElement.dataset.id = i;
		listOfLists.append(listElement);
	}
}

function renderLists() {
	clearLists();
	appendLists();
	giveNewListActiveStatus();
}

function getActiveList() {
	return document.querySelector('.active-list');
}

function getObjectOfList() {
	const activeList = getActiveList();
	return _logic__WEBPACK_IMPORTED_MODULE_0__.lists.find((list) => {
		return list.ID === Number(activeList.getAttribute('data-id'));
	});
}

function switchActiveList(e) {
	const activeList = getActiveList();
	activeList.classList.remove('active-list');
	e.target.classList.add('active-list');
	renderTasks();
}

function giveNewListActiveStatus() {
	listOfLists.lastChild.classList.add('active-list');
}

function updateTasksHeadline() {
	const tasksHeadline = document.querySelector('[data-tasks-Headline]');
	tasksHeadline.textContent = `Tasks Of ${getObjectOfList().name}`;
}

function showForm() {
	form.style.display = 'flex';
}

function closeForm() {
	form.style.display = 'none';
}

function clearTasks() {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

function appendTasks() {
	const currentTasks = getObjectOfList().tasks;
	currentTasks.forEach((task) => {
		const taskElement = document.createElement('li');
		taskElement.textContent = task.title;
		taskList.append(taskElement);
	});
}

function renderTasks() {
	clearTasks();
	appendTasks();
	updateTasksHeadline();
}

(function () {
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

function createList(listName) {
	const newList = new list(listName);
	lists.push(newList);
}

function createTask(activeList, title, description, dueDate, priority, checklist) {
	const newTask = new task(title, description, dueDate, priority, checklist);
	activeList.tasks.push(newTask);
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsa0RBQVU7QUFDWDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsa0RBQVU7QUFDWDs7QUFFQTtBQUNBLGlCQUFpQixJQUFJLGdEQUFZLEVBQUU7QUFDbkM7QUFDQSw0QkFBNEIseUNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOENBQVU7QUFDbEI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLHVCQUF1QjtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3QkFBd0IsSUFBSSx3QkFBd0I7QUFDaEU7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVksd0JBQXdCLElBQUksd0JBQXdCO0FBQ2hFO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUM7Ozs7Ozs7VUN6Q3pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfSBmcm9tICcuL2xvZ2ljJztcblxuLy8gVmFyaWFibGVzX19fX19fX19fX19fXG5jb25zdCBsaXN0T2ZMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xuY29uc3QgYWRkTGlzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtbGlzdC1idXR0b24nKTtcblxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG5cbmNvbnN0IGxpc3RJbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZS1pbnB1dCcpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkLWJ1dHRvbl0nKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2xvc2UtYnV0dG9uXScpO1xuXG4vLyBFdmVudExpc3RlbmVyX19fX19fX19fX19fXG5saXN0T2ZMaXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdHN3aXRjaEFjdGl2ZUxpc3QoZSk7XG59KTtcblxubGlzdElucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdGFkZE5ld0xpc3QoKTtcblx0XHRyZW5kZXJMaXN0cygpO1xuXHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0bGlzdElucHV0RmllbGQudmFsdWUgPSAnJztcblx0fVxufSk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNob3dGb3JtKCk7XG59KTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zdCBsaXN0T2JqZWN0ID0gZ2V0T2JqZWN0T2ZMaXN0KCk7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLXRpdGxlXScpLnZhbHVlO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tZGVzY3JpcHRpb25dJykudmFsdWU7XG5cdGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLWRhdGVdJykudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcblxuXHRjcmVhdGVUYXNrKGxpc3RPYmplY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXHRyZW5kZXJUYXNrcygpO1xuXHRjbG9zZUZvcm0oKTtcbn0pO1xuXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG5cbi8vIEZ1bmN0aW9uc19fX19fX19fX19fX1xuZnVuY3Rpb24gY2xlYXJMaXN0cygpIHtcblx0d2hpbGUgKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpIHtcblx0XHRsaXN0T2ZMaXN0cy5yZW1vdmVDaGlsZChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuXHRjb25zdCBpbnB1dCA9IGxpc3RJbnB1dEZpZWxkLnZhbHVlO1xuXHRjcmVhdGVMaXN0KGlucHV0KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kTGlzdHMoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGlzdEVsZW1lbnQudGV4dENvbnRlbnQgPSBsaXN0c1tpXS5uYW1lO1xuXHRcdGxpc3RFbGVtZW50LmRhdGFzZXQuaWQgPSBpO1xuXHRcdGxpc3RPZkxpc3RzLmFwcGVuZChsaXN0RWxlbWVudCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG5cdGNsZWFyTGlzdHMoKTtcblx0YXBwZW5kTGlzdHMoKTtcblx0Z2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlTGlzdCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RPZkxpc3QoKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdHJldHVybiBsaXN0cy5maW5kKChsaXN0KSA9PiB7XG5cdFx0cmV0dXJuIGxpc3QuSUQgPT09IE51bWJlcihhY3RpdmVMaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEFjdGl2ZUxpc3QoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cdHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGdpdmVOZXdMaXN0QWN0aXZlU3RhdHVzKCkge1xuXHRsaXN0T2ZMaXN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza3NIZWFkbGluZSgpIHtcblx0Y29uc3QgdGFza3NIZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLUhlYWRsaW5lXScpO1xuXHR0YXNrc0hlYWRsaW5lLnRleHRDb250ZW50ID0gYFRhc2tzIE9mICR7Z2V0T2JqZWN0T2ZMaXN0KCkubmFtZX1gO1xufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcblx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG5cdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcblx0d2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcblx0XHR0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUYXNrcygpIHtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gZ2V0T2JqZWN0T2ZMaXN0KCkudGFza3M7XG5cdGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdHRhc2tFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHR0YXNrTGlzdC5hcHBlbmQodGFza0VsZW1lbnQpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG5cdGNsZWFyVGFza3MoKTtcblx0YXBwZW5kVGFza3MoKTtcblx0dXBkYXRlVGFza3NIZWFkbGluZSgpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuXHRhcHBlbmRMaXN0cygpO1xuXHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cblx0cmVuZGVyVGFza3MoKTtcbn0pKCk7XG4iLCJjb25zdCBsaXN0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdkdW1teU9uZScsXG5cdFx0dGFza3M6IFt7IHRpdGxlOiAnZHVtbXlUYXNrT25lMScgfSwgeyB0aXRsZTogJ2R1bW15VGFza1R3bzEnIH1dLFxuXHRcdElEOiAwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2R1bW15VHdvJyxcblx0XHR0YXNrczogW3sgdGl0bGU6ICdkdW1teVRhc2tPbmUyJyB9LCB7IHRpdGxlOiAnZHVtbXlUYXNrVHdvMicgfV0sXG5cdFx0SUQ6IDEsXG5cdH0sXG5dO1xuXG5jbGFzcyBsaXN0IHtcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHRcdHRoaXMuSUQgPSBsaXN0cy5sZW5ndGg7XG5cdH1cbn1cblxuY2xhc3MgdGFzayB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMuc3RhdHVzID0gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdChsaXN0TmFtZSkge1xuXHRjb25zdCBuZXdMaXN0ID0gbmV3IGxpc3QobGlzdE5hbWUpO1xuXHRsaXN0cy5wdXNoKG5ld0xpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGFjdGl2ZUxpc3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCkge1xuXHRjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcblx0YWN0aXZlTGlzdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xufVxuXG5leHBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbG9naWMnO1xuaW1wb3J0ICcuL1VJJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==