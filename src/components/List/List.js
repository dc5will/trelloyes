import React, { Component } from "react";
import Card from "../Card/Card.js";
import "./List.css";

export default class List extends Component {
  render() {
    return (
      <section class="List">
        <header class="List-header">
          <h2>Testing List</h2>
        </header>
        <div class="List-cards">
          <Card />
          <button type="button" class="List-add-button">
            + Add Random Card
          </button>
        </div>
      </section>
    );
  }
}
