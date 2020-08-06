import {createSlice, createSelector} from '@reduxjs/toolkit';

export const SearchSelector = createSelector(
  (state:any) => state.searchResult.videos,
  videos => videos
)

const SearchResultSlice = createSlice({
  name: 'searchResult',
  initialState: {
    videos: []
  },
  reducers: {
    setSearchResult: (state, action) => {
      state.videos = action.payload;
    }
  }
});

const {actions: searchResultActions, reducer: searchResultReducer} = SearchResultSlice;
export const {setSearchResult} = searchResultActions;
export default searchResultReducer;