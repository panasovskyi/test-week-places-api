import { Component } from "../constructor/Component";

export class Input extends Component {
  constructor(placeholder: string) {
    super("input");

    this.setAttr("placeholder", placeholder);
  }

  getValue(): string {
    return (this.element as HTMLInputElement).value;
  }
}
