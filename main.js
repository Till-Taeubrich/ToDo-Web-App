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
	const checkedTasks = document.querySelectorAll('.task-title.checked');
	console.log(checkedTasks);
	checkedTasks.forEach((task) => {
		task.parentNode.remove();
	});
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
		taskList.append(taskElement);

		const titleElement = document.createElement('div');
		titleElement.textContent = task.title;
		titleElement.classList.add('task-title');

		if (task.dueDate) {
			const dateElement = document.createElement('div');
			dateElement.innerText = task.dueDate;
			dateElement.classList.add('task-date');
			taskElement.append(dateElement);

			taskElement.append(titleElement);
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxrREFBVTtBQUNYO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsSUFBSSxnREFBWSxFQUFFO0FBQ25DO0FBQ0EsNEJBQTRCLHlDQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLDhDQUFVO0FBQ2xCO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5Qyx1QkFBdUI7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9LRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUM7Ozs7Ozs7VUN6Q3pDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmlCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfSBmcm9tICcuL2xvZ2ljJztcblxuLy8gVmFyaWFibGVzX19fX19fX19fX19fXG5jb25zdCBsaXN0T2ZMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0cycpO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKTtcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnV0dG9uJyk7XG5jb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1idXR0b24nKTtcblxuY29uc3QgbGlzdElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lLWlucHV0Jyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtYnV0dG9uXScpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmxpc3RPZkxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0c3dpdGNoQWN0aXZlTGlzdChlKTtcbn0pO1xuXG5saXN0SW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0YWRkTmV3TGlzdCgpO1xuXHRcdHJlbmRlckxpc3RzKCk7XG5cdFx0cmVuZGVyVGFza3MoKTtcblx0XHRsaXN0SW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHR9XG59KTtcblxudGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRjcm9zc1Rhc2soZSk7XG59KTtcblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0c2hvd0Zvcm0oKTtcbn0pO1xuXG5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbW92ZUNoZWNrZWRUYXNrcyk7XG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y29uc3QgbGlzdE9iamVjdCA9IGdldE9iamVjdE9mTGlzdCgpO1xuXG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS10aXRsZV0nKS52YWx1ZTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb3JtLWRlc2NyaXB0aW9uXScpLnZhbHVlO1xuXHRjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1kYXRlXScpLnZhbHVlO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG5cblx0Y3JlYXRlVGFzayhsaXN0T2JqZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5KTtcblx0cmVuZGVyVGFza3MoKTtcblx0Y2xvc2VGb3JtKCk7XG59KTtcblxuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUZvcm0pO1xuXG4vLyBGdW5jdGlvbnNfX19fX19fX19fX19cblxuZnVuY3Rpb24gY2xlYXJMaXN0cygpIHtcblx0d2hpbGUgKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpIHtcblx0XHRsaXN0T2ZMaXN0cy5yZW1vdmVDaGlsZChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhZGROZXdMaXN0KCkge1xuXHRjb25zdCBpbnB1dFZhbHVlID0gbGlzdElucHV0RmllbGQudmFsdWU7XG5cdGlmIChpbnB1dFZhbHVlKSB7XG5cdFx0Y3JlYXRlTGlzdChpbnB1dFZhbHVlKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBlbmRMaXN0cygpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3RzW2ldLm5hbWU7XG5cdFx0bGlzdEVsZW1lbnQuZGF0YXNldC5pZCA9IGk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kKGxpc3RFbGVtZW50KTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0cygpIHtcblx0Y2xlYXJMaXN0cygpO1xuXHRhcHBlbmRMaXN0cygpO1xuXHRnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cygpO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVMaXN0KCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZS1saXN0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldE9iamVjdE9mTGlzdCgpIHtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldEFjdGl2ZUxpc3QoKTtcblx0cmV0dXJuIGxpc3RzLmZpbmQoKGxpc3QpID0+IHtcblx0XHRyZXR1cm4gbGlzdC5JRCA9PT0gTnVtYmVyKGFjdGl2ZUxpc3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQWN0aXZlTGlzdChlKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdGFjdGl2ZUxpc3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWxpc3QnKTtcblx0ZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblx0cmVuZGVyVGFza3MoKTtcbn1cblxuZnVuY3Rpb24gZ2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKSB7XG5cdGxpc3RPZkxpc3RzLmxhc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrc0hlYWRsaW5lKCkge1xuXHRjb25zdCB0YXNrc0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFza3MtSGVhZGxpbmVdJyk7XG5cdHRhc2tzSGVhZGxpbmUudGV4dENvbnRlbnQgPSBgVGFza3MgT2YgJHtnZXRPYmplY3RPZkxpc3QoKS5uYW1lfWA7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNoZWNrZWRUYXNrcygpIHtcblx0Y29uc3QgY2hlY2tlZFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2stdGl0bGUuY2hlY2tlZCcpO1xuXHRjb25zb2xlLmxvZyhjaGVja2VkVGFza3MpO1xuXHRjaGVja2VkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdHRhc2sucGFyZW50Tm9kZS5yZW1vdmUoKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGNyb3NzVGFzayhlKSB7XG5cdGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2stdGl0bGUnKSkge1xuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpXG5cdFx0XHQ/IGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKVxuXHRcdFx0OiBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XG5cdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn1cblxuZnVuY3Rpb24gY2xvc2VGb3JtKCkge1xuXHRmb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza3MoKSB7XG5cdHdoaWxlICh0YXNrTGlzdC5maXJzdENoaWxkKSB7XG5cdFx0dGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kVGFza3MoKSB7XG5cdGNvbnN0IGN1cnJlbnRUYXNrcyA9IGdldE9iamVjdE9mTGlzdCgpLnRhc2tzO1xuXHRjdXJyZW50VGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuXHRcdGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHR0YXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG5cdFx0dGFza0xpc3QuYXBwZW5kKHRhc2tFbGVtZW50KTtcblxuXHRcdGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG5cdFx0dGl0bGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUnKTtcblxuXHRcdGlmICh0YXNrLmR1ZURhdGUpIHtcblx0XHRcdGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRkYXRlRWxlbWVudC5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGU7XG5cdFx0XHRkYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcblx0XHRcdHRhc2tFbGVtZW50LmFwcGVuZChkYXRlRWxlbWVudCk7XG5cblx0XHRcdHRhc2tFbGVtZW50LmFwcGVuZCh0aXRsZUVsZW1lbnQpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tzKCkge1xuXHRjbGVhclRhc2tzKCk7XG5cdGFwcGVuZFRhc2tzKCk7XG5cdHVwZGF0ZVRhc2tzSGVhZGxpbmUoKTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcblx0YXBwZW5kTGlzdHMoKTtcblx0bGlzdE9mTGlzdHMuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtbGlzdCcpO1xuXG5cdHJlbmRlclRhc2tzKCk7XG59KSgpO1xuIiwiY29uc3QgbGlzdHMgPSBbXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlPbmUnLFxuXHRcdHRhc2tzOiBbXSxcblx0XHRJRDogMCxcblx0fSxcblx0e1xuXHRcdG5hbWU6ICdkdW1teVR3bycsXG5cdFx0dGFza3M6IFtdLFxuXHRcdElEOiAxLFxuXHR9LFxuXTtcblxuY2xhc3MgbGlzdCB7XG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFza3MgPSBbXTtcblx0XHR0aGlzLklEID0gbGlzdHMubGVuZ3RoO1xuXHR9XG59XG5cbmNsYXNzIHRhc2sge1xuXHRjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcblx0XHR0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuXHRcdHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcblx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdE5hbWUpIHtcblx0Y29uc3QgbmV3TGlzdCA9IG5ldyBsaXN0KGxpc3ROYW1lKTtcblx0bGlzdHMucHVzaChuZXdMaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhhY3RpdmVMaXN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpIHtcblx0Y29uc3QgbmV3VGFzayA9IG5ldyB0YXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG5cdGFjdGl2ZUxpc3QudGFza3MucHVzaChuZXdUYXNrKTtcbn1cblxuZXhwb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xvZ2ljJztcbmltcG9ydCAnLi9VSSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=