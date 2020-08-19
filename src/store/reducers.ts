import screenSizeReducer from "./features/screen-size-slice";
import countryCodeReducer from "./features/country-code-slice";
import drawerReducer from "./features/drawer-slice";
import fetchVideoReducer from "./features/fetch-youtube-video-slice";
import channelResultReducer from "./features/channel-result-slice";
import videoPlayerReducer from "./features/video-player-slice";

export default {
  screenSize: screenSizeReducer,
  countryCode: countryCodeReducer,
  drawerState: drawerReducer,
  videoResult: fetchVideoReducer.videoResultReducer,
  searchResult: fetchVideoReducer.searchResultReducer,
  popularResult: fetchVideoReducer.popularResultReducer,
  channelResult: channelResultReducer,
  videoPlayer: videoPlayerReducer
};