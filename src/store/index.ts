import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categories from "./categories/categoriesSlice";
import products from "./products/productsSlice";
import cart from "./cart/cartSlice";
import wishlist from "./wishlist/wishlistSlice";
import registerAuth from "./auth/authSlice";
import orders from "./order/ordersSlice";
import messages from "./messages/messagesSlice";
import theme from "./theme/themeSlice";
import storage from "redux-persist/lib/storage";
import language from "./language/languageSlice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items", "totalQuantity"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "accessToken"],
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["itemsId"],
};

const themePersistConfig = {
  key: "theme",
  storage,
  whitelist: ["theme"],
};

const languagePersistConfig = {
  key: "language",
  storage,
  whitelist: ["language", "pageDirection"],
};

const rootReducer = combineReducers({
  registerAuth: persistReducer(authPersistConfig, registerAuth),
  categories,
  products,
  messages,
  theme: persistReducer(themePersistConfig, theme),
  language: persistReducer(languagePersistConfig, language),
  orders,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
