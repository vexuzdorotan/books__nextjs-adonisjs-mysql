"use strict";

const Book = use("App/Models/Book");

class BookController {
  async index({ response }) {
    const books = await Book.all();

    response.status(200).json({
      message: "Here are your books.",
      data: books,
    });
  }

  async create({ request, response }) {
    const { title, description } = request.post();

    const book = await Book.create({ title, description });

    response.status(201).json({
      message: `Book ${title} created.`,
      data: book,
    });
  }

  async show({ request, response, params: { id } }) {
    const book = await Book.find(id);

    response.status(200).json({
      message: "Here is the selected book.",
      data: book,
    });
  }

  async update({ request, response }) {
    const { title, description, book } = request.post();

    book.title = title;
    book.description = description;

    await book.save();

    response.status(200).json({
      message: `Book ${title} successfully updated.`,
      data: book,
    });
  }

  async delete({ request, response, params: { id } }) {
    // const book = request.post().book;
    const book = await Book.find(id);

    await book.delete();

    response.status(200).json({
      message: `Book with ID ${id} is successfully deleted.`,
      id,
    });
  }
}

module.exports = BookController;
