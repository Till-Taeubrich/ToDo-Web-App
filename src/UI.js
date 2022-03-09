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
});

addTaskButton.addEventListener('click', () => {
	const activeList = document.querySelector('.active-list');
	createTask(activeList, prompt(''));
});

// Functions____________
const renderLists = function () {
	clearLists();
	appendLists();
};

const clearLists = function () {
	while (listOfLists.firstChild) {
		listOfLists.removeChild(listOfLists.firstChild);
	}
};

const appendLists = function () {
	lists.forEach((list) => {
		const listElement = document.createElement('li');
		listElement.textContent = list.name;
		listOfLists.append(listElement);
	});
};

const switchActiveList = function (e) {
	const activeList = document.querySelector('.active-list');
	activeList.classList.remove('active-list');
	e.target.classList.add('active-list');
};

const initialPageLoad = (function () {
	renderLists();
	listOfLists.firstChild.classList.add('active-list');

	//renderTasks
})();
