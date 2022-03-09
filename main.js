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

listInputField.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		addNewList();
		renderLists();
		renderTasks();
		listInputField.value = '';
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

const updateTasksHeadline = function () {
	const tasksHeadline = document.querySelector('[data-tasks-Headline]');
	tasksHeadline.textContent = `Tasks Of ${getObjectOfList().name}`;
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
	updateTasksHeadline();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0Q7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDLGtEQUFVO0FBQ1g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxrREFBVTtBQUNYOztBQUVBO0FBQ0EsaUJBQWlCLElBQUksZ0RBQVksRUFBRTtBQUNuQztBQUNBLDRCQUE0Qix5Q0FBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSw4Q0FBVTtBQUNsQjtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsdUJBQXVCO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3QkFBd0IsSUFBSSx3QkFBd0I7QUFDaEU7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFlBQVksd0JBQXdCLElBQUksd0JBQXdCO0FBQ2hFO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV5Qzs7Ozs7OztVQ2hEekM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsaXN0cywgY3JlYXRlTGlzdCwgY3JlYXRlVGFzayB9IGZyb20gJy4vbG9naWMnO1xuXG4vLyBWYXJpYWJsZXNfX19fX19fX19fX19cbmNvbnN0IGxpc3RPZkxpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RzJyk7XG5jb25zdCBhZGRMaXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1saXN0LWJ1dHRvbicpO1xuXG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1idXR0b24nKTtcblxuY29uc3QgbGlzdElucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1uYW1lLWlucHV0Jyk7XG5cbi8vIEV2ZW50TGlzdGVuZXJfX19fX19fX19fX19cbmxpc3RPZkxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0c3dpdGNoQWN0aXZlTGlzdChlKTtcbn0pO1xuXG5saXN0SW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcblx0aWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG5cdFx0YWRkTmV3TGlzdCgpO1xuXHRcdHJlbmRlckxpc3RzKCk7XG5cdFx0cmVuZGVyVGFza3MoKTtcblx0XHRsaXN0SW5wdXRGaWVsZC52YWx1ZSA9ICcnO1xuXHR9XG59KTtcblxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0Y29uc3QgbGlzdE9iamVjdCA9IGdldE9iamVjdE9mTGlzdCgpO1xuXHRjcmVhdGVUYXNrKGxpc3RPYmplY3QsIHByb21wdCgnJykpO1xuXHRyZW5kZXJUYXNrcygpO1xufSk7XG5cbi8vIEZ1bmN0aW9uc19fX19fX19fX19fX1xuY29uc3QgY2xlYXJMaXN0cyA9IGZ1bmN0aW9uICgpIHtcblx0d2hpbGUgKGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQpIHtcblx0XHRsaXN0T2ZMaXN0cy5yZW1vdmVDaGlsZChsaXN0T2ZMaXN0cy5maXJzdENoaWxkKTtcblx0fVxufTtcblxuY29uc3QgYWRkTmV3TGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgaW5wdXQgPSBsaXN0SW5wdXRGaWVsZC52YWx1ZTtcblx0Y3JlYXRlTGlzdChpbnB1dCk7XG59O1xuXG5jb25zdCBhcHBlbmRMaXN0cyA9IGZ1bmN0aW9uICgpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGxpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblx0XHRsaXN0RWxlbWVudC50ZXh0Q29udGVudCA9IGxpc3RzW2ldLm5hbWU7XG5cdFx0bGlzdEVsZW1lbnQuZGF0YXNldC5pZCA9IGk7XG5cdFx0bGlzdE9mTGlzdHMuYXBwZW5kKGxpc3RFbGVtZW50KTtcblx0fVxufTtcblxuY29uc3QgcmVuZGVyTGlzdHMgPSBmdW5jdGlvbiAoKSB7XG5cdGNsZWFyTGlzdHMoKTtcblx0YXBwZW5kTGlzdHMoKTtcblx0Z2l2ZU5ld0xpc3RBY3RpdmVTdGF0dXMoKTtcbn07XG5cbmNvbnN0IGdldEFjdGl2ZUxpc3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKTtcbn07XG5cbmNvbnN0IGdldE9iamVjdE9mTGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgYWN0aXZlTGlzdCA9IGdldEFjdGl2ZUxpc3QoKTtcblx0cmV0dXJuIGxpc3RzLmZpbmQoKGxpc3QpID0+IHtcblx0XHRyZXR1cm4gbGlzdC5JRCA9PT0gTnVtYmVyKGFjdGl2ZUxpc3QuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHN3aXRjaEFjdGl2ZUxpc3QgPSBmdW5jdGlvbiAoZSkge1xuXHRjb25zdCBhY3RpdmVMaXN0ID0gZ2V0QWN0aXZlTGlzdCgpO1xuXHRhY3RpdmVMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1saXN0Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG5cdHJlbmRlclRhc2tzKCk7XG59O1xuXG5jb25zdCBnaXZlTmV3TGlzdEFjdGl2ZVN0YXR1cyA9IGZ1bmN0aW9uICgpIHtcblx0bGlzdE9mTGlzdHMubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1saXN0Jyk7XG59O1xuXG5jb25zdCB1cGRhdGVUYXNrc0hlYWRsaW5lID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB0YXNrc0hlYWRsaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFza3MtSGVhZGxpbmVdJyk7XG5cdHRhc2tzSGVhZGxpbmUudGV4dENvbnRlbnQgPSBgVGFza3MgT2YgJHtnZXRPYmplY3RPZkxpc3QoKS5uYW1lfWA7XG59O1xuXG5jb25zdCBjbGVhclRhc2tzID0gZnVuY3Rpb24gKCkge1xuXHR3aGlsZSAodGFza0xpc3QuZmlyc3RDaGlsZCkge1xuXHRcdHRhc2tMaXN0LnJlbW92ZUNoaWxkKHRhc2tMaXN0LmZpcnN0Q2hpbGQpO1xuXHR9XG59O1xuXG5jb25zdCBhcHBlbmRUYXNrcyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgY3VycmVudFRhc2tzID0gZ2V0T2JqZWN0T2ZMaXN0KCkudGFza3M7XG5cdGN1cnJlbnRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0Y29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdHRhc2tFbGVtZW50LnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0XHR0YXNrTGlzdC5hcHBlbmQodGFza0VsZW1lbnQpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHJlbmRlclRhc2tzID0gZnVuY3Rpb24gKCkge1xuXHRjbGVhclRhc2tzKCk7XG5cdGFwcGVuZFRhc2tzKCk7XG5cdHVwZGF0ZVRhc2tzSGVhZGxpbmUoKTtcbn07XG5cbmNvbnN0IGluaXRpYWxQYWdlTG9hZCA9IChmdW5jdGlvbiAoKSB7XG5cdGFwcGVuZExpc3RzKCk7XG5cdGxpc3RPZkxpc3RzLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWxpc3QnKTtcblxuXHRyZW5kZXJUYXNrcygpO1xufSkoKTtcbiIsImNvbnN0IGxpc3RzID0gW1xuXHR7XG5cdFx0bmFtZTogJ2R1bW15T25lJyxcblx0XHR0YXNrczogW3sgdGl0bGU6ICdkdW1teVRhc2tPbmUxJyB9LCB7IHRpdGxlOiAnZHVtbXlUYXNrVHdvMScgfV0sXG5cdFx0SUQ6IDAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnZHVtbXlUd28nLFxuXHRcdHRhc2tzOiBbeyB0aXRsZTogJ2R1bW15VGFza09uZTInIH0sIHsgdGl0bGU6ICdkdW1teVRhc2tUd28yJyB9XSxcblx0XHRJRDogMSxcblx0fSxcbl07XG5cbmNsYXNzIGxpc3Qge1xuXHRjb25zdHJ1Y3RvcihuYW1lKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhc2tzID0gW107XG5cdFx0dGhpcy5JRCA9IGxpc3RzLmxlbmd0aDtcblx0fVxufVxuXG5jbGFzcyB0YXNrIHtcblx0Y29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5cdFx0dGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcblx0XHR0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG5cdFx0dGhpcy5zdGF0dXMgPSBmYWxzZTtcblx0fVxufVxuXG5jb25zdCBjcmVhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3ROYW1lKSB7XG5cdGNvbnN0IG5ld0xpc3QgPSBuZXcgbGlzdChsaXN0TmFtZSk7XG5cdGxpc3RzLnB1c2gobmV3TGlzdCk7XG59O1xuXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24gKFxuXHRhY3RpdmVMaXN0LFxuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdGR1ZURhdGUsXG5cdHByaW9yaXR5LFxuXHRjaGVja2xpc3Rcbikge1xuXHRjb25zdCBuZXdUYXNrID0gbmV3IHRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcblx0YWN0aXZlTGlzdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xufTtcblxuZXhwb3J0IHsgbGlzdHMsIGNyZWF0ZUxpc3QsIGNyZWF0ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2xvZ2ljJztcbmltcG9ydCAnLi9VSSc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=