"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

// Books

Route.get("books", "BookController.index");

Route.post("books", "BookController.create");

// Route.get("books/:id", "BookController.show");
Route.get("books/:id", "BookController.show").middleware(["findBook"]);

Route.patch("books/:id", "BookController.update").middleware(["findBook"]);

Route.delete("books/:id", "BookController.delete");
// Route.delete("books/:id", "BookController.delete").middleware(["findBook"]);
