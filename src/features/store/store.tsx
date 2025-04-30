import { configureStore, Action, ThunkAction  } from "@reduxjs/toolkit";
import imageReducer from '../slices/listImagesSlice'
import imageByTag from '../slices/listImagesByTagSlice'

export const store = configureStore({
    reducer: {
        images: imageReducer,
        imagesBytag: imageByTag
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