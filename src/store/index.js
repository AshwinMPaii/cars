import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slice/formSlice";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slice/carsSlice";

const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carsReducer
    }
})
export { store };
export { changeName, changeCost, addCar, removeCar, changeSearchTerm };