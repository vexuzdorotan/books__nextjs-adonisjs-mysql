"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BookSchema extends Schema {
  up() {
    this.create("books", (table) => {
      table.increments();
      table.string("title", 80).notNullable().unique();
      table.string("description", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("books");
  }
}

module.exports = BookSchema;
