const lists = [];

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
	console.log(lists);
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
};

// createList('gym');
// console.log(lists);

export { lists, createList };
