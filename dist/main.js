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
	// goal: change object status of each to true

	const checkedTasksChildrens = document.querySelectorAll('.checked');
	const activeList = getObjectOfList();

	checkedTasksChildrens.forEach((children) => {
		const elementId = children.parentNode.dataset.id;
		const checkedTaskObjects = activeList.tasks.find((task) => {
			return task.id === elementId;
		});
		checkedTaskObjects.status = true;
	});

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
		taskElement.dataset.id = task.id;
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
		tasks: [],
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
	newTask.id = Date.now().toString();
	activeList.tasks.push(newTask);
}

function updateTaskId(task) {}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0U7O0FBRXRFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxrREFBVTtBQUNYO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsSUFBSSxnREFBWSxFQUFFO0FBQ25DO0FBQ0EsNEJBQTRCLHlDQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhDQUFVO0FBQ2xCO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSxvREFBWTtBQUNkLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUV1RDs7Ozs7OztVQzVDdkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzaywgdXBkYXRlVGFza0lkIH0gZnJvbSAnLi9sb2dpYyc7XG5cbi8vIFZhcmlhYmxlc19fX19fX19fX19fX1xuY29uc3QgbGlzdE9mTGlzdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdHMnKTtcblxuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWJ1dHRvbicpO1xuY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItYnV0dG9uJyk7XG5cbmNvbnN0IGxpc3RJbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtbmFtZS1pbnB1dCcpO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkLWJ1dHRvbl0nKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2xvc2UtYnV0dG9uXScpO1xuXG4vLyBFdmVudExpc3RlbmVyX19fX19fX19fX19fXG5saXN0T2ZMaXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdHN3aXRjaEFjdGl2ZUxpc3QoZSk7XG59KTtcblxubGlzdElucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdGFkZE5ld0xpc3QoKTtcblx0XHRyZW5kZXJMaXN0cygpO1xuXHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0bGlzdElucHV0RmllbGQudmFsdWUgPSAnJztcblx0fVxufSk7XG5cbnRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Y3Jvc3NUYXNrKGUpO1xufSk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNob3dGb3JtKCk7XG59KTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDaGVja2VkVGFza3MpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnN0IGxpc3RPYmplY3QgPSBnZXRPYmplY3RPZkxpc3QoKTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tdGl0bGVdJykudmFsdWU7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1kZXNjcmlwdGlvbl0nKS52YWx1ZTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tZGF0ZV0nKS52YWx1ZTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXG5cdGNyZWF0ZVRhc2sobGlzdE9iamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cdHJlbmRlclRhc2tzKCk7XG5cdGNsb3NlRm9ybSgpO1xufSk7XG5cbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcblxuLy8gRnVuY3Rpb25zX19fX19fX19fX19fXG5cbmZ1bmN0aW9uIGNsZWFyTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKSB7XG5cdFx0bGlzdE9mTGlzdHMucmVtb3ZlQ2hpbGQobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3TGlzdCgpIHtcblx0Y29uc3QgaW5wdXRWYWx1ZSA9IGxpc3RJbnB1dEZpZWxkLnZhbHVlO1xuXHRpZiAoaW5wdXRWYWx1ZSkge1xuXHRcdGNyZWF0ZUxpc3QoaW5wdXRWYWx1ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kTGlzdHMoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGlzdEVsZW1lbnQudGV4dENvbnRlbnQgPSBsaXN0c1tpXS5uYW1lO1xuXHRcdGxpc3RFbGVtZW50LmRhdGFzZXQuaWQgPSBpO1xuXHRcdGxpc3RPZkxpc3RzLmFwcGVuZChsaXN0RWxlbWVudCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG5cdGNsZWFyTGlzdHMoKTtcblx0YXBwZW5kTGlzdHMoKTtcblx0Z2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlTGlzdCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RPZkxpc3QoKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdHJldHVybiBsaXN0cy5maW5kKChsaXN0KSA9PiB7XG5cdFx0cmV0dXJuIGxpc3QuSUQgPT09IE51bWJlcihhY3RpdmVMaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEFjdGl2ZUxpc3QoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cdHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGdpdmVOZXdMaXN0QWN0aXZlU3RhdHVzKCkge1xuXHRsaXN0T2ZMaXN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza3NIZWFkbGluZSgpIHtcblx0Y29uc3QgdGFza3NIZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLUhlYWRsaW5lXScpO1xuXHR0YXNrc0hlYWRsaW5lLnRleHRDb250ZW50ID0gYFRhc2tzIE9mICR7Z2V0T2JqZWN0T2ZMaXN0KCkubmFtZX1gO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkVGFza3MoKSB7XG5cdC8vIGdvYWw6IGNoYW5nZSBvYmplY3Qgc3RhdHVzIG9mIGVhY2ggdG8gdHJ1ZVxuXG5cdGNvbnN0IGNoZWNrZWRUYXNrc0NoaWxkcmVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2VkJyk7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRPYmplY3RPZkxpc3QoKTtcblxuXHRjaGVja2VkVGFza3NDaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGRyZW4pID0+IHtcblx0XHRjb25zdCBlbGVtZW50SWQgPSBjaGlsZHJlbi5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cdFx0Y29uc3QgY2hlY2tlZFRhc2tPYmplY3RzID0gYWN0aXZlTGlzdC50YXNrcy5maW5kKCh0YXNrKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGFzay5pZCA9PT0gZWxlbWVudElkO1xuXHRcdH0pO1xuXHRcdGNoZWNrZWRUYXNrT2JqZWN0cy5zdGF0dXMgPSB0cnVlO1xuXHR9KTtcblxuXHRhY3RpdmVMaXN0LnRhc2tzID0gYWN0aXZlTGlzdC50YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLnN0YXR1cyk7XG5cdHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGNyb3NzVGFzayhlKSB7XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stdGl0bGUnKSkge1xuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpXG5cdFx0XHQ/IGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKVxuXHRcdFx0OiBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG5cdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuXHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdHdoaWxlICh0YXNrTGlzdC5maXJzdENoaWxkKSB7XG5cdFx0dGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFza3MoKSB7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IGdldE9iamVjdE9mTGlzdCgpLnRhc2tzO1xuXHRjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHR0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cdFx0dGFza0VsZW1lbnQuZGF0YXNldC5pZCA9IHRhc2suaWQ7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRhc2tFbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0dGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblxuXHRcdGlmICh0YXNrLmR1ZURhdGUpIHtcblx0XHRcdGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkYXRlRWxlbWVudC5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0XHRkYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcblx0XHRcdHRhc2tFbGVtZW50LmFwcGVuZChkYXRlRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cdFx0XHR0YXNrRWxlbWVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gJ3NreWJsdWUgM3B4IHNvbGlkJztcblx0XHR9XG5cblx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ21pZGRsZScpIHtcblx0XHRcdHRhc2tFbGVtZW50LnN0eWxlLmJvcmRlckxlZnQgPSAnb3JhbmdlIDNweCBzb2xpZCc7XG5cdFx0fVxuXG5cdFx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuXHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdyZWQgM3B4IHNvbGlkJztcblx0XHR9XG5cblx0XHR0YXNrRWxlbWVudC5hcHBlbmQodGl0bGVFbGVtZW50KTtcblxuXHRcdHVwZGF0ZVRhc2tJZCh0YXNrKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuXHRjbGVhclRhc2tzKCk7XG5cdGFwcGVuZFRhc2tzKCk7XG5cdHVwZGF0ZVRhc2tzSGVhZGxpbmUoKTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcblx0YXBwZW5kTGlzdHMoKTtcblx0bGlzdE9mTGlzdHMuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGlzdCcpO1xuXG5cdHJlbmRlclRhc2tzKCk7XG59KSgpO1xuIiwiY29uc3QgbGlzdHMgPSBbXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlPbmUnLFxuXHRcdHRhc2tzOiBbXSxcblx0XHRJRDogMCxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdkdW1teVR3bycsXG5cdFx0dGFza3M6IFtdLFxuXHRcdElEOiAxLFxuXHR9LFxuXTtcblxuY2xhc3MgbGlzdCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHR0aGlzLklEID0gbGlzdHMubGVuZ3RoO1xuXHR9XG59XG5cbmNsYXNzIHRhc2sge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdE5hbWUpIHtcblx0Y29uc3QgbmV3TGlzdCA9IG5ldyBsaXN0KGxpc3ROYW1lKTtcblx0bGlzdHMucHVzaChuZXdMaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhhY3RpdmVMaXN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpIHtcblx0Y29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG5cdG5ld1Rhc2suaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG5cdGFjdGl2ZUxpc3QudGFza3MucHVzaChuZXdUYXNrKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0lkKHRhc2spIHt9XG5cbmV4cG9ydCB7IGxpc3RzLCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrLCB1cGRhdGVUYXNrSWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xvZ2ljJztcbmltcG9ydCAnLi9VSSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=