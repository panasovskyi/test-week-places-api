import { Component } from "../constructor/Component";

export class Button extends Component {
  constructor(text: string) {
    super("button");
    this.setText(text);
  }
}