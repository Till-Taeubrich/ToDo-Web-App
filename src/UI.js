import { lists, createList, createTask } from './logic';

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

		createTask(listObject, title, dateString, priority);
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
		createList(inputValue);
	}
}

function appendLists() {
	for (let i = 0; i < lists.length; i++) {
		const listElement = document.createElement('li');
		listElement.textContent = lists[i].name;
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
	return lists.find((list) => {
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
