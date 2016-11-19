import { observable } from 'mobx';

export default class TodoModel {
  @observable text;
  @observable id;
  @observable completed;
  constructor(text) {
    this.text = text;
    this.id = Date.now();
    this.completed = false;
  }
}