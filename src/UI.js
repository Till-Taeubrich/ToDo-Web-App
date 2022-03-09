import { lists, createList, createTask } from './logic';

// Variables____________
const listOfLists = document.querySelector('.lists');
const addListButton = document.querySelector('.add-list-button');

const taskList = document.querySelector('.tasks');
const addTaskButton = document.querySelector('.add-task-button');

listOfLists.addEventListener('click', (e) => {
	switchActiveList(e);
});

// EventListener____________
addListButton.addEventListener('click', () => {
	createList(prompt('')); //get name of list... replace later with form
	renderLists();
	renderTasks();
});

addTaskButton.addEventListener('click', () => {
	const listName = getObjectOfList();
	createTask(listName, prompt(''));
	clearTasks();
});

// Functions____________
const clearLists = function () {
	while (listOfLists.firstChild) {
		listOfLists.removeChild(listOfLists.firstChild);
	}
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
	console.log(currentTasks);
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
