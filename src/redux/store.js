import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './reducers/contactsReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const persistConfig = {
  key: 'contacts',
  storage,
  version: 1,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contact: persistedReducer,
  },
});
export const persistor = persistStore(store);
