import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  taskList: Todo[] = [
    { task: "fold clothes", completed: false },
    { task: "feed dog", completed: false },
    { task: "dishes", completed: false },
    { task: "contemplate the curse of existence", completed: false },
    { task: "grocery shopping", completed: false }
  ];

  newTask: Todo = {
    task: "",
    completed: false
  };

  newTodoText: string = "";
  filterText: string = "";

  addTask() {
    this.taskList = [
      ...this.taskList,
      { task: this.newTodoText, completed: false }
    ];
    this.newTodoText = "";
  }

  done(todo: Todo): void {
    todo.completed = true;
  }

  delete(todo: Todo): void {
    this.taskList = this.taskList.filter(x => x !== todo);
  }

  getFilteredTodos() {
    if (!this.filterText) {
      return this.taskList;
    }
    const match = this.filterText;
    return this.taskList.filter(todo => todo.task.includes(match));
  }

  ngOnInit() {}
}
