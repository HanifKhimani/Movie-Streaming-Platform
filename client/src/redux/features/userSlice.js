import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorites: [],
    listWatchlater: []
  },
  reducers: {
    setUser: (state, action) => {
      if (action.payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (action.payload.token) localStorage.setItem("actkn", action.payload.token);
      }

      state.user = action.payload;
    },
    setListFavorites: (state, action) => {
      state.listFavorites = action.payload;
    },
    setListWatchlater: (state, action) => {
      state.listWatchlater = action.payload;
    },
    removeFavorite: (state, action) => {
      const { mediaId } = action.payload;
      state.listFavorites = [...state.listFavorites].filter(e => e.mediaId.toString() !== mediaId.toString());
    },
    removeWatchlater: (state, action) => {
      const { mediaId } = action.payload;
      state.listWatchlater = [...state.listWatchlater].filter(e => e.mediaId.toString() !== mediaId.toString());
    },
    addFavorite: (state, action) => {
      state.listFavorites = [action.payload, ...state.listFavorites];
    },
    addWatchlater: (state, action) => {
      state.listWatchlater = [action.payload, ...state.listWatchlater];
    }
  }
});

export const {
  setUser,
  setListFavorites,
  addFavorite,
  removeFavorite,
  setListWatchlater,
  addWatchlater,
  removeWatchlater
} = userSlice.actions;

export default userSlice.reducer;