import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  post: Todo;

  title = "Todo List";
  filter = "Filter your to-dos";
  tasks = ["laundry", "dishes", "feed dog", "grocery shop"];
  completeButton = "Complete";
  xButton = "x";
  addButton = "Add";

  constructor() {}

  ngOnInit() {}
}
