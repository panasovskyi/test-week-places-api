import { getBestLocation } from './services/getBestLocation';
import { validateCoords } from "./utils/validateCoords";
import { searchView } from "./view/searchView";

const view = searchView("root");


view.onSearch(async () => {
  const { lat, lng } = view.getInputs();
  const validation = validateCoords(lat, lng);

  if (!validation.success) {
    view.showError(validation.error);

    return;
  }

  view.showLoader();

  const result = await getBestLocation(lat, lng);

  if (!result.success) {
    view.showError(result.error);

    return;
  }

  view.showPlace(result.data);
});
