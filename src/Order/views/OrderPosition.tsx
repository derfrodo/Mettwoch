import * as React from "react";

import PositionHelper from "./../utils/PositionHelper";

import { UnknownOrderPosition } from "./UnknownOrderPosition";
import { NumericWholeNumbersOrderPostion } from "./NumericWholeNumbersOrderPostion";
import { OrderPositionProps } from "../interfaces/OrderPositionProps";

export class OrderPostion extends React.Component<OrderPositionProps> {

    props: OrderPositionProps;

    render() {
        let positionElement;
        positionElement =
            PositionHelper.isWholeNumberOrderPosition(this.props.data) &&
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