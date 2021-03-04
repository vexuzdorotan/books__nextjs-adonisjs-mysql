"use strict";

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class BookSeeder {
  async run() {
    const books = await Database.table("books");
    console.log(books);
  }
}

module.exports = BookSeeder;
