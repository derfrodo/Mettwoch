import { OrderData } from "../interfaces/OrderData";
import { Action } from "redux";

import OrderActions from "./actions";
import { OrderPositionTypes } from "../constants/OrderTypes";
import { SetOrderPositionValueAction } from "./actionCreators";

export interface OrderState {
    orderData: OrderData;
}

const defaultState: OrderState = {
    orderData: {
        name: "Mettwoch",
        label: "Deine Mettwoch Bestellung",
        positions: [
            {
                info: {
                    label: "Brötchen:",
                    type: OrderPositionTypes.numericWholeNumber,
                    numberMeta: {
                        maximum: 5,
                        minimum: 1,
                        precision: 0,
                    }
                },
                value: { id: 1, value: 2 },
            },
            {
                info: {
                    label: "Menge Mett:",
                    type: OrderPositionTypes.numericWholeNumber,
                    numberMeta: {
                        maximum: 750,
                        minimum: 0,
                        stepSize: 25,
                        precision: -1,
                    }
                },
                value: {
                    id: 2,
                    value: 2
                },
            },
            {
                info: { label: "Unknown", type: OrderPositionTypes.unknown },
                value: { id: 3, value: 2 },
            }
        ]
    }
};

const orderDataReducer = (state: OrderData = defaultState.orderData, action: Action): OrderData => {
    switch (action.type) {
        default:
            return state;
        case OrderActions.setOrderPositionValue:
            const soa = action as SetOrderPositionValueAction;
            return {
                ...state, positions: state.positions.map(p =>
                    (soa.id !== p.value.id ?
                        { ...p } : { ...p, value: { ...p.value, value: soa.nextValue } }))
            };
    }
};

export const orderReducer = (state: OrderState = defaultState, action: Action) => {
    return {
        orderData: orderDataReducer(state.orderData, action),
    };
};

export default orderReducer;