const lists = [
	{
		name: 'Work',
		tasks: [],
		ID: 0,
	},
	{
		name: 'Gym',
		tasks: [],
		ID: 1,
	},
	{
		name: 'Shopping List',
		tasks: [],
		ID: 2,
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

export { lists, createList, createTask };
