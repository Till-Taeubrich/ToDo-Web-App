import { createList, lists } from './logic';

const listOfLists = document.querySelector('.lists');
const addListButton = document.querySelector('.add-list-button');
const taskList = document.querySelector('.tasks');

addListButton.addEventListener('click', () => {
	createList(prompt('')); //get name of list... replace later with form
	renderLists();
});

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
