import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import videosReducer from "../features/Videos/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideosSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideoReducer,
    filter: filterReducer,
  },
});
