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

function createList(listName) {
	const newList = new list(listName);
	lists.push(newList);
}

function createTask(activeList, title, description, dueDate, priority, checklist) {
	const newTask = new task(title, description, dueDate, priority, checklist);
	activeList.tasks.push(newTask);
}

export { lists, createList, createTask };
