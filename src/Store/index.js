import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = new createStore(reducer)