import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-http-section',
  templateUrl: './http-section.component.html',
  styleUrls: ['./http-section.component.css'],
})
export class HttpSectionComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // hited the api in page
    this.getUsers();
    // toapi hitted
    this.getTodo();
    // images data get req
    this.getImages();
  }

  // to get the user list from api

  users: any[] = [];

  getUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (response) => {
          console.log('response=>', response);
          this.users = response as any[];
        },
        (error) => {
          console.log('error', error);
        }
      );
  }

  // To find the selected data from same api

  selectedUserId: any;
  selectedUserData: any;

  getUserById() {
    if (this.selectedUserId) {
      console.log('selected id =', this.selectedUserId);
      this.selectedUserData = this.users.find(
        (user) => user.id === this.selectedUserId
      );
      console.log('selected data', this.selectedUserData);
    }
  }

  // user form post request

  userForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
  });

  onSubmit() {
    console.log('form console', this.userForm.value);
    this.addUser();
  }
  addUser() {
    return this.http
      .post('https://jsonplaceholder.typicode.com/users', {
        name: this.userForm.controls.fullName.value,
        email: this.userForm.controls.email.value,
      })
      .subscribe((res) => {
        console.log('form respose', res);
        this.users.push(res);
      });
  }

  // todo api starts

  todoList: any[] = [];

  getTodo() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      (response) => {
        console.log('todo response => ', response);
        this.todoList = response as any[];
        console.log('final response =>', this.todoList);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  // get todo by id

  todoUserId: any;
  todoSelectedUser: any;
  getTodoById() {
    if (this.todoUserId) {
      this.todoSelectedUser = this.todoList.find(
        (todo) => todo.id === this.todoUserId
      );
      console.log('selected user = > ', this.todoSelectedUser);
    }
  }

  // get multiple records based on id

  userIdToDisplay: any;
  selectedTodoData: any;

  getTodosForUser(userIdToDisplay: number) {
    if (this.userIdToDisplay) {
      this.selectedTodoData = this.todoList.filter(
        (todo) => todo.userId === userIdToDisplay
      );
      console.log('selected id data', this.selectedTodoData);
    }
  }

  //  filter the record by id and completed status.
  userIdToFilter: any;
  statusToDisplay: any;
  UidStatusData: any[] = [];
  showTodos: boolean = false;

  getTodosForUserAndStatus() {
    console.log('Button clicked!');

    if (
      this.userIdToFilter !== undefined &&
      this.statusToDisplay === undefined
    ) {
      // Filter todos based on user ID only
      this.UidStatusData = this.todoList.filter(
        (todo) => todo.userId === this.userIdToFilter
      );
      console.log('All status called', this.UidStatusData);
    }

    if (
      this.userIdToFilter !== undefined &&
      this.statusToDisplay !== undefined
    ) {
      // Filter based on both user ID and completion status
      this.UidStatusData = this.todoList.filter(
        (todo) =>
          todo.userId === this.userIdToFilter &&
          todo.completed === this.statusToDisplay
      );
      console.log('user id and status data are called', this.UidStatusData);
    } else if (this.userIdToFilter === undefined) {
      // Handle other cases if needed
      console.log('Invalid filter combination');
    }

    this.showTodos = this.UidStatusData.length > 0; // false to true
    console.log('show todo', this.showTodos);
  }

  // images get request

  imageData: any[] = [];

  getImages() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(
        (response) => {
          console.log('urlResponse =>', response);
          this.imageData = response as any[];
        },
        (error) => {
          console.log('error', error);
        }
      );
  }
}
