/* eslint-disable no-undef */
const { expect } = require("chai");

beforeEach(function () {
  cy.visit("http://localhost:3000");
});

describe("Login tests for Book App", () => {
  it("Should open home page", () => {
    cy.contains("Log in").should("be.visible");
  });

  it("Should successfully log in", () => {
    cy.login("test@test.com", "test");
    cy.contains("test@test.com").should("be.visible");
  });

  it("Should successfully log out", () => {
    cy.login("test@test.com", "test");
    cy.contains("test@test.com").should("be.visible");
    cy.logout();
    cy.contains("Log in").should("be.visible");
  });
});

describe("Tests for books added in favorites", () => {
  it("Should add a new book", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Герой нашего времени", "Михаил Лермонтов");
    cy.addBook("Крестный отец", "Марио Пьюзо");
    cy.get(".btn-success").then((element) => {
      element.click();
    });
    cy.contains("Герой нашего времени").should("be.visible");
    cy.contains("Крестный отец").should("be.visible");
    cy.logout();
  });

  it("Should add a new book to favorites with checked checkbox 'add to favorite'", () => {
    cy.login("test@test.com", "test");
    cy.addFavoriteBook("Мертвые души", "Николай Васильевич Гоголь");
    cy.addFavoriteBook("Зеленая миля", "Стивен Кинг");
    cy.contains("Favorites").click();
    cy.contains("Мертвые души").should("be.visible");
    cy.contains("Зеленая миля").should("be.visible");
    cy.logout();
  });

  it("Should delete books from favorites", () => {
    cy.login("test@test.com", "test");
    cy.addBook("Робинзон Крузо", "Даниель Дефо");
    cy.addBook("Унесенные ветром", "Маргарет Митчелл");
    cy.get(".btn-success").then((element) => {
      element.click();
    });
    cy.wait(3000);
    cy.get("h4").should("be.visible").click();
    cy.contains("Робинзон Крузо").should("be.visible");
    cy.contains("Унесенные ветром").should("be.visible");
    cy.get(".btn-secondary").then((element) => {
      element.click();
    });
    cy.wait(3000);
    cy.get("h4").should("be.visible").click();
    cy.get(".container > div > div > a").should(
      "contain",
      "Please add some book"
    );
    cy.logout();
  });
});