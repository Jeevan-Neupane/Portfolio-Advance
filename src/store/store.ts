import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './slice/MobileNav';

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
    },
});

export default store;

export * from './slice/MobileNav';
