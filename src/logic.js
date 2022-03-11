const lists = [
	{
		name: 'dummyOne',
		tasks: [{ title: 'hu' }, { title: 'hab' }], // dummy
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

function updateTaskId(task) {
	task.id = Date.now().toString();
}

export { lists, createList, createTask, updateTaskId };
