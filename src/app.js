import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  constructor() { }

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'My Aurelia App';
    config.map([
      { route: '', name: 'todos', moduleId: 'todos/list/todo-list' },
      { route: 'test', name: 'test', moduleId: 'not-found/not-found' },
    ]);

    config.mapUnknownRoutes('not-found/not-found');
  }
}
