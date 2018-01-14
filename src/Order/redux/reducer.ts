import { OrderData } from "../interfaces/OrderData";
import { Action } from "redux";

import OrderActions from "./actions";
import { OrderPositionTypes } from "../constants/OrderTypes";

export interface OrderState {
    orderData: OrderData | undefined;
}

const defaultState: OrderState = {
    orderData: {
        name: "Some Order", positions: [
            {
                info: { label: "Got Buns?", type: OrderPositionTypes.numericWholeNumber },
                value: { id: 1, value: 2 },

            },
            {
                info: { label: "Unknown", type: OrderPositionTypes.unknown },
                value: { id: 2, value: 2 },
            }
        ]
    }
};

export const orderReducer = (state: OrderState = defaultState, action: Action) => {
    switch (action.type) {
        case OrderActions.setOrderPositionValue:
            return state;
        default:
            return state;
    }
};

export default orderReducer;