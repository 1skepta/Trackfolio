import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applicationSlice from "./applicationSlice";
import themeReducer from "./themeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, applicationSlice);

const store = configureStore({
  reducer: {
    applications: persistedReducer,
    theme: themeReducer,
  },
});

export const persistor = persistStore(store);
export default store;
