import { inbox } from './projectHandler';

class task {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.status = 'not completed';
	}
}

const addNewTask = function (title, description, dueDate, priority, checklist) {
	const newTask = new task(title, description, dueDate, priority, checklist);
	inbox.push(newTask);
};
