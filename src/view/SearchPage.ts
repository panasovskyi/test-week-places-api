import type { Location } from "../types/location";
import { PlaceCard } from "./components/PlaceCard";
import { Component } from "./constructor/Component";
import { FindPlace } from "./components/FindPlace";

export class SearchPage extends Component {
  private findPlace = new FindPlace();
  private result = new Component("div");

  constructor() {
    super("section");
    this.append(this.findPlace, this.result);
  }

  onClick(handler: EventListener) {
    this.findPlace.onClick(handler);
  }

  getInputValue() {
    return this.findPlace.getInputValue();
  }

  showLoader() {
    this.result.setText("Searching...");
  }

  showError(message: string) {
    this.result.setText(message);
  }

  showPlace(place: Location) {
    this.result.clearContent();
    this.result.append(new PlaceCard(place));
  }
}
