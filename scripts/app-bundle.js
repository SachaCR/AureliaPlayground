define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'My Aurelia App';
      config.map([{ route: '', name: 'todos', moduleId: 'todos/list/todo-list' }, { route: 'notfound', name: 'notfound', moduleId: 'notFound/not-found' }]);

      config.mapUnknownRoutes('not-found/not-found');
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('notFound/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NotFound = exports.NotFound = function NotFound() {
    _classCallCheck(this, NotFound);
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('todos/list/index',['exports', 'aurelia-framework', 'todos/todo/index'], function (exports, _aureliaFramework, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TodoList = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _desc, _value, _class, _descriptor, _descriptor2;

  var TodoList = exports.TodoList = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function () {
    function TodoList(description, done) {
      _classCallCheck(this, TodoList);

      _initDefineProp(this, 'todos', _descriptor, this);

      _initDefineProp(this, 'allowDestruction', _descriptor2, this);

      this.heading = "Todos";
      this.todos = [];
      this.todoDescription = '';
    }

    TodoList.prototype.addTodo = function addTodo() {
      if (this.todoDescription) {
        this.todos.push(new _index.Todo(this.todoDescription, false));
        this.todoDescription = '';
      }
    };

    TodoList.prototype.removeTodo = function removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    };

    return TodoList;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'todos', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'allowDestruction', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class));
});
define('todos/todo/index',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Todo = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

  var Todo = exports.Todo = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function Todo(description, done) {
    _classCallCheck(this, Todo);

    _initDefineProp(this, 'description', _descriptor, this);

    _initDefineProp(this, 'done', _descriptor2, this);

    _initDefineProp(this, 'allowDestruction', _descriptor3, this);

    this.description = description;
    this.done = done;
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'description', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'done', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'allowDestruction', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class));
});
define('todos/todo/todo',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Todo = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

  var Todo = exports.Todo = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), _dec2 = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function Todo(description, done) {
    _classCallCheck(this, Todo);

    _initDefineProp(this, 'description', _descriptor, this);

    _initDefineProp(this, 'done', _descriptor2, this);

    _initDefineProp(this, 'allowDestruction', _descriptor3, this);

    this.description = description;
    this.done = done;
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'description', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'done', [_dec2], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'allowDestruction', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class));
});
define('todos/list/todoList',['exports', 'aurelia-framework', 'todos/todo/todo'], function (exports, _aureliaFramework, _todo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TodoList = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _desc, _value, _class, _descriptor, _descriptor2;

  var TodoList = exports.TodoList = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function () {
    function TodoList(description, done) {
      _classCallCheck(this, TodoList);

      _initDefineProp(this, 'todos', _descriptor, this);

      _initDefineProp(this, 'allowDestruction', _descriptor2, this);

      this.heading = "Todos";
      this.todos = [];
      this.todoDescription = '';
    }

    TodoList.prototype.addTodo = function addTodo() {
      if (this.todoDescription) {
        this.todos.push(new _todo.Todo(this.todoDescription, false));
        this.todoDescription = '';
      }
    };

    TodoList.prototype.removeTodo = function removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    };

    return TodoList;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'todos', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'allowDestruction', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class));
});
define('notFound.html/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NotFound = exports.NotFound = function NotFound() {
    _classCallCheck(this, NotFound);
  };
});
define('notFound/notFound',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NotFound = exports.NotFound = function NotFound() {
    _classCallCheck(this, NotFound);
  };
});
define('not-found/notFound',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NotFound = exports.NotFound = function NotFound() {
    _classCallCheck(this, NotFound);
  };
});
define('todos/list/todo-list',['exports', 'aurelia-framework', 'todos/todo/todo'], function (exports, _aureliaFramework, _todo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TodoList = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _desc, _value, _class, _descriptor, _descriptor2;

  var TodoList = exports.TodoList = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function () {
    function TodoList(description, done) {
      _classCallCheck(this, TodoList);

      _initDefineProp(this, 'todos', _descriptor, this);

      _initDefineProp(this, 'allowDestruction', _descriptor2, this);

      this.heading = "Todos";
      this.todos = [];
      this.todoDescription = '';
    }

    TodoList.prototype.addTodo = function addTodo() {
      if (this.todoDescription) {
        this.todos.push(new _todo.Todo(this.todoDescription, false));
        this.todoDescription = '';
      }
    };

    TodoList.prototype.removeTodo = function removeTodo(todo) {
      var index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    };

    return TodoList;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'todos', [_dec], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'allowDestruction', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class));
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!notFound/index.html', ['module'], function(module) { module.exports = "<template><h1>Page Not Found</h1></template>"; });
define('text!todos/list/index.html', ['module'], function(module) { module.exports = "<template><require from=\"todos/todo/index\"></require><h1>${heading}</h1><form submit.trigger=\"addTodo()\"><input type=\"text\" value.bind=\"todoDescription\"> <button type=\"submit\">Add Todo</button></form><ul><li repeat.for=\"todo of todos\"><todo description.bind=\"todo.description\" done.bind=\"todo.done\"></todo><button click.trigger=\"removeTodo(todo) \">Remove</button></li></ul></template>"; });
define('text!todos/todo/index.html', ['module'], function(module) { module.exports = "<template><input type=\"checkbox\" checked.bind=\"todo.done\"> <span css=\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">${todo.description}</span></template>"; });
define('text!todos/todo/todo.html', ['module'], function(module) { module.exports = "<template><input type=\"checkbox\" checked.bind=\"todo.done\"> <span css=\"text-decoration: ${todo.done ? 'line-through' : 'none'}\">${todo.description}</span></template>"; });
define('text!todos/list/todoList.html', ['module'], function(module) { module.exports = "<template><require from=\"todos/todo/todo\"></require><h1>${heading}</h1><form submit.trigger=\"addTodo()\"><input type=\"text\" value.bind=\"todoDescription\"> <button type=\"submit\">Add Todo</button></form><ul><li repeat.for=\"todo of todos\"><todo description.bind=\"todo.description\" done.bind=\"todo.done\"></todo><button click.trigger=\"removeTodo(todo) \">Remove</button></li></ul></template>"; });
define('text!notFound/notFound.html', ['module'], function(module) { module.exports = "<template><h1>Page Not Found</h1></template>"; });
define('text!notFound/notFound.html.html', ['module'], function(module) { module.exports = "<template><h1>Page Not Found</h1></template>"; });
define('text!not-found/notFound.html', ['module'], function(module) { module.exports = "<template><h1>Page Not Found</h1></template>"; });
define('text!not-found/not-found.html', ['module'], function(module) { module.exports = "<template><h1>Page Not Found</h1></template>"; });
define('text!todos/list/todo-list.html', ['module'], function(module) { module.exports = "<template><require from=\"todos/todo/todo\"></require><h1>${heading}</h1><form submit.trigger=\"addTodo()\"><input type=\"text\" value.bind=\"todoDescription\"> <button type=\"submit\">Add Todo</button></form><ul><li repeat.for=\"todo of todos\"><todo description.bind=\"todo.description\" done.bind=\"todo.done\"></todo><button click.trigger=\"removeTodo(todo) \">Remove</button></li></ul></template>"; });
//# sourceMappingURL=app-bundle.js.map