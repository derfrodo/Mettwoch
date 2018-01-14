import * as React from "react";

import PositionHelper from "./../utils/PositionHelper";

import { UnknownOrderPosition } from "./UnknownOrderPosition";
import { NumericWholeNumbersOrderPostion } from "./NumericWholeNumbersOrderPostion";
import { OrderPositionData } from "../interfaces/OrderPositionData";

export class OrderPostion extends React.Component<OrderPositionData> {

    render() {
        let positionElement;
        positionElement =
            PositionHelper.isWholeNumberOrderPosition(this.props) &&
            <NumericWholeNumbersOrderPostion {...this.props} />;

        positionElement = positionElement || <UnknownOrderPosition {...this.props} />;

        return (
            <div className="order-postion">
                {positionElement}
            </div>
        );
    }
}

export default OrderPostion;