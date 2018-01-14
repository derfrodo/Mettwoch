import { PositionId, PostionValue } from "./OrderPositionValue";
import { Action } from "redux";
import { OrderPositionData } from "./OrderPositionData";

export interface OrderPositionProps {
    data: OrderPositionData;
    setPosition: (id: PositionId, nextValue: PostionValue) => Action;
}