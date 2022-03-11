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

const taskList = document.querySelector('.tasks');
const tasks = document.querySelector('.tasks');
const addTaskButton = document.querySelector('.add-task-button');
const clearButton = document.querySelector('.clear-button');

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

tasks.addEventListener('click', (e) => {
	crossTask(e);
});

addTaskButton.addEventListener('click', () => {
	showForm();
});

clearButton.addEventListener('click', removeCheckedTasks);

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
	const inputValue = listInputField.value;
	if (inputValue) {
		(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createList)(inputValue);
	}
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

function removeCheckedTasks() {
	const activeList = getObjectOfList();
	activeList.tasks = activeList.tasks.filter((task) => !task.status);
	renderTasks();
}

function crossTask(e) {
	if (e.target.classList.contains('task-title')) {
		e.target.classList.contains('checked')
			? e.target.classList.remove('checked')
			: e.target.classList.add('checked');
	}
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
		taskElement.classList.add('task');
		taskElement.dataset.id = Date.now().toString();
		taskList.append(taskElement);

		const titleElement = document.createElement('div');
		titleElement.textContent = task.title;
		titleElement.classList.add('task-title');

		if (task.dueDate) {
			const dateElement = document.createElement('div');
			dateElement.innerText = task.dueDate;
			dateElement.classList.add('task-date');
			taskElement.append(dateElement);
		}

		if (task.priority === 'low') {
			taskElement.style.borderLeft = 'skyblue 3px solid';
		}

		if (task.priority === 'middle') {
			taskElement.style.borderLeft = 'orange 3px solid';
		}

		if (task.priority === 'high') {
			taskElement.style.borderLeft = 'red 3px solid';
		}

		taskElement.append(titleElement);

		(0,_logic__WEBPACK_IMPORTED_MODULE_0__.updateTaskId)(task);
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
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "updateTaskId": () => (/* binding */ updateTaskId)
/* harmony export */ });
const lists = [
	{
		name: 'dummyOne',
		tasks: [{ title: 'hu' }, { title: 'hab' }], // dummy
		ID: 0,
	},
	{
		name: 'dummyTwo',
		tasks: [],
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

function updateTaskId(task) {
	task.id = Date.now().toString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0U7O0FBRXRFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxrREFBVTtBQUNYO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsSUFBSSxnREFBWSxFQUFFO0FBQ25DO0FBQ0EsNEJBQTRCLHlDQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhDQUFVO0FBQ2xCO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLG9EQUFZO0FBQ2QsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxEO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYSxJQUFJLGNBQWM7QUFDM0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFdUQ7Ozs7Ozs7VUM3Q3ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2ssIHVwZGF0ZVRhc2tJZCB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuXG5jb25zdCBsaXN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUtaW5wdXQnKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFkZC1idXR0b25dJyk7XG5jb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsb3NlLWJ1dHRvbl0nKTtcblxuLy8gRXZlbnRMaXN0ZW5lcl9fX19fX19fX19fX1xubGlzdE9mTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRzd2l0Y2hBY3RpdmVMaXN0KGUpO1xufSk7XG5cbmxpc3RJbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRhZGROZXdMaXN0KCk7XG5cdFx0cmVuZGVyTGlzdHMoKTtcblx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdGxpc3RJbnB1dEZpZWxkLnZhbHVlID0gJyc7XG5cdH1cbn0pO1xuXG50YXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGNyb3NzVGFzayhlKTtcbn0pO1xuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRzaG93Rm9ybSgpO1xufSk7XG5cbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQ2hlY2tlZFRhc2tzKTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRjb25zdCBsaXN0T2JqZWN0ID0gZ2V0T2JqZWN0T2ZMaXN0KCk7XG5cblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLXRpdGxlXScpLnZhbHVlO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tZGVzY3JpcHRpb25dJykudmFsdWU7XG5cdGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLWRhdGVdJykudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcblxuXHRjcmVhdGVUYXNrKGxpc3RPYmplY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkpO1xuXHRyZW5kZXJUYXNrcygpO1xuXHRjbG9zZUZvcm0oKTtcbn0pO1xuXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRm9ybSk7XG5cbi8vIEZ1bmN0aW9uc19fX19fX19fX19fX1xuXG5mdW5jdGlvbiBjbGVhckxpc3RzKCkge1xuXHR3aGlsZSAobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCkge1xuXHRcdGxpc3RPZkxpc3RzLnJlbW92ZUNoaWxkKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFkZE5ld0xpc3QoKSB7XG5cdGNvbnN0IGlucHV0VmFsdWUgPSBsaXN0SW5wdXRGaWVsZC52YWx1ZTtcblx0aWYgKGlucHV0VmFsdWUpIHtcblx0XHRjcmVhdGVMaXN0KGlucHV0VmFsdWUpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZExpc3RzKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdGxpc3RFbGVtZW50LnRleHRDb250ZW50ID0gbGlzdHNbaV0ubmFtZTtcblx0XHRsaXN0RWxlbWVudC5kYXRhc2V0LmlkID0gaTtcblx0XHRsaXN0T2ZMaXN0cy5hcHBlbmQobGlzdEVsZW1lbnQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpc3RzKCkge1xuXHRjbGVhckxpc3RzKCk7XG5cdGFwcGVuZExpc3RzKCk7XG5cdGdpdmVOZXdMaXN0QWN0aXZlU3RhdHVzKCk7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUxpc3QoKSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2JqZWN0T2ZMaXN0KCkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRyZXR1cm4gbGlzdHMuZmluZCgobGlzdCkgPT4ge1xuXHRcdHJldHVybiBsaXN0LklEID09PSBOdW1iZXIoYWN0aXZlTGlzdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzd2l0Y2hBY3RpdmVMaXN0KGUpIHtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldEFjdGl2ZUxpc3QoKTtcblx0YWN0aXZlTGlzdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtbGlzdCcpO1xuXHRlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGlzdCcpO1xuXHRyZW5kZXJUYXNrcygpO1xufVxuXG5mdW5jdGlvbiBnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cygpIHtcblx0bGlzdE9mTGlzdHMubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tzSGVhZGxpbmUoKSB7XG5cdGNvbnN0IHRhc2tzSGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10YXNrcy1IZWFkbGluZV0nKTtcblx0dGFza3NIZWFkbGluZS50ZXh0Q29udGVudCA9IGBUYXNrcyBPZiAke2dldE9iamVjdE9mTGlzdCgpLm5hbWV9YDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2hlY2tlZFRhc2tzKCkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0T2JqZWN0T2ZMaXN0KCk7XG5cdGFjdGl2ZUxpc3QudGFza3MgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suc3RhdHVzKTtcblx0cmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NUYXNrKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay10aXRsZScpKSB7XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJylcblx0XHRcdD8gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG5cdFx0XHQ6IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcblx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG5cdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcblx0d2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcblx0XHR0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUYXNrcygpIHtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gZ2V0T2JqZWN0T2ZMaXN0KCkudGFza3M7XG5cdGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblx0XHR0YXNrRWxlbWVudC5kYXRhc2V0LmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuXHRcdHRhc2tMaXN0LmFwcGVuZCh0YXNrRWxlbWVudCk7XG5cblx0XHRjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRcdHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG5cblx0XHRpZiAodGFzay5kdWVEYXRlKSB7XG5cdFx0XHRjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGF0ZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuXHRcdFx0ZGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG5cdFx0XHR0YXNrRWxlbWVudC5hcHBlbmQoZGF0ZUVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuXHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdza3libHVlIDNweCBzb2xpZCc7XG5cdFx0fVxuXG5cdFx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICdtaWRkbGUnKSB7XG5cdFx0XHR0YXNrRWxlbWVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gJ29yYW5nZSAzcHggc29saWQnO1xuXHRcdH1cblxuXHRcdGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcblx0XHRcdHRhc2tFbGVtZW50LnN0eWxlLmJvcmRlckxlZnQgPSAncmVkIDNweCBzb2xpZCc7XG5cdFx0fVxuXG5cdFx0dGFza0VsZW1lbnQuYXBwZW5kKHRpdGxlRWxlbWVudCk7XG5cblx0XHR1cGRhdGVUYXNrSWQodGFzayk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcblx0Y2xlYXJUYXNrcygpO1xuXHRhcHBlbmRUYXNrcygpO1xuXHR1cGRhdGVUYXNrc0hlYWRsaW5lKCk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG5cdGFwcGVuZExpc3RzKCk7XG5cdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblxuXHRyZW5kZXJUYXNrcygpO1xufSkoKTtcbiIsImNvbnN0IGxpc3RzID0gW1xuXHR7XG5cdFx0bmFtZTogJ2R1bW15T25lJyxcblx0XHR0YXNrczogW3sgdGl0bGU6ICdodScgfSwgeyB0aXRsZTogJ2hhYicgfV0sIC8vIGR1bW15XG5cdFx0SUQ6IDAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlUd28nLFxuXHRcdHRhc2tzOiBbXSxcblx0XHRJRDogMSxcblx0fSxcbl07XG5cbmNsYXNzIGxpc3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0dGhpcy5JRCA9IGxpc3RzLmxlbmd0aDtcblx0fVxufVxuXG5jbGFzcyB0YXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5zdGF0dXMgPSBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3ROYW1lKSB7XG5cdGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChsaXN0TmFtZSk7XG5cdGxpc3RzLnB1c2gobmV3TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soYWN0aXZlTGlzdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG5cdGNvbnN0IG5ld1Rhc2sgPSBuZXcgdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpO1xuXHRhY3RpdmVMaXN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJZCh0YXNrKSB7XG5cdHRhc2suaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG59XG5cbmV4cG9ydCB7IGxpc3RzLCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrLCB1cGRhdGVUYXNrSWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xvZ2ljJztcbmltcG9ydCAnLi9VSSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=