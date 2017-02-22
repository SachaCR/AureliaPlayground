import { RouterConfiguration, Router } from 'aurelia-router';

export class App {

  constructor() { }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'My Aurelia App';
    config.options.pushState = true;
    config.mapUnknownRoutes('not-found/not-found');
    config.map([
      { route: ['', 'home'], name: 'todos', moduleId: 'todos/list/todo-list' },
      { route: 'test', name: 'test', moduleId: 'not-found/not-found' },
    ]);
  }
}
