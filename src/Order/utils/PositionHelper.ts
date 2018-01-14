import { OrderPositionTypes } from "../constants/OrderTypes";
import { OrderPositionData } from "../interfaces/OrderPositionData";
import { OrderPositionInfo } from "../interfaces/OrderPositionInfo";

export class PositionHelper {

    getPositionInfo(positionProps: OrderPositionData): OrderPositionInfo | undefined {
        return positionProps && positionProps.info ? positionProps.info : undefined;
    }

    isWholeNumberOrderPosition(template: OrderPositionInfo | undefined): boolean {
        return (!!template) && template.type === OrderPositionTypes.numericWholeNumber;
    }

}

const helper = new PositionHelper();

export default helper;