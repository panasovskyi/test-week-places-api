import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { Component } from "../constructor/Component";
import type { Coords } from '../../types/coords';

export class FindPlace extends Component {
  private inputLat = new Input("Latitude (e.g. 50.45)");
  private inputLng = new Input("Longitude (e.g. 30.52)");
  private button = new Button("Find");

  constructor() {
    super("div");
    this.append(this.inputLat, this.inputLng, this.button);
  }

  getInputValue(): Coords {
    return {
      lat: this.inputLat.getValue(),
      lng: this.inputLng.getValue(),
    };
  }

  onClick(handler: EventListener) {
    this.button.on("click", handler);
  }
}
