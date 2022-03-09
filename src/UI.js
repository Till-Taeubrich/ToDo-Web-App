import { lists, createList, createTask } from './logic';

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

document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		addNewList();
		renderLists();
		clearTasks();
	}
});

addTaskButton.addEventListener('click', () => {
	const listObject = getObjectOfList();
	createTask(listObject, prompt(''));
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
	createList(input);
};

const appendLists = function () {
	for (let i = 0; i < lists.length; i++) {
		const listElement = document.createElement('li');
		listElement.textContent = lists[i].name;
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
	return lists.find((list) => {
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
