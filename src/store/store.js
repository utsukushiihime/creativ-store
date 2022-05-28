import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
	reducer: rootReducer,
	middleware: [logger],
});
