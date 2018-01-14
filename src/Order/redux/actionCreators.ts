import OrderActions from "./actions";
import { Action } from "redux";
import { PositionId, PostionValue } from "../interfaces/OrderPositionValue";

export const setOrderPositionValue = (id: PositionId, nextValue: PostionValue): Action => {
    const result = {
        type: OrderActions.setOrderPositionValue,
        nextValue
    };
    return result;
};