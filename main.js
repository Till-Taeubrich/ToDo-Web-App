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

document.addEventListener('click', (e) => {
	checkTask(e);
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

function checkTask(e) {
	if (e.target.classList.contains('task-title')) {
		e.target.classList.contains('checked')
			? e.target.classList.remove('checked')
			: e.target.classList.add('checked');
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsa0RBQVU7QUFDWDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLElBQUksZ0RBQVksRUFBRTtBQUNuQztBQUNBLDRCQUE0Qix5Q0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ3pDekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5cbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJyk7XG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcblxuY29uc3QgbGlzdElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lLWlucHV0Jyk7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZGQtYnV0dG9uXScpO1xuY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG9zZS1idXR0b25dJyk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmxpc3RPZkxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0c3dpdGNoQWN0aXZlTGlzdChlKTtcbn0pO1xuXG5saXN0SW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0YWRkTmV3TGlzdCgpO1xuXHRcdHJlbmRlckxpc3RzKCk7XG5cdFx0cmVuZGVyVGFza3MoKTtcblx0XHRsaXN0SW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHR9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRjaGVja1Rhc2soZSk7XG59KTtcblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0c2hvd0Zvcm0oKTtcbn0pO1xuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdGNvbnN0IGxpc3RPYmplY3QgPSBnZXRPYmplY3RPZkxpc3QoKTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tdGl0bGVdJykudmFsdWU7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZm9ybS1kZXNjcmlwdGlvbl0nKS52YWx1ZTtcblx0Y29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZvcm0tZGF0ZV0nKS52YWx1ZTtcblx0Y29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXG5cdGNyZWF0ZVRhc2sobGlzdE9iamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSk7XG5cdHJlbmRlclRhc2tzKCk7XG5cdGNsb3NlRm9ybSgpO1xufSk7XG5cbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VGb3JtKTtcblxuLy8gRnVuY3Rpb25zX19fX19fX19fX19fXG5cbmZ1bmN0aW9uIGNsZWFyTGlzdHMoKSB7XG5cdHdoaWxlIChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKSB7XG5cdFx0bGlzdE9mTGlzdHMucmVtb3ZlQ2hpbGQobGlzdE9mTGlzdHMuZmlyc3RDaGlsZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYWRkTmV3TGlzdCgpIHtcblx0Y29uc3QgaW5wdXRWYWx1ZSA9IGxpc3RJbnB1dEZpZWxkLnZhbHVlO1xuXHRpZiAoaW5wdXRWYWx1ZSkge1xuXHRcdGNyZWF0ZUxpc3QoaW5wdXRWYWx1ZSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kTGlzdHMoKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGlzdEVsZW1lbnQudGV4dENvbnRlbnQgPSBsaXN0c1tpXS5uYW1lO1xuXHRcdGxpc3RFbGVtZW50LmRhdGFzZXQuaWQgPSBpO1xuXHRcdGxpc3RPZkxpc3RzLmFwcGVuZChsaXN0RWxlbWVudCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlzdHMoKSB7XG5cdGNsZWFyTGlzdHMoKTtcblx0YXBwZW5kTGlzdHMoKTtcblx0Z2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKTtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlTGlzdCgpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtbGlzdCcpO1xufVxuXG5mdW5jdGlvbiBnZXRPYmplY3RPZkxpc3QoKSB7XG5cdGNvbnN0IGFjdGl2ZUxpc3QgPSBnZXRBY3RpdmVMaXN0KCk7XG5cdHJldHVybiBsaXN0cy5maW5kKChsaXN0KSA9PiB7XG5cdFx0cmV0dXJuIGxpc3QuSUQgPT09IE51bWJlcihhY3RpdmVMaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHN3aXRjaEFjdGl2ZUxpc3QoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cdHJlbmRlclRhc2tzKCk7XG59XG5cbmZ1bmN0aW9uIGdpdmVOZXdMaXN0QWN0aXZlU3RhdHVzKCkge1xuXHRsaXN0T2ZMaXN0cy5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza3NIZWFkbGluZSgpIHtcblx0Y29uc3QgdGFza3NIZWFkbGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRhc2tzLUhlYWRsaW5lXScpO1xuXHR0YXNrc0hlYWRsaW5lLnRleHRDb250ZW50ID0gYFRhc2tzIE9mICR7Z2V0T2JqZWN0T2ZMaXN0KCkubmFtZX1gO1xufVxuXG5mdW5jdGlvbiBzaG93Rm9ybSgpIHtcblx0Zm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG5cdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrcygpIHtcblx0d2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcblx0XHR0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBhcHBlbmRUYXNrcygpIHtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gZ2V0T2JqZWN0T2ZMaXN0KCkudGFza3M7XG5cdGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcblx0XHR0YXNrTGlzdC5hcHBlbmQodGFza0VsZW1lbnQpO1xuXG5cdFx0Y29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHR0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpO1xuXG5cdFx0aWYgKHRhc2suZHVlRGF0ZSkge1xuXHRcdFx0Y29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdGRhdGVFbGVtZW50LmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcblx0XHRcdGRhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuXHRcdFx0dGFza0VsZW1lbnQuYXBwZW5kKGRhdGVFbGVtZW50KTtcblxuXHRcdFx0dGFza0VsZW1lbnQuYXBwZW5kKHRpdGxlRWxlbWVudCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza3MoKSB7XG5cdGNsZWFyVGFza3MoKTtcblx0YXBwZW5kVGFza3MoKTtcblx0dXBkYXRlVGFza3NIZWFkbGluZSgpO1xufVxuXG5mdW5jdGlvbiBjaGVja1Rhc2soZSkge1xuXHRpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLXRpdGxlJykpIHtcblx0XHRlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQnKVxuXHRcdFx0PyBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJylcblx0XHRcdDogZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuXHR9XG59XG5cbihmdW5jdGlvbiAoKSB7XG5cdGFwcGVuZExpc3RzKCk7XG5cdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblxuXHRyZW5kZXJUYXNrcygpO1xufSkoKTtcbiIsImNvbnN0IGxpc3RzID0gW1xuXHR7XG5cdFx0bmFtZTogJ2R1bW15T25lJyxcblx0XHR0YXNrczogW10sXG5cdFx0SUQ6IDAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlUd28nLFxuXHRcdHRhc2tzOiBbXSxcblx0XHRJRDogMSxcblx0fSxcbl07XG5cbmNsYXNzIGxpc3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0dGhpcy5JRCA9IGxpc3RzLmxlbmd0aDtcblx0fVxufVxuXG5jbGFzcyB0YXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5zdGF0dXMgPSBmYWxzZTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3ROYW1lKSB7XG5cdGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChsaXN0TmFtZSk7XG5cdGxpc3RzLnB1c2gobmV3TGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soYWN0aXZlTGlzdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG5cdGNvbnN0IG5ld1Rhc2sgPSBuZXcgdGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpO1xuXHRhY3RpdmVMaXN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmV4cG9ydCB7IGxpc3RzLCBjcmVhdGVMaXN0LCBjcmVhdGVUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9sb2dpYyc7XG5pbXBvcnQgJy4vVUknO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9