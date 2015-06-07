/**
* The shell for the orders section of the application.  Will contain either
* the order-list or order page.
*/
export class SessionsSection {
  configureRouter(config, router) {
    config.map([
      { route: '',    moduleId: './session-list', nav: false, title: '' },
      { route: ':id', moduleId: './session',      nav: false, title: '' },
    ]);
  }
}
