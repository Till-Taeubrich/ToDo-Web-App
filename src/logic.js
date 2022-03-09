const lists = [
	{
		name: 'dummyOne',
		tasks: [{ name: 'dummyTaskOne1' }, { name: 'dummyTaskTwo1' }],
		ID: 1,
	},
	{
		name: 'dummyTwo',
		tasks: [{ name: 'dummyTaskOne2' }, { name: 'dummyTaskTwo2' }],
		ID: 1,
	},
];

class list {
	constructor(name) {
		this.name = name;
		this.tasks = [];
		this.ID = lists.length + 1;
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
	console.table(lists);
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
	activeList.push(newTask);
	console.table(lists);
};

// createList('gym');
// console.log(lists);

export { lists, createList, createTask };
