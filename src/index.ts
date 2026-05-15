import { getBestLocation } from "./services/getBestLocation";
import { validateCoords } from "./utils/validateCoords";
import { SearchPage } from "./view/SearchPage";

const searchPage = new SearchPage();

document.getElementById("root")!.append(searchPage.render());

searchPage.onClick(async () => {
  const validation = validateCoords(searchPage.getInputValue());

  if (!validation.success) {
    searchPage.showError(validation.error);

    return;
  }

  searchPage.showLoader();

  const result = await getBestLocation(validation.data);

  if (!result.success) {
    searchPage.showError(result.error);

    return;
  }

  searchPage.showPlace(result.data);
});
