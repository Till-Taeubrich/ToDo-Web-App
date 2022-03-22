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
const titleField = document.querySelector('#title');
const dateField = document.querySelector('#date');
const priorityField = document.querySelector('#priority');
const addButton = document.querySelector('[data-add-button]');
const closeButton = document.querySelector('[data-close-button]');

// EventListener____________
listOfLists.addEventListener('click', (e) => {
	if (e.target.closest('li')) {
		switchActiveList(e);
	}
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
	if (titleField.value == '') {
		titleField.style.borderColor = 'red';
	} else {
		const listObject = getObjectOfList();

		const title = document.querySelector('[data-form-title]').value;
		const date = document.querySelector('[data-form-date]').value;
		const priority = document.querySelector('#priority').value;

		const dateString = new Date(form.date.value).toDateString('dddd, MMMM ,yyyy');

		(0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(listObject, title, dateString, priority);
		renderTasks();
		closeForm();
		resetForm();
	}
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
	tasksHeadline.textContent = `${getObjectOfList().name}`;
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
	form.classList.add('visible');
}

function closeForm() {
	form.classList.remove('visible');
}

function resetForm() {
	titleField.style.borderColor = '';
	titleField.value = '';
	dateField.value = '';
	priorityField.value = '';
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
		titleElement.textContent = '◦ ' + task.title;
		titleElement.classList.add('task-title');

		if (task.dueDate != 'Invalid Date') {
			const dateElement = document.createElement('div');
			dateElement.innerText = task.dueDate;
			dateElement.classList.add('task-date');
			taskElement.append(dateElement);
		}

		if (task.priority != '') {
			if (task.priority === 'low') {
				taskElement.style.borderLeft = 'skyblue 3px double';
			}

			if (task.priority === 'middle') {
				taskElement.style.borderLeft = 'orange 3px double';
			}

			if (task.priority === 'high') {
				taskElement.style.borderLeft = 'red 3px double';
			}
		}

		taskElement.append(titleElement);
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
		name: 'Work',
		tasks: [],
		ID: 0,
	},
	{
		name: 'Gym',
		tasks: [],
		ID: 1,
	},
	{
		name: 'Shopping List',
		tasks: [],
		ID: 2,
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
	constructor(title, dueDate, priority) {
		this.title = title;
		this.dueDate = dueDate;
		this.priority = priority;
		this.status = false;
	}
}

function createList(listName) {
	const newList = new list(listName);
	lists.push(newList);
}

function createTask(activeList, title, dueDate, priority, checklist) {
	const newTask = new task(title, dueDate, priority, checklist);
	newTask.id = Date.now().toString();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUUsa0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixJQUFJLGdEQUFZLEVBQUU7QUFDbkM7QUFDQSw0QkFBNEIseUNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOENBQVU7QUFDbEI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pORDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUM7Ozs7Ozs7VUM5Q3pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfSBmcm9tICcuL2xvZ2ljJztcblxuLy8gVmFyaWFibGVzX19fX19fX19fX19fXG5jb25zdCBsaXN0T2ZMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcblxuY29uc3QgbGlzdElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lLWlucHV0Jyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCB0aXRsZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJyk7XG5jb25zdCBkYXRlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuY29uc3QgcHJpb3JpdHlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWRkLWJ1dHRvbl0nKTtcbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2xvc2UtYnV0dG9uXScpO1xuXG4vLyBFdmVudExpc3RlbmVyX19fX19fX19fX19fXG5saXN0T2ZMaXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGlmIChlLnRhcmdldC5jbG9zZXN0KCdsaScpKSB7XG5cdFx0c3dpdGNoQWN0aXZlTGlzdChlKTtcblx0fVxufSk7XG5cbmxpc3RJbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcblx0XHRhZGROZXdMaXN0KCk7XG5cdFx0cmVuZGVyTGlzdHMoKTtcblx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdGxpc3RJbnB1dEZpZWxkLnZhbHVlID0gJyc7XG5cdH1cbn0pO1xuXG50YXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdGNyb3NzVGFzayhlKTtcbn0pO1xuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRzaG93Rm9ybSgpO1xufSk7XG5cbmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlQ2hlY2tlZFRhc2tzKTtcblxuYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRpZiAodGl0bGVGaWVsZC52YWx1ZSA9PSAnJykge1xuXHRcdHRpdGxlRmllbGQuc3R5bGUuYm9yZGVyQ29sb3IgPSAncmVkJztcblx0fSBlbHNlIHtcblx0XHRjb25zdCBsaXN0T2JqZWN0ID0gZ2V0T2JqZWN0T2ZMaXN0KCk7XG5cblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tdGl0bGVdJykudmFsdWU7XG5cdFx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tZGF0ZV0nKS52YWx1ZTtcblx0XHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuXG5cdFx0Y29uc3QgZGF0ZVN0cmluZyA9IG5ldyBEYXRlKGZvcm0uZGF0ZS52YWx1ZSkudG9EYXRlU3RyaW5nKCdkZGRkLCBNTU1NICx5eXl5Jyk7XG5cblx0XHRjcmVhdGVUYXNrKGxpc3RPYmplY3QsIHRpdGxlLCBkYXRlU3RyaW5nLCBwcmlvcml0eSk7XG5cdFx0cmVuZGVyVGFza3MoKTtcblx0XHRjbG9zZUZvcm0oKTtcblx0XHRyZXNldEZvcm0oKTtcblx0fVxufSk7XG5cbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcblxuLy8gRnVuY3Rpb25zX19fX19fX19fX19fXG5cbmZ1bmN0aW9uIGNsZWFyTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKSB7XG5cdFx0bGlzdE9mTGlzdHMucmVtb3ZlQ2hpbGQobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3TGlzdCgpIHtcblx0Y29uc3QgaW5wdXRWYWx1ZSA9IGxpc3RJbnB1dEZpZWxkLnZhbHVlO1xuXHRpZiAoaW5wdXRWYWx1ZSkge1xuXHRcdGNyZWF0ZUxpc3QoaW5wdXRWYWx1ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kTGlzdHMoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGlzdEVsZW1lbnQudGV4dENvbnRlbnQgPSBsaXN0c1tpXS5uYW1lO1xuXHRcdGxpc3RFbGVtZW50LmRhdGFzZXQuaWQgPSBpO1xuXHRcdGxpc3RPZkxpc3RzLmFwcGVuZChsaXN0RWxlbWVudCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG5cdGNsZWFyTGlzdHMoKTtcblx0YXBwZW5kTGlzdHMoKTtcblx0Z2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlTGlzdCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RPZkxpc3QoKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdHJldHVybiBsaXN0cy5maW5kKChsaXN0KSA9PiB7XG5cdFx0cmV0dXJuIGxpc3QuSUQgPT09IE51bWJlcihhY3RpdmVMaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEFjdGl2ZUxpc3QoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cdHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGdpdmVOZXdMaXN0QWN0aXZlU3RhdHVzKCkge1xuXHRsaXN0T2ZMaXN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza3NIZWFkbGluZSgpIHtcblx0Y29uc3QgdGFza3NIZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLUhlYWRsaW5lXScpO1xuXHR0YXNrc0hlYWRsaW5lLnRleHRDb250ZW50ID0gYCR7Z2V0T2JqZWN0T2ZMaXN0KCkubmFtZX1gO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGVja2VkVGFza3MoKSB7XG5cdC8vIGdvYWw6IGNoYW5nZSBvYmplY3Qgc3RhdHVzIG9mIGVhY2ggdG8gdHJ1ZVxuXG5cdGNvbnN0IGNoZWNrZWRUYXNrc0NoaWxkcmVucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2VkJyk7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRPYmplY3RPZkxpc3QoKTtcblxuXHRjaGVja2VkVGFza3NDaGlsZHJlbnMuZm9yRWFjaCgoY2hpbGRyZW4pID0+IHtcblx0XHRjb25zdCBlbGVtZW50SWQgPSBjaGlsZHJlbi5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cdFx0Y29uc3QgY2hlY2tlZFRhc2tPYmplY3RzID0gYWN0aXZlTGlzdC50YXNrcy5maW5kKCh0YXNrKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGFzay5pZCA9PT0gZWxlbWVudElkO1xuXHRcdH0pO1xuXHRcdGNoZWNrZWRUYXNrT2JqZWN0cy5zdGF0dXMgPSB0cnVlO1xuXHR9KTtcblxuXHRhY3RpdmVMaXN0LnRhc2tzID0gYWN0aXZlTGlzdC50YXNrcy5maWx0ZXIoKHRhc2spID0+ICF0YXNrLnN0YXR1cyk7XG5cdHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGNyb3NzVGFzayhlKSB7XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stdGl0bGUnKSkge1xuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpXG5cdFx0XHQ/IGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKVxuXHRcdFx0OiBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG5cdGZvcm0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG5cdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiByZXNldEZvcm0oKSB7XG5cdHRpdGxlRmllbGQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnJztcblx0dGl0bGVGaWVsZC52YWx1ZSA9ICcnO1xuXHRkYXRlRmllbGQudmFsdWUgPSAnJztcblx0cHJpb3JpdHlGaWVsZC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tzKCkge1xuXHR3aGlsZSAodGFza0xpc3QuZmlyc3RDaGlsZCkge1xuXHRcdHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tMaXN0LmZpcnN0Q2hpbGQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFRhc2tzKCkge1xuXHRjb25zdCBjdXJyZW50VGFza3MgPSBnZXRPYmplY3RPZkxpc3QoKS50YXNrcztcblx0Y3VycmVudFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRjb25zdCB0YXNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0dGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXHRcdHRhc2tFbGVtZW50LmRhdGFzZXQuaWQgPSB0YXNrLmlkO1xuXHRcdHRhc2tMaXN0LmFwcGVuZCh0YXNrRWxlbWVudCk7XG5cblx0XHRjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSAn4pemICcgKyB0YXNrLnRpdGxlO1xuXHRcdHRpdGxlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlJyk7XG5cblx0XHRpZiAodGFzay5kdWVEYXRlICE9ICdJbnZhbGlkIERhdGUnKSB7XG5cdFx0XHRjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGF0ZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuXHRcdFx0ZGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG5cdFx0XHR0YXNrRWxlbWVudC5hcHBlbmQoZGF0ZUVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGlmICh0YXNrLnByaW9yaXR5ICE9ICcnKSB7XG5cdFx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcblx0XHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdza3libHVlIDNweCBkb3VibGUnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ21pZGRsZScpIHtcblx0XHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdvcmFuZ2UgM3B4IGRvdWJsZSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcblx0XHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdyZWQgM3B4IGRvdWJsZSc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGFza0VsZW1lbnQuYXBwZW5kKHRpdGxlRWxlbWVudCk7XG5cdH0pO1xufVxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG5cdGNsZWFyVGFza3MoKTtcblx0YXBwZW5kVGFza3MoKTtcblx0dXBkYXRlVGFza3NIZWFkbGluZSgpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuXHRhcHBlbmRMaXN0cygpO1xuXHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cblx0cmVuZGVyVGFza3MoKTtcbn0pKCk7XG4iLCJjb25zdCBsaXN0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdXb3JrJyxcblx0XHR0YXNrczogW10sXG5cdFx0SUQ6IDAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnR3ltJyxcblx0XHR0YXNrczogW10sXG5cdFx0SUQ6IDEsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnU2hvcHBpbmcgTGlzdCcsXG5cdFx0dGFza3M6IFtdLFxuXHRcdElEOiAyLFxuXHR9LFxuXTtcblxuY2xhc3MgbGlzdCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHR0aGlzLklEID0gbGlzdHMubGVuZ3RoO1xuXHR9XG59XG5cbmNsYXNzIHRhc2sge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcblx0XHR0aGlzLnRpdGxlID0gdGl0bGU7XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5zdGF0dXMgPSBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3ROYW1lKSB7XG5cdGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChsaXN0TmFtZSk7XG5cdGxpc3RzLnB1c2gobmV3TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soYWN0aXZlTGlzdCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpIHtcblx0Y29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcblx0bmV3VGFzay5pZCA9IERhdGUubm93KCkudG9TdHJpbmcoKTtcblx0YWN0aXZlTGlzdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xufVxuXG5leHBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbG9naWMnO1xuaW1wb3J0ICcuL1VJJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==