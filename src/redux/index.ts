import order, { OrderState } from "./../Order/redux/reducer";

export interface AppState {
    order: OrderState;
}

const reducers = {
    order
};

export default reducers;