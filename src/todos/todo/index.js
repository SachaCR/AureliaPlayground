import { bindable, bindingMode } from 'aurelia-framework';

export class Todo {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) description;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) done;
  @bindable allowDestruction = false;

  constructor(description, done) {
    this.description = description;
    this.done = done;
  }
}
