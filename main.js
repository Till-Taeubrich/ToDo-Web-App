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

		if (task.dueDate) {
			const dateElement = document.createElement('div');
			dateElement.innerText = task.dueDate;
			dateElement.classList.add('task-date');
			taskElement.append(dateElement);
		}

		if (task.priority === 'low') {
			taskElement.style.borderLeft = 'skyblue 3px double';
		}

		if (task.priority === 'middle') {
			taskElement.style.borderLeft = 'orange 3px double';
		}

		if (task.priority === 'high') {
			taskElement.style.borderLeft = 'red 3px double';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUUsa0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixJQUFJLGdEQUFZLEVBQUU7QUFDbkM7QUFDQSw0QkFBNEIseUNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOENBQVU7QUFDbEI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3pDekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuXG5jb25zdCBsaXN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUtaW5wdXQnKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbmNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5jb25zdCBwcmlvcml0eUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtYnV0dG9uXScpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmxpc3RPZkxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykpIHtcblx0XHRzd2l0Y2hBY3RpdmVMaXN0KGUpO1xuXHR9XG59KTtcblxubGlzdElucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdGFkZE5ld0xpc3QoKTtcblx0XHRyZW5kZXJMaXN0cygpO1xuXHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0bGlzdElucHV0RmllbGQudmFsdWUgPSAnJztcblx0fVxufSk7XG5cbnRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Y3Jvc3NUYXNrKGUpO1xufSk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNob3dGb3JtKCk7XG59KTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDaGVja2VkVGFza3MpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGlmICh0aXRsZUZpZWxkLnZhbHVlID09ICcnKSB7XG5cdFx0dGl0bGVGaWVsZC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGxpc3RPYmplY3QgPSBnZXRPYmplY3RPZkxpc3QoKTtcblxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS10aXRsZV0nKS52YWx1ZTtcblx0XHRjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1kYXRlXScpLnZhbHVlO1xuXHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG5cblx0XHRjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoZm9ybS5kYXRlLnZhbHVlKS50b0RhdGVTdHJpbmcoJ2RkZGQsIE1NTU0gLHl5eXknKTtcblxuXHRcdGNyZWF0ZVRhc2sobGlzdE9iamVjdCwgdGl0bGUsIGRhdGVTdHJpbmcsIHByaW9yaXR5KTtcblx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdGNsb3NlRm9ybSgpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9XG59KTtcblxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xuXG4vLyBGdW5jdGlvbnNfX19fX19fX19fX19cblxuZnVuY3Rpb24gY2xlYXJMaXN0cygpIHtcblx0d2hpbGUgKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpIHtcblx0XHRsaXN0T2ZMaXN0cy5yZW1vdmVDaGlsZChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuXHRjb25zdCBpbnB1dFZhbHVlID0gbGlzdElucHV0RmllbGQudmFsdWU7XG5cdGlmIChpbnB1dFZhbHVlKSB7XG5cdFx0Y3JlYXRlTGlzdChpbnB1dFZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBlbmRMaXN0cygpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3RzW2ldLm5hbWU7XG5cdFx0bGlzdEVsZW1lbnQuZGF0YXNldC5pZCA9IGk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kKGxpc3RFbGVtZW50KTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cygpIHtcblx0Y2xlYXJMaXN0cygpO1xuXHRhcHBlbmRMaXN0cygpO1xuXHRnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cygpO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVMaXN0KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdE9mTGlzdCgpIHtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldEFjdGl2ZUxpc3QoKTtcblx0cmV0dXJuIGxpc3RzLmZpbmQoKGxpc3QpID0+IHtcblx0XHRyZXR1cm4gbGlzdC5JRCA9PT0gTnVtYmVyKGFjdGl2ZUxpc3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQWN0aXZlTGlzdChlKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdGFjdGl2ZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxpc3QnKTtcblx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblx0cmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gZ2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKSB7XG5cdGxpc3RPZkxpc3RzLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrc0hlYWRsaW5lKCkge1xuXHRjb25zdCB0YXNrc0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFza3MtSGVhZGxpbmVdJyk7XG5cdHRhc2tzSGVhZGxpbmUudGV4dENvbnRlbnQgPSBgJHtnZXRPYmplY3RPZkxpc3QoKS5uYW1lfWA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoZWNrZWRUYXNrcygpIHtcblx0Ly8gZ29hbDogY2hhbmdlIG9iamVjdCBzdGF0dXMgb2YgZWFjaCB0byB0cnVlXG5cblx0Y29uc3QgY2hlY2tlZFRhc2tzQ2hpbGRyZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrZWQnKTtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldE9iamVjdE9mTGlzdCgpO1xuXG5cdGNoZWNrZWRUYXNrc0NoaWxkcmVucy5mb3JFYWNoKChjaGlsZHJlbikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRJZCA9IGNoaWxkcmVuLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblx0XHRjb25zdCBjaGVja2VkVGFza09iamVjdHMgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHtcblx0XHRcdHJldHVybiB0YXNrLmlkID09PSBlbGVtZW50SWQ7XG5cdFx0fSk7XG5cdFx0Y2hlY2tlZFRhc2tPYmplY3RzLnN0YXR1cyA9IHRydWU7XG5cdH0pO1xuXG5cdGFjdGl2ZUxpc3QudGFza3MgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suc3RhdHVzKTtcblx0cmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NUYXNrKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay10aXRsZScpKSB7XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJylcblx0XHRcdD8gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG5cdFx0XHQ6IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcblx0Zm9ybS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcblx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcblx0dGl0bGVGaWVsZC5zdHlsZS5ib3JkZXJDb2xvciA9ICcnO1xuXHR0aXRsZUZpZWxkLnZhbHVlID0gJyc7XG5cdGRhdGVGaWVsZC52YWx1ZSA9ICcnO1xuXHRwcmlvcml0eUZpZWxkLnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdHdoaWxlICh0YXNrTGlzdC5maXJzdENoaWxkKSB7XG5cdFx0dGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFza3MoKSB7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IGdldE9iamVjdE9mTGlzdCgpLnRhc2tzO1xuXHRjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHR0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cdFx0dGFza0VsZW1lbnQuZGF0YXNldC5pZCA9IHRhc2suaWQ7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRhc2tFbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9ICfil6YgJyArIHRhc2sudGl0bGU7XG5cdFx0dGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblxuXHRcdGlmICh0YXNrLmR1ZURhdGUpIHtcblx0XHRcdGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkYXRlRWxlbWVudC5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0XHRkYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcblx0XHRcdHRhc2tFbGVtZW50LmFwcGVuZChkYXRlRWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG5cdFx0XHR0YXNrRWxlbWVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gJ3NreWJsdWUgM3B4IGRvdWJsZSc7XG5cdFx0fVxuXG5cdFx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICdtaWRkbGUnKSB7XG5cdFx0XHR0YXNrRWxlbWVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gJ29yYW5nZSAzcHggZG91YmxlJztcblx0XHR9XG5cblx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG5cdFx0XHR0YXNrRWxlbWVudC5zdHlsZS5ib3JkZXJMZWZ0ID0gJ3JlZCAzcHggZG91YmxlJztcblx0XHR9XG5cblx0XHR0YXNrRWxlbWVudC5hcHBlbmQodGl0bGVFbGVtZW50KTtcblx0fSk7XG59XG5mdW5jdGlvbiByZW5kZXJUYXNrcygpIHtcblx0Y2xlYXJUYXNrcygpO1xuXHRhcHBlbmRUYXNrcygpO1xuXHR1cGRhdGVUYXNrc0hlYWRsaW5lKCk7XG59XG5cbihmdW5jdGlvbiAoKSB7XG5cdGFwcGVuZExpc3RzKCk7XG5cdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblxuXHRyZW5kZXJUYXNrcygpO1xufSkoKTtcbiIsImNvbnN0IGxpc3RzID0gW1xuXHR7XG5cdFx0bmFtZTogJ2R1bW15T25lJyxcblx0XHR0YXNrczogW10sXG5cdFx0SUQ6IDAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlUd28nLFxuXHRcdHRhc2tzOiBbXSxcblx0XHRJRDogMSxcblx0fSxcbl07XG5cbmNsYXNzIGxpc3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0dGhpcy5JRCA9IGxpc3RzLmxlbmd0aDtcblx0fVxufVxuXG5jbGFzcyB0YXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG5cdFx0dGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuXHRcdHRoaXMuc3RhdHVzID0gZmFsc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdChsaXN0TmFtZSkge1xuXHRjb25zdCBuZXdMaXN0ID0gbmV3IGxpc3QobGlzdE5hbWUpO1xuXHRsaXN0cy5wdXNoKG5ld0xpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGFjdGl2ZUxpc3QsIHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG5cdGNvbnN0IG5ld1Rhc2sgPSBuZXcgdGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG5cdG5ld1Rhc2suaWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG5cdGFjdGl2ZUxpc3QudGFza3MucHVzaChuZXdUYXNrKTtcbn1cblxuZXhwb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xvZ2ljJztcbmltcG9ydCAnLi9VSSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=