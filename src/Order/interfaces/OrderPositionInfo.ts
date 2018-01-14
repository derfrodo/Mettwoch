import { OrderPositionTypes } from "./../constants/OrderTypes";
import { NumberMeta } from "./NumberMeta";

export interface OrderPositionInfo {
    type: OrderPositionTypes;
    label: string;

    required?: boolean;
    numberMeta?: NumberMeta;
    literalMeta?: {
        minStringLenght?: number;
        maxStringLength?: number;
    };

}
