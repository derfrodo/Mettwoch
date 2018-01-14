import OrderActions from "./actions";
import { Action } from "redux";
import { PositionId, PostionValue } from "../interfaces/OrderPositionValue";

export interface SetOrderPositionValueAction extends Action {
    id: PositionId;
    nextValue: PostionValue;
}

export const setOrderPositionValue = (id: PositionId, nextValue: PostionValue): SetOrderPositionValueAction => {
    const result = {
        type: OrderActions.setOrderPositionValue,
        id,
        nextValue
    };
    return result;
};