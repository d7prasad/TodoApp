import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../providers/todo-service';

/**
 * Generated class for the ArchivedTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-archived-todos',
  templateUrl: 'archived-todos.html',
})
export class ArchivedTodosPage {

  public archievedTodos = [];

  constructor(private todoService: TodoService, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.archievedTodos = this.todoService.getArchievedTodos();
  }

}
