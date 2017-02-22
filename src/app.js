export class App {
  constructor() { }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'My Aurelia App';
    config.map([
      { route: '', name: 'todos', moduleId: 'todos/list/todo-list' },
      { route: 'notfound', name: 'notfound', moduleId: 'notFound/not-found' },
    ]);

    config.mapUnknownRoutes('not-found/not-found');
  }
}
