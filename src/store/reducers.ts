import screenSizeReducer from "./features/screen-size-slice";
import countryCodeReducer from "./features/country-code-slice";
import drawerReducer from "./features/drawer-slice";
import fetchVideoReducer from "./features/fetch-video-slice";
import channelResultReducer from "./features/channel-result-slice";

export default {
  screenSize: screenSizeReducer,
  countryCode: countryCodeReducer,
  drawerState: drawerReducer,
  searchResult: fetchVideoReducer.searchResultReducer,
  popularResult: fetchVideoReducer.popularResultReducer,
  channelResult: channelResultReducer
};