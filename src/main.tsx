import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import AppRouter from "./routes/AppRouter";
import { Provider } from "react-redux";

import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import ar_global from "./translations/ar_global.json";
import en_global from "./translations/en_global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: en_global },
    ar: { global: ar_global },
  },
});

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18next}>
        <AppRouter />
      </I18nextProvider>
    </PersistGate>
  </Provider>
);
