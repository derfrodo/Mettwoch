import * as React from "react";

import { Slider } from "./../../Components/Slider";
import { NumericInput } from "./../../Components/NumericInput";
import { OrderPositionData } from "../interfaces/OrderPositionData";
import PositionHelper from "../utils/PositionHelper";

export const NumericWholeNumbersOrderPostion = (props: OrderPositionData) => {
    return (
        <div className="order-postion">
            {PositionHelper.getLabel(props)}
            <Slider />
            <NumericInput />
        </div>
    );
};

export default NumericWholeNumbersOrderPostion;