import { OrderPositionValue } from "./OrderPositionValue";
import { OrderPositionInfo } from "./OrderPositionInfo";

export interface OrderPositionData {
    info?: OrderPositionInfo;
    value?: OrderPositionValue;
}