import { handleSearch } from "../services/handleSearch";
import { validateCoords } from "../utils/validateCoords";
import { locationStore } from "../services/locationStore";
import { BestPlace } from "../ui/components/BestPlace";
import { ErrorMessage } from "../ui/components/ErrorMessage";
import { Loader } from "../ui/components/Loader";

const initStore = () => {
  locationStore.subscribe((state) => {
    const placeContainer = document.getElementById("place-container");
    if (!placeContainer) return;

    if (state.loading) {
      placeContainer.innerHTML = Loader();
      return;
    }

    if (state.error) {
      placeContainer.innerHTML = ErrorMessage(state.error);
      return;
    }

    placeContainer.innerHTML = BestPlace(state.data);
  });
};

const initSearch = () => {
  const findBtn = document.getElementById("find-btn");

  findBtn?.addEventListener("click", () => {
    const lat = (
      document.getElementById("lat") as HTMLInputElement
    ).value.trim();
    const lng = (
      document.getElementById("lng") as HTMLInputElement
    ).value.trim();

    if (validateCoords(lat, lng)) {
      handleSearch(lat, lng);
    } else {
      alert(
        "Некоректний формат координат! \nШирота: -90...90, Довгота: -180...180",
      );
    }
  });
};

export const initSearchPage = () => {
  initStore();
  initSearch();
};
