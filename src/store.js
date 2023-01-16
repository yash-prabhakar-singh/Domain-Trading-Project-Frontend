import { createStore } from "redux";
import rootReducer from "./Components/Reducer";


const store= createStore(rootReducer);

export default store;