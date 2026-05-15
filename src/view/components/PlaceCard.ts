import { Location } from '../../types/location';
import { Component } from "../constructor/Component";

export class PlaceCard extends Component {
  constructor(place: Location) {
    super("div");
    const title = new Component("h2").setText(place.name);
    const distance = new Component("div").setText(`${place.distance}m`);
    this.append(title, distance);
  }
}
