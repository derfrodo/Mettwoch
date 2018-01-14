import * as React from "react";

import PositionHelper from "./../utils/PositionHelper";

import { UnknownOrderPosition } from "./UnknownOrderPosition";
import { NumericWholeNumbersOrderPostion } from "./NumericWholeNumbersOrderPostion";
import { OrderPositionData } from "../interfaces/OrderPositionData";

export class OrderPostion extends React.Component<OrderPositionData> {

    render() {
        let template = PositionHelper.getPositionInfo(this.props);

        let positionElement;
        positionElement = PositionHelper.isWholeNumberOrderPosition(template) && <NumericWholeNumbersOrderPostion />;

        positionElement = positionElement || <UnknownOrderPosition />;

        return (
            <div className="order-postion">
                {positionElement}
            </div>
        );
    }
}

export default OrderPostion;