export class App {
  constructor() { }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'My Aurelia App';
    config.map([
      { route: '', name: 'todos', moduleId: 'todos/list/index' },
      { route: 'notFound', name: 'notFound', moduleId: 'notFound/index' },
    ]);

    config.mapUnknownRoutes('notFound/index');
  }
}
