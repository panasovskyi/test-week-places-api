import { App } from "./ui/App";
import { SearchPage } from "./ui/pages/SearchPage";
import { initSearchPage } from './controllers/searchController';

const root = document.getElementById("root");

if (root) {
  root.innerHTML = App(SearchPage());

  initSearchPage();
}
