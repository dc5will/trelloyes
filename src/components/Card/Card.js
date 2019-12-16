import React, { Component } from "react";
import './Card.css';

export default class Card extends Component {
  render() {
    return (
      <div class="Card">
        <button type="button">delete</button>
        <h3>First card</h3>
        <p>lorem ipsum</p>
      </div>
    );
  }
}
