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
			console.log(task.dueDate);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUUsa0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixJQUFJLGdEQUFZLEVBQUU7QUFDbkM7QUFDQSw0QkFBNEIseUNBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEsOENBQVU7QUFDbEI7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3pDekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcbmNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ1dHRvbicpO1xuXG5jb25zdCBsaXN0SW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LW5hbWUtaW5wdXQnKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IHRpdGxlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKTtcbmNvbnN0IGRhdGVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG5jb25zdCBwcmlvcml0eUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Jyk7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtYnV0dG9uXScpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmxpc3RPZkxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0aWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykpIHtcblx0XHRzd2l0Y2hBY3RpdmVMaXN0KGUpO1xuXHR9XG59KTtcblxubGlzdElucHV0RmllbGQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG5cdGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuXHRcdGFkZE5ld0xpc3QoKTtcblx0XHRyZW5kZXJMaXN0cygpO1xuXHRcdHJlbmRlclRhc2tzKCk7XG5cdFx0bGlzdElucHV0RmllbGQudmFsdWUgPSAnJztcblx0fVxufSk7XG5cbnRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0Y3Jvc3NUYXNrKGUpO1xufSk7XG5cbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdHNob3dGb3JtKCk7XG59KTtcblxuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVDaGVja2VkVGFza3MpO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGlmICh0aXRsZUZpZWxkLnZhbHVlID09ICcnKSB7XG5cdFx0dGl0bGVGaWVsZC5zdHlsZS5ib3JkZXJDb2xvciA9ICdyZWQnO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnN0IGxpc3RPYmplY3QgPSBnZXRPYmplY3RPZkxpc3QoKTtcblxuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS10aXRsZV0nKS52YWx1ZTtcblx0XHRjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1kYXRlXScpLnZhbHVlO1xuXHRcdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWU7XG5cblx0XHRjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoZm9ybS5kYXRlLnZhbHVlKS50b0RhdGVTdHJpbmcoJ2RkZGQsIE1NTU0gLHl5eXknKTtcblxuXHRcdGNyZWF0ZVRhc2sobGlzdE9iamVjdCwgdGl0bGUsIGRhdGVTdHJpbmcsIHByaW9yaXR5KTtcblx0XHRyZW5kZXJUYXNrcygpO1xuXHRcdGNsb3NlRm9ybSgpO1xuXHRcdHJlc2V0Rm9ybSgpO1xuXHR9XG59KTtcblxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xuXG4vLyBGdW5jdGlvbnNfX19fX19fX19fX19cblxuZnVuY3Rpb24gY2xlYXJMaXN0cygpIHtcblx0d2hpbGUgKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpIHtcblx0XHRsaXN0T2ZMaXN0cy5yZW1vdmVDaGlsZChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuXHRjb25zdCBpbnB1dFZhbHVlID0gbGlzdElucHV0RmllbGQudmFsdWU7XG5cdGlmIChpbnB1dFZhbHVlKSB7XG5cdFx0Y3JlYXRlTGlzdChpbnB1dFZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBlbmRMaXN0cygpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3RzW2ldLm5hbWU7XG5cdFx0bGlzdEVsZW1lbnQuZGF0YXNldC5pZCA9IGk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kKGxpc3RFbGVtZW50KTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cygpIHtcblx0Y2xlYXJMaXN0cygpO1xuXHRhcHBlbmRMaXN0cygpO1xuXHRnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cygpO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVMaXN0KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdE9mTGlzdCgpIHtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldEFjdGl2ZUxpc3QoKTtcblx0cmV0dXJuIGxpc3RzLmZpbmQoKGxpc3QpID0+IHtcblx0XHRyZXR1cm4gbGlzdC5JRCA9PT0gTnVtYmVyKGFjdGl2ZUxpc3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQWN0aXZlTGlzdChlKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdGFjdGl2ZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxpc3QnKTtcblx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblx0cmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gZ2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKSB7XG5cdGxpc3RPZkxpc3RzLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrc0hlYWRsaW5lKCkge1xuXHRjb25zdCB0YXNrc0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFza3MtSGVhZGxpbmVdJyk7XG5cdHRhc2tzSGVhZGxpbmUudGV4dENvbnRlbnQgPSBgJHtnZXRPYmplY3RPZkxpc3QoKS5uYW1lfWA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoZWNrZWRUYXNrcygpIHtcblx0Ly8gZ29hbDogY2hhbmdlIG9iamVjdCBzdGF0dXMgb2YgZWFjaCB0byB0cnVlXG5cblx0Y29uc3QgY2hlY2tlZFRhc2tzQ2hpbGRyZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrZWQnKTtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldE9iamVjdE9mTGlzdCgpO1xuXG5cdGNoZWNrZWRUYXNrc0NoaWxkcmVucy5mb3JFYWNoKChjaGlsZHJlbikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnRJZCA9IGNoaWxkcmVuLnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblx0XHRjb25zdCBjaGVja2VkVGFza09iamVjdHMgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbmQoKHRhc2spID0+IHtcblx0XHRcdHJldHVybiB0YXNrLmlkID09PSBlbGVtZW50SWQ7XG5cdFx0fSk7XG5cdFx0Y2hlY2tlZFRhc2tPYmplY3RzLnN0YXR1cyA9IHRydWU7XG5cdH0pO1xuXG5cdGFjdGl2ZUxpc3QudGFza3MgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suc3RhdHVzKTtcblx0cmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gY3Jvc3NUYXNrKGUpIHtcblx0aWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndGFzay10aXRsZScpKSB7XG5cdFx0ZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkJylcblx0XHRcdD8gZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpXG5cdFx0XHQ6IGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcblx0fVxufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcblx0Zm9ybS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcblx0Zm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcblx0dGl0bGVGaWVsZC5zdHlsZS5ib3JkZXJDb2xvciA9ICcnO1xuXHR0aXRsZUZpZWxkLnZhbHVlID0gJyc7XG5cdGRhdGVGaWVsZC52YWx1ZSA9ICcnO1xuXHRwcmlvcml0eUZpZWxkLnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdHdoaWxlICh0YXNrTGlzdC5maXJzdENoaWxkKSB7XG5cdFx0dGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFza3MoKSB7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IGdldE9iamVjdE9mTGlzdCgpLnRhc2tzO1xuXHRjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHR0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cdFx0dGFza0VsZW1lbnQuZGF0YXNldC5pZCA9IHRhc2suaWQ7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRhc2tFbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9ICfil6YgJyArIHRhc2sudGl0bGU7XG5cdFx0dGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblxuXHRcdGlmICh0YXNrLmR1ZURhdGUgIT0gJ0ludmFsaWQgRGF0ZScpIHtcblx0XHRcdGNvbnNvbGUubG9nKHRhc2suZHVlRGF0ZSk7XG5cdFx0XHRjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZGF0ZUVsZW1lbnQuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuXHRcdFx0ZGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG5cdFx0XHR0YXNrRWxlbWVudC5hcHBlbmQoZGF0ZUVsZW1lbnQpO1xuXHRcdH1cblxuXHRcdGlmICh0YXNrLnByaW9yaXR5ICE9ICcnKSB7XG5cdFx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcblx0XHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdza3libHVlIDNweCBkb3VibGUnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGFzay5wcmlvcml0eSA9PT0gJ21pZGRsZScpIHtcblx0XHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdvcmFuZ2UgM3B4IGRvdWJsZSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcblx0XHRcdFx0dGFza0VsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICdyZWQgM3B4IGRvdWJsZSc7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGFza0VsZW1lbnQuYXBwZW5kKHRpdGxlRWxlbWVudCk7XG5cdH0pO1xufVxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG5cdGNsZWFyVGFza3MoKTtcblx0YXBwZW5kVGFza3MoKTtcblx0dXBkYXRlVGFza3NIZWFkbGluZSgpO1xufVxuXG4oZnVuY3Rpb24gKCkge1xuXHRhcHBlbmRMaXN0cygpO1xuXHRsaXN0T2ZMaXN0cy5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cblx0cmVuZGVyVGFza3MoKTtcbn0pKCk7XG4iLCJjb25zdCBsaXN0cyA9IFtcblx0e1xuXHRcdG5hbWU6ICdkdW1teU9uZScsXG5cdFx0dGFza3M6IFtdLFxuXHRcdElEOiAwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ2R1bW15VHdvJyxcblx0XHR0YXNrczogW10sXG5cdFx0SUQ6IDEsXG5cdH0sXG5dO1xuXG5jbGFzcyBsaXN0IHtcblx0Y29uc3RydWN0b3IobmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YXNrcyA9IFtdO1xuXHRcdHRoaXMuSUQgPSBsaXN0cy5sZW5ndGg7XG5cdH1cbn1cblxuY2xhc3MgdGFzayB7XG5cdGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdE5hbWUpIHtcblx0Y29uc3QgbmV3TGlzdCA9IG5ldyBsaXN0KGxpc3ROYW1lKTtcblx0bGlzdHMucHVzaChuZXdMaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhhY3RpdmVMaXN0LCB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCkge1xuXHRjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sodGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpO1xuXHRuZXdUYXNrLmlkID0gRGF0ZS5ub3coKS50b1N0cmluZygpO1xuXHRhY3RpdmVMaXN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmV4cG9ydCB7IGxpc3RzLCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9sb2dpYyc7XG5pbXBvcnQgJy4vVUknO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9