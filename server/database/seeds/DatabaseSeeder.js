"use strict";

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Book = use("App/Models/Book");

class DatabaseSeeder {
  async run() {
    await Factory.model("App/Models/Book").createMany(5);
  }
}

module.exports = DatabaseSeeder;
