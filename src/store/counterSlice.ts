import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SongQueryState {
  value: string;
}

const initialState: SongQueryState = {
  value: "",
};

export const songQueryStateSlice = createSlice({
  name: 'songQuery',
  initialState,
  reducers: {
    editSongQuery: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { editSongQuery } = songQueryStateSlice.actions;
export default songQueryStateSlice.reducer;