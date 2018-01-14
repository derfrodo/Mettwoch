import { OrderPositionTypes } from "../constants/OrderTypes";
import { OrderPositionData } from "../interfaces/OrderPositionData";
import { OrderPositionInfo } from "../interfaces/OrderPositionInfo";

export class PositionHelper {
    getNumericValue(data: OrderPositionData | undefined): number {
        return (
            data &&
            data.value &&
            typeof data.value.value === "number") ?
            data.value.value : NaN;
    }

    getPositionInfo(data: OrderPositionData | undefined): OrderPositionInfo | undefined {
        return data && data.info ? data.info : undefined;
    }

    isWholeNumberOrderPosition(data: OrderPositionData | undefined): boolean {
        let info = this.getPositionInfo(data);
        return (!!info) && info.type === OrderPositionTypes.numericWholeNumber;
    }

    getLabel(data: OrderPositionData | undefined) {
        let info = this.getPositionInfo(data);
        return info ? info.label : undefined;
    }

}

const helper = new PositionHelper();

export default helper;