import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TasksNewController extends Controller {
  @tracked count = 0
  // actions = {
  //   addTask: function() {
  //     let title = this.get('title')
  //     alert(title)
  //   }
  // }
  @tracked multiple = 1;

  get total() {
    return this.count * this.multiple;
  }
  
  @action
  double() {
    this.multiple = this.multiple * 2;
  }

  @action
  change(amount) {
    this.count = this.count + amount;
  }

  @action
  addTask() {
    let title = this.get('title')
    let description = this.get('description')
    let date = this.get('date')
    alert(title)
  }
}