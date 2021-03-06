import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoService } from '../../providers/todo-service';
import { ArchivedTodosPage } from '../archived-todos/archived-todos';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderIsEnabled = false;
  public recordAvailable = false;

  constructor(private toastController: ToastController, private todoService: TodoService, public navCtrl: NavController, private alertController: AlertController) {
    this.todos = this.todoService.getTodos();
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  goToArchivePage(){
    this.navCtrl.push(ArchivedTodosPage);
  }

  archieveTodo(todoIndex){
    this.todoService.archieveTodo(todoIndex);
    if(this.todos.length<1){
    this.recordAvailable = false;
    }
    console.log(this.todos.length);
  }

  editTodo(todoIndex){

    let editTodoAlert = this.alertController.create({
      title: "Edit Your Todo",
      message: "Edit Your Todo",
      inputs: [
        {
          type: "text",
          name: "editTodoInput",
          value: this.todos[todoIndex]
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Update Todo",
          handler: (inputData)=> {
            let todoText;
            todoText = inputData.editTodoInput;
            this.todoService.editTodo(todoIndex, todoText);
            // Display toast after the alert window gets dismissed on the screen
            editTodoAlert.onDidDismiss(()=> {
                let editTodoToast = this.toastController.create({
                message: "Todo Edited",
                duration: 2000
              });
              editTodoToast.present();
            })
          }
        }
      ]
    });
    editTodoAlert.present();
  }
  

  openTodoAlert(){

    let addTodoAlert = this.alertController.create({
      title: "Add A Todo",
      message: "Enter Your Todo",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData)=> {
            let todoText;
            this.recordAvailable = true;
            console.log(this.recordAvailable);
            todoText = inputData.addTodoInput;
            this.todoService.addTodo(todoText);
            // Display toast after the alert window gets dismissed on the screen
            addTodoAlert.onDidDismiss(()=> {
                let addTodoToast = this.toastController.create({
                message: "Todo Added",
                duration: 2000
              });
              addTodoToast.present();
            })
          }
        }
      ]
    });
    addTodoAlert.present();
  }

}
