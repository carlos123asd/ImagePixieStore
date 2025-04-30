import { configureStore, Action, ThunkAction  } from "@reduxjs/toolkit";
import imageReducer from '../slices/listImagesSlice'

export const store = configureStore({
    reducer: {
        images: imageReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;